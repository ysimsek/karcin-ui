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
var data1 = [
    { "y": 10, "x": 14, "value": 59 },
    { "y": 10, "x": 22, "value": 59 },
    { "y": -10, "x": 8, "value": 19, },
    { "y": -17, "x": 2, "value": 11, }
];
var data2 = [
    { "y2": -5, "x2": -3, "value2": 44 },
    { "y2": -5, "x2": -3, "value2": 44 },
    { "y2": -4, "x2": 6, "value2": 35 },
    { "y2": -5, "x2": -6, "value2": 168 }
];
var newData1 = [{ name: "firstData", data: data1, xCoor: "x", yCoor: "y", value: "value", graph: "diamond", color: "#00cc11" },
    { name: "secondData", data: data2, xCoor: "x2", yCoor: "y2", value: "value2", graph: "bubble", color: "blue" }];
var newData2 = [{ name: "firstData", data: data1, xCoor: "x", yCoor: "y", value: "value", graph: "xError", color: "#00cc11" },
    { name: "secondData", data: data2, xCoor: "x2", yCoor: "y2", value: "value2", graph: "yError", color: "blue" }];
var newData3 = [{ name: "firstData", data: data1, xCoor: "x", yCoor: "y", value: "value", graph: "circle", color: "#00cc11" },
    { name: "secondData", data: data2, xCoor: "x2", yCoor: "y2", value: "value2", graph: "yError", color: "blue" }];
var newData4 = [{ name: "firstData", data: data1, xCoor: "x", yCoor: "y", value: "value", graph: "bubble", color: "#00cc11" },
    { name: "secondData", data: data2, xCoor: "x2", yCoor: "y2", value: "value2", graph: "triangleUp", color: "blue" }];
var ScatterChartExam = /** @class */ (function (_super) {
    __extends(ScatterChartExam, _super);
    function ScatterChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ScatterChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Diamond and Bubble Chart Example1" },
                    React.createElement(karcin_ui_1.ScatterChart, { data: newData1 }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Diamond and Bubble Chart Example2" },
                    React.createElement(karcin_ui_1.ScatterChart, { data: newData1, theme: "black", textColor: "blue" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Xerror and Yerror Chart Example1" },
                    React.createElement(karcin_ui_1.ScatterChart, { data: newData2, theme: "black", textColor: "red", line: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Xerror and Yerror Chart Example2" },
                    React.createElement(karcin_ui_1.ScatterChart, { data: newData2, textColor: "#aa1177", line: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Circle and Yerror Chart Example1" },
                    React.createElement(karcin_ui_1.ScatterChart, { data: newData3, textColor: "black" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Bubble and TriangleUp Chart Example1" },
                    React.createElement(karcin_ui_1.ScatterChart, { data: newData4, textColor: "black" }))));
    };
    return ScatterChartExam;
}(React.Component));
exports.default = ScatterChartExam;
//# sourceMappingURL=ScatterChartExam.js.map