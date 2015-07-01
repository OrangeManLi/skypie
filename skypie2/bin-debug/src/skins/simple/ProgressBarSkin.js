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
        var ProgressBarSkin = (function (_super) {
            __extends(ProgressBarSkin, _super);
            function ProgressBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [20, 100]);
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            Object.defineProperty(ProgressBarSkin.prototype, "skinParts", {
                get: function () {
                    return ProgressBarSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ProgressBarSkin.prototype.thumb_i = function () {
                var t = new egret.gui.Rect();
                this.thumb = t;
                this.__s(t, ["bottom", "fillColor", "left", "top", "width"], [0, 0x22988e, 1, 0, 20]);
                return t;
            };
            ProgressBarSkin.prototype.track_i = function () {
                var t = new egret.gui.Rect();
                this.track = t;
                this.__s(t, ["bottom", "fillColor", "left", "right", "strokeAlpha", "strokeColor", "top"], [0, 0xe6e6e6, 0, 0, 1, 0xa9a9a9, 0]);
                return t;
            };
            ProgressBarSkin._skinParts = ["track", "thumb"];
            return ProgressBarSkin;
        })(egret.gui.Skin);
        simple.ProgressBarSkin = ProgressBarSkin;
        ProgressBarSkin.prototype.__class__ = "skins.simple.ProgressBarSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
