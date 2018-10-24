"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("amcharts3/amcharts/amcharts");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("amcharts3/amcharts/serial");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var ComposedBarChart = /** @class */ (function (_super) {
    __extends(ComposedBarChart, _super);
    function ComposedBarChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComposedBarChart.prototype.render = function () {
        var graphs = this.returnGrapsData(this.props.data);
        var data = {
            "color": this.props.textColor,
            "theme": this.props.theme,
            "type": "serial",
            "dataProvider": this.props.data,
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "gridAlpha": 0.1,
                "axisAlpha": 0,
                "widthField": this.props.categoryValue,
                "gridPosition": "start"
            },
            "valueAxes": [{
                    "stackType": "100% stacked",
                    "gridAlpha": 0.1,
                    "unit": "%",
                    "axisAlpha": 0
                }],
            "graphs": graphs,
            "legend": {},
            "export": {
                "enabled": true
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    ComposedBarChart.prototype.returnGrapsData = function (propsData) {
        var graphsData = [];
        var me = this;
        propsData.forEach(function (v) {
            graphsData.push({
                "title": v.title,
                "labelText": "[[value]]",
                "valueField": v.valueField,
                "type": "column",
                "fillAlphas": 1
            });
        });
        return graphsData;
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string}}
     */
    ComposedBarChart.defaultProps = {
        height: 200,
        theme: "none"
    };
    return ComposedBarChart;
}(React.Component));
exports.default = ComposedBarChart;
//# sourceMappingURL=ComposedBarChart.js.map