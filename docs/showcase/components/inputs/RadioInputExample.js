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
var RadioInputExample = /** @class */ (function (_super) {
    __extends(RadioInputExample, _super);
    function RadioInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            radioInputInline: "4",
            radioInputHori: "1"
        };
        return _this;
    }
    RadioInputExample.prototype.render = function () {
        var value = [
            { id: 1, value: "Apple", des: "D1" },
            { id: 2, value: "Samsung", des: "D1" },
            { id: 3, value: "Huawei", des: "D1" },
            { id: 4, value: "Lg", des: "D1" },
            { id: 5, value: "Lenovo", des: "D1" }
        ];
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.RadioInput, { name: "radioInputInline", value: this.state.radioInputInline, label: "Inline RadioInput Example", inline: true, items: value, idField: "id", textField: "value", onChange: this.handleChange.bind(this) }),
            React.createElement(karcin_ui_1.RadioInput, { name: "radioInputHori", label: "Horizontal RadioInput Example", value: this.state.radioInputHori, items: value, idField: "id", textField: "value", onChange: this.handleChange.bind(this) }));
    };
    RadioInputExample.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return RadioInputExample;
}(React.Component));
exports.default = RadioInputExample;
//# sourceMappingURL=RadioInputExample.js.map