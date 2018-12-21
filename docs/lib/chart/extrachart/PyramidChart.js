"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var PyramidChart = /** @class */ (function (_super) {
    __extends(PyramidChart, _super);
    function PyramidChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    PyramidChart.prototype.render = function () {
        var data = {
            color: this.props.textColor,
            "type": "funnel",
            "theme": this.props.theme,
            "dataProvider": this.props.data,
            "balloon": {
                "fixedPosition": true
            },
            "valueField": this.props.categoryField,
            "titleField": this.props.categoryTitle,
            "marginRight": 240,
            "depth3D": (this.props.threeD == true ? 100 : null),
            "angle": (this.props.threeD == true ? 40 : null),
            "marginLeft": 50,
            "startX": -500,
            "labelPosition": "right",
            "rotate": this.props.rotate == true ? true : false,
            "outlineThickness": 2,
            "outlineAlpha": 1,
            "outlineColor": "#FFFFFF",
            "valueRepresents": this.props.representType,
            "balloonText": "[[" + this.props.categoryTitle + "]]: [[" + this.props.categoryField + "]]" + this.props.unit + "[[description]]",
            "export": {
                "enabled": false
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string; representType: string; unit: string}}
     */
    PyramidChart.defaultProps = {
        height: 300,
        theme: "light",
        representType: "height",
        unit: "br"
    };
    return PyramidChart;
}(React.Component));
exports.default = PyramidChart;
//# sourceMappingURL=PyramidChart.js.map