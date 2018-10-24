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
var ComposedBarChartExam = /** @class */ (function (_super) {
    __extends(ComposedBarChartExam, _super);
    function ComposedBarChartExam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComposedBarChartExam.prototype.render = function () {
        var data = [{
                "continent": "North America",
                "title": "Trucks",
                "valueField": "trucks",
                "trucks": 40000,
                "SUVs": 180000,
                "cars": 90000,
                "total": 310000
            }, {
                "continent": "Asia",
                "title": "SUVs",
                "valueField": "SUVs",
                "trucks": 90000,
                "SUVs": 40000,
                "cars": 110000,
                "total": 240000
            }, {
                "continent": "Europe",
                "title": "Cars",
                "valueField": "cars",
                "trucks": 30000,
                "SUVs": 50000,
                "cars": 110000,
                "total": 190000
            }];
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Three Chart side by side BarChart" },
                    React.createElement(karcin_ui_1.ComposedBarChart, { height: 300, data: data, categoryField: "continent", categoryValue: "total", theme: "light", textColor: "black" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Dark Theme side by side BarChart" },
                    React.createElement(karcin_ui_1.ComposedBarChart, { height: 300, data: data, categoryField: "continent", categoryValue: "total", theme: "dark", textColor: "red" }))));
    };
    return ComposedBarChartExam;
}(React.Component));
exports.default = ComposedBarChartExam;
//# sourceMappingURL=ComposedBarChartExam.js.map