"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_datepicker_1 = require("react-datepicker");
var moment = require("moment");
require("react-datepicker/dist/react-datepicker.css");
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startDate: props.value !== (null && undefined) ? moment(props.value) : null,
            displayName: 'Example'
        };
        return _this;
    }
    DateInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, this.props.label != undefined ? React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label) : null, React.createElement("div", null, React.createElement(react_datepicker_1.default, __assign({}, this.props, { selected: this.state.startDate, onChange: function (e, id) { _this.handleChange(e, id); }, className: "form-control " + this.props.className, timeFormat: this.props.timeFormat, timeIntervals: this.props.timeInterval, dateFormat: this.props.dateFormat, inline: this.props.inline != undefined ? true : false, showTimeSelect: this.props.showTime != undefined ? true : false })))));
    };
    /**
     *
     * @param {moment.Moment | any | null} date
     * @param getId
     */
    DateInput.prototype.handleChange = function (date, getId) {
        this.setState({
            startDate: date
        });
        this.props.onChange({ date: date, target: { parsedValue: moment(date._d).format(this.props.dateFormat), name: this.props.name }, id: getId });
    };
    ;
    DateInput.defaultProps = {
        startDate: moment(),
        dateFormat: "DD.MM.YYYY"
    };
    return DateInput;
}(React.Component));
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map