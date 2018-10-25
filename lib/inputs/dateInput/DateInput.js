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
var react_dates_1 = require("react-dates");
require("react-dates/lib/css/_datepicker.css");
var FaIcon_1 = require("../../../src/functional/faicon/FaIcon");
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            date: moment(),
            focused: false
        };
        return _this;
    }
    DateInput.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_dates_1.SingleDatePicker, { id: "SingleDatePickerInput", date: moment(), onDateChange: function (e) {
                _this.handleChange(e);
            }, focused: this.state.focused, onFocusChange: function () { _this.toggleFocus(); }, numberOfMonths: 1, showDefaultInputIcon: true, customInputIcon: React.createElement(FaIcon_1.default, { code: "fa-home" }), hideKeyboardShortcutsPanel: true }));
    };
    DateInput.prototype.toggleFocus = function () {
        this.setState({
            focused: !this.state.focused
        });
    };
    DateInput.prototype.handleChange = function (data) {
        var getDate = moment(data).format('DD.MM.YYYY');
        debugger;
    };
    return DateInput;
}(React.Component));
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map