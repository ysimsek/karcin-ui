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
var ButtonExample = /** @class */ (function (_super) {
    __extends(ButtonExample, _super);
    function ButtonExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.Button, { color: "primary" }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "secondary" }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "danger" }, "danger"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "link" }, "link"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { outline: true, color: "primary" }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "secondary" }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "danger" }, "danger"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { color: "primary", size: "lg" }, "Large Button"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "secondary", size: "lg" }, "Large Button"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { color: "primary", size: "sm" }, "Small Button"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "secondary", size: "sm" }, "Small Button"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { color: "primary", size: "lg", block: true }, "Block level button"),
            React.createElement(karcin_ui_1.Button, { color: "secondary", size: "lg", block: true }, "Block level button")));
    };
    return ButtonExample;
}(React.Component));
exports.default = ButtonExample;
//# sourceMappingURL=ButtonExample.js.map