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
        var PlayButtonSkin = (function (_super) {
            __extends(PlayButtonSkin, _super);
            function PlayButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 293;
                this.elementsContent = [this.__4_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "play_down")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            PlayButtonSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("39,39,15,74"), "play_normal", 0]);
                return t;
            };
            PlayButtonSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "right", "size", "text", "textColor", "verticalCenter"], ["Arial", 116, 45, "PLAY", 72074, 0]);
                return t;
            };
            return PlayButtonSkin;
        })(egret.gui.Skin);
        components.PlayButtonSkin = PlayButtonSkin;
        PlayButtonSkin.prototype.__class__ = "skins.components.PlayButtonSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
