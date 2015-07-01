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
    var StartScreen = (function (_super) {
        __extends(StartScreen, _super);
        function StartScreen() {
            _super.call(this);
            this.skinName = skins.StartScreenSkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }
        StartScreen.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        };
        StartScreen.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return StartScreen;
    })(egret.gui.SkinnableComponent);
    skypie.StartScreen = StartScreen;
    StartScreen.prototype.__class__ = "skypie.StartScreen";
})(skypie || (skypie = {}));
