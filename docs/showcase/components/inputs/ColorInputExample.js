"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var karcin_ui_1 = require("karcin-ui");
var ColorInputExample = /** @class */ (function (_super) {
    __extends(ColorInputExample, _super);
    function ColorInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            colorInput: null
        };
        return _this;
    }
    ColorInputExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.ColorInput, { name: "colorInput", label: "ColortInput Example", value: this.state.colorInput, valid: true, onChange: this.handleChange.bind(this) }),
            React.createElement("span", null,
                React.createElement("i", null, this.state.colorInput)));
    };
    ColorInputExample.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return ColorInputExample;
}(React.Component));
exports.default = ColorInputExample;
//# sourceMappingURL=ColorInputExample.js.map