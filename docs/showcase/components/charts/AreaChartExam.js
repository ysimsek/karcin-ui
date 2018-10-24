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
var reactstrap_1 = require("reactstrap");
var AreaChartExam = /** @class */ (function (_super) {
    __extends(AreaChartExam, _super);
    function AreaChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    AreaChartExam.prototype.render = function () {
        var data = [{
                "date": "2012-12-22",
                "value": 59,
                "lineColor": "blue"
            }, {
                "date": "2012-12-23",
                "value": 58
            }, {
                "date": "2012-12-24",
                "value": 55
            }, {
                "date": "2012-12-25",
                "value": 52
            }, {
                "date": "2012-12-26",
                "value": 54
            }, {
                "date": "2012-12-27",
                "value": 50
            }, {
                "date": "2012-12-28",
                "value": 50,
                "lineColor": "#FF9E01"
            }, {
                "date": "2012-12-29",
                "value": 51
            }, {
                "date": "2012-12-30",
                "value": 52
            }, {
                "date": "2012-12-31",
                "value": 58
            }, {
                "date": "2013-01-01",
                "value": 60
            }, {
                "date": "2013-01-02",
                "value": 67
            }, {
                "date": "2013-01-03",
                "value": 64
            }, {
                "date": "2013-01-04",
                "value": 66
            }, {
                "date": "2013-01-05",
                "value": 60
            }, {
                "date": "2013-01-06",
                "value": 63
            }, {
                "date": "2013-01-07",
                "value": 61
            }, {
                "date": "2013-01-08",
                "value": 60,
                "lineColor": "yellow"
            }, {
                "date": "2013-01-09",
                "value": 65
            }, {
                "date": "2013-01-10",
                "value": 75
            }, {
                "date": "2013-01-11",
                "value": 77
            }];
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple AreaChart(none theme)" },
                    React.createElement(karcin_ui_1.AreaChart, { data: data, categoryValue: "value", categoryField: "date", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple AreaChart(light theme)" },
                    React.createElement(karcin_ui_1.AreaChart, { theme: "light", data: data, textColor: "#aabbcc", categoryValue: "value", categoryField: "date", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple AreaChart(dark theme)" },
                    React.createElement(karcin_ui_1.AreaChart, { theme: "dark", data: data, textColor: "red", categoryValue: "value", categoryField: "date", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple AreaChart Changes values" },
                    React.createElement(karcin_ui_1.AreaChart, { data: data, categoryValue: "value", categoryField: "date", cutOffColor: "lineColor", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Horizantal Area Chart" },
                    React.createElement(karcin_ui_1.AreaChart, { data: data, inline: true, categoryValue: "value", categoryField: "date", cutOffColor: "lineColor", formatting: "date" }))));
    };
    return AreaChartExam;
}(React.Component));
exports.default = AreaChartExam;
//# sourceMappingURL=AreaChartExam.js.map