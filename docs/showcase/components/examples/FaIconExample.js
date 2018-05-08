"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var karcin_ui_1 = require("karcin-ui");
var FaIconExample = /** @class */ (function (_super) {
    __extends(FaIconExample, _super);
    function FaIconExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaIconExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-html5" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-html5", size: "fa-2x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-html5", size: "fa-3x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-html5", size: "fa-4x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-html5", size: "fa-5x" }),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-facebook-square", size: "fa-2x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-twitter-square", size: "fa-2x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-youtube-square", size: "fa-2x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-google-plus-square", size: "fa-2x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-instagram", size: "fa-2x" }),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-spinner fa-spin", size: "fa-2x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fa-cog fa-spin", size: "fa-2x" })));
    };
    return FaIconExample;
}(React.Component));
exports.default = FaIconExample;
//# sourceMappingURL=FaIconExample.js.map