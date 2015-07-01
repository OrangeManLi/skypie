/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.Button
         * @classdesc
         * 按钮控件
         * @extends egret.gui.ButtonBase
         */
        var Button = (function (_super) {
            __extends(Button, _super);
            /**
             * @method egret.gui.Button#constructor
             */
            function Button() {
                _super.call(this);
                /**
                 * [SkinPart]按钮上的文本标签
                 * @member egret.gui.ButtonBase#labelDisplay
                 */
                this.iconDisplay = null;
                this._icon = null;
            }
            Object.defineProperty(Button.prototype, "icon", {
                /**
                 * 要在按钮上显示的图标
                 * @member egret.gui.ButtonBase#icon
                 */
                get: function () {
                    return this._getIcon();
                },
                set: function (value) {
                    this._setIcon(value);
                },
                enumerable: true,
                configurable: true
            });
            /**
             *
             * @returns {any}
             * @private
             */
            Button.prototype._getIcon = function () {
                if (this.iconDisplay) {
                    return this.iconDisplay.source;
                }
                else {
                    return this._icon;
                }
            };
            /**
             *
             * @param value
             * @private
             */
            Button.prototype._setIcon = function (value) {
                this._icon = value;
                if (this.iconDisplay) {
                    this.iconDisplay.source = value;
                }
            };
            /**
             * 添加外观部件时调用
             * @method egret.gui.ButtonBase#partAdded
             * @param partName {string}
             * @param instance {any}
             */
            Button.prototype.partAdded = function (partName, instance) {
                _super.prototype.partAdded.call(this, partName, instance);
                if (instance == this.iconDisplay) {
                    this.iconDisplay.source = this._icon;
                }
            };
            return Button;
        })(gui.ButtonBase);
        gui.Button = Button;
        Button.prototype.__class__ = "egret.gui.Button";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
