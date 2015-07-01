/**
 * Created by licheng on 2015/4/4.
 */
module skypie
{
    export class Pie extends egret.DisplayObjectContainer
    {
        private bmp:egret.Bitmap;
        public typePieNum:number;
        public constructor(texture:string){
            super();
            this.bmp=new egret.Bitmap(RES.getRes(texture));
            this.typePieNum=parseInt(texture.replace(/[^0-9]/ig,""));
            this.addChild(this.bmp);
            this.bmp.scaleX = this.bmp.scaleY = 0.6;//设置缩放
        }
    }
}
