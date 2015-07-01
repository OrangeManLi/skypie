var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by shaorui on 14-6-8.
 */
var skypie;
(function (skypie) {
    /**
     * 成绩显示
     */
    var ScorePanel = (function (_super) {
        __extends(ScorePanel, _super);
        function ScorePanel() {
            _super.call(this);
            var g = this.graphics;
            g.beginFill(0x000000, 0.8);
            g.drawRect(0, 0, 400, 200);
            g.endFill();
            this.txt = new egret.TextField();
            this.txt.width = 400;
            this.txt.height = 200;
            this.txt.textAlign = "center";
            this.txt.textColor = 0xFFFFFF;
            this.txt.size = 24;
            this.txt.y = 60;
            this.addChild(this.txt);
            this.touchChildren = false;
            this.touchEnabled = false;
        }
        ScorePanel.prototype.showScore = function (value) {
            var msg = "你一下吃了:\n" + value + "个派\n" + "再来一顿";
            this.txt.text = msg;
        };
        ScorePanel.prototype.showHighest = function (value) {
            var text = "\n最高分" + value;
            this.txt.text += text;
        };
        return ScorePanel;
    })(egret.Sprite);
    skypie.ScorePanel = ScorePanel;
    ScorePanel.prototype.__class__ = "skypie.ScorePanel";
})(skypie || (skypie = {}));
