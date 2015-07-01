/**
 * Created by licheng on 2015/4/3.
 */
module skypie
{
    /*
     *人物。利用对象池
     */
    export class People extends  egret.DisplayObjectContainer
    {
        /*人物的位图
        private bmp:egret.Bitmap;
       public constructor(texture:egret.Texture){
           super();
           this.bmp=new egret.Bitmap(texture);
           this.addChild(this.bmp);
       }
         */
        private mov:egret.MovieClip;
        public constructor(){
            super();
            var data = RES.getRes("p2_json");//获取描述
            var texture = RES.getRes("p2_png");//获取大图
            var mcFactory= new egret.MovieClipDataFactory( data, texture );
            this.mov= new egret.MovieClip( mcFactory.generateMovieClipData() );
            this.addChild(this.mov);
            this.mov.gotoAndPlay(0,-1);
            this.mov.scaleX = this.mov.scaleY = 1.5;//设置缩放
        }
    }
}