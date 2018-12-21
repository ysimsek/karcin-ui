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
var data = [{
        "title": "Website visits",
        "value": 300
    }, {
        "title": "Downloads",
        "value": 123
    }, {
        "title": "Requested price list",
        "value": 98
    }, {
        "title": "Contaced for more info",
        "value": 72
    }, {
        "title": "Purchased",
        "value": 35
    }, {
        "title": "Contacted for support",
        "value": 15
    }, {
        "title": "Purchased additional products",
        "value": 8
    }];
var PyramidChartExam = /** @class */ (function (_super) {
    __extends(PyramidChartExam, _super);
    function PyramidChartExam(props) {
        return _super.call(this, props) || this;
    }
    PyramidChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple PyramidChart" },
                    React.createElement(karcin_ui_1.PyramidChart, { data: data, categoryField: "value", rotate: true, unit: "br", categoryTitle: "title" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "3D PyramidChart" },
                    React.createElement(karcin_ui_1.PyramidChart, { data: data, threeD: true, rotate: true, unit: "mt", categoryField: "value", categoryTitle: "title" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple Reverse PyramidChart" },
                    React.createElement(karcin_ui_1.PyramidChart, { data: data, categoryField: "value", unit: "feet", categoryTitle: "title", theme: "dark", textColor: "red" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "RepresentType PyramidChart" },
                    React.createElement(karcin_ui_1.PyramidChart, { data: data, categoryField: "value", categoryTitle: "title", theme: "dark", unit: "kg/s", representType: "area", textColor: "red" }))));
    };
    return PyramidChartExam;
}(React.Component));
exports.default = PyramidChartExam;
//# sourceMappingURL=PyramidChartExam.js.map