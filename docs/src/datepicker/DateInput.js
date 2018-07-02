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
var DatePicker_1 = require("./DatePicker");
var moment = require("moment");
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startDate: moment(props.value),
            displayName: 'Example'
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    DateInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label),
            React.createElement("div", null,
                React.createElement(DatePicker_1.default, { selected: this.state.startDate, onChange: function (e) { _this.handleChange(e, 1); }, onYearChange: this.handleYearChange, className: "form-control", timeFormat: this.props.timeFormat, timeIntervals: this.props.timeInterval, dateFormat: this.props.dateFormat, inline: this.props.inline != undefined ? true : false, showTimeSelect: this.props.showTime != undefined ? true : false }))));
    };
    /**
     *
     * @param {moment.Moment | any | null} date
     * @param getId
     */
    DateInput.prototype.handleChange = function (date, getId) {
        var me = this;
        me.state['startDate'] = date;
        me.forceUpdate();
        this.props.handleChange({ date: date, target: { parsedValue: date._d, name: me.props.name }, id: getId });
    };
    ;
    DateInput.prototype.handleYearChange = function (date, getId) {
        var me = this;
        // me.state['startDate' + getId] = date;
        // me.forceUpdate();
        this.props.handleYearChange({ date: date, id: getId });
    };
    DateInput.defaultProps = {
        startDate: moment()
    };
    return DateInput;
}(React.Component));
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map