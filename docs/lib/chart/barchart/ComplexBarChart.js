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
var ComplexBarChart = /** @class */ (function (_super) {
    __extends(ComplexBarChart, _super);
    function ComplexBarChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    ComplexBarChart.prototype.render = function () {
        var data = {
            "type": "serial",
            "theme": "none",
            color: this.props.textColor,
            "dataDateFormat": "YYYY-MM-DD",
            "dataProvider": this.props.data,
            "addClassNames": true,
            "startDuration": 1,
            "marginLeft": 0,
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "parseDates": true,
                "minPeriod": "DD",
                "autoGridCount": false,
                "gridCount": 50,
                "gridAlpha": 0.1,
                "gridColor": "#cccccc",
                "axisColor": "#cccccc",
                "dateFormats": [{
                        "period": 'DD',
                        "format": 'DD'
                    }, {
                        "period": 'WW',
                        "format": 'MMM DD'
                    }, {
                        "period": 'MM',
                        "format": 'MMM'
                    }, {
                        "period": 'YYYY',
                        "format": 'YYYY'
                    }]
            },
            "valueAxes": [{
                    "id": "a1",
                    "title": this.props.type[0].valueField,
                    "gridAlpha": 0,
                    "axisAlpha": 0
                }, {
                    "id": "a2",
                    "position": "right",
                    "gridAlpha": 0,
                    "axisAlpha": 0,
                    "labelsEnabled": false
                }, {
                    "id": "a3",
                    "title": "duration",
                    "position": "right",
                    "gridAlpha": 0,
                    "axisAlpha": 0,
                    "inside": true,
                    "duration": "mm",
                    "durationUnits": {
                        "DD": "d. ",
                        "hh": "h ",
                        "mm": "min",
                        "ss": ""
                    }
                }],
            "graphs": this.returnGrapsData(this.props.type),
            "chartScrollbar": (this.props.scroll == true ? {} : undefined),
            "chartCursor": {
                "zoomable": false,
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0,
                "valueBalloonsEnabled": false
            },
            "legend": {
                "bulletType": "round",
                "equalWidths": false,
                "valueWidth": 120,
                "useGraphSettings": true
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    ComplexBarChart.prototype.returnGrapsData = function (propsData) {
        var graphsData = [];
        var me = this;
        propsData.forEach(function (val, i) {
            if (val.type == "column") {
                graphsData.push({
                    "id": i,
                    "valueField": val.valueField,
                    "title": val.valueField,
                    "type": val.type,
                    "fillAlphas": 0.9,
                    "valueAxis": "a1",
                    "balloonText": "[[value]] miles",
                    "legendValueText": "[[value]] mi",
                    "legendPeriodValueText": "total: [[value.sum]] mi",
                    "lineColor": val.color,
                    "alphaField": "alpha"
                });
            }
            else if (val.type == "line") {
                graphsData.push({
                    "id": i,
                    "valueField": val.valueField,
                    "classNameField": "bulletClass" + i,
                    "title": val.valueField,
                    "type": val.type,
                    "valueAxis": "a2",
                    "lineColor": val.color,
                    "lineThickness": 1,
                    "legendValueText": "[[value]]/[[description]]",
                    "descriptionField": "townName",
                    "bullet": "round",
                    "bulletSizeField": "townSize",
                    "bulletBorderColor": "#786c56",
                    "bulletBorderAlpha": 1,
                    "bulletBorderThickness": 2,
                    "bulletColor": "#000000",
                    "labelText": "[[townName2]]",
                    "labelPosition": "right",
                    "balloonText": val.valueField + ":[[value]]",
                    "showBalloon": true,
                    "animationPlayed": true
                });
            }
        });
        return graphsData;
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string; barColor: string}}
     */
    ComplexBarChart.defaultProps = {
        height: 300,
        theme: "none",
        scroll: false
    };
    return ComplexBarChart;
}(React.Component));
exports.default = ComplexBarChart;
//# sourceMappingURL=ComplexBarChart.js.map