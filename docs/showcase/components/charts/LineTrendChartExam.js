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
var karcin_ui_1 = require("karcin-ui");
var LineTrendChartExam = /** @class */ (function (_super) {
    __extends(LineTrendChartExam, _super);
    function LineTrendChartExam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineTrendChartExam.prototype.render = function () {
        return React.createElement(karcin_ui_1.Panel, { title: "Line Changes Chart" },
            React.createElement(karcin_ui_1.LineChartTrend, null));
    };
    return LineTrendChartExam;
}(React.Component));
exports.default = LineTrendChartExam;
//# sourceMappingURL=LineTrendChartExam.js.map