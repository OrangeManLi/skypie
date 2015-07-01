var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EndScreenSkin = (function (_super) {
        __extends(EndScreenSkin, _super);
        function EndScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [672, 628]);
            this.elementsContent = [this.group1_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("open", [
                    new egret.gui.SetProperty("uiasset2", "y", -656),
                    new egret.gui.SetProperty("uiasset3", "x", -403),
                    new egret.gui.SetProperty("label1", "alpha", 0),
                    new egret.gui.SetProperty("totalScoreLabel", "alpha", 0),
                    new egret.gui.SetProperty("label2", "alpha", 0),
                    new egret.gui.SetProperty("highScoreLabel", "alpha", 0),
                    new egret.gui.SetProperty("retryButton", "alpha", 0)
                ])
            ];
        }
        Object.defineProperty(EndScreenSkin.prototype, "skinParts", {
            get: function () {
                return EndScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EndScreenSkin.prototype.closeButton_i = function () {
            var t = new egret.gui.Button();
            this.closeButton = t;
            this.__s(t, ["height", "label", "right", "skinName", "top", "width"], [50, "按钮", 33, skins.components.CloseButtonSkin, 21, 50]);
            return t;
        };
        EndScreenSkin.prototype.contentGroup_i = function () {
            var t = new egret.gui.Group();
            this.contentGroup = t;
            this.__s(t, ["clipAndEnableScrolling", "height", "width", "x", "y"], [true, 574, 542, 43, 98]);
            t.elementsContent = [this.uiasset2_i(), this.uiasset3_i(), this.label1_i(), this.totalScoreLabel_i(), this.label2_i(), this.highScoreLabel_i(), this.retryButton_i(), this.noticeLabel_i()];
            return t;
        };
        EndScreenSkin.prototype.group1_i = function () {
            var t = new egret.gui.Group();
            this.group1 = t;
            this.__s(t, ["height", "width", "x", "y"], [672, 628, 0, 0]);
            t.elementsContent = [this.uiasset1_i(), this.closeButton_i(), this.__3_i(), this.contentGroup_i()];
            return t;
        };
        EndScreenSkin.prototype.highScoreLabel_i = function () {
            var t = new egret.gui.Label();
            this.highScoreLabel = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "top"], [true, "Helvetica", 0, 28, "1560", 8377047, 212]);
            return t;
        };
        EndScreenSkin.prototype.label1_i = function () {
            var t = new egret.gui.Label();
            this.label1 = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textColor", "y"], [true, "Helvetica", 0.5, "你的得分", 16745472, 16]);
            return t;
        };
        EndScreenSkin.prototype.label2_i = function () {
            var t = new egret.gui.Label();
            this.label2 = t;
            this.__s(t, ["bold", "fontFamily", "text", "textColor", "x", "y"], [true, "Helvetica", "最高得分", 8377047, 195, 167]);
            return t;
        };
        EndScreenSkin.prototype.noticeLabel_i = function () {
            var t = new egret.gui.Label();
            this.noticeLabel = t;
            this.__s(t, ["text", "textColor", "x", "y"], ["提示：", 0xF52222, 97, 318]);
            return t;
        };
        EndScreenSkin.prototype.retryButton_i = function () {
            var t = new egret.gui.Button();
            this.retryButton = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.components.RetryButtonSkin, 362, 386]);
            return t;
        };
        EndScreenSkin.prototype.__3_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "italic", "text", "textColor", "top"], [true, "Arial", -5, true, "游戏结束", 0x09827E, 23]);
            return t;
        };
        EndScreenSkin.prototype.totalScoreLabel_i = function () {
            var t = new egret.gui.Label();
            this.totalScoreLabel = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "top"], [true, "Helvetica", 0, 39, "254", 0xFF8400, 61]);
            return t;
        };
        EndScreenSkin.prototype.uiasset1_i = function () {
            var t = new egret.gui.UIAsset();
            this.uiasset1 = t;
            this.__s(t, ["source", "x"], ["end_background", 0]);
            return t;
        };
        EndScreenSkin.prototype.uiasset2_i = function () {
            var t = new egret.gui.UIAsset();
            this.uiasset2 = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "end_sun_png", -263]);
            return t;
        };
        EndScreenSkin.prototype.uiasset3_i = function () {
            var t = new egret.gui.UIAsset();
            this.uiasset3 = t;
            this.__s(t, ["source", "x", "y"], ["end_cloud_png", 69, 110]);
            return t;
        };
        EndScreenSkin._skinParts = ["uiasset1", "closeButton", "uiasset2", "uiasset3", "label1", "totalScoreLabel", "label2", "highScoreLabel", "retryButton", "noticeLabel", "contentGroup", "group1"];
        return EndScreenSkin;
    })(egret.gui.Skin);
    skins.EndScreenSkin = EndScreenSkin;
    EndScreenSkin.prototype.__class__ = "skins.EndScreenSkin";
})(skins || (skins = {}));
