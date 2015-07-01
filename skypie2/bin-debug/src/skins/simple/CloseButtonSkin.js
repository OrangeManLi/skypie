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
        var CloseButtonSkin = (function (_super) {
            __extends(CloseButtonSkin, _super);
            function CloseButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x111111)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "closebtn_down_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x222222)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "closebtn_disabled_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0xcccccc)
                    ])
                ];
            }
            Object.defineProperty(CloseButtonSkin.prototype, "skinParts", {
                get: function () {
                    return CloseButtonSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            CloseButtonSkin.prototype.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["bottom", "fontFamily", "left", "right", "size", "textAlign", "top", "verticalAlign"], [12, "Tahoma", 10, 10, 20, "center", 8, "middle"]);
                return t;
            };
            CloseButtonSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "closebtn_up_png", 100]);
                return t;
            };
            CloseButtonSkin._skinParts = ["labelDisplay"];
            return CloseButtonSkin;
        })(egret.gui.Skin);
        simple.CloseButtonSkin = CloseButtonSkin;
        CloseButtonSkin.prototype.__class__ = "skins.simple.CloseButtonSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
