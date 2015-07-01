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
        var SettingButtonSkin = (function (_super) {
            __extends(SettingButtonSkin, _super);
            function SettingButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "setting_down")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            SettingButtonSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "setting_normal", 0]);
                return t;
            };
            return SettingButtonSkin;
        })(egret.gui.Skin);
        components.SettingButtonSkin = SettingButtonSkin;
        SettingButtonSkin.prototype.__class__ = "skins.components.SettingButtonSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
