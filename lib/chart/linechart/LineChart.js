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
var LineChart = /** @class */ (function (_super) {
    __extends(LineChart, _super);
    function LineChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    LineChart.prototype.render = function () {
        var data = {
            "type": "serial",
            "theme": this.props.theme,
            "color": this.props.textColor,
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
            "chartScrollbar": (this.props.scroll == true ? {} : undefined),
            "graphs": [{
                    "id": "g1",
                    "useNegativeColorIfDown": true,
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff",
                        "type": "smoothedLine"
                    },
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 8,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "lineColor": this.props.positiveColor,
                    "negativeLineColor": this.props.negativeColor,
                    "useLineColorForBulletBorder": true,
                    "valueField": this.props.categoryValue,
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                }],
            "categoryField": this.props.categoryField,
            "categoryAxis": this.props.formatting == "date" ? {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            } : { "gridPosition": "start" },
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "export": {
                "enabled": false
            },
            "dataProvider": this.props.data
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * Initial props value
     * @type {{theme: string; inline: boolean}}
     */
    LineChart.defaultProps = {
        theme: "none",
        inline: false,
        height: 200
    };
    return LineChart;
}(React.Component));
exports.default = LineChart;
//# sourceMappingURL=LineChart.js.map