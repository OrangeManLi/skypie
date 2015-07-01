/**
 * Created by licheng on 2015/4/27.
 */
/**
 * Created by xzper on 2014/11/15.
 */
module skypie {

    export class EndWindow extends egret.gui.TitleWindow {

        public constructor() {
            super();
            this.title = "游戏结束";
            this.skinName = skins.EndScreenSkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.gui.UIEvent):void{
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        }

        public totalScoreLabel:egret.gui.Label;
        public highScoreLabel:egret.gui.Label;
        public noticeLabel:egret.gui.Label;

        public retryButton:egret.gui.Button;
        public returnButton:egret.gui.Button;

        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }
    }
}