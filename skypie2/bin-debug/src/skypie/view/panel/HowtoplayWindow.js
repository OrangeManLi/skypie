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
    var HowtoplayWindow = (function (_super) {
        __extends(HowtoplayWindow, _super);
        function HowtoplayWindow() {
            _super.call(this);
            this.state = 1;
            this.skinName = skins.HowtoPlaySkin;
        }
        HowtoplayWindow.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            if (instance == this.prevButton) {
                this.prevButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrevButtonClick, this);
            }
            else if (instance == this.nextButton) {
                this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextButtonClick, this);
            }
        };
        HowtoplayWindow.prototype.onPrevButtonClick = function (event) {
            if (this.state == 1) {
                egret.gui.PopUpManager.removePopUp(this);
            }
            else {
                this.state--;
                this.invalidateSkinState();
            }
        };
        HowtoplayWindow.prototype.onNextButtonClick = function (event) {
            if (this.state == 3) {
                egret.gui.PopUpManager.removePopUp(this);
            }
            else {
                this.state++;
                this.invalidateSkinState();
            }
        };
        HowtoplayWindow.prototype.getCurrentSkinState = function () {
            return "s" + this.state;
        };
        return HowtoplayWindow;
    })(egret.gui.SkinnableComponent);
    skypie.HowtoplayWindow = HowtoplayWindow;
    HowtoplayWindow.prototype.__class__ = "skypie.HowtoplayWindow";
})(skypie || (skypie = {}));
