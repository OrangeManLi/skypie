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
        var MusicButonSkin = (function (_super) {
            __extends(MusicButonSkin, _super);
            function MusicButonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__7_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "music_down")
                    ]),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "music_non_normal")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "music_non_down")
                    ]),
                    new egret.gui.State("disabledAndSelected", [])
                ];
            }
            MusicButonSkin.prototype.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                t.source = "music_normal";
                return t;
            };
            return MusicButonSkin;
        })(egret.gui.Skin);
        components.MusicButonSkin = MusicButonSkin;
        MusicButonSkin.prototype.__class__ = "skins.components.MusicButonSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
