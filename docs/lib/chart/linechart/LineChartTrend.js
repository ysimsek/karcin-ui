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
require("amcharts3/amcharts/serial");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var LineChartTrend = /** @class */ (function (_super) {
    __extends(LineChartTrend, _super);
    function LineChartTrend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    LineChartTrend.prototype.render = function () {
        var data = {
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "dataDateFormat": "YYYY-MM-DD HH:NN",
            "dataProvider": this.props.data,
            "valueAxes": [{
                    "axisAlpha": 0,
                    "guides": [{
                            "fillAlpha": 0.1,
                            "fillColor": "#888888",
                            "lineAlpha": 0,
                            "toValue": 16,
                            "value": 10
                        }],
                    "position": "left",
                    "tickLength": 0
                }],
            "graphs": [{
                    "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
                    "bullet": "round",
                    "dashLength": 3,
                    "colorField": this.props.colorField,
                    "valueField": this.props.categoryValue
                }],
            "trendLines": [{
                    "finalDate": "2012-01-11 12",
                    "finalValue": 19,
                    "initialDate": "2012-01-02 12",
                    "initialValue": 10,
                    "lineColor": "#CC0000"
                }, {
                    "finalDate": "2012-01-22 12",
                    "finalValue": 10,
                    "initialDate": "2012-01-17 12",
                    "initialValue": 16,
                    "lineColor": "#CC0000"
                }],
            "chartScrollbar": {
                "scrollbarHeight": 2,
                "offset": -1,
                "backgroundAlpha": 0.1,
                "backgroundColor": "#888888",
                "selectedBackgroundColor": "#67b7dc",
                "selectedBackgroundAlpha": 1
            },
            "chartCursor": {
                "fullWidth": true,
                "valueLineEabled": true,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": 0.5,
                "cursorAlpha": 0
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "parseDates": true,
                "axisAlpha": 0,
                "gridAlpha": 0.1,
                "minorGridAlpha": 0.1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: "200px" } });
    };
    /**
     * Initial props value
     * @type {{theme: string; inline: boolean}}
     */
    LineChartTrend.defaultProps = {
        theme: "none",
        inline: false
    };
    return LineChartTrend;
}(React.Component));
exports.default = LineChartTrend;
//# sourceMappingURL=LineChartTrend.js.map