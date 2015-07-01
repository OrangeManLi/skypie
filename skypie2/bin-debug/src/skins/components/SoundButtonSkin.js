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
        var SoundButtonSkin = (function (_super) {
            __extends(SoundButtonSkin, _super);
            function SoundButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__7_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "sound_down")
                    ]),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "sound_non_normal")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "sound_non_down")
                    ]),
                    new egret.gui.State("disabledAndSelected", [])
                ];
            }
            SoundButtonSkin.prototype.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "sound_normal", 0]);
                return t;
            };
            return SoundButtonSkin;
        })(egret.gui.Skin);
        components.SoundButtonSkin = SoundButtonSkin;
        SoundButtonSkin.prototype.__class__ = "skins.components.SoundButtonSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
