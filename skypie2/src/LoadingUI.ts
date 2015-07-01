
class LoadingUI extends egret.gui.SkinnableComponent{

    private progressBar:egret.gui.ProgressBar;

    public constructor(){
        super();
        this.skinName=skins.LoadingUISkin;
    }

    public setProgress(current:number, total:number):void {
        if(this.progressBar)
        {
            this.progressBar.maximum = total;
            this.progressBar.value = current;
        }
    }
}
