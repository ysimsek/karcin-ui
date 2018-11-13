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
var moment = require("moment");
require("react-dates/initialize");
var react_dates_1 = require("react-dates");
require("react-dates/lib/css/_datepicker.css");
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: (_this.props.value !== undefined ? moment(_this.props.value, _this.props.format) : moment()),
            focused: false,
            icon: _this.props.icon
        };
        return _this;
    }
    DateInput.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            value: moment(props.value, this.state.format)
        });
    };
    ;
    DateInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'karcin-dateInput' },
            React.createElement("div", { className: "form-group" },
                (this.props.label !== undefined) ? React.createElement("label", { className: 'label-properties' }, this.props.label) : '',
                React.createElement(react_dates_1.SingleDatePicker, { id: this.props.id, date: this.state.value, onDateChange: function (e) {
                        _this.handleChange(e);
                    }, focused: this.state.focused, onFocusChange: function () { _this.toggleFocus(); }, numberOfMonths: 1, showDefaultInputIcon: (this.state.icon !== undefined ? true : false), customInputIcon: (this.state.icon !== undefined ? this.state.icon : ''), hideKeyboardShortcutsPanel: true }))));
    };
    DateInput.prototype.toggleFocus = function () {
        this.setState({
            focused: !this.state.focused
        });
    };
    DateInput.prototype.handleChange = function (data) {
        var getDate = moment(data, this.props.format);
        var datas = {};
        datas['target'] = { 'name': this.props.name, value: new Date(getDate) };
        if (this.props.onChange !== undefined) {
            this.props.onChange(datas);
        }
    };
    DateInput.defaultProps = {
        name: 'karcin-date',
        value: moment(),
        format: 'DD.MM.YYYY'
    };
    return DateInput;
}(React.Component));
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map