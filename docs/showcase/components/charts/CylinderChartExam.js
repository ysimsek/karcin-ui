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
var CylinderChartExam = /** @class */ (function (_super) {
    __extends(CylinderChartExam, _super);
    function CylinderChartExam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CylinderChartExam.prototype.render = function () {
        var data1 = {
            "category": "Three Data Cylinder Chart",
            "data": [{ "value": 30 },
                { "value": 75, lineColor: "#ffffff", fillColor: "white" },
                { "value": 25 }]
        };
        var data2 = {
            "category": "Two Data Cylinder Chart",
            "data": [{ "value": 30 },
                { "value": 75, lineColor: "#ffffff", fillColor: "white" }]
        };
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Three Data Cylinder Chart Example" },
                    React.createElement(karcin_ui_1.CylinderChart, { data: data1, height: 400, categoryField: "data", categoryTitle: "category", categoryValue: "value" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Two Data Cylinder Chart Example" },
                    React.createElement(karcin_ui_1.CylinderChart, { data: data2, categoryField: "data", categoryTitle: "category", categoryValue: "value" }))));
    };
    return CylinderChartExam;
}(React.Component));
exports.default = CylinderChartExam;
//# sourceMappingURL=CylinderChartExam.js.map