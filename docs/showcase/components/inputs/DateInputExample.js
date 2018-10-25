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
var karcin_ui_1 = require("karcin-ui");
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
        return (React.createElement(karcin_ui_1.DateInput, null));
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
//# sourceMappingURL=DateInputExample.js.map