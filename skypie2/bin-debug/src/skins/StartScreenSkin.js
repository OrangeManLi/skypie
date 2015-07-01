var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var StartScreenSkin = (function (_super) {
        __extends(StartScreenSkin, _super);
        function StartScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [960, 640]);
            this.elementsContent = [this.__3_i(), this.playButton_i(), this.settingButton_i(), this.__4_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        Object.defineProperty(StartScreenSkin.prototype, "skinParts", {
            get: function () {
                return StartScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        StartScreenSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "bottom", "fontFamily", "horizontalCenter", "text", "textColor"], [true, 0, "Arial", 0, "Code By licheng", 4860458]);
            return t;
        };
        StartScreenSkin.prototype.playButton_i = function () {
            var t = new egret.gui.Button();
            this.playButton = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.components.PlayButtonSkin, 174, 460]);
            return t;
        };
        StartScreenSkin.prototype.settingButton_i = function () {
            var t = new egret.gui.Button();
            this.settingButton = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.components.SettingButtonSkin, 489, 490]);
            return t;
        };
        StartScreenSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["start_logo", 92, 23]);
            return t;
        };
        StartScreenSkin._skinParts = ["playButton", "settingButton"];
        return StartScreenSkin;
    })(egret.gui.Skin);
    skins.StartScreenSkin = StartScreenSkin;
    StartScreenSkin.prototype.__class__ = "skins.StartScreenSkin";
})(skins || (skins = {}));
