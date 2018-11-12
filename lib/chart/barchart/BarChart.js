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
var SimpleLineChart = /** @class */ (function (_super) {
    __extends(SimpleLineChart, _super);
    function SimpleLineChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleLineChart.prototype.render = function () {
        var data = {
            "color": this.props.textColor,
            "type": "serial",
            "theme": this.props.theme,
            "dataProvider": this.props.data,
            "startDuration": 2,
            "valueAxes": [{
                    "gridColor": "#ffffff",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                }],
            "rotate": this.props.inline,
            "gridAboveGraphs": true,
            "depth3D": (this.props.threeD == true ? 40 : null),
            "angle": (this.props.threeD == true ? 30 : null),
            "chartScrollbar": (this.props.scroll == true ? {} : undefined),
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillColorsField": this.props.colorField,
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "topRadius": (this.props.ovalColumn ? 1 : undefined),
                    "valueField": this.props.categoryValue
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueLineEnabled": this.props.valueLine,
                "valueLineBalloonEnabled": this.props.valueLine
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            },
            "export": {
                "enabled": true
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * @type {{data: any[]; theme: string; threeD: boolean; inline: boolean; height: number}}
     */
    SimpleLineChart.defaultProps = {
        data: [],
        theme: "light",
        threeD: false,
        inline: false,
        height: 200,
        scroll: false
    };
    return SimpleLineChart;
}(React.Component));
exports.default = SimpleLineChart;
//# sourceMappingURL=BarChart.js.map