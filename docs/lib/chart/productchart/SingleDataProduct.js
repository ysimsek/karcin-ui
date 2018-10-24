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
var reactstrap_1 = require("reactstrap");
var Panel_1 = require("../../functional/panel/Panel");
var FaIcon_1 = require("../../functional/faicon/FaIcon");
var SelectInput_1 = require("../../inputs/selectInput/SelectInput");
var PieChart_1 = require("../piechart/PieChart");
var LineChart_1 = require("../linechart/LineChart");
var SimpleAreaChart_1 = require("../areachart/SimpleAreaChart");
var BarChart_1 = require("../barchart/BarChart");
var TextInput_1 = require("../../inputs/TextInput");
var ColorInput_1 = require("../../inputs/ColorInput");
var CheckInput_1 = require("../../inputs/CheckInput");
var NumericInput_1 = require("../../inputs/NumericInput");
var PyramidChart_1 = require("../extrachart/PyramidChart");
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
var SingleDataProduct = /** @class */ (function (_super) {
    __extends(SingleDataProduct, _super);
    function SingleDataProduct(props) {
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
    SingleDataProduct.prototype.render = function () {
        return React.createElement("div", null, React.createElement(SelectInput_1.default, { name: "selectinput", items: items, label: "Chart Seçiniz", id: "id", value: "value", onChange: this.handleChange2.bind(this), activeItem: this.state.chartNumber }), React.createElement(reactstrap_1.Collapse, { isOpen: this.state.isOpenChart }, this.returnChartProperties(), this.renderChartProperties(), React.createElement(reactstrap_1.Button, { children: "Chart Üret", onClick: this.addNewChart.bind(this) }), React.createElement(reactstrap_1.Row, null, this.state.chart)));
    };
    //Chart özelliklerini return eder
    SingleDataProduct.prototype.returnChartProperties = function () {
        var name = "";
        var me = this;
        items.forEach(function (val, idx) {
            if (me.state.chartNumber == val.id) {
                name = val.name;
            }
        });
        return React.createElement(Panel_1.default, { color: "info" }, this.seperationOfChart(name));
    };
    SingleDataProduct.prototype.seperationOfChart = function (name) {
        var chart = [];
        if (name == "piechart") {
            chart = this.seperationOfPieChart(chart, name);
        }
        else if (name == "linechart") {
            chart = this.seperationOfLineChart(chart, name);
        }
        else if (name == "areachart") {
            chart = this.seperationOfAreaChart(chart, name);
        }
        else if (name == "barchart") {
            chart = this.seperationOfBarChart(chart, name);
        }
        else if (name == "pyramidchart") {
            chart = this.seperationOfPyramidChart(chart, name);
        }
        return React.createElement(reactstrap_1.Row, { className: "deepth" }, chart);
    };
    /////////////////1 PIECHART PROPERTY
    SingleDataProduct.prototype.seperationOfPieChart = function (chart, name) {
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].deepth, label: "Derinlik olsun mu?", name: "piedeepth", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].threeD, label: "3 Boyut ", name: "piethreeD", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(NumericInput_1.default, { ref: "numeric", name: "pienumericInput", value: this.state.pienumericInput, label: "İç Boşluk", onChange: this.handleChange.bind(this) })));
        return chart;
    };
    /////////////////2 LINECHART PROPERTY
    SingleDataProduct.prototype.seperationOfLineChart = function (chart, name) {
        chart.push(React.createElement(reactstrap_1.Col, { md: 3 }, React.createElement(CheckInput_1.default, { item: itemProps[name].formatting, label: "Formatting ", name: "lineformatting", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 3 }, React.createElement(ColorInput_1.default, { ref: "color", name: "colorInput", label: "Text Color", value: this.state.colorInput, onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 3 }, React.createElement(ColorInput_1.default, { ref: "color", name: "ncolorInput", label: "Negative Color", value: this.state.ncolorInput, onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 3 }, React.createElement(ColorInput_1.default, { ref: "color", name: "pcolorInput", label: "Positive Color", value: this.state.pcolorInput, onChange: this.handleChange.bind(this) })));
        return chart;
    };
    /////////////////3 AREACHART PROPERTY
    SingleDataProduct.prototype.seperationOfAreaChart = function (chart, name) {
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].formatting, label: "Formatting ", name: "areaformatting", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(ColorInput_1.default, { ref: "color", name: "areacolor", label: "Text Color", value: this.state.areacolor, onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].inline, label: "Inline ", name: "areainline", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        return chart;
    };
    /////////////////4 BARCHART PROPERTY
    SingleDataProduct.prototype.seperationOfBarChart = function (chart, name) {
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].inline, label: "Inline ", name: "barinline", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].valueLine, label: "Value Line ", name: "barvalueline", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].threeD, label: "3 Boyut ", name: "barthreeD", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].ovalColumn, label: "Oval Column ", name: "barovalcolumn", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(ColorInput_1.default, { ref: "barcolor", name: "barcolor", label: "Text Color", value: this.state.barcolor, onChange: this.handleChange.bind(this) })));
        return chart;
    };
    SingleDataProduct.prototype.seperationOfPyramidChart = function (chart, name) {
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(TextInput_1.default, { ref: "pyramidtextinput", name: "pyramidUnit", value: this.state.pyramidUnit, label: "Birimi", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].rotate, label: "Rota ", name: "pyramidrotate", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(CheckInput_1.default, { item: itemProps[name].threeD, label: "3 Boyut ", name: "pyramidthreeD", id: "id", value: "name", onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(ColorInput_1.default, { ref: "pyramidcolor", name: "pyramidcolor", label: "Text Color", value: this.state.pyramidcolor, onChange: this.handleChange.bind(this) })));
        chart.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(SelectInput_1.default, { name: "pyramidRepresentType", items: pyramidRepresentItems, label: "Type Seçiniz", id: "id", value: "value", onChange: this.handleChange.bind(this) })));
        return chart;
    };
    SingleDataProduct.prototype.renderChartProperties = function () {
        return React.createElement("div", null, React.createElement(FaIcon_1.default, { code: "fa-plus-square", size: "fa-2x", onClick: this.addNewData.bind(this) }), React.createElement(FaIcon_1.default, { code: "fa-database", size: "fa-2x", onClick: this.returnJSONElement.bind(this) }), this.renderTextInputElement());
    };
    SingleDataProduct.prototype.addNewData = function (e) {
        var arr = this.state.data;
        this.i = this.i + 1;
        this.j = this.j + 1;
        arr.push(this.i);
        this.setState({ data: arr });
    };
    SingleDataProduct.prototype.addNewChart = function () {
        var chart = this.state.chart;
        //todo : ilk önce inputlar doldurulmuş mu o kontrol edilecek
        if (this.state.chartNumber == 1) {
            chart.push(React.createElement(reactstrap_1.Col, { md: 6, xs: 12, lg: 4 }, React.createElement(PieChart_1.default, { data: this.returnJSONElement(), categoryField: "name", categoryValue: "value", height: 300, deepth: this.state.piedeepth != undefined ? (this.state.piedeepth.length > 0 ? true : false) : false, threeD: this.state.piethreeD != undefined ? (this.state.piethreeD.length > 0 ? true : false) : false, innerSize: this.state.pienumericInput })));
        }
        else if (this.state.chartNumber == 2) {
            chart.push(React.createElement(reactstrap_1.Col, { md: 6, xs: 12, lg: 4 }, React.createElement(LineChart_1.default, { data: this.returnJSONElement(), theme: "none", categoryField: "name", categoryValue: "value", formatting: this.state.lineformatting != undefined ? "date" : undefined, textColor: this.state.colorInput != undefined ? this.state.colorInput : undefined, negativeColor: this.state.ncolorInput != undefined ? this.state.ncolorInput : undefined, positiveColor: this.state.pcolorInput != undefined ? this.state.pcolorInput : undefined })));
        }
        else if (this.state.chartNumber == 3) {
            chart.push(React.createElement(reactstrap_1.Col, { md: 6, xs: 12, lg: 4 }, React.createElement(SimpleAreaChart_1.default, { data: this.returnJSONElement(), theme: "none", categoryField: "name", categoryValue: "value", formatting: this.state.areaformatting != undefined ? "date" : undefined, textColor: this.state.areacolor != undefined ? this.state.areacolor : undefined, inline: this.state.areainline != undefined ? (this.state.areainline.length > 0 ? true : false) : false, cutOffColor: "cutOffColor" })));
        }
        else if (this.state.chartNumber == 4) {
            chart.push(React.createElement(reactstrap_1.Col, { md: 6, xs: 12, lg: 4 }, React.createElement(BarChart_1.default, { data: this.returnJSONElement(), theme: "none", categoryField: "name", categoryValue: "value", inline: this.state.barinline != undefined ? (this.state.barinline.length > 0 ? true : false) : false, valueLine: this.state.barvalueline != undefined ? (this.state.barvalueline.length > 0 ? true : false) : false, threeD: this.state.barthreeD != undefined ? (this.state.barthreeD.length > 0 ? true : false) : false, ovalColumn: this.state.barovalcolumn != undefined ? (this.state.barovalcolumn.length > 0 ? true : false) : false, textColor: this.state.barcolor != undefined ? (this.state.barcolor) : null, colorField: "colorField" })));
        }
        else if (this.state.chartNumber == 5) {
            chart.push(React.createElement(reactstrap_1.Col, { md: 6, xs: 12, lg: 4 }, React.createElement(PyramidChart_1.default, { data: this.returnJSONElement(), categoryField: "value", categoryTitle: "name", rotate: this.state.pyramidrotate != undefined ? (this.state.pyramidrotate.length > 0 ? true : false) : false, unit: this.state.pyramidUnit != undefined ? this.state.pyramidUnit : "br", threeD: this.state.pyramidthreeD != undefined ? (this.state.pyramidthreeD.length > 0 ? true : false) : false, textColor: this.state.pyramidcolor != undefined ? (this.state.pyramidcolor) : null, representType: this.state.pyramidRepresentType != undefined ? this.state.pyramidRepresentType.name : null })));
        }
        ///////////////Input lar için state deki değerler silinecek
        var state = {};
        this.state.data.map(function (val, i) {
            state[i] = "";
            state[1000 + i] = "";
            state[2000 + i] = "";
            state[3000 + i] = "";
        });
        //////////////End Input values
        this.setState(state);
        this.setState({ chart: chart, data: [0] });
    };
    SingleDataProduct.prototype.renderTextInputElement = function () {
        var arr = [], me = this;
        this.state.data.forEach(function (val, idx) {
            arr.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(Panel_1.default, { title: (idx + 1) + ". Element" }, React.createElement(reactstrap_1.Row, null, me.renderNewInputElement(val, idx)))));
        });
        return React.createElement(reactstrap_1.Row, null, arr);
    };
    SingleDataProduct.prototype.renderNewInputElement = function (val, idx) {
        var arr = [];
        if (this.state.chartNumber == 3) { //areachart
            arr.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(TextInput_1.default, { key: idx, name: idx.toString(), label: "Category Field", value: this.state[idx], onChange: this.handleChangeText.bind(this) })));
            arr.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(TextInput_1.default, { key: idx + 1000, name: (idx + 1000).toString(), label: "Category Value", value: this.state[1000 + idx], onChange: this.handleChangeText.bind(this) })));
            arr.push(React.createElement(reactstrap_1.Col, { md: 4, className: "area-color" }, React.createElement(ColorInput_1.default, { key: idx + 10000, name: (idx + 2000).toString(), label: "Cut Off Color", value: this.state[2000 + idx], validations: { disabled: this.state.cutOffColorState[idx + 2000] == undefined ? true : false }, onChange: this.handleChangeText.bind(this) }), React.createElement(reactstrap_1.Button, { children: "+", name: (2000 + idx).toString(), outline: true, onClick: this.cutOfStateChange.bind(this) })));
        }
        else if (this.state.chartNumber == 4) { //barchart
            arr.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(TextInput_1.default, { key: idx, name: idx.toString(), label: "Category Field", value: this.state[idx], onChange: this.handleChangeText.bind(this) })));
            arr.push(React.createElement(reactstrap_1.Col, { md: 4 }, React.createElement(TextInput_1.default, { key: idx + 1000, name: (idx + 1000).toString(), label: "Category Value", value: this.state[1000 + idx], onChange: this.handleChangeText.bind(this) })));
            arr.push(React.createElement(reactstrap_1.Col, { md: 4, className: "area-color" }, React.createElement(ColorInput_1.default, { key: idx + 10000, name: (idx + 3000).toString(), label: "Cut Off Color", value: this.state[3000 + idx], validations: { disabled: this.state.barColorState[idx + 3000] == undefined ? true : false }, onChange: this.handleChangeText.bind(this) }), React.createElement(reactstrap_1.Button, { children: "+", name: (3000 + idx).toString(), outline: true, onClick: this.colorColumnBarChartChange.bind(this) })));
        }
        else {
            arr.push(React.createElement(reactstrap_1.Col, { md: 6 }, React.createElement(TextInput_1.default, { key: idx, name: idx.toString(), label: "Category Field", value: this.state[idx], onChange: this.handleChangeText.bind(this) })));
            arr.push(React.createElement(reactstrap_1.Col, { md: 6 }, React.createElement(TextInput_1.default, { key: idx + 10000, name: (idx + 1000).toString(), label: "Category Value", value: this.state[1000 + idx], onChange: this.handleChangeText.bind(this) })));
        }
        return arr;
    };
    SingleDataProduct.prototype.cutOfStateChange = function (e) {
        var state = {};
        state.cutOffColorState = {};
        state.cutOffColorState[e.target.name] = false;
        this.setState(state);
    };
    SingleDataProduct.prototype.colorColumnBarChartChange = function (e) {
        var state = {};
        state.barColorState = {};
        state.barColorState[e.target.name] = false;
        this.setState(state);
    };
    SingleDataProduct.prototype.returnJSONElement = function () {
        var jsonData = [];
        var me = this;
        this.state.data.map(function (val, i) {
            if (me.state.cutOffColorState[2000 + i] != undefined) {
                jsonData.push({ name: me.state[i], value: me.state[1000 + i], cutOffColor: me.state[2000 + i] });
            }
            else if (me.state.barColorState[3000 + i] != undefined) {
                jsonData.push({ name: me.state[i], value: me.state[1000 + i], colorField: me.state[3000 + i] });
            }
            else {
                jsonData.push({ name: me.state[i], value: me.state[1000 + i] });
            }
        });
        console.log(jsonData);
        return jsonData;
    };
    SingleDataProduct.prototype.handleChangeText = function (e) {
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    //SelectInput
    SingleDataProduct.prototype.handleChange2 = function (e) {
        this.setState({ chartNumber: e.target.value, isOpenChart: true });
    };
    SingleDataProduct.prototype.handleChange = function (e) {
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    };
    SingleDataProduct.defaultProps = {};
    return SingleDataProduct;
}(React.Component));
exports.default = SingleDataProduct;
//# sourceMappingURL=SingleDataProduct.js.map