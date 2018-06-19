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
var BigCalendarExample = /** @class */ (function (_super) {
    __extends(BigCalendarExample, _super);
    function BigCalendarExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BigCalendarExample.prototype.render = function () {
        var events = [
            // Upper Calendar
            {
                title: 'A (2 days)',
                allDay: true,
                start: '2015-04-12T00:00:00.000Z',
                end: '2015-04-14T00:00:00.000Z'
            },
            // Lower calendar
            {
                title: 'B (2 days)',
                allDay: true,
                start: '2017-12-12T00:00:00.000Z',
                end: '2017-12-14T00:00:00.000Z'
            },
            {
                title: 'C (1 day)',
                allDay: true,
                start: '2017-12-02T00:00:00.000Z',
                end: '2017-12-03T00:00:00.000Z'
            },
            {
                title: 'D (2 days)',
                allDay: true,
                start: '2017-12-02T00:00:00.000Z',
                end: '2017-12-04T00:00:00.000Z'
            },
            {
                title: 'E (1 day)',
                allDay: true,
                start: '2017-12-04T00:00:00.000Z',
                end: '2017-12-05T00:00:00.000Z'
            },
        ];
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.Calendar, { events: events, step: 60, showMultiDayTimes: true, defaultDate: new Date(2015, 3, 1), style: { height: 700 } })));
    };
    return BigCalendarExample;
}(React.Component));
exports.default = BigCalendarExample;
//# sourceMappingURL=CalendarExample.js.map