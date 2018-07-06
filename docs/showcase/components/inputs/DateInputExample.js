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
var reactstrap_1 = require("reactstrap");
var karcin_ui_1 = require("karcin-ui");
var DateInputExample = /** @class */ (function (_super) {
    __extends(DateInputExample, _super);
    function DateInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: new Date()
        };
        return _this;
    }
    DateInputExample.prototype.render = function () {
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.DateInput, { name: "value", label: "Focus DateInput", value: this.state.value, handleChange: this.handleChange.bind(this) })),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.DateInput, { name: "value2", label: "Inline DateInput", value: this.state.value2, inline: true, handleChange: this.handleChange.bind(this) })),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.DateInput, { name: "value2", label: "Time DatePicker", value: this.state.value2, showTime: true, timeFormat: "HH:mm", timeInterval: 15, dateFormat: "LLL", handleChange: this.handleChange.bind(this) })),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.DatePicker, { name: "value3", selected: this.state.value3, onChange: this.handleChange, showTimeSelect: true, showTimeSelectOnly: true, timeIntervals: 20, dateFormat: "LT", timeCaption: "Time" }))));
    };
    DateInputExample.prototype.handleChange = function (e) {
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    };
    return DateInputExample;
}(React.Component));
exports.default = DateInputExample;
//# sourceMappingURL=DateInputExample.js.map