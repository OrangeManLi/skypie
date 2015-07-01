var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by xzper on 2014/11/15.
 */
var skypie;
(function (skypie) {
    var SettingWindow = (function (_super) {
        __extends(SettingWindow, _super);
        function SettingWindow() {
            _super.call(this);
            this.title = "游戏设置";
            this.skinName = skins.SettingScreenSkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }
        SettingWindow.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        };
        Object.defineProperty(SettingWindow.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设置窗口显示类型
         * @param type
         */
        SettingWindow.prototype.setWindowType = function (type) {
            this._type = type;
            this.invalidateSkinState();
        };
        SettingWindow.prototype.getCurrentSkinState = function () {
            return this._type;
        };
        SettingWindow.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            if (instance == this.closeButton) {
                this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
            }
        };
        SettingWindow.prototype.onCloseButtonClick = function (event) {
            egret.gui.PopUpManager.removePopUp(this);
        };
        return SettingWindow;
    })(egret.gui.TitleWindow);
    skypie.SettingWindow = SettingWindow;
    SettingWindow.prototype.__class__ = "skypie.SettingWindow";
})(skypie || (skypie = {}));
