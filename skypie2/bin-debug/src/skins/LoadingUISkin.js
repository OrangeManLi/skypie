var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var LoadingUISkin = (function (_super) {
        __extends(LoadingUISkin, _super);
        function LoadingUISkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [960, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.progressBar_i(), this.__5_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        Object.defineProperty(LoadingUISkin.prototype, "skinParts", {
            get: function () {
                return LoadingUISkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        LoadingUISkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [83, 0, "loading_logo", 398, 121]);
            return t;
        };
        LoadingUISkin.prototype.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "y"], ["Arial", 0, 14, "努力加载中。。。", 0, 504]);
            return t;
        };
        LoadingUISkin.prototype.progressBar_i = function () {
            var t = new egret.gui.ProgressBar();
            this.progressBar = t;
            this.__s(t, ["horizontalCenter", "skinName", "slideDuration", "width", "y"], [0, skins.simple.ProgressBarSkin, 0, 416, 538]);
            return t;
        };
        LoadingUISkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "loading_logo2", -69]);
            return t;
        };
        LoadingUISkin._skinParts = ["progressBar"];
        return LoadingUISkin;
    })(egret.gui.Skin);
    skins.LoadingUISkin = LoadingUISkin;
    LoadingUISkin.prototype.__class__ = "skins.LoadingUISkin";
})(skins || (skins = {}));
