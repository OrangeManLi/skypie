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
        var HScrollBarThumbSkin = (function (_super) {
            __extends(HScrollBarThumbSkin, _super);
            function HScrollBarThumbSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            HScrollBarThumbSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["fillMode", "height", "source", "verticalCenter", "percentWidth"], ["scale", 10, "hscrollbtn_png", 0, 100]);
                return t;
            };
            return HScrollBarThumbSkin;
        })(egret.gui.Skin);
        simple.HScrollBarThumbSkin = HScrollBarThumbSkin;
        HScrollBarThumbSkin.prototype.__class__ = "skins.simple.HScrollBarThumbSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
