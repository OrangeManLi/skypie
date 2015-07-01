/**
 * Created by licheng on 2015/4/29.
 */
/**
 * Created by xzper on 2014/11/15.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skypie;
(function (skypie) {
    var AboutWindow = (function (_super) {
        __extends(AboutWindow, _super);
        function AboutWindow() {
            _super.call(this);
            this.skinName = skins.AboutSkin;
        }
        AboutWindow.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            if (instance == this.backButton) {
                this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackButtonClick, this);
            }
        };
        AboutWindow.prototype.onBackButtonClick = function (event) {
            egret.gui.PopUpManager.removePopUp(this);
        };
        return AboutWindow;
    })(egret.gui.SkinnableComponent);
    skypie.AboutWindow = AboutWindow;
    AboutWindow.prototype.__class__ = "skypie.AboutWindow";
})(skypie || (skypie = {}));
