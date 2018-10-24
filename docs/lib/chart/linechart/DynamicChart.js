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
var DynamicChart = /** @class */ (function (_super) {
    __extends(DynamicChart, _super);
    function DynamicChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {any}
     */
    DynamicChart.prototype.render = function () {
        return React.createElement(AmCharts.React, { options: this.props.data, style: { width: "100%", height: this.props.height + "px" } });
    };
    DynamicChart.defaultProps = {
        height: 200
    };
    return DynamicChart;
}(React.Component));
exports.default = DynamicChart;
//# sourceMappingURL=DynamicChart.js.map