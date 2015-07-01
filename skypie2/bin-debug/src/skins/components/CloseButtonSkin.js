var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var components;
    (function (components) {
        var CloseButtonSkin = (function (_super) {
            __extends(CloseButtonSkin, _super);
            function CloseButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            CloseButtonSkin.prototype.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "left", "right", "top"], [0, 0, 0, 0, 0]);
                return t;
            };
            return CloseButtonSkin;
        })(egret.gui.Skin);
        components.CloseButtonSkin = CloseButtonSkin;
        CloseButtonSkin.prototype.__class__ = "skins.components.CloseButtonSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
