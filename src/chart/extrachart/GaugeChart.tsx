import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/funnel";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge";
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");

export interface GaugeChartProps  {
    percent?:boolean;
    startValue?:number;
    endValue?:number;
    kmh?:number;
    height?:number;
    interval?:number;
    unit?:string;
    report ?: boolean;
    menu?:any;
    reportName?:string;
}

export default class GaugeChart extends React.Component<any,any> {

    static defaultProps ={
        startValue : 0,
        endValue : 220,
        height : 400,
        value : 0,
        percent : false,
        interval : 20,
        unit : "km/h"
    }
    // Dosya default isimleri için kullanılır
    defaultDownloadType:any = {
        "svg": "SVG",
        "png": "PNG",
        "jpg": "JPG",
        "csv": "CSV",
        "xlsx": "XLSX",
        "json": "JSON"
    }
    //Dosya default fonksiyonları için kullanılır
    defaultDownloadFunction:any = {
        "svg": this.getSVG(),
        "png": this.getPNG(),
        "jpg": this.getJPG(),
        "csv": this.getCSV(),
        "xlsx": this.getXLSX(),
        "json": this.getJSON()
    }
    reportName:any;
    constructor(props:any){
        super(props);
        this.reportName = props.reportName != undefined ? this.props.reportName : ""
        this.state = {
            menu : props.menu != undefined ? this.createMenus(props.menu) : this.defaultMenus()
        }
    }


    createMenus(menu:any){
        let arr:Array<any> = [];
        let me:any = this;
        try {
            menu.map((elm: any, idx: number) => {
                let childArr:any ={};
                childArr.class = elm.type == "download" ? "export-main" : "export-drawing";
                childArr.action = childArr.class == "export-drawing" ? "draw" : null;
                childArr.menu = [];
                if(elm.child != undefined){
                    elm.child.map((subMenu:any,id:number)=>{
                        let subChildMenu:any = {};
                        subChildMenu.label = subMenu.label != undefined ? subMenu.label : me.defaultDownloadType[subMenu.type]
                        subChildMenu.click = subMenu.callBack != undefined ? subMenu.callBack : this.seperateType(subMenu.type);
                        if(subMenu.type == undefined){
                            subChildMenu.label = "UNDEFINED TYPE"
                        }
                        childArr.menu.push(subChildMenu);
                    });
                }
                arr.push(childArr);
            })
            return arr;
        }catch (e){
            console.log(e);
        }
        return null;
    }

    seperateType(type:any){
        return this.defaultDownloadFunction[type];
    }

    getRandomNumber(){
        let nmb:number = Math.floor(Math.random() * 9999999999999);
        return nmb;
    }

    getPNG(){
        let name = this.reportName+this.getRandomNumber();
        return function(this:any) {
            let me:any = this;
            me.capture({},function() {
                me.toPNG( {}, function( data:any ) {
                    me.download( data, "image/jpg", name+".png" );
                });
            });
        }
    }

    getJPG(){
        let name = this.reportName+this.getRandomNumber();
        return function(this:any) {
            let me:any=this;
            me.capture({},function(this:any) {
                me.toJPG( {}, function( data:any ) {
                    me.download( data, "image/png", name+".jpg" );
                });
            });
        }
    }

    getCSV(){
        let name = this.reportName+this.getRandomNumber();
        return function(this:any) {
            let me:any = this;
            me.capture({},function() {
                me.toCSV( {}, function( data:any ) {
                    me.download( data, "image/csv", name+".csv" );
                });
            });
        }
    }

    getXLSX(){
        let name = this.reportName+this.getRandomNumber();
        return function(this:any) {
            let me:any = this;
            me.capture({},function() {
                me.toXLSX( {}, function( data:any ) {
                    me.download( data, "file/xlsx", name+".xlsx" );
                });
            });
        }

    }

    getSVG(){
        let name = this.reportName+this.getRandomNumber();
        return function(this:any) {
            let me:any = this;
            me.capture({},function() {
                me.toSVG( {}, function( data:any ) {
                    me.download( data, "file/svg", name+".svg" );
                });
            });
        }
    }

    getJSON(){
        let name = this.reportName+this.getRandomNumber();
        return function(this:any) {
            let me:any = this;
            me.capture({},function() {
                me.toJSON( {}, function( data:any ) {
                    me.download( data, "file/json", name+".json" );
                });
            });
        }
    }

    defaultMenus(){
        let _this = this;
        return [ {
            "class": "export-main",
            "menu": [ {
                "label": "İndir",
                "menu": [ {
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
                "menu": [ {
                    "class": "export-drawing",
                    "menu": [ {
                        label: "Size ...",
                        action: "draw.widths",
                        widths: [ 5, 20, 30 ] // replaces the default choice
                    }, {
                        "label": "Edit",
                        "menu": [ "UNDO", "REDO", "CANCEL" ]
                    }, {
                        "label": "Save",
                        "format": "PNG"
                    } ]
                } ]
            } ]
        } ]
    }



    render() {
       return this.props.percent == false ? this.getKmGauge() : this.getPercentGauge();
    }
    getKmGauge(){
        let data = {
            "type": "gauge",
            "theme": "light",
            "growSlices": true,
            "axes": [{
                "axisThickness": 1,
                "axisAlpha": 0.2,
                "tickAlpha": 0.2,
                "valueInterval": this.props.interval,
                "bands": [ {
                    "color": this.props.color != undefined ? this.props.color : "#84b761",
                    "startValue": this.props.startValue,
                    "endValue": this.props.endValue,
                    "innerRadius": "95%"
                }],
                "bottomText": "0 "+this.props.unit,
                "bottomTextYOffset": -80,
                "bottomTextFontSize": 20,
                "endValue": this.props.endValue
            }],
            "arrows": [{
                value:this.props.endValue<this.props.value ? this.props.endValue : this.props.value,
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
                "enabled":this.props.report,
                "menu": this.state.menu
            }
        }

        let chart = <AmCharts.React options={data} style={{width: "100%", height: this.props.height + "px"}}/>
        chart.props.options.arrows[0]["value"] = this.props.endValue<this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].bottomText =(this.props.endValue<this.props.value ? this.props.endValue : this.props.value)+" "+this.props.unit;

        return chart;
    }
    getPercentGauge(){
        let data =  {
            "theme": "light",
            "type": "gauge",
            "export": {
                "enabled":this.props.report,
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
        let chart = <AmCharts.React options={data} style={{width: "100%", height: this.props.height + "px"}}/>
        chart.props.options.arrows[0]["value"] = this.props.endValue<this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].topText =(this.props.endValue<this.props.value ? this.props.endValue : this.props.value)+" %";
        chart.props.options.axes[0].bands[1].endValue = this.props.endValue<this.props.value ? this.props.endValue : this.props.value;
        return chart
    }


}
