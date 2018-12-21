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
var reactstrap_1 = require("reactstrap");
var karcin_ui_1 = require("karcin-ui");
var dataLine = [{
        "day": 1,
        "value": 100
    }, {
        "day": 2,
        "value": 84
    }, {
        "day": 3,
        "value": 167
    }, {
        "day": 4,
        "value": 102
    }, {
        "day": 5,
        "value": -11
    }, {
        "day": 6,
        "value": -53
    }, {
        "day": 7,
        "value": 118
    }, {
        "day": 8,
        "value": 113
    }, {
        "day": 9,
        "value": 122
    }, {
        "day": 10,
        "value": 125,
        "bullet": "round"
    }];
var dataPie = [{
        "x": 1,
        "value": 29
    }, {
        "x": 2,
        "value": 71
    }];
var dataTerm = [{
        "x": 1,
        "y": 100
    }];
var dataBar = [{
        "day": 1,
        "value": -5
    }, {
        "day": 2,
        "value": 3
    }, {
        "day": 3,
        "value": 7
    }, {
        "day": 4,
        "value": -3
    }, {
        "day": 5,
        "value": 3
    }, {
        "day": 6,
        "value": 4
    }, {
        "day": 7,
        "value": 6
    }, {
        "day": 8,
        "value": -3
    }, {
        "day": 9,
        "value": -2
    }, {
        "day": 10,
        "value": 6
    }];
var MicroChartExam = /** @class */ (function (_super) {
    __extends(MicroChartExam, _super);
    function MicroChartExam(props) {
        return _super.call(this, props) || this;
    }
    MicroChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(karcin_ui_1.Panel, { title: "MicroChart Examples" },
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "line", data: dataLine, categoryValue: "value", categoryField: "day" }),
                    React.createElement("br", null),
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "line2", data: dataLine, categoryValue: "value", categoryField: "day" }),
                    '  ',
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "pie", data: dataPie, categoryValue: "value", categoryField: "x" }),
                    React.createElement("br", null),
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "therm", data: dataTerm, categoryValue: "y", categoryField: "x", cutOffPoint: 66 }),
                    '  ',
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "therm", data: dataTerm, categoryValue: "y", categoryField: "x", cutOffPoint: 36 }),
                    React.createElement("br", null),
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "bar", data: dataBar, categoryValue: "value", categoryField: "day" }),
                    '  ',
                    React.createElement(karcin_ui_1.MicroChart, { chartType: "bar2", data: dataBar, categoryValue: "value", categoryField: "day" }),
                    React.createElement("br", null))));
    };
    return MicroChartExam;
}(React.Component));
exports.default = MicroChartExam;
//# sourceMappingURL=MicroChartExam.js.map