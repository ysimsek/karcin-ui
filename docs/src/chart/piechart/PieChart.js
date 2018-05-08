"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
require("amcharts3/amcharts/pie");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var PieChart = /** @class */ (function (_super) {
    __extends(PieChart, _super);
    function PieChart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    PieChart.prototype.render = function () {
        var data = {
            "type": "pie",
            "gradientRatio": this.props.deepth == true ? [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5] : undefined,
            "theme": this.props.theme,
            "dataProvider": this.props.data,
            "valueField": this.props.categoryValue,
            "titleField": this.props.categoryField,
            "innerRadius": this.props.innerSize + "%",
            "depth3D": this.props.threeD == true ? 23 : 0,
            "balloon": {
                "fixedPosition": true
            },
            "export": {
                "enabled": true
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    PieChart.defaultProps = {
        theme: "none",
        height: 300,
        innerSize: 0,
        deepth: false,
        threeD: false
    };
    return PieChart;
}(React.Component));
exports.default = PieChart;
//# sourceMappingURL=PieChart.js.map