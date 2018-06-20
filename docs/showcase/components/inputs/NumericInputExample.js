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
var NumericInputExample = /** @class */ (function (_super) {
    __extends(NumericInputExample, _super);
    function NumericInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numericInput: null
        };
        return _this;
    }
    NumericInputExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.NumericInput, { name: "numericInput", value: this.state.numericInput, label: "NumericInput Example", onChange: this.handleChange.bind(this) }),
            React.createElement("span", null,
                React.createElement("i", null, this.state.numericInput))));
    };
    NumericInputExample.prototype.handleChange = function (e) {
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    };
    return NumericInputExample;
}(React.Component));
exports.default = NumericInputExample;
//# sourceMappingURL=NumericInputExample.js.map