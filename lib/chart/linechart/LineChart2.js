"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("amcharts3/amcharts/amcharts");
require("amcharts3/amcharts/serial");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var DynamicChart = /** @class */ (function (_super) {
    __extends(DynamicChart, _super);
    function DynamicChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    DynamicChart.prototype.render = function () {
        var data = {
            "type": "serial",
            "theme": this.props.theme,
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": this.props.data,
            "startDuration": 0.5,
            "graphs": this.getGraps(this.props.showValues),
            "chartCursor": {
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "fillAlpha": 0.05,
                "fillColor": "#000000",
                "gridAlpha": 0,
                "position": "top"
            },
            "export": {
                "enabled": false,
                "position": "bottom-right"
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    DynamicChart.prototype.getGraps = function (values) {
        var arr = [];
        values.map(function (res) {
            arr.push({
                "balloonText": res.description + "[[category]]: [[value]]",
                "bullet": "round",
                "hidden": res.hidden,
                "title": res.title,
                "valueField": res.value,
                "fillAlphas": 0,
                "lineColor": res.color
            });
        });
        return arr;
    };
    DynamicChart.defaultProps = {
        theme: "serial",
        height: 200
    };
    return DynamicChart;
}(React.Component));
exports.default = DynamicChart;
//# sourceMappingURL=LineChart2.js.map