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
require("amcharts3/amcharts/serial");
require("amcharts3/amcharts/plugins/export/export.min");
require("amcharts3/amcharts/plugins/export/libs/FileSaver.js/FileSaver");
require("amcharts3/amcharts/plugins/export/libs/jszip/jszip.min.js");
require("amcharts3/amcharts/plugins/export/libs/pdfmake/pdfmake");
require("amcharts3/amcharts/plugins/export/libs/pdfmake/vfs_fonts");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/themes/chalk");
require("amcharts3/amcharts/themes/dark");
require("amcharts3/amcharts/themes/patterns");
require("amcharts3/amcharts/themes/black");
require("amcharts3/amcharts/gauge");
require("ammap3/ammap/ammap");
require("amcharts3/amcharts/plugins/export/export.css");
// import "amcharts3/amcharts/plugins/export/libs/fabric.js/fabric.min.js";
var AmCharts = require("@amcharts/amcharts3-react");
var SimleAreaChart = /** @class */ (function (_super) {
    __extends(SimleAreaChart, _super);
    function SimleAreaChart(props) {
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
    SimleAreaChart.prototype.createMenus = function (menu) {
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
    SimleAreaChart.prototype.seperateType = function (type) {
        return this.defaultDownloadFunction[type];
    };
    SimleAreaChart.prototype.getRandomNumber = function () {
        var nmb = Math.floor(Math.random() * 9999999999999);
        return nmb;
    };
    SimleAreaChart.prototype.getPNG = function () {
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
    SimleAreaChart.prototype.getJPG = function () {
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
    SimleAreaChart.prototype.getCSV = function () {
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
    SimleAreaChart.prototype.getXLSX = function () {
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
    SimleAreaChart.prototype.getSVG = function () {
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
    SimleAreaChart.prototype.getJSON = function () {
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
    SimleAreaChart.prototype.defaultMenus = function () {
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
    SimleAreaChart.prototype.render = function () {
        var data = {
            "color": this.props.textColor,
            "type": "serial",
            "theme": this.props.theme,
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "rotate": this.props.inline,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "ignoreAxisWidth": true
                }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff",
                        "type": "smoothedLine"
                    },
                    "fillAlphas": 0.2,
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 5,
                    "fillColorsField": this.props.cutOffColor,
                    "lineColorField": this.props.cutOffColor,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "useLineColorForBulletBorder": true,
                    "valueField": this.props.categoryValue,
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                }],
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueZoomable": false,
                "valueLineAlpha": 0.5
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": this.props.formatting == "date" ? {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            } : { "gridPosition": "start" },
            "export": {
                "enabled": this.props.report,
                "menu": this.state.menu
            },
            "dataProvider": this.props.data
        };
        var chrt = React.createElement(AmCharts.React, { ref: "chartt", options: data, style: { width: "100%", height: this.props.height + "px" } });
        return chrt;
    };
    SimleAreaChart.prototype.componentDidMount = function () {
        //this.refs.chartt._reactInternalFiber.updateQueue.firstUpdate.payload.chart
        // debugger;
    };
    /**
     * @type {{theme: string; height: number; inline: boolean}}
     */
    SimleAreaChart.defaultProps = {
        theme: "none",
        height: 200,
        inline: false
    };
    return SimleAreaChart;
}(React.Component));
exports.default = SimleAreaChart;
//# sourceMappingURL=SimpleAreaChart.js.map