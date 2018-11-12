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
var SingleDataProduct_1 = require("./SingleDataProduct");
var items = require("./model/SelectChartModel.json").model;
var itemProps = require("./model/ChartPropsModel.json");
var pyramidRepresentItems = [
    {
        id: 1, name: "area", value: "area"
    },
    {
        id: 1, name: "height", value: "height"
    },
];
var ProductChart = /** @class */ (function (_super) {
    __extends(ProductChart, _super);
    function ProductChart(props) {
        var _this = _super.call(this, props) || this;
        _this.i = 0;
        _this.j = 1000;
        _this.pieModel = {
            name: "pie" + _this.i
        };
        _this.state = {
            selectinput: "",
            chartNumber: 0,
            isOpenChart: false,
            number: "0",
            data: [0],
            chart: [],
            pienumericInput: 0,
            cutOffColorState: true,
            barColorState: {}
        };
        return _this;
    }
    ProductChart.prototype.render = function () {
        var component = [];
        if (this.props.map != true) {
            component.push(React.createElement(SingleDataProduct_1.default, null));
        }
        else {
        }
        return component;
    };
    ProductChart.prototype.UNSAFE_componentWillMount = function () {
    };
    ProductChart.defaultProps = {};
    return ProductChart;
}(React.Component));
exports.default = ProductChart;
//# sourceMappingURL=ProductChart.js.map