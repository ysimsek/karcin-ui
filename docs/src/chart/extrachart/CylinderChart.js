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
require("amcharts3/amcharts/amcharts");
require("amcharts3/amcharts/funnel");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var CylinderChart = /** @class */ (function (_super) {
    __extends(CylinderChart, _super);
    function CylinderChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CylinderChart.prototype.render = function () {
        var propsData = this.returnChartData(this.props.data);
        var data = {
            "theme": "light",
            "type": "serial",
            "depth3D": 100,
            "angle": 30,
            "autoMargins": false,
            "marginBottom": 100,
            "marginLeft": 150,
            "marginRight": 150,
            "dataProvider": propsData.data,
            "valueAxes": [{
                    "stackType": "100%",
                    "gridAlpha": 0
                }],
            "graphs": propsData.graphsData,
            "categoryField": this.props.categoryTitle,
            "categoryAxis": {
                "axisAlpha": 0,
                "labelOffset": 40,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    CylinderChart.prototype.returnChartData = function (propsData) {
        var data = propsData[this.props.categoryField];
        var title = propsData[this.props.categoryTitle];
        var graphsData = [];
        var normData = [];
        var objectData = {};
        objectData[this.props.categoryTitle] = title;
        var me = this;
        data.forEach(function (v, i) {
            graphsData.push({
                "type": "column",
                "topRadius": 1,
                "columnWidth": 1,
                "showOnAxis": true,
                "lineThickness": 2,
                "lineAlpha": 0.5,
                "lineColor": v["lineColor"] != undefined ? v["lineColor"] : me.randomColorFunc(),
                "fillColors": v["fillColor"] != undefined ? v["fillColor"] : me.randomColorFunc(),
                "fillAlphas": 0.8,
                "valueField": me.props.categoryValue + (i + 1)
            });
            objectData[me.props.categoryValue + (i + 1)] = v[me.props.categoryValue];
        });
        normData.push(objectData);
        var newArr = {
            data: normData,
            graphsData: graphsData
        };
        return newArr;
    };
    /**
     * Return random color
     * @returns {string}
     */
    CylinderChart.prototype.randomColorFunc = function () {
        return Math.floor(Math.random() * 16777215).toString(16);
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string; representType: string; unit: string}}
     */
    CylinderChart.defaultProps = {
        height: 300,
        theme: "light",
        representType: "height",
        unit: "br"
    };
    return CylinderChart;
}(React.Component));
exports.default = CylinderChart;
//# sourceMappingURL=CylinderChart.js.map