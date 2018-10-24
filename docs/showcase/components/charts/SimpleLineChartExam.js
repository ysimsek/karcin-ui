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
var SimpleLineChartExam = /** @class */ (function (_super) {
    __extends(SimpleLineChartExam, _super);
    function SimpleLineChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SimpleLineChartExam.prototype.render = function () {
        var data = [{
                "date": "2012-07-27",
                "value": 13
            }, {
                "date": "2012-07-28",
                "value": 11
            }, {
                "date": "2012-07-29",
                "value": 15
            }, {
                "date": "2012-07-30",
                "value": 16
            }, {
                "date": "2012-07-31",
                "value": 18
            }, {
                "date": "2012-08-01",
                "value": 13
            }, {
                "date": "2012-08-02",
                "value": 22
            }, {
                "date": "2012-08-03",
                "value": 23
            }, {
                "date": "2012-08-04",
                "value": 13
            }, {
                "date": "2012-08-05",
                "value": 16
            }, {
                "date": "2012-08-06",
                "value": 11
            }, {
                "date": "2012-08-07",
                "value": 25
            }
        ];
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple LineChart" },
                    React.createElement(karcin_ui_1.LineChart, { data: data, theme: "none", categoryField: "date", categoryValue: "value", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Light LineChart" },
                    React.createElement(karcin_ui_1.LineChart, { data: data, theme: "light", textColor: "red", categoryField: "date", categoryValue: "value", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Pattern LineChart" },
                    React.createElement(karcin_ui_1.LineChart, { data: data, theme: "patterns", textColor: "blue", categoryField: "date", categoryValue: "value", formatting: "date" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Negative/Positive LineChart" },
                    React.createElement(karcin_ui_1.LineChart, { data: data, negativeColor: "red", positiveColor: "blue", categoryField: "date", categoryValue: "value", formatting: "date" }))));
    };
    return SimpleLineChartExam;
}(React.Component));
exports.default = SimpleLineChartExam;
//# sourceMappingURL=SimpleLineChartExam.js.map