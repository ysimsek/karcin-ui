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
var reactstrap_1 = require("reactstrap");
var GaugeChartExam = /** @class */ (function (_super) {
    __extends(GaugeChartExam, _super);
    function GaugeChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            kmh: 0
        };
        return _this;
    }
    GaugeChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.GaugeChart, { type: "black", value: this.state.kmh })),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.GaugeChart, { value: this.state.kmh, percent: true, endValue: 100, height: 500 })));
    };
    GaugeChartExam.prototype.getKmh = function () {
        var _this = this;
        var a = setInterval(function () {
            if (_this.state.kmh == 220) {
                _this.getDecreasedKmh();
                clearTimeout(a);
            }
            else {
                _this.setState({ kmh: _this.state.kmh + 10 });
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
                _this.setState({ kmh: _this.state.kmh - 10 });
            }
        }, 200);
    };
    GaugeChartExam.prototype.componentDidMount = function () {
        this.getKmh();
        // this.getKmExam()
    };
    GaugeChartExam.prototype.getKmExam = function () {
        var ws = new WebSocket("ws://10.230.1.48:9292");
        var me = this;
        ws.onopen = function () {
            // Web Socket is connected, send data using send()
            console.log("Message is sent...");
            setInterval(function () {
                ws.send("data");
            }, 2000);
        };
        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            me.setState({ kmh: evt.data.split("|")[0] });
        };
    };
    return GaugeChartExam;
}(React.Component));
exports.default = GaugeChartExam;
//# sourceMappingURL=GaugeChartExam.js.map