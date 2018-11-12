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
require("amcharts3/amcharts/gauge");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var SimleAreaChart = /** @class */ (function (_super) {
    __extends(SimleAreaChart, _super);
    function SimleAreaChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    SimleAreaChart.prototype.render = function () {
        var data = {
            "color": this.props.textColor,
            "type": "serial",
            "theme": this.props.theme,
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "rotate": this.props.inline,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "ignoreAxisWidth": true
                }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff",
                        "type": "smoothedLine"
                    },
                    "fillAlphas": 0.2,
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 5,
                    "fillColorsField": this.props.cutOffColor,
                    "lineColorField": this.props.cutOffColor,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "useLineColorForBulletBorder": true,
                    "valueField": this.props.categoryValue,
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                }],
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueZoomable": false,
                "valueLineAlpha": 0.5
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": this.props.formatting == "date" ? {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            } : { "gridPosition": "start" },
            "export": {
                "enabled": true
            },
            "dataProvider": this.props.data
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * @type {{theme: string; height: number; inline: boolean}}
     */
    SimleAreaChart.defaultProps = {
        theme: "none",
        height: 200,
        inline: false
    };
    return SimleAreaChart;
}(React.Component));
exports.default = SimleAreaChart;
//# sourceMappingURL=SimpleAreaChart.js.map