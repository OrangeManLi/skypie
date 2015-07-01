var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var simple;
    (function (simple) {
        var TitleWindowSkin = (function (_super) {
            __extends(TitleWindowSkin, _super);
            function TitleWindowSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.moveArea_i(), this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            Object.defineProperty(TitleWindowSkin.prototype, "skinParts", {
                get: function () {
                    return TitleWindowSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            TitleWindowSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-4, -3, -3, "panel_headeback_png", -2]);
                return t;
            };
            TitleWindowSkin.prototype.closeButton_i = function () {
                var t = new egret.gui.Button();
                this.closeButton = t;
                this.__s(t, ["right", "skinName", "verticalCenter"], [10, skins.simple.CloseButtonSkin, 0]);
                return t;
            };
            TitleWindowSkin.prototype.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "clipAndEnableScrolling", "top", "percentWidth"], [0, true, 51, 100]);
                return t;
            };
            TitleWindowSkin.prototype.moveArea_i = function () {
                var t = new egret.gui.Group();
                this.moveArea = t;
                this.__s(t, ["height", "left", "right"], [50, 0, 0]);
                t.elementsContent = [this.__4_i(), this.titleDisplay_i(), this.closeButton_i()];
                return t;
            };
            TitleWindowSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-10, -4, -10, "panel_back_png", -4]);
                return t;
            };
            TitleWindowSkin.prototype.titleDisplay_i = function () {
                var t = new egret.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["fontFamily", "left", "maxDisplayedLines", "minHeight", "right", "size", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Tahoma", 5, 1, 28, 5, 26, "center", 0x727070, "middle", 0]);
                return t;
            };
            TitleWindowSkin._skinParts = ["titleDisplay", "closeButton", "moveArea", "contentGroup"];
            return TitleWindowSkin;
        })(egret.gui.Skin);
        simple.TitleWindowSkin = TitleWindowSkin;
        TitleWindowSkin.prototype.__class__ = "skins.simple.TitleWindowSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
