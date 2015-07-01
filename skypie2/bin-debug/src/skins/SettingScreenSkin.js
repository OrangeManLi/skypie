var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SettingScreenSkin = (function (_super) {
        __extends(SettingScreenSkin, _super);
        function SettingScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["currentState", "width"], ["setting", 593]);
            this.elementsContent = [this.__5_i(), this.titleDisplay_i(), this.contentGroup_i(), this.closeButton_i()];
            this.__6_i();
            this.__7_i();
            this.__8_i();
            this.yesButton_i();
            this.howtoplayButton_i();
            this.musicButton_i();
            this.soundButton_i();
            this.__10_i();
            this.aboutButton_i();
            this.restartButton_i();
            this.states = [
                new egret.gui.State("setting", [
                    new egret.gui.AddItems("howtoplayButton", "contentGroup", "last", ""),
                    new egret.gui.AddItems("musicButton", "__10", "first", ""),
                    new egret.gui.AddItems("soundButton", "__10", "last", ""),
                    new egret.gui.AddItems("__10", "contentGroup", "last", ""),
                    new egret.gui.AddItems("aboutButton", "contentGroup", "last", ""),
                    new egret.gui.SetProperty("howtoplayButton", "width", 363)
                ]),
                new egret.gui.State("pause", [
                    new egret.gui.AddItems("howtoplayButton", "contentGroup", "last", ""),
                    new egret.gui.AddItems("musicButton", "__10", "first", ""),
                    new egret.gui.AddItems("soundButton", "__10", "last", ""),
                    new egret.gui.AddItems("__10", "contentGroup", "last", ""),
                    new egret.gui.AddItems("restartButton", "contentGroup", "last", "")
                ]),
                new egret.gui.State("restart", [
                    new egret.gui.AddItems("__6", "__8", "first", ""),
                    new egret.gui.AddItems("__7", "__8", "last", ""),
                    new egret.gui.AddItems("__8", "contentGroup", "first", ""),
                    new egret.gui.AddItems("yesButton", "contentGroup", "last", ""),
                    new egret.gui.SetProperty("__6", "text", "提示"),
                    new egret.gui.SetProperty("__7", "text", "如果你重新开始，将会重新开始记分，是否确定重新开始游戏？"),
                    new egret.gui.SetProperty("__8", "height", 287),
                    new egret.gui.SetProperty("howtoplayButton", "width", 363)
                ]),
                new egret.gui.State("quit", [
                    new egret.gui.AddItems("__6", "__8", "first", ""),
                    new egret.gui.AddItems("__7", "__8", "last", ""),
                    new egret.gui.AddItems("__8", "contentGroup", "first", ""),
                    new egret.gui.AddItems("yesButton", "contentGroup", "last", ""),
                    new egret.gui.SetProperty("__7", "text", "If you quit now you will lose all progress made during this level. Are you sure you want to quit?"),
                    new egret.gui.SetProperty("__8", "height", 287),
                    new egret.gui.SetProperty("howtoplayButton", "width", 363)
                ])
            ];
        }
        Object.defineProperty(SettingScreenSkin.prototype, "skinParts", {
            get: function () {
                return SettingScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SettingScreenSkin.prototype.__11_i = function () {
            var t = new egret.gui.VerticalLayout();
            t.horizontalAlign = "contentJustify";
            return t;
        };
        SettingScreenSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            t.source = "setting_background";
            return t;
        };
        SettingScreenSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__6 = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textColor", "y"], [true, "Arial", 0.5, "Attention!", 623230, 32]);
            return t;
        };
        SettingScreenSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__7 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [true, "Arial", 206, 0.5, 26, "If you restart now you will lose all progress made during this level. Are you sure you want to restart?", "center", 0x09827E, 376, 93]);
            return t;
        };
        SettingScreenSkin.prototype.__8_i = function () {
            var t = new egret.gui.Group();
            this.__8 = t;
            this.__s(t, ["height", "x", "y"], [308, 163, 39]);
            t.elementsContent = [];
            return t;
        };
        SettingScreenSkin.prototype.__9_i = function () {
            var t = new egret.gui.HorizontalLayout();
            t.horizontalAlign = "justify";
            return t;
        };
        SettingScreenSkin.prototype.aboutButton_i = function () {
            var t = new egret.gui.Button();
            this.aboutButton = t;
            this.__s(t, ["label", "x", "y"], ["关于这个游戏", 154, 203]);
            return t;
        };
        SettingScreenSkin.prototype.closeButton_i = function () {
            var t = new egret.gui.Button();
            this.closeButton = t;
            this.__s(t, ["height", "label", "right", "skinName", "top", "width"], [50, "按钮", 26, skins.components.CloseButtonSkin, 21, 50]);
            return t;
        };
        SettingScreenSkin.prototype.contentGroup_i = function () {
            var t = new egret.gui.Group();
            this.contentGroup = t;
            this.__s(t, ["bottom", "left", "right", "top"], [87, 56, 80, 131]);
            t.layout = this.__11_i();
            t.elementsContent = [];
            return t;
        };
        SettingScreenSkin.prototype.howtoplayButton_i = function () {
            var t = new egret.gui.Button();
            this.howtoplayButton = t;
            this.__s(t, ["label", "x", "y"], ["游戏规则", 95, 123]);
            return t;
        };
        SettingScreenSkin.prototype.musicButton_i = function () {
            var t = new egret.gui.ToggleButton();
            this.musicButton = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["切换按钮", skins.components.MusicButonSkin, 41, 30]);
            return t;
        };
        SettingScreenSkin.prototype.restartButton_i = function () {
            var t = new egret.gui.Button();
            this.restartButton = t;
            this.__s(t, ["label", "x", "y"], ["重新开始", 180, 366]);
            return t;
        };
        SettingScreenSkin.prototype.__10_i = function () {
            var t = new egret.gui.Group();
            this.__10 = t;
            this.__s(t, ["x", "y"], [81, 233]);
            t.layout = this.__9_i();
            t.elementsContent = [];
            return t;
        };
        SettingScreenSkin.prototype.soundButton_i = function () {
            var t = new egret.gui.ToggleButton();
            this.soundButton = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["切换按钮", skins.components.SoundButtonSkin, 124, 57]);
            return t;
        };
        SettingScreenSkin.prototype.titleDisplay_i = function () {
            var t = new egret.gui.Label();
            this.titleDisplay = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "italic", "text", "textColor", "top", "verticalAlign"], [true, "Arial", -4.5, true, "Settings", 0x09827E, 28, "middle"]);
            return t;
        };
        SettingScreenSkin.prototype.yesButton_i = function () {
            var t = new egret.gui.Button();
            this.yesButton = t;
            this.__s(t, ["label", "x", "y"], ["确定，重新开始", 67, 362]);
            return t;
        };
        SettingScreenSkin._skinParts = ["titleDisplay", "yesButton", "howtoplayButton", "musicButton", "soundButton", "aboutButton", "restartButton", "contentGroup", "closeButton"];
        return SettingScreenSkin;
    })(egret.gui.Skin);
    skins.SettingScreenSkin = SettingScreenSkin;
    SettingScreenSkin.prototype.__class__ = "skins.SettingScreenSkin";
})(skins || (skins = {}));
