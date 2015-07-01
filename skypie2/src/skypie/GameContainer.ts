module skypie
{
    /*
    主游戏容器
     */
    export class GameContainer extends egret.DisplayObjectContainer
    {
        /**@private*/
        private stageW:number;
        /**@private*/
        private stageH:number;
        /**可滚动背景*/
        private bg:skypie.BgMap;
        /**背景音乐*/
        private music_bg:egret.Sound=RES.getRes("music_bg");
        private music_duang:egret.Sound=RES.getRes("music_duang");
        private music_gameover:egret.Sound=RES.getRes("music_gameover");
        /**我的人物*/
        private myPeople:skypie.People;
        /**馅饼*/
        private pies:skypie.Pie[]=[];
        /**触发创建馅饼的间隔*/
        private onePieTimer:egret.Timer = new egret.Timer(800);
        /**我的成绩*/
        private myScore:number = 0;
        private noticeString:string="";
        /**settingWindow*/
        private settingButton:egret.gui.SkinnableContainer;
        private startScreen:skypie.StartScreen;
        private settingWindow:skypie.SettingWindow=new skypie.SettingWindow();
        private endWindow:skypie.EndWindow;


        /**@private*/
        private _lastTime:number;
        public constructor() {
            super();
            this._lastTime = egret.getTimer();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }
        /**初始化*/
        private onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createGameScene();
            this.music_bg.play(true);
        }
        /**创建游戏场景*/
        private createGameScene():void{
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            //背景
            this.bg = new skypie.BgMap();//创建可滚动的背景
            this.addChild(this.bg);
            //我的人物
            this.myPeople=new skypie.People();
            this.myPeople.y=this.stageH-this.myPeople.height-50;
            this.addChild(this.myPeople);
            //设置gui
            this.addChild(GameApp.guiLayer);
            this.startScreen=new skypie.StartScreen();
            GameApp.guiLayer.addElement(this.startScreen);
            this.startScreen.playButton.addEventListener(egret.TouchEvent.TOUCH_TAP ,this.gameStart,this);
            this.startScreen.settingButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.settingWindows,this);
            this.settingWindow.setWindowType("setting");
        }
        /**游戏设置*/
        private settingWindows():void{

            egret.gui.PopUpManager.addPopUp(this.settingWindow,true,true);
            this.settingWindow.musicButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bgMusicSetting,this);
            this.settingWindow.soundButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.duangMusicSetting,this);
            this.settingWindow.aboutButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.aboutButtonClick,this);
            this.settingWindow.howtoplayButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.howtoplayButtonClick,this);
            this.settingWindow.restartButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.restartButtonClick,this);
        }
        private restartButtonClick():void{
            this.settingWindow.setWindowType("restart");
            this.settingWindow.yesButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yesButtonClick,this);
        }
        private yesButtonClick():void{
            this.myScore=0;
            GameApp.guiLayer.removeElement(this.settingButton);
            this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
            this.onePieTimer.stop();
            //清理馅饼
            var thePie:skypie.Pie;
            while(this.pies.length>0) {
                thePie = this.pies.pop();
                this.removeChild(thePie);
            }
            this.createGameScene();
            egret.gui.PopUpManager.removePopUp(this.settingWindow);
        }
        private howtoplayButtonClick(event:egret.TouchEvent):void
        {
            var howtoPlay:HowtoplayWindow = new HowtoplayWindow();
            egret.gui.PopUpManager.addPopUp(howtoPlay,true);
        }

        private aboutButtonClick(event:egret.TouchEvent):void
        {
            var about:AboutWindow = new AboutWindow();
            egret.gui.PopUpManager.addPopUp(about,true);
        }
        private  bgMusicSetting():void{
            if(this.settingWindow.musicButton.selected){
                this.music_bg.pause();
            }else{
                this.music_bg.play(true);
            }
        }
        private  duangMusicSetting():void{
            if(this.settingWindow.soundButton.selected){
                this.music_duang.setVolume(0);
                this.music_gameover.setVolume(0);
            }else{
                this.music_duang.setVolume(1);
                this.music_gameover.setVolume(1);
            }
        }

        /**游戏开始*/

        private gameStart():void{
            this.myScore = 0;
            this.startScreen.playButton.removeEventListener(egret.TouchEvent.TOUCH_TAP ,this.gameStart,this);
            this.startScreen.settingButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.settingWindows,this);
            GameApp.guiLayer.removeElement(this.startScreen);
            this.touchEnabled=true;
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);//控制小人
            this.addEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
            this.onePieTimer.addEventListener(egret.TimerEvent.TIMER,this.createonePie,this);
            this.onePieTimer.start();
            this.currentPieTimer=new egret.Timer(10000,0);
            this.currentPieTimer.addEventListener(egret.TimerEvent.TIMER,this.gameBoard,this);
            var mathRandom:number=Math.ceil(Math.random()*7);
            this.boardPie=skypie.createBitmapByName("pie"+mathRandom);
            this.currentPie=mathRandom;
            this.addChild(this.boardPie);
            this.currentPieTimer.start();
            //背景音乐
            // this.music_bg.play(true);
            //设置暂停按钮
            this.settingButton=new egret.gui.SkinnableContainer();
            this.settingButton.skinName = "skins.components.PauseButtonSkin";//设置皮肤
            this.settingButton.width=100;
            this.settingButton.x=540;
            this. settingButton.y=0;
            this.settingButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsettingButtonClick, this);
            GameApp.guiLayer.addElement(this.settingButton);
        }
        /**暂停设置*/
        private  onsettingButtonClick(event: egret.TouchEvent):void{
            this.settingWindow.setWindowType("pause");
            this.settingWindows();
            this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
            this.onePieTimer.stop();
            this.currentPieTimer.stop();
            this.settingWindow.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pauseBack,this);
        }
        private  pauseBack():void{
            this.settingWindow.closeButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.pauseBack,this);
            this.addEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
            this.onePieTimer.start();
            this.currentPieTimer.start();
        }
        /**响应Touch*/
        private touchHandler(evt:egret.TouchEvent):void{
            if(evt.type==egret.TouchEvent.TOUCH_MOVE)
            {
               // console.log("x点坐标"+this.myPeople.x+"||"+evt.localX);
                var tx:number = evt.localX;
                tx = Math.max(0,tx);
                tx = Math.min(this.stageW-this.myPeople.width,tx);
                this.myPeople.x = tx-20;
            }
        }
        /**创建pie*/
        private createonePie(evt:egret.TimerEvent):void{
            var textname="pie"+Math.ceil(Math.random()*7);
            console.log();
            var onePie:skypie.Pie =new  skypie.Pie(textname);
            onePie.x = Math.random()*(this.stageW-onePie.width);
            onePie.y = -onePie.height-Math.random()*300;
            this.addChildAt(onePie,this.numChildren-1);
            this.pies.push(onePie);
        }

        /**显示当前可吃的pie*/
        private currentPieTimer:egret.Timer;
        private currentPie:number=0;
        private boardPie:egret.Bitmap;
        private gameBoard():void{
            this.removeChild(this.boardPie);
            this.currentPie=Math.ceil(Math.random()*7);
            var texture:string="pie"+this.currentPie;
            this.boardPie=skypie.createBitmapByName(texture);
            this.addChild(this.boardPie);
        }
        /**游戏画面更新*/
        private gameViewUpdate(evt:egret.Event):void {
            //为了防止FPS下降造成回收慢，生成快，进而导致DRAW数量失控，需要计算一个系数，当FPS下降的时候，让运动速度加快
            var nowTime:number = egret.getTimer();
            var fps:number = 1000 / (nowTime - this._lastTime);
            this._lastTime = nowTime;
            var speedOffset:number = 1.5;
            //回收的pie
            var delArr:any[] = [];
            var oneSkypie:skypie.Pie;
            var pieCount:number = this.pies.length;
            var i:number = 0;
            for(i=0;i<pieCount;i++) {
                oneSkypie=this.pies[i];
                oneSkypie.y += 4*speedOffset;
                if(oneSkypie.y>this.stageH)
                    delArr.push(oneSkypie);
            }
            for(i=0;i<delArr.length;i++) {
                oneSkypie = delArr[i];
                this.removeChild(oneSkypie);
                this.pies.splice(this.pies.indexOf(oneSkypie),1);
            }
            delArr = [];
            this.gameHitTest();
        }
        /**游戏碰撞检测*/
        private gameHitTest():void {
            var i:number;
            var pieCount:number = this.pies.length;
            var thePie:skypie.Pie;
            var delPies:skypie.Pie[] = [];
             //吃掉馅饼
            for(i=0;i<pieCount;i++) {
                thePie = this.pies[i];
                //游戏结束条件
                if(thePie!=null) {
                    if(thePie.typePieNum==this.currentPie){
                        if (thePie.y > this.stage.stageHeight - 100) {
                            this.noticeString="提示：你该吃的食物掉地啦！！！";
                            this.gameStop();
                        }else if(skypie.GameUtil.hitTest(this.myPeople, thePie)){
                            //记录分数：
                            this.myScore++;
                            this.music_duang.play();
                            delPies.push(thePie);
                        }
                    } else if(thePie.y > this.stage.stageHeight - 100){
                        delPies.push(thePie);
                    }else if(skypie.GameUtil.hitTest(this.myPeople, thePie)){
                        this.noticeString="提示：你吃到了不该吃的食物！！！";
                        this.gameStop();
                    }
                }
            }
            while(delPies.length>0) {
                thePie = delPies.pop();
                this.removeChild(thePie);
                this.pies.splice(this.pies.indexOf(thePie),1);
            }
        }
        /**游戏结束*/
        private gameStop():void{
            this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
            this.onePieTimer.stop();
            //清理馅饼
            var thePie:skypie.Pie;
            while(this.pies.length>0) {
                thePie = this.pies.pop();
                this.removeChild(thePie);
            }
            //音乐
            this.music_bg.pause();
            this.music_gameover.play();
            //清理提示
            this.currentPieTimer.reset();
            this.removeChild(this.boardPie);
            this.settingButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsettingButtonClick, this);
            GameApp.guiLayer.removeElement(this.settingButton);

            //gui显示成绩
            this.endWindow=new skypie.EndWindow();
            egret.gui.PopUpManager.addPopUp(this.endWindow,true,true);
            this.endWindow.totalScoreLabel.text=this.myScore.toString();
            this.endWindow.highScoreLabel.text=this.StoreHighestValue(this.myScore).toString();
            this.endWindow.noticeLabel.text=this.noticeString;
            this.endWindow.retryButton.addEventListener(egret.TouchEvent.TOUCH_TAP ,this.endRetry,this);
        }
        private  endRetry():void{
            this.endWindow.retryButton.removeEventListener(egret.TouchEvent.TOUCH_TAP ,this.endRetry,this);
            egret.gui.PopUpManager.removePopUp(this.endWindow);
            this.music_bg.play(true);
            this.createGameScene();
        }

        /**存储最高分*/
        private StoreHighestValue(newNum:number):number
        {
            var highestValue:number=localStorage.getItem("topValue")?localStorage.getItem("topValue"):0;
            if(window.localStorage){
                if(highestValue==0)
                    localStorage.setItem("topValue","0");
                highestValue=localStorage.getItem("topValue");
                highestValue=newNum>highestValue?newNum:highestValue;
                localStorage.setItem("topValue",highestValue.toString());
            }else{
                console.log("你浏览器不支持localStrage");
            }
            return highestValue;
        }

    }
}