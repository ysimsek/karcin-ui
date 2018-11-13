import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/plugins/export/export.min";
import "amcharts3/amcharts/plugins/export/libs/FileSaver.js/FileSaver";
import "amcharts3/amcharts/plugins/export/libs/jszip/jszip.min.js";
require("amcharts3/amcharts/plugins/export/libs/pdfmake/pdfmake");
require("amcharts3/amcharts/plugins/export/libs/pdfmake/vfs_fonts");
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge"
import "ammap3/ammap/ammap";
import "amcharts3/amcharts/plugins/export/export.css";
// import "amcharts3/amcharts/plugins/export/libs/fabric.js/fabric.min.js";

var AmCharts = require("@amcharts/amcharts3-react");


export interface SimpleAreaChartProps{
    data : Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'none'
     */
    theme ?: string;
    /**
     * Default show field
     */
    categoryField ?: string;
    /**
     * Default show value
     */
    categoryValue ?: string;
    /**
     * Change the text Color
     */
    textColor?: string;
    /**
     * Set the height, default = 200px
     */
    height ?: number;
    /**
     * Change the color in color
     */
    cutOffColor ?: string;
    /**
     * Line changes true or false
     */
    inline ?:boolean;
    /**
     * date or undefined
     */
    formatting ?: string;
    report ?: boolean;
    menu?:any;
    reportName?:string;
}

export default class SimleAreaChart extends React.Component<SimpleAreaChartProps,any>{
    /**
     * @type {{theme: string; height: number; inline: boolean}}
     */
    static defaultProps: Partial<SimpleAreaChartProps> = {
        theme : "none",
        height : 200,
        inline: false
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

    /**
     * @returns {any}
     */
    render():any{
        let data = {
            "color":this.props.textColor,
            "type": "serial",
            "theme": this.props.theme,
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "rotate": this.props.inline,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [ {
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            } ],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [ {
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
            } ],
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
            } : {"gridPosition": "start"},
            "export": {
                "enabled":this.props.report,
                "menu": this.state.menu
    },
            "dataProvider": this.props.data
        } ;
        let chrt:any = <AmCharts.React ref={"chartt"} options={data} style={{width:"100%",height:this.props.height+"px"}}/>;
        return chrt;
    }

    componentDidMount(){
        //this.refs.chartt._reactInternalFiber.updateQueue.firstUpdate.payload.chart
        // debugger;
    }

}
