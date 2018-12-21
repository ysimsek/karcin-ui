"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("react-big-calendar/lib/css/react-big-calendar.css");
var moment = require("moment");
require("moment/locale/tr");
var BigCalendar = require('react-big-calendar');
BigCalendar.momentLocalizer(moment);
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        return _super.call(this, props) || this;
    }
    Calendar.prototype.render = function () {
        var allViews = Object.keys(BigCalendar.Views).map(function (k) { return BigCalendar.Views[k]; });
        return (React.createElement("div", null, React.createElement(BigCalendar, __assign({ events: this.props.events }, this.props))));
    };
    return Calendar;
}(React.Component));
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map