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
var data = [{
        "country": "İstanbul",
        "litres": 501.9
    }, {
        "country": "Ankara",
        "litres": 301.9
    }, {
        "country": "Konya",
        "litres": 201.1
    }, {
        "country": "İzmir",
        "litres": 165.8
    }, {
        "country": "İzmit",
        "litres": 139.9
    }, {
        "country": "Trabzon",
        "litres": 128.3
    }, {
        "country": "Erzurum",
        "litres": 99
    }, {
        "country": "Hakkari",
        "litres": 60
    }, {
        "country": "Hatay",
        "litres": 50
    }];
var PieChartExam = /** @class */ (function (_super) {
    __extends(PieChartExam, _super);
    function PieChartExam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    PieChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "PieChart default none theme" },
                    React.createElement(karcin_ui_1.PieChart, { data: data, categoryField: "country", categoryValue: "litres", height: 300, describeList: true, report: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "PieChart İnner Size Example" },
                    React.createElement(karcin_ui_1.PieChart, { data: data, categoryField: "country", categoryValue: "litres", height: 300, innerSize: 40, describeList: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "PieChart deepth property" },
                    React.createElement(karcin_ui_1.PieChart, { data: data, categoryField: "country", categoryValue: "litres", height: 300, deepth: true }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "PieChart 3D property" },
                    React.createElement(karcin_ui_1.PieChart, { data: data, categoryField: "country", categoryValue: "litres", height: 300, threeD: true }))));
    };
    return PieChartExam;
}(React.Component));
exports.default = PieChartExam;
//# sourceMappingURL=PieChartExam.js.map