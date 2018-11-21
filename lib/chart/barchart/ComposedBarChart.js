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
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gantt");
require("amcharts3/amcharts/serial");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var ComposedBarChart = /** @class */ (function (_super) {
    __extends(ComposedBarChart, _super);
    function ComposedBarChart(props) {
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
    ComposedBarChart.prototype.createMenus = function (menu) {
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
    ComposedBarChart.prototype.seperateType = function (type) {
        return this.defaultDownloadFunction[type];
    };
    ComposedBarChart.prototype.getRandomNumber = function () {
        var nmb = Math.floor(Math.random() * 9999999999999);
        return nmb;
    };
    ComposedBarChart.prototype.getPNG = function () {
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
    ComposedBarChart.prototype.getJPG = function () {
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
    ComposedBarChart.prototype.getCSV = function () {
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
    ComposedBarChart.prototype.getXLSX = function () {
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
    ComposedBarChart.prototype.getSVG = function () {
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
    ComposedBarChart.prototype.getJSON = function () {
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
    ComposedBarChart.prototype.defaultMenus = function () {
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
    ComposedBarChart.prototype.render = function () {
        var graphs = this.returnGrapsData(this.props.data);
        var data = {
            "color": this.props.textColor,
            "theme": this.props.theme,
            "type": "serial",
            "dataProvider": this.props.data,
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "gridAlpha": 0.1,
                "axisAlpha": 0,
                "widthField": this.props.categoryValue,
                "gridPosition": "start"
            },
            "valueAxes": [{
                    "stackType": "100% stacked",
                    "gridAlpha": 0.1,
                    "unit": "%",
                    "axisAlpha": 0
                }],
            "graphs": graphs,
            "legend": {},
            "export": {
                "enabled": this.props.report,
                "menu": this.state.menu
            }
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    ComposedBarChart.prototype.returnGrapsData = function (propsData) {
        var graphsData = [];
        var me = this;
        propsData.forEach(function (v) {
            graphsData.push({
                "title": v.title,
                "labelText": "[[value]]",
                "valueField": v.valueField,
                "type": "column",
                "fillAlphas": 1
            });
        });
        return graphsData;
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string}}
     */
    ComposedBarChart.defaultProps = {
        height: 200,
        theme: "none",
        report: false
    };
    return ComposedBarChart;
}(React.Component));
exports.default = ComposedBarChart;
//# sourceMappingURL=ComposedBarChart.js.map