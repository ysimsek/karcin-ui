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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
            startDate: _this.renderDate(props),
            displayName: 'Example'
        };
        return _this;
    }
    DateInput.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.setState({
            startDate: this.renderDate(props),
        });
    };
    DateInput.prototype.render = function () {
        var _this = this;
        var startDate = this.state.startDate;
        //time'da sadece saat geldiği için tarih olduğunu anlamıyor. onun için bugünün tarihini alarak saati ekliyorum sorunu çözüyorum.
        if (this.props.showTimeSelectOnly !== undefined && this.props.value !== (null && undefined)) {
            startDate = moment(moment(moment().format('DD.MM.YYY') + this.props.value, 'DD.MM.YYYY HH:mm:ss').format());
        }
        return (React.createElement("div", null,
            this.props.label != undefined ? React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label) : null,
            React.createElement("div", null,
                React.createElement(react_datepicker_1.default, __assign({}, this.props, { selected: startDate, onChange: function (e, id) { _this.handleChange(e, id); }, className: "form-control " + this.props.className, inline: this.props.inline != undefined ? true : false, shouldCloseOnSelect: true })))));
    };
    DateInput.prototype.renderDate = function (props) {
        var returnDate = null;
        if (props.value !== (null && undefined)) {
            if (typeof props.value === 'number') {
                returnDate = new Date(props.value);
            }
            else {
                returnDate = props.value;
            }
            returnDate = moment(returnDate, props.dateFormat);
        }
        return returnDate;
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
        this.props.onChange({
            date: date,
            target: {
                value: moment(date._d).format(this.props.dateFormat),
                name: this.props.name
            },
            id: getId
        });
    };
    ;
    DateInput.defaultProps = {
        dateFormat: "DD.MM.YYYY",
        value: null
    };
    return DateInput;
}(React.Component));
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map