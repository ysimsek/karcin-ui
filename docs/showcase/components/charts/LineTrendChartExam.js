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
var LineTrendChartExam = /** @class */ (function (_super) {
    __extends(LineTrendChartExam, _super);
    function LineTrendChartExam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineTrendChartExam.prototype.render = function () {
        var data = [{
                "date": "2012-01-01",
                "value": 8
            }, {
                "date": "2012-01-02",
                "color": "#CC0000",
                "value": 10
            }, {
                "date": "2012-01-03",
                "value": 12
            }, {
                "date": "2012-01-04",
                "value": 14
            }, {
                "date": "2012-01-05",
                "value": 11
            }, {
                "date": "2012-01-06",
                "value": 6
            }, {
                "date": "2012-01-07",
                "value": 7
            }, {
                "date": "2012-01-08",
                "value": 9
            }, {
                "date": "2012-01-09",
                "value": 13
            }, {
                "date": "2012-01-10",
                "value": 15
            }, {
                "date": "2012-01-11",
                "color": "#CC0000",
                "value": 19
            }, {
                "date": "2012-01-12",
                "value": 21
            }, {
                "date": "2012-01-13",
                "value": 22
            }, {
                "date": "2012-01-14",
                "value": 20
            }, {
                "date": "2012-01-15",
                "value": 18
            }, {
                "date": "2012-01-16",
                "value": 14
            }, {
                "date": "2012-01-17",
                "color": "#CC0000",
                "value": 16
            }, {
                "date": "2012-01-18",
                "value": 18
            }, {
                "date": "2012-01-19",
                "value": 17
            }, {
                "date": "2012-01-20",
                "value": 15
            }, {
                "date": "2012-01-21",
                "value": 12
            }, {
                "date": "2012-01-22",
                "color": "#CC0000",
                "value": 10
            }, {
                "date": "2012-01-23",
                "value": 8
            }];
        return React.createElement(karcin_ui_1.Panel, { title: "Line Changes Chart" },
            React.createElement(karcin_ui_1.LineChartTrend, { data: data, categoryValue: "value", colorField: "color", categoryField: "date" }));
    };
    return LineTrendChartExam;
}(React.Component));
exports.default = LineTrendChartExam;
//# sourceMappingURL=LineTrendChartExam.js.map