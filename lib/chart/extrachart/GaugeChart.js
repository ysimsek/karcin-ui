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
require("amcharts3/amcharts/amcharts");
require("amcharts3/amcharts/funnel");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gauge");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var GaugeChart = /** @class */ (function (_super) {
    __extends(GaugeChart, _super);
    function GaugeChart(props) {
        var _this_1 = _super.call(this, props) || this;
        // Dosya default isimleri için kullanılır
        _this_1.defaultDownloadType = {
            "svg": "SVG",
            "png": "PNG",
            "jpg": "JPG",
            "csv": "CSV",
            "xlsx": "XLSX",
            "json": "JSON"
        };
        //Dosya default fonksiyonları için kullanılır
        _this_1.defaultDownloadFunction = {
            "svg": _this_1.getSVG(),
            "png": _this_1.getPNG(),
            "jpg": _this_1.getJPG(),
            "csv": _this_1.getCSV(),
            "xlsx": _this_1.getXLSX(),
            "json": _this_1.getJSON()
        };
        _this_1.reportName = props.reportName != undefined ? _this_1.props.reportName : "";
        _this_1.state = {
            menu: props.menu != undefined ? _this_1.createMenus(props.menu) : _this_1.defaultMenus()
        };
        return _this_1;
    }
    GaugeChart.prototype.createMenus = function (menu) {
        var _this_1 = this;
        var arr = [];
        var me = this;
        try {
            menu.map(function (elm, idx) {
                var childArr = {};
                childArr.class = elm.type == "download" ? "export-main" : "export-drawing";
                childArr.action = childArr.class == "export-drawing" ? "draw" : null;
                childArr.menu = [];
                if (elm.child != undefined) {
                    elm.child.map(function (subMenu, id) {
                        var subChildMenu = {};
                        subChildMenu.label = subMenu.label != undefined ? subMenu.label : me.defaultDownloadType[subMenu.type];
                        subChildMenu.click = subMenu.callBack != undefined ? subMenu.callBack : _this_1.seperateType(subMenu.type);
                        if (subMenu.type == undefined) {
                            subChildMenu.label = "UNDEFINED TYPE";
                        }
                        childArr.menu.push(subChildMenu);
                    });
                }
                arr.push(childArr);
            });
            return arr;
        }
        catch (e) {
            console.log(e);
        }
        return null;
    };
    GaugeChart.prototype.seperateType = function (type) {
        return this.defaultDownloadFunction[type];
    };
    GaugeChart.prototype.getRandomNumber = function () {
        var nmb = Math.floor(Math.random() * 9999999999999);
        return nmb;
    };
    GaugeChart.prototype.getPNG = function () {
        var name = this.reportName + this.getRandomNumber();
        return function () {
            var me = this;
            me.capture({}, function () {
                me.toPNG({}, function (data) {
                    me.download(data, "image/jpg", name + ".png");
                });
            });
        };
    };
    GaugeChart.prototype.getJPG = function () {
        var name = this.reportName + this.getRandomNumber();
        return function () {
            var me = this;
            me.capture({}, function () {
                me.toJPG({}, function (data) {
                    me.download(data, "image/png", name + ".jpg");
                });
            });
        };
    };
    GaugeChart.prototype.getCSV = function () {
        var name = this.reportName + this.getRandomNumber();
        return function () {
            var me = this;
            me.capture({}, function () {
                me.toCSV({}, function (data) {
                    me.download(data, "image/csv", name + ".csv");
                });
            });
        };
    };
    GaugeChart.prototype.getXLSX = function () {
        var name = this.reportName + this.getRandomNumber();
        return function () {
            var me = this;
            me.capture({}, function () {
                me.toXLSX({}, function (data) {
                    me.download(data, "file/xlsx", name + ".xlsx");
                });
            });
        };
    };
    GaugeChart.prototype.getSVG = function () {
        var name = this.reportName + this.getRandomNumber();
        return function () {
            var me = this;
            me.capture({}, function () {
                me.toSVG({}, function (data) {
                    me.download(data, "file/svg", name + ".svg");
                });
            });
        };
    };
    GaugeChart.prototype.getJSON = function () {
        var name = this.reportName + this.getRandomNumber();
        return function () {
            var me = this;
            me.capture({}, function () {
                me.toJSON({}, function (data) {
                    me.download(data, "file/json", name + ".json");
                });
            });
        };
    };
    GaugeChart.prototype.defaultMenus = function () {
        var _this = this;
        return [{
                "class": "export-main",
                "menu": [{
                        "label": "İndir",
                        "menu": [{
                                //png,jpg,csv,xlsx,svg,json
                                // pdf,blob,canvas,array,Image(base64)
                                label: "PNG",
                                click: this.getPNG()
                            },
                            {
                                label: "JPG",
                                click: this.getJPG()
                            },
                            {
                                label: "CSV",
                                click: this.getCSV()
                            },
                            {
                                label: "XLSX",
                                click: this.getXLSX()
                            },
                            {
                                label: "SVG",
                                click: this.getSVG()
                            },
                            {
                                label: "JSON",
                                click: this.getJSON()
                            },
                        ]
                    }, {
                        "label": "Çizim Yap",
                        "action": "draw",
                        "menu": [{
                                "class": "export-drawing",
                                "menu": [{
                                        label: "Size ...",
                                        action: "draw.widths",
                                        widths: [5, 20, 30] // replaces the default choice
                                    }, {
                                        "label": "Edit",
                                        "menu": ["UNDO", "REDO", "CANCEL"]
                                    }, {
                                        "label": "Save",
                                        "format": "PNG"
                                    }]
                            }]
                    }]
            }];
    };
    GaugeChart.prototype.render = function () {
        return this.props.percent == false ? this.getKmGauge() : this.getPercentGauge();
    };
    GaugeChart.prototype.getKmGauge = function () {
        var data = {
            "type": "gauge",
            "theme": "light",
            "growSlices": true,
            "axes": [{
                    "axisThickness": 1,
                    "axisAlpha": 0.2,
                    "tickAlpha": 0.2,
                    "valueInterval": this.props.interval,
                    "bands": [{
                            "color": this.props.color != undefined ? this.props.color : "#84b761",
                            "startValue": this.props.startValue,
                            "endValue": this.props.endValue,
                            "innerRadius": "95%"
                        }],
                    "bottomText": "0 " + this.props.unit,
                    "bottomTextYOffset": -80,
                    "bottomTextFontSize": 20,
                    "endValue": this.props.endValue
                }],
            "arrows": [{
                    value: this.props.endValue < this.props.value ? this.props.endValue : this.props.value,
                }],
            startEffect: "easeOutSine",
            tapToActivate: true,
            autoResize: true,
            autoDisplay: true,
            autoMarginOffset: 0,
            accessible: true,
            addClassNames: false,
            addCodeCredits: true,
            adjustSize: true,
            previousHeight: 0,
            previousWidth: 0,
            processCount: 1000,
            processTimeout: 0,
            product: "amcharts",
            startDuration: 1,
            svgIcons: true,
            "export": {
                "enabled": this.props.report,
                "menu": this.state.menu
            }
        };
        var chart = React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
        chart.props.options.arrows[0]["value"] = this.props.endValue < this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].bottomText = (this.props.endValue < this.props.value ? this.props.endValue : this.props.value) + " " + this.props.unit;
        return chart;
    };
    GaugeChart.prototype.getPercentGauge = function () {
        var data = {
            "theme": "light",
            "type": "gauge",
            "export": {
                "enabled": this.props.report,
                "menu": this.state.menu
            },
            "axes": [{
                    "topTextFontSize": 20,
                    "topTextYOffset": 70,
                    "axisColor": "#31d6ea",
                    "axisThickness": 1,
                    "endValue": this.props.endValue,
                    "gridInside": true,
                    "inside": true,
                    "radius": "50%",
                    "valueInterval": 10,
                    "tickColor": "#67b7dc",
                    "startAngle": -90,
                    "endAngle": 90,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                            "color": "#0080ff",
                            "endValue": 100,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "gradientRatio": [0.5, 0, -0.5],
                            "startValue": 0
                        }, {
                            "color": "#3cd3a3",
                            "endValue": 0,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "gradientRatio": [0.5, 0, -0.5],
                            "startValue": 0
                        }]
                }],
            "arrows": [{
                    "alpha": 1,
                    "innerRadius": "35%",
                    "nailRadius": 0,
                    "radius": "170%"
                }]
        };
        var chart = React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
        chart.props.options.arrows[0]["value"] = this.props.endValue < this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].topText = (this.props.endValue < this.props.value ? this.props.endValue : this.props.value) + " %";
        chart.props.options.axes[0].bands[1].endValue = this.props.endValue < this.props.value ? this.props.endValue : this.props.value;
        return chart;
    };
    GaugeChart.defaultProps = {
        startValue: 0,
        endValue: 220,
        height: 400,
        value: 0,
        percent: false,
        interval: 20,
        unit: "km/h"
    };
    return GaugeChart;
}(React.Component));
exports.default = GaugeChart;
//# sourceMappingURL=GaugeChart.js.map