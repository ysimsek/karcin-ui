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
var moment = require("moment");
var DateInputExample = /** @class */ (function (_super) {
    __extends(DateInputExample, _super);
    function DateInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startDate1: moment(),
            startDate2: moment(),
            startDate3: moment(),
            displayName: 'Example'
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    DateInputExample.prototype.render = function () {
        var _this = this;
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { xs: 4 },
                React.createElement(reactstrap_1.Label, { style: { fontWeight: 'bold' } }, "Input focus DatePicker"),
                React.createElement("div", null,
                    React.createElement(karcin_ui_1.DatePicker, { selected: this.state.startDate1, onChange: function (e) { _this.handleChange(e, 1); }, onYearChange: this.handleYearChange, className: "form-control" }))),
            React.createElement(reactstrap_1.Col, { xs: 4 },
                React.createElement(reactstrap_1.Label, { style: { fontWeight: 'bold' } }, "Inline DatePicker"),
                React.createElement("div", null,
                    React.createElement(karcin_ui_1.DatePicker, { inline: true, selected: this.state.startDate2, onChange: function (e) { _this.handleChange(e, 2); }, onYearChange: this.handleYearChange }))),
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Label, { style: { fontWeight: 'bold' } }, "Time DatePicker"),
                React.createElement("div", null,
                    React.createElement(karcin_ui_1.DatePicker, { selected: this.state.startDate3, onChange: function (e) { _this.handleChange(e, 3); }, showTimeSelect: true, timeFormat: "HH:mm", timeIntervals: 15, dateFormat: "LLL", className: "form-control" })))));
    };
    DateInputExample.prototype.handleChange = function (date, getId) {
        this.state['startDate' + getId] = date;
        this.forceUpdate();
    };
    ;
    DateInputExample.prototype.handleYearChange = function (date, getId) {
        this.state['startDate' + getId] = date;
        this.forceUpdate();
    };
    return DateInputExample;
}(React.Component));
exports.default = DateInputExample;
//# sourceMappingURL=DateInputExample.js.map