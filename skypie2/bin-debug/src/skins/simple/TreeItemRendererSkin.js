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
        var TreeItemRendererSkin = (function (_super) {
            __extends(TreeItemRendererSkin, _super);
            function TreeItemRendererSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.minHeight = 22;
                this.elementsContent = [this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            Object.defineProperty(TreeItemRendererSkin.prototype, "skinParts", {
                get: function () {
                    return TreeItemRendererSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            TreeItemRendererSkin.prototype.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "top"], [0, 0]);
                t.layout = this.__4_i();
                t.elementsContent = [this.disclosureButton_i(), this.iconDisplay_i(), this.labelDisplay_i()];
                return t;
            };
            TreeItemRendererSkin.prototype.disclosureButton_i = function () {
                var t = new egret.gui.ToggleButton();
                this.disclosureButton = t;
                this.__s(t, ["skinName", "verticalCenter"], [skins.simple.TreeDisclosureButtonSkin, 0]);
                return t;
            };
            TreeItemRendererSkin.prototype.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                this.__s(t, ["height", "width"], [24, 24]);
                return t;
            };
            TreeItemRendererSkin.prototype.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["bottom", "fontFamily", "left", "maxDisplayedLines", "right", "textAlign", "textColor", "top", "verticalAlign"], [3, "Tahoma", 5, 1, 5, "center", 0x707070, 3, "middle"]);
                return t;
            };
            TreeItemRendererSkin.prototype.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [1, "middle"]);
                return t;
            };
            TreeItemRendererSkin._skinParts = ["disclosureButton", "iconDisplay", "labelDisplay", "contentGroup"];
            return TreeItemRendererSkin;
        })(egret.gui.Skin);
        simple.TreeItemRendererSkin = TreeItemRendererSkin;
        TreeItemRendererSkin.prototype.__class__ = "skins.simple.TreeItemRendererSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
