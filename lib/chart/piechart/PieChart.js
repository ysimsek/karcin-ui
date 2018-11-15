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
require("amcharts3/amcharts/pie");
require("ammap3/ammap/ammap");
var AmCharts = require("@amcharts/amcharts3-react");
var PieChart = /** @class */ (function (_super) {
    __extends(PieChart, _super);
    function PieChart(props) {
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
    PieChart.prototype.createMenus = function (menu) {
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
    PieChart.prototype.seperateType = function (type) {
        return this.defaultDownloadFunction[type];
    };
    PieChart.prototype.getRandomNumber = function () {
        var nmb = Math.floor(Math.random() * 9999999999999);
        return nmb;
    };
    PieChart.prototype.getPNG = function () {
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
    PieChart.prototype.getJPG = function () {
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
    PieChart.prototype.getCSV = function () {
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
    PieChart.prototype.getXLSX = function () {
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
    PieChart.prototype.getSVG = function () {
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
    PieChart.prototype.getJSON = function () {
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
    PieChart.prototype.defaultMenus = function () {
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
    PieChart.prototype.render = function () {
        var data = {
            "type": "pie",
            "gradientRatio": this.props.deepth == true ? [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5] : undefined,
            "theme": this.props.theme,
            "dataProvider": this.props.data,
            "valueField": this.props.categoryValue,
            "titleField": this.props.categoryField,
            "innerRadius": this.props.innerSize + "%",
            "depth3D": this.props.threeD == true ? 23 : 0,
            "balloon": {
                "fixedPosition": true
            },
            "export": {
                "enabled": this.props.report,
                "menu": this.state.menu
            },
            "legend": this.props.describeList != false ? {
                "position": "right",
                "marginRight": 100,
                "autoMargins": false
            } : null
        };
        return React.createElement(AmCharts.React, { options: data, style: { width: "100%", height: this.props.height + "px" } });
    };
    /**
     * Initial props value
     * @type {{theme: string; height: number; innerSize: number; deepth: boolean; threeD: boolean}}
     */
    PieChart.defaultProps = {
        theme: "none",
        height: 300,
        innerSize: 0,
        deepth: false,
        threeD: false,
        describeList: false
    };
    return PieChart;
}(React.Component));
exports.default = PieChart;
//# sourceMappingURL=PieChart.js.map