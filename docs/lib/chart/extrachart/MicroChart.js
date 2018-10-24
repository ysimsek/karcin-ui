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
require("amcharts3/amcharts/funnel");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var MicroChart = /** @class */ (function (_super) {
    __extends(MicroChart, _super);
    function MicroChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    MicroChart.prototype.render = function () {
        var data = this.returnChart(this.props.chartType);
        return React.createElement(AmCharts.React, { options: data, style: { width: this.props.width + "px", height: this.props.height + "px" } });
    };
    /**
     * Return chart data initial
     * @param {string} type
     * @returns {{}}
     */
    MicroChart.prototype.returnChart = function (type) {
        var data = {};
        switch (type) {
            //linechart
            case "line":
                data = {
                    "type": "serial",
                    "theme": this.props.theme,
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 5,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [{
                            "valueField": this.props.categoryValue,
                            "bulletField": "bullet",
                            "showBalloon": false,
                            "lineColor": this.props.lineColor
                        }],
                    "valueAxes": [{
                            "gridAlpha": 0,
                            "axisAlpha": 0
                        }],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0,
                        "startOnAxis": true
                    }
                };
                break;
            //piechart
            case "pie":
                data = {
                    "type": "pie",
                    "dataProvider": this.props.data,
                    "labelField": this.props.categoryField,
                    "valueField": this.props.categoryValue,
                    "labelsEnabled": false,
                    "balloonText": "",
                    "valueText": undefined,
                    "radius": 9,
                    "outlineThickness": 1,
                    "colors": ["#" + this.randomColorFunc(), "#" + this.randomColorFunc()],
                    "startDuration": 0
                };
                break;
            //linechart
            case "line2":
                data = {
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 5,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [{
                            "valueField": this.props.categoryValue,
                            "showBalloon": false,
                            "lineColor": "#" + this.randomColorFunc(),
                            "negativeLineColor": "#" + this.randomColorFunc()
                        }],
                    "valueAxes": [{
                            "gridAlpha": 0,
                            "axisAlpha": 0,
                            "guides": [{
                                    "value": 0,
                                    "lineAlpha": 0.1
                                }]
                        }],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0,
                        "startOnAxis": true
                    }
                };
                break;
            //Thermochart
            case "therm":
                data = {
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "rotate": true,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [{
                            "valueField": this.props.categoryValue,
                            "type": "column",
                            "fillAlphas": 1,
                            "fillColors": ["#" + this.randomColorFunc(), "#" + this.randomColorFunc()],
                            "gradientOrientation": "horizontal",
                            "lineColor": "#FFFFFF",
                            "showBalloon": false
                        }],
                    "valueAxes": [{
                            "gridAlpha": 0,
                            "axisAlpha": 0,
                            "stackType": "100%",
                            "guides": [{
                                    "value": this.props.cutOffPoint,
                                    "lineAlpha": 1,
                                    "above": true
                                }]
                        }],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }
                };
                break;
            //BarChart
            case "bar":
                data = {
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [{
                            "valueField": this.props.categoryValue,
                            "type": "column",
                            "fillAlphas": 1,
                            "lineColor": "#" + this.randomColorFunc(),
                            "showBalloon": false
                        }],
                    "valueAxes": [{
                            "gridAlpha": 0,
                            "axisAlpha": 0
                        }],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }
                };
                break;
            //BarChart
            case "bar2":
                data = {
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [{
                            "valueField": this.props.categoryValue,
                            "type": "column",
                            "fillAlphas": 1,
                            "showBalloon": false,
                            "lineColor": "#" + this.randomColorFunc(),
                            "negativeFillColors": "#" + this.randomColorFunc(),
                            "negativeLineColor": "#" + this.randomColorFunc()
                        }],
                    "valueAxes": [{
                            "gridAlpha": 0,
                            "axisAlpha": 0
                        }],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }
                };
                break;
        }
        return data;
    };
    /**
     * return random color
     * @returns {string}
     */
    MicroChart.prototype.randomColorFunc = function () {
        return Math.floor(Math.random() * 16777215).toString(16);
    };
    /**
     * Initial props value
     * @type {{width: number; height: number; theme: string; lineColor: string}}
     */
    MicroChart.defaultProps = {
        width: 100,
        height: 25,
        theme: "light",
        lineColor: "#a9ec49"
    };
    return MicroChart;
}(React.Component));
exports.default = MicroChart;
//# sourceMappingURL=MicroChart.js.map