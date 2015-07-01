var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var AboutSkin = (function (_super) {
        __extends(AboutSkin, _super);
        function AboutSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.backButton_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        Object.defineProperty(AboutSkin.prototype, "skinParts", {
            get: function () {
                return AboutSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        AboutSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "top"], [true, "Arial", 125, 22, "新浪微博@btn-img", 0x004F5D, 240]);
            return t;
        };
        AboutSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [148, -113.5, "about_logo2_png"]);
            return t;
        };
        AboutSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor"], [21, "Arial", 0, 12, "version:1.0.0", 9803157]);
            return t;
        };
        AboutSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "top"], [true, "Arial", 128.5, 20, "Egret Games", 20317, 349]);
            return t;
        };
        AboutSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [91, 0, "loading_logo", 428, 41]);
            return t;
        };
        AboutSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 22, "orangemanli@163.com", 0x004F5D, 275, 280]);
            return t;
        };
        AboutSkin.prototype.backButton_i = function () {
            var t = new egret.gui.Button();
            this.backButton = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "width"], [49, 0, "返回", 446]);
            return t;
        };
        AboutSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            t.source = "about_background";
            return t;
        };
        AboutSkin._skinParts = ["backButton"];
        return AboutSkin;
    })(egret.gui.Skin);
    skins.AboutSkin = AboutSkin;
    AboutSkin.prototype.__class__ = "skins.AboutSkin";
})(skins || (skins = {}));
