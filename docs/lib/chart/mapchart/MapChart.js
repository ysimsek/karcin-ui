"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AmCharts = require("@amcharts/amcharts3-react");
require("amcharts3/amcharts/amcharts");
require("amcharts3/amcharts/serial");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("ammap3/ammap/ammap");
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var MapChart = /** @class */ (function (_super) {
    __extends(MapChart, _super);
    /**
     * initial values
     * @param props
     */
    function MapChart(props) {
        var _this = _super.call(this, props) || this;
        //chart için defaultMap
        _this.defaultMap = "usaLow";
        //Turkiye koordinatları
        _this.geo = { "country_code": "TR", "country_name": "Turkey" };
        //Seçilen harita değer içerisinde dönülecek
        _this.countryMaps = {
            "AF": ["afghanistanLow"],
            "AL": ["albaniaLow"],
            "DZ": ["algeriaLow"],
            "AD": ["andorraLow"],
            "AO": ["angolaLow"],
            "AR": ["argentinaLow"],
            "AM": ["armeniaLow"],
            "AU": ["australiaLow"],
            "AT": ["austriaLow"],
            "AZ": ["azerbaijanLow"],
            "BS": ["bahamasLow"],
            "BH": ["bahrainLow"],
            "BD": ["bangladeshLow"],
            "BY": ["belarusLow"],
            "BE": ["belgiumLow"],
            "BZ": ["belizeLow"],
            "BT": ["bhutanLow"],
            "BO": ["boliviaLow"],
            "BA": ["bosniaHerzegovinaCantonsLow"],
            "BW": ["botswanaLow"],
            "BR": ["brazilLow"],
            "BN": ["bruneiDarussalamLow"],
            "BG": ["bulgariaLow"],
            "BF": ["burkinaFasoLow"],
            "BI": ["burundiLow"],
            "KH": ["cambodiaLow"],
            "CM": ["cameroonLow"],
            "CA": ["canadaLow"],
            "CV": ["capeVerdeLow"],
            "CF": ["centralAfricanRepublicLow"],
            "TD": ["chadLow"],
            "CL": ["chileLow"],
            "CN": ["chinaLow"],
            "CO": ["colombiaLow"],
            "CD": ["congoDRLow"],
            "CG": ["congoLow"],
            "CR": ["costaRicaLow"],
            "HR": ["croatiaLow"],
            "CU": ["cubaLow"],
            "CY": ["cyprusLow"],
            "UN": ["cyprusNorthernCyprusLow"],
            "GB": ["unitedKingdomLow"],
            "CZ": ["czechRepublicLow"],
            "DK": ["denmarkLow"],
            "DJ": ["djiboutiLow"],
            "DO": ["dominicanRepublicLow"],
            "EC": ["ecuadorLow"],
            "EG": ["egyptLow"],
            "SV": ["elSalvadorLow"],
            "EE": ["estoniaLow"],
            "FI": ["finlandLow"],
            "FR": ["france2016Low"],
            "GE": ["georgiaLow"],
            "DE": ["germanyLow"],
            "GR": ["greeceLow"],
            "GT": ["guatemalaLow"],
            "GN": ["guineaLow"],
            "GY": ["guyanaLow"],
            "HT": ["haitiLow"],
            "HN": ["hondurasLow"],
            "HK": ["hongKongLow"],
            "HU": ["hungaryLow"],
            "GL": ["icelandLow"],
            "IS": ["icelandLow"],
            "IN": ["indiaLow"],
            "ID": ["indonesiaLow"],
            "MY": ["malaysiaLow"],
            "IR": ["iranLow"],
            "IQ": ["iraqLow"],
            "IE": ["irelandLow"],
            "IL": ["israelLow"],
            "PS": ["palestineLow"],
            "VA": ["italyLow"],
            "SM": ["sanMarinoLow"],
            "MT": ["italyLow"],
            "IT": ["italyLow"],
            "JM": ["jamaicaLow"],
            "JP": ["japanLow"],
            "KZ": ["kazakhstanLow"],
            "KE": ["kenyaLow"],
            "XK": ["kosovoLow"],
            "KG": ["kyrgyzstanLow"],
            "LA": ["laosLow"],
            "LV": ["latviaLow"],
            "LT": ["lithuaniaLow"],
            "LU": ["luxembourgLow"],
            "MK": ["macedoniaLow"],
            "ML": ["maliLow"],
            "MX": ["mexicoLow"],
            "MD": ["moldovaLow"],
            "MN": ["mongoliaLow"],
            "ME": ["montenegroLow"],
            "MA": ["moroccoLow"],
            "MM": ["myanmarLow"],
            "NP": ["nepalLow"],
            "NL": ["netherlandsLow"],
            "NZ": ["newZealandLow"],
            "NI": ["nicaraguaLow"],
            "NG": ["nigeriaLow"],
            "NO": ["norwayLow"],
            "AE": ["unitedArabEmiratesLow"],
            "OM": ["omanLow"],
            "PK": ["pakistanLow"],
            "PA": ["panamaLow"],
            "PY": ["paraguayLow"],
            "PE": ["peruLow"],
            "PH": ["philippinesLow"],
            "PL": ["polandLow"],
            "PT": ["portugalLow"],
            "PR": ["puertoRicoLow"],
            "US": ["usaLow"],
            "QA": ["qatarLow"],
            "RO": ["romaniaLow"],
            "RW": ["rwandaLow"],
            "SA": ["saudiArabiaLow"],
            "RS": ["serbiaLow"],
            "SG": ["singaporeLow"],
            "SK": ["slovakiaLow"],
            "SI": ["sloveniaLow"],
            "LS": ["southAfricaLow"],
            "ZA": ["southAfricaLow"],
            "KR": ["southKoreaLow"],
            "ES": ["spainLow"],
            "LK": ["sriLankaLow"],
            "SR": ["surinameLow"],
            "SE": ["swedenLow"],
            "CH": ["switzerlandLow"],
            "SY": ["syriaLow"],
            "TW": ["taiwanLow"],
            "TJ": ["tajikistanLow"],
            "TH": ["thailandLow"],
            "TR": ["turkeyLow"],
            "UG": ["ugandaLow"],
            "UA": ["ukraineLow"],
            "GG": ["unitedKingdomLow"],
            "JE": ["unitedKingdomLow"],
            "IM": ["unitedKingdomLow"],
            "UY": ["uruguayLow"],
            "UZ": ["uzbekistanLow"],
            "VE": ["venezuelaLow"],
            "VN": ["vietnamLow"],
            "YE": ["yemenLow"]
        };
        //Harita title almak için boş dizi tanımlanıyor
        _this.titles = [];
        _this.currentMap = _this.props.map;
        _this.balloonTextShow = "";
        //tüm şehir kodlarına erişmek için
        _this.allCentralKey = [];
        _this.mapData = {
            "type": "map",
            "theme": _this.props.theme,
            "colorSteps": _this.props.colorSteps,
            "dataProvider": {
                "mapURL": "amcharts/svg/" + _this.currentMap + ".svg",
                "getAreasFromMap": true,
                "zoomLevel": 0.9,
                "areas": []
            },
            "areasSettings": {
                "autoZoom": _this.props.zoom == true ? "true" : undefined,
                "balloonText": _this.balloonText()
            },
            "valueLegend": {
                "right": 10,
                "minValue": "little",
                "maxValue": "a lot!"
            },
            "zoomControl": {
                "minZoomLevel": 0.9
            },
            "titles": _this.titles,
            "listeners": [{
                    "event": "init",
                    "method": _this.updateHeatmap.bind(_this)
                },
                {
                    "event": "clickMapObject",
                    "method": _this.handleCursorChange.bind(_this)
                }]
        };
        //dizi içerisinde değer döndürmek için
        if (_this.countryMaps[_this.props.code] !== undefined) {
            _this.currentMap = _this.countryMaps[_this.geo.country_code][0];
            // add country title
            if (_this.geo.country_name) {
                _this.titles.push({
                    "text": _this.props.title
                });
            }
        }
        return _this;
    }
    MapChart.prototype.render = function () {
        return React.createElement(AmCharts.React, { refs: "amchartMap", style: { width: "100%", height: this.props.height }, options: this.mapData, ref: "turkmap" });
    };
    //Şehrin üzerine geldiğinde gösterilecek data
    MapChart.prototype.balloonText = function () {
        return "[[title]]: <strong>[[value]]</strong><br/>[[description]]";
    };
    /**
     * map ile gelen event gösterimi için değişken,
     * init de gösterilecek data ayıklanıyor
     * @type {*}
     */
    MapChart.prototype.updateHeatmap = function (event) {
        var map = event.chart;
        if (map.dataGenerated)
            return;
        if (map.dataProvider.areas.length === 0) {
            setTimeout(this.updateHeatmap, 100);
            return;
        }
        //Prop da Data varsa bu şekilde
        if (this.props.data != undefined) {
            var data = this.props.data;
            var me_1 = this;
            for (var i = 0; i < map.dataProvider.areas.length; i++) {
                //////////////allCentralKey///////////////////////////
                var returnObject = {
                    name: map.dataProvider.areas[i].enTitle,
                    id: map.dataProvider.areas[i].id
                };
                me_1.allCentralKey.push(returnObject);
                ///////////////////////////////////////////////////////
                data.forEach(function (val, idx) {
                    if (map.dataProvider.areas[i].id == val[me_1.props.idField]) {
                        map.dataProvider.areas[i].description = (me_1.props.rendererItems) ? me_1.props.rendererItems(val) : val[me_1.props.descrField];
                        map.dataProvider.areas[i].value = val[me_1.props.valueField] != undefined ? val[me_1.props.valueField] : NaN;
                    }
                });
            }
        }
        else { //Propsda data yoksa random sayı ata
            for (var i = 0; i < map.dataProvider.areas.length; i++) {
                map.dataProvider.areas[i].value = Math.round(Math.random() * 10000);
                //////////////allCentralKey///////////////////////////
                var returnObject = {
                    name: map.dataProvider.areas[i].enTitle,
                    id: map.dataProvider.areas[i].id
                };
                this.allCentralKey.push(returnObject);
                ///////////////////////////////////////////////////////
            }
        }
        map.dataGenerated = true;
        map.validateNow();
    };
    /**
     * Change Map Turkey
     * e = true (Object), a,b,c === false()
     * Harita onClick olduğunda şehirler
     * @param e
     * @param a
     * @param b
     * @param c
     */
    MapChart.prototype.handleCursorChange = function (e, value) {
        var me = this;
        if (me.props.clickOnChange) {
            e.centrals = me.allCentralKey;
            return me.props.clickOnChange(e);
        }
        else {
            //TODO
        }
    };
    MapChart.defaultProps = {
        theme: "light",
        colorSteps: 50,
        zoom: false
    };
    return MapChart;
}(React.Component));
exports.default = MapChart;
//# sourceMappingURL=MapChart.js.map