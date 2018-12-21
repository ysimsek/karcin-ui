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
var ComplexBarChart = /** @class */ (function (_super) {
    __extends(ComplexBarChart, _super);
    function ComplexBarChart(props) {
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
    ComplexBarChart.prototype.createMenus = function (menu) {
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
    ComplexBarChart.prototype.seperateType = function (type) {
        return this.defaultDownloadFunction[type];
    };
    ComplexBarChart.prototype.getRandomNumber = function () {
        var nmb = Math.floor(Math.random() * 9999999999999);
        return nmb;
    };
    ComplexBarChart.prototype.getPNG = function () {
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
    ComplexBarChart.prototype.getJPG = function () {
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
    ComplexBarChart.prototype.getCSV = function () {
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
    ComplexBarChart.prototype.getXLSX = function () {
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
    ComplexBarChart.prototype.getSVG = function () {
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
    ComplexBarChart.prototype.getJSON = function () {
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
    ComplexBarChart.prototype.defaultMenus = function () {
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
    /**
     * @returns {any}
     */
    ComplexBarChart.prototype.render = function () {
        var data = {
            "type": "serial",
            "theme": "none",
            color: this.props.textColor,
            "dataDateFormat": "YYYY-MM-DD",
            "dataProvider": this.props.data,
            "addClassNames": true,
            "startDuration": 1,
            "marginLeft": 0,
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "parseDates": true,
                "minPeriod": "DD",
                "autoGridCount": false,
                "gridCount": 50,
                "gridAlpha": 0.1,
                "gridColor": "#cccccc",
                "axisColor": "#cccccc",
                "dateFormats": [{
                        "period": 'DD',
                        "format": 'DD'
                    }, {
                        "period": 'WW',
                        "format": 'MMM DD'
                    }, {
                        "period": 'MM',
                        "format": 'MMM'
                    }, {
                        "period": 'YYYY',
                        "format": 'YYYY'
                    }]
            },
            "valueAxes": [{
                    "id": "a1",
                    "title": this.props.type[0].valueField,
                    "gridAlpha": 0,
                    "axisAlpha": 0
                }, {
                    "id": "a2",
                    "position": "right",
                    "gridAlpha": 0,
                    "axisAlpha": 0,
                    "labelsEnabled": false
                }, {
                    "id": "a3",
                    "title": "duration",
                    "position": "right",
                    "gridAlpha": 0,
                    "axisAlpha": 0,
                    "inside": true,
                    "duration": "mm",
                    "durationUnits": {
                        "DD": "d. ",
                        "hh": "h ",
                        "mm": "min",
                        "ss": ""
                    }
                }],
            "graphs": this.returnGrapsData(this.props.type),
            "chartScrollbar": (this.props.scroll == true ? {} : undefined),
            "chartCursor": {
                "zoomable": false,
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0,
                "valueBalloonsEnabled": false
            },
            "legend": {
                "bulletType": "round",
                "equalWidths": false,
                "valueWidth": 120,
                "useGraphSettings": true
            },
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
    ComplexBarChart.prototype.returnGrapsData = function (propsData) {
        var graphsData = [];
        var me = this;
        propsData.forEach(function (val, i) {
            if (val.type == "column") {
                graphsData.push({
                    "id": i,
                    "valueField": val.valueField,
                    "title": val.valueField,
                    "type": val.type,
                    "fillAlphas": 0.9,
                    "valueAxis": "a1",
                    "balloonText": "[[value]] miles",
                    "legendValueText": "[[value]] mi",
                    "legendPeriodValueText": "total: [[value.sum]] mi",
                    "lineColor": val.color,
                    "alphaField": "alpha"
                });
            }
            else if (val.type == "line") {
                graphsData.push({
                    "id": i,
                    "valueField": val.valueField,
                    "classNameField": "bulletClass" + i,
                    "title": val.valueField,
                    "type": val.type,
                    "valueAxis": "a2",
                    "lineColor": val.color,
                    "lineThickness": 1,
                    "legendValueText": "[[value]]/[[description]]",
                    "descriptionField": "townName",
                    "bullet": "round",
                    "bulletSizeField": "townSize",
                    "bulletBorderColor": "#786c56",
                    "bulletBorderAlpha": 1,
                    "bulletBorderThickness": 2,
                    "bulletColor": "#000000",
                    "labelText": "[[townName2]]",
                    "labelPosition": "right",
                    "balloonText": val.valueField + ":[[value]]",
                    "showBalloon": true,
                    "animationPlayed": true
                });
            }
        });
        return graphsData;
    };
    /**
     * Initial props value
     * @type {{height: number; theme: string; barColor: string}}
     */
    ComplexBarChart.defaultProps = {
        height: 300,
        theme: "none",
        scroll: false,
        report: false
    };
    return ComplexBarChart;
}(React.Component));
exports.default = ComplexBarChart;
//# sourceMappingURL=ComplexBarChart.js.map