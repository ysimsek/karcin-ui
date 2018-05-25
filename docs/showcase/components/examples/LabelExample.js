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
var LabelExample = /** @class */ (function (_super) {
    __extends(LabelExample, _super);
    function LabelExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Label, null, "Normal Label"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Label, { size: 20 }, "20 size Label"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Label, { color: "red" }, "Change Color Label"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Label, { color: "#ab00ff" }, "Change Color Label"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Label, { color: "rgb(0,205,102)" }, "Change Color Label"),
            React.createElement("br", null),
            React.createElement("hr", null));
    };
    return LabelExample;
}(React.Component));
exports.default = LabelExample;
//# sourceMappingURL=LabelExample.js.map