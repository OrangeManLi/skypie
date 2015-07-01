var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by licheng on 2015/4/27.
 */
/**
 * Created by xzper on 2014/11/15.
 */
var skypie;
(function (skypie) {
    var EndWindow = (function (_super) {
        __extends(EndWindow, _super);
        function EndWindow() {
            _super.call(this);
            this.title = "游戏结束";
            this.skinName = skins.EndScreenSkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }
        EndWindow.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        };
        EndWindow.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return EndWindow;
    })(egret.gui.TitleWindow);
    skypie.EndWindow = EndWindow;
    EndWindow.prototype.__class__ = "skypie.EndWindow";
})(skypie || (skypie = {}));
