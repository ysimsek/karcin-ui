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
        "year": 1930,
        "italy": 4,
        "germany": 5,
        "uk": 1,
        "turkey": 10
    }, {
        "year": 1934,
        "italy": 4,
        "germany": 1,
        "uk": 6,
        "turkey": 3
    }, {
        "year": 1938,
        "italy": 2,
        "germany": 3,
        "uk": 1,
        "turkey": 4
    }, {
        "year": 1950,
        "italy": 3,
        "germany": 4,
        "uk": 1,
        "turkey": 10
    }, {
        "year": 1954,
        "italy": 5,
        "germany": 1,
        "uk": 2,
        "turkey": 6
    }, {
        "year": 1958,
        "italy": 3,
        "germany": 2,
        "uk": 1,
        "turkey": 10
    }, {
        "year": 1962,
        "italy": 1,
        "germany": 2,
        "uk": 3,
        "turkey": 8
    }, {
        "year": 1966,
        "italy": 2,
        "germany": 1,
        "uk": 5,
        "turkey": 1
    }, {
        "year": 1970,
        "italy": 3,
        "germany": 5,
        "uk": 2,
        "turkey": 6
    }, {
        "year": 1974,
        "italy": 4,
        "germany": 3,
        "uk": 6,
        "turkey": 1
    }, {
        "year": 1978,
        "italy": 1,
        "germany": 2,
        "uk": 4,
        "turkey": 10
    }];
var LineChart2Exam = /** @class */ (function (_super) {
    __extends(LineChart2Exam, _super);
    function LineChart2Exam(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showValues: [
                { title: "turkey", value: "turkey", description: "place taken by Turkey in ", color: "red" },
                { title: "italy", value: "italy", description: "place taken by Italy in ", color: "blue" },
                { title: "germany", value: "germany", description: "place taken by Germany in ", color: "#84b761" },
                { title: "uk", value: "uk", hidden: true, description: "place taken by UK in " },
            ]
        };
        return _this;
    }
    LineChart2Exam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 12 },
                React.createElement(karcin_ui_1.Panel, { title: "LineChart" },
                    React.createElement(karcin_ui_1.LineChart2, { data: data, height: 300, categoryField: "year", showValues: this.state.showValues }))),
            React.createElement(reactstrap_1.Col, { md: 12 },
                React.createElement(karcin_ui_1.Panel, { title: "LineChart" },
                    React.createElement(karcin_ui_1.LineChart2, { theme: "black", data: data, height: 300, categoryField: "year", showValues: this.state.showValues }))));
    };
    return LineChart2Exam;
}(React.Component));
exports.default = LineChart2Exam;
//# sourceMappingURL=LineChart2Exam.js.map