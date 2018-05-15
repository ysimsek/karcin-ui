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
var ProgressExample = /** @class */ (function (_super) {
    __extends(ProgressExample, _super);
    function ProgressExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Progress, null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Progress, { value: 22, title: "22%" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Progress, { value: 42, striped: true }, "Stripe"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Progress, { value: 42, animated: true }, "Animated"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Progress, { multi: true },
                React.createElement(karcin_ui_1.Progress, { bar: true, color: "success", value: 25 }, "%25"),
                React.createElement(karcin_ui_1.Progress, { bar: true, color: "danger", value: 25 }, "%25"),
                React.createElement(karcin_ui_1.Progress, { bar: true, color: "info", value: 25 }, "%25")));
    };
    return ProgressExample;
}(React.Component));
exports.default = ProgressExample;
//# sourceMappingURL=ProgressExample.js.map