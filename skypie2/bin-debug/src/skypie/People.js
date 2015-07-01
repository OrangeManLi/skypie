var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by licheng on 2015/4/3.
 */
var skypie;
(function (skypie) {
    /*
     *人物。利用对象池
     */
    var People = (function (_super) {
        __extends(People, _super);
        function People() {
            _super.call(this);
            var data = RES.getRes("p2_json"); //获取描述
            var texture = RES.getRes("p2_png"); //获取大图
            var mcFactory = new egret.MovieClipDataFactory(data, texture);
            this.mov = new egret.MovieClip(mcFactory.generateMovieClipData());
            this.addChild(this.mov);
            this.mov.gotoAndPlay(0, -1);
            this.mov.scaleX = this.mov.scaleY = 1.5; //设置缩放
        }
        return People;
    })(egret.DisplayObjectContainer);
    skypie.People = People;
    People.prototype.__class__ = "skypie.People";
})(skypie || (skypie = {}));
