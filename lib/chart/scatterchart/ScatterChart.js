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
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("amcharts3/amcharts/xy");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var ScatterChart = /** @class */ (function (_super) {
    __extends(ScatterChart, _super);
    function ScatterChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    ScatterChart.prototype.render = function () {
        var newData = this.configData(this.props.data);
        var data = {
            "type": "xy",
            "color": this.props.textColor,
            "theme": this.props.theme,
            "balloon": {
                "fixedPosition": true,
            },
            "dataProvider": newData,
            "valueAxes": [{
                    "id": "ValueAxis-1",
                    "axisAlpha": 0
                }, {
                    "id": "ValueAxis-2",
                    "axisAlpha": 0,
                    "position": "bottom"
                }],
            "startDuration": 1.5,
            "graphs": this.graphsData(this.props.data),
            "marginLeft": 46,
            "marginBottom": 35,
            "export": {
                "enabled": false
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * return config data
     * @param getData
     * @returns {any[]}
     */
    ScatterChart.prototype.configData = function (getData) {
        var combineData = [];
        var newResultData = [];
        getData.forEach(function (value) {
            combineData.push(value.data);
        });
        for (var i = 0; i < combineData.length; i++) {
            for (var j = 0; j < combineData[i].length; j++) {
                newResultData[j] = this.combineObject(newResultData[j], combineData[i][j]);
            }
        }
        return newResultData;
    };
    /**
     * return graphs data in chart data
     * @param propsData
     * @returns {any[]}
     */
    ScatterChart.prototype.graphsData = function (propsData) {
        var returnData = [];
        var me = this;
        propsData.forEach(function (v) {
            returnData.push({
                "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
                "bullet": v.graph,
                "bulletBorderAlpha": 0.2,
                "bulletAlpha": 0.8,
                "lineAlpha": me.props.line == true ? 0.8 : 0,
                "fillAlphas": 0,
                "lineThickness": 2,
                "lineColor": v.color,
                "valueField": v.value,
                "xField": v.xCoor,
                "yField": v.yCoor,
                "maxBulletSize": 100
            });
        });
        return returnData;
    };
    /**
     * @param a
     * @param b
     * @returns {Object | any}
     */
    ScatterChart.prototype.combineObject = function (a, b) {
        var c = {};
        for (var key in a) {
            c[key] = a[key];
        }
        for (var key in b) {
            c[key] = b[key];
        }
        return c;
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string}}
     */
    ScatterChart.defaultProps = {
        height: 300,
        theme: "none",
    };
    return ScatterChart;
}(React.Component));
exports.default = ScatterChart;
//# sourceMappingURL=ScatterChart.js.map