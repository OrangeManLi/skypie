var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by licheng on 2015/4/4.
 */
var skypie;
(function (skypie) {
    var Pie = (function (_super) {
        __extends(Pie, _super);
        function Pie(texture) {
            _super.call(this);
            this.bmp = new egret.Bitmap(RES.getRes(texture));
            this.typePieNum = parseInt(texture.replace(/[^0-9]/ig, ""));
            this.addChild(this.bmp);
            this.bmp.scaleX = this.bmp.scaleY = 0.6; //设置缩放
        }
        return Pie;
    })(egret.DisplayObjectContainer);
    skypie.Pie = Pie;
    Pie.prototype.__class__ = "skypie.Pie";
})(skypie || (skypie = {}));
