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
        var data = [{ date: "2012-01-01", distance: 227, townName: "İstanbul", townName2: "İstanbul", townSize: 25, latitude: 40.71, duration: 408 },
            { date: "2012-01-02", distance: 371, townName: "Ankara", townSize: 14, latitude: 38.89, duration: 482 },
            { date: "2012-01-03", distance: 433, townName: "Konya", townSize: 6, latitude: 34.22, duration: 562 },
            { date: "2012-01-04", distance: 345, townName: "ŞanlıUrfa", townSize: 7, latitude: 130.35, duration: 379 },
            { date: "2012-01-05", distance: 480, townName: "Trabzon", townName2: "Trabzon", townSize: 10, latitude: 25.83, duration: 501 },
            { date: "2012-01-06", distance: 386, townName: "Bitlis", townSize: 7, latitude: 170.46, duration: 443 },
            { date: "2012-01-07", distance: 348, townName: "Mersin", townSize: 10, latitude: 129.94, duration: 405 },
            { date: "2012-01-08", distance: 238, townName: "İzmir", townName2: "İzmir", townSize: 16, latitude: 29.76, duration: 309
            }];
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Three Data in ComplexBarChart" },
                    React.createElement(karcin_ui_1.ComplexBarChart, { data: data, categoryField: "date", type: [
                            { type: "column", valueField: "distance" },
                            { type: "line", valueField: "latitude" },
                            { type: "line", valueField: "duration" }
                        ] }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Three Column BarChart" },
                    React.createElement(karcin_ui_1.ComplexBarChart, { data: data, categoryField: "date", textColor: "red", type: [
                            { type: "column", valueField: "distance", color: "gray" },
                            { type: "column", valueField: "latitude", color: "blue" },
                            { type: "column", valueField: "duration", color: "#aabbcc" }
                        ] }))));
    };
    return ComposedBarChartExam;
}(React.Component));
exports.default = ComposedBarChartExam;
//# sourceMappingURL=ComplexBarChartExam.js.map