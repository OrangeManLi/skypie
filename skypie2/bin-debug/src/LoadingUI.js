var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.skinName = skins.LoadingUISkin;
    }
    LoadingUI.prototype.setProgress = function (current, total) {
        if (this.progressBar) {
            this.progressBar.maximum = total;
            this.progressBar.value = current;
        }
    };
    return LoadingUI;
})(egret.gui.SkinnableComponent);
LoadingUI.prototype.__class__ = "LoadingUI";
