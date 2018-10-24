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
require("amcharts3/amcharts/funnel");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gauge");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var GaugeChart = /** @class */ (function (_super) {
    __extends(GaugeChart, _super);
    function GaugeChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaugeChart.prototype.render = function () {
        return this.props.percent == false ? this.getKmGauge() : this.getPercentGauge();
    };
    GaugeChart.prototype.getKmGauge = function () {
        var data = {
            "type": "gauge",
            "theme": "light",
            "growSlices": true,
            "axes": [{
                    "axisThickness": 0.1,
                    "axisAlpha": 0,
                    "tickAlpha": 0,
                    "valueInterval": 10,
                    "bands": [{
                            "color": "#f90000a1",
                            "endValue": this.props.endValue,
                            "innerRadius": "95%",
                            "startValue": this.props.startValue,
                            "gradientRatio": [0.5, 0, -0.5]
                        }],
                    "bottomText": "0 km/h",
                    "bottomTextYOffset": -20,
                    "endValue": 220
                }],
            "arrows": [{}],
            "export": {
                "enabled": true
            }
        };
        var chart = React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
        chart.props.options.arrows[0]["value"] = this.props.endValue < this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].bottomText = (this.props.endValue < this.props.value ? this.props.endValue : this.props.value) + " km/h";
        return chart;
    };
    GaugeChart.prototype.getPercentGauge = function () {
        var data = {
            "theme": "light",
            "type": "gauge",
            "axes": [{
                    "topTextFontSize": 20,
                    "topTextYOffset": 70,
                    "axisColor": "#31d6ea",
                    "axisThickness": 1,
                    "endValue": this.props.endValue,
                    "gridInside": true,
                    "inside": true,
                    "radius": "50%",
                    "valueInterval": 10,
                    "tickColor": "#67b7dc",
                    "startAngle": -90,
                    "endAngle": 90,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                            "color": "#0080ff",
                            "endValue": 100,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "gradientRatio": [0.5, 0, -0.5],
                            "startValue": 0
                        }, {
                            "color": "#3cd3a3",
                            "endValue": 0,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "gradientRatio": [0.5, 0, -0.5],
                            "startValue": 0
                        }]
                }],
            "arrows": [{
                    "alpha": 1,
                    "innerRadius": "35%",
                    "nailRadius": 0,
                    "radius": "170%"
                }]
        };
        var chart = React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
        chart.props.options.arrows[0]["value"] = this.props.endValue < this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].topText = (this.props.endValue < this.props.value ? this.props.endValue : this.props.value) + " %";
        chart.props.options.axes[0].bands[1].endValue = this.props.endValue < this.props.value ? this.props.endValue : this.props.value;
        return chart;
    };
    GaugeChart.defaultProps = {
        startValue: 0,
        endValue: 220,
        height: 400,
        value: 0,
        percent: false
    };
    return GaugeChart;
}(React.Component));
exports.default = GaugeChart;
//# sourceMappingURL=GaugeChart.js.map