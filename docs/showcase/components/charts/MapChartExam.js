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
var turkeyMapData = [
    { id: "TR-01", name: "Adana", value: "Pamuk, Adana Kebabı, ÇukurOva", point: 700 },
    { id: "TR-02", name: "Adıyaman", value: "Besni Üzümü, Nemrud Dağı, Kahta Çayı", point: 170 },
    { id: "TR-03", name: "Afyon", value: "Kaymak, Haşhaş, Sucuk, Mermer", point: 370 },
    { id: "TR-04", name: "Ağrı", value: "Ağrı Dağı, İshak Paşa Sarayı, Balık Gölü", point: 377 },
    { id: "TR-05", name: "Amasya", value: "Ihlara Vadisi, Eğri Minare, Yılanlı Kilise", point: 533 },
    { id: "TR-06", name: "Ankara", value: "Anıtkabir, Dağ Keçisi, Tiftik Keçisi, Hacı Bayram Veli Camisi", point: 1133 },
    { id: "TR-07", name: "Antalya", value: "Düden-Kurşunlu-Manavgat Şelaleleri, Dim-Damlataş-Karain Mağaraları, Olimpos-Beydağları-Köprülü Kanyon Milli Parkları", point: 243 },
    { id: "TR-08", name: "Artvin", value: "Boğa Güreşleri, Barhal Klisesi, Çoruh Nehri", point: 612 },
    { id: "TR-09", name: "Aydın", value: "Deve Güreşleri, Büyük Menderes Nehri, Afrodisias-Milet-Didim-Priene Antik Kentleri, Aydın İnciri", point: 962 },
    { id: "TR-10", name: "Balıkesir", value: "Susurluk Ayranı ve Tostu, Manyas Gölü ve Manyas Yoğurdu, Zeytin, Höşmerim Tatlısı", point: 521 },
    { id: "TR-34", name: "İstanbul", value: "İstanbul Boğazı, Yerebatan Sarnıcı, Ayasofya, SultanAhmet Meydanı", point: 628 },
];
var MapChartExam = /** @class */ (function (_super) {
    __extends(MapChartExam, _super);
    function MapChartExam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapChartExam.prototype.rendererItems = function (data) {
        return data.value;
    };
    MapChartExam.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "MapChart" },
                    React.createElement(karcin_ui_1.MapChart, { height: 400, data: turkeyMapData, idField: "id", valueField: "point", descrField: "value", zoom: true, map: "turkeyLow", code: "TR", rendererItems: this.rendererItems, title: "Turkey" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(karcin_ui_1.Panel, { title: "MapChart" },
                    React.createElement(karcin_ui_1.MapChart, { title: "Brazil", map: "brazilHigh", theme: "none", height: 400, code: "BR", colorSteps: 20 }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "MapChart" },
                    React.createElement(karcin_ui_1.MapChart, { title: "Egypt", map: "egyptHigh", code: "EG", theme: "pattern", height: 400, colorSteps: 20 }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "MapChart" },
                    React.createElement(karcin_ui_1.MapChart, { title: "Haiti", map: "haitiHigh", code: "HT", theme: "chalk", height: 400, colorSteps: 20 }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "MapChart" },
                    React.createElement(karcin_ui_1.MapChart, { title: "Bahama", map: "bahamasHigh", code: "BS", clickOnChange: this.handleChange.bind(this), height: 400, colorSteps: 20 }))));
    };
    MapChartExam.prototype.handleChange = function (e) {
        console.log(e);
    };
    return MapChartExam;
}(React.Component));
exports.default = MapChartExam;
//# sourceMappingURL=MapChartExam.js.map