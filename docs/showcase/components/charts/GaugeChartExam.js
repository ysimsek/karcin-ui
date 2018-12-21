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
var karcin_ui_1 = require("karcin-ui");
var reactstrap_1 = require("reactstrap");
var GaugeChartExam = /** @class */ (function (_super) {
    __extends(GaugeChartExam, _super);
    function GaugeChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            kmh: 50
        };
        return _this;
    }
    GaugeChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.GaugeChart, { type: "black", value: this.state.kmh, endValue: 100, interval: 2, color: "red", report: true })),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.GaugeChart, { value: this.state.kmh, percent: true, endValue: 100, height: 500 })));
    };
    GaugeChartExam.prototype.getKmh = function () {
        var _this = this;
        var a = setInterval(function () {
            if (_this.state.kmh == 100) {
                _this.getDecreasedKmh();
                clearTimeout(a);
            }
            else {
                // this.setState({kmh: this.state.kmh + 1})
            }
        }, 200);
    };
    GaugeChartExam.prototype.getDecreasedKmh = function () {
        var _this = this;
        var a = setInterval(function () {
            if (_this.state.kmh == 0) {
                _this.getKmh();
                clearTimeout(a);
            }
            else {
                _this.setState({ kmh: _this.state.kmh - 1 });
            }
        }, 200);
    };
    GaugeChartExam.prototype.componentDidMount = function () {
        this.getKmh();
    };
    return GaugeChartExam;
}(React.Component));
exports.default = GaugeChartExam;
//# sourceMappingURL=GaugeChartExam.js.map