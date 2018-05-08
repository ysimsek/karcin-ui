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
var SimpleBarChartExam = /** @class */ (function (_super) {
    __extends(SimpleBarChartExam, _super);
    function SimpleBarChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SimpleBarChartExam.prototype.render = function () {
        var data = [{
                "country": "Turkey",
                "visits": 4025,
                "color": "#FF0F00"
            }, {
                "country": "China",
                "visits": 1882,
                "color": "#FF6600"
            }, {
                "country": "Japan",
                "visits": 1809,
                "color": "#FF9E01"
            }, {
                "country": "Germany",
                "visits": 1322,
                "color": "#FCD202"
            }, {
                "country": "UK",
                "visits": 1122,
                "color": "#F8FF01"
            }, {
                "country": "France",
                "visits": 1114,
                "color": "#B0DE09"
            }, {
                "country": "India",
                "visits": 984,
                "color": "#04D215"
            }];
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple Light Theme Chart" },
                    React.createElement(karcin_ui_1.BarChart, { data: data, theme: "light", textColor: "#000000", categoryField: "country", categoryValue: "visits" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple Dark Theme Chart(Inline)" },
                    React.createElement(karcin_ui_1.BarChart, { data: data, theme: "dark", inline: true, textColor: "#aa00cc", categoryField: "country", categoryValue: "visits" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple Pattern Theme Chart" },
                    React.createElement(karcin_ui_1.BarChart, { data: data, theme: "black", textColor: "#3333aa", categoryField: "country", categoryValue: "visits", valueLine: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Color Column Chart" },
                    React.createElement(karcin_ui_1.BarChart, { data: data, textColor: "#3333aa", categoryField: "country", categoryValue: "visits", colorField: "color", valueLine: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple 3D Square Chart" },
                    React.createElement(karcin_ui_1.BarChart, { data: data, threeD: true, textColor: "#3333aa", categoryField: "country", categoryValue: "visits", colorField: "color" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple 3D Oval Chart" },
                    React.createElement(karcin_ui_1.BarChart, { ovalColumn: true, data: data, threeD: true, textColor: "#3333aa", categoryField: "country", categoryValue: "visits", colorField: "color" }))));
    };
    return SimpleBarChartExam;
}(React.Component));
exports.default = SimpleBarChartExam;
//# sourceMappingURL=SimpleBarChartExam.js.map