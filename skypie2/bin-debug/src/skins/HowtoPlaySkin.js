var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HowtoPlaySkin = (function (_super) {
        __extends(HowtoPlaySkin, _super);
        function HowtoPlaySkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.currentState = "s1";
            this.elementsContent = [this.__4_i(), this.__5_i(), this.__7_i(), this.prevButton_i()];
            this.__6_i();
            this.nextButton_i();
            this.states = [
                new egret.gui.State("s1", [
                    new egret.gui.AddItems("__6", "", "before", "__7"),
                    new egret.gui.AddItems("nextButton", "", "last", ""),
                    new egret.gui.SetProperty("__4", "left", 0),
                    new egret.gui.SetProperty("__4", "right", 0),
                    new egret.gui.SetProperty("__4", "top", 0),
                    new egret.gui.SetProperty("__4", "bottom", 0),
                    new egret.gui.SetProperty("__5", "bold", true),
                    new egret.gui.SetProperty("__6", "horizontalCenter", 0),
                    new egret.gui.SetProperty("__7", "text", "触屏控制史迪仔左右移动，是它躲避或接住空中掉落的美食。"),
                    new egret.gui.SetProperty("prevButton", "source", "howtoplay_return_png")
                ]),
                new egret.gui.State("s2", [
                    new egret.gui.AddItems("__6", "", "before", "__7"),
                    new egret.gui.AddItems("nextButton", "", "last", ""),
                    new egret.gui.SetProperty("__5", "text", "当前可以吃的美食"),
                    new egret.gui.SetProperty("__6", "source", "howtoplay_1_png"),
                    new egret.gui.SetProperty("__6", "top", 96),
                    new egret.gui.SetProperty("__6", "horizontalCenter", 0),
                    new egret.gui.SetProperty("__7", "text", "注意屏幕左上角的大的美食图，这个表示当前可以吃的美食。"),
                    new egret.gui.SetProperty("nextButton", "source", "howtoplay_next_png")
                ]),
                new egret.gui.State("s3", [
                    new egret.gui.AddItems("__6", "", "before", "__7"),
                    new egret.gui.AddItems("nextButton", "", "last", ""),
                    new egret.gui.SetProperty("__5", "bold", true),
                    new egret.gui.SetProperty("__5", "text", "注意不要错过美食"),
                    new egret.gui.SetProperty("__6", "source", "howtoplay_2_png"),
                    new egret.gui.SetProperty("__6", "top", 95),
                    new egret.gui.SetProperty("__6", "horizontalCenter", 0),
                    new egret.gui.SetProperty("__7", "text", "不可错过当前能吃的美食，也不能吃错美食。"),
                    new egret.gui.SetProperty("nextButton", "source", "howtoplay_return_png")
                ])
            ];
        }
        Object.defineProperty(HowtoPlaySkin.prototype, "skinParts", {
            get: function () {
                return HowtoPlaySkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HowtoPlaySkin.prototype.__5_i = function () {
            var t = new egret.gui.Label();
            this.__5 = t;
            this.__s(t, ["fontFamily", "horizontalCenter", "text", "textColor", "top"], ["Arial", 0, "游戏玩法", 0x004F5D, 18]);
            return t;
        };
        HowtoPlaySkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "top"], ["p1", 95]);
            return t;
        };
        HowtoPlaySkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__7 = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], [true, "Arial", 0, 25, "All pieces on the board move into the same direction.", "center", 20317, 326, "middle", 418]);
            return t;
        };
        HowtoPlaySkin.prototype.nextButton_i = function () {
            var t = new egret.gui.UIAsset();
            this.nextButton = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [70, "howtoplay_next_png", 446]);
            return t;
        };
        HowtoPlaySkin.prototype.prevButton_i = function () {
            var t = new egret.gui.UIAsset();
            this.prevButton = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [-70, "howtoplay_prev_png", 446]);
            return t;
        };
        HowtoPlaySkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            t.source = "about_background";
            return t;
        };
        HowtoPlaySkin._skinParts = ["prevButton", "nextButton"];
        return HowtoPlaySkin;
    })(egret.gui.Skin);
    skins.HowtoPlaySkin = HowtoPlaySkin;
    HowtoPlaySkin.prototype.__class__ = "skins.HowtoPlaySkin";
})(skins || (skins = {}));
