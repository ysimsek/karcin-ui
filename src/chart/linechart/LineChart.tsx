import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt"
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");


export interface LineChartProps{
    /**
     * Views data
     */
    data : Array<any>;
    /**
     * set the theme,
     * default theme = light,
     * other theme = light , dark , chalk, black, patterns
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
     * Set the text color
     */
    textColor ?: string;
    /**
     * Set the increase color
     */
    positiveColor ?: string;
    /**
     * Set the decrease color
     */
    negativeColor ?: string;
    /**
     * Line changes true or false
     */
    inline ?:boolean;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;
    /**
     * Set the height value
     */
    height?: number;
    /**
     * date or undefined
     */
    formatting ?: string;
    report ?: boolean;
    menu?:any;
    reportName?:string;
}

export default class LineChart extends React.Component<LineChartProps,any>{
    /**
     * Initial props value
     * @type {{theme: string; inline: boolean}}
     */
    static defaultProps:Partial<LineChartProps> = {
        theme : "none",
        inline : false,
        height: 200
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
            "type": "serial",
            "theme": this.props.theme,
            "color":this.props.textColor,
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "rotate":this.props.inline,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth":true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "chartScrollbar": (this.props.scroll == true ? {} : undefined),
            "graphs": [{
                "id": "g1",
                "useNegativeColorIfDown": true,
                "balloon":{
                    "drop":true,
                    "adjustBorderColor":false,
                    "color":"#ffffff",
                    "type": "smoothedLine"
                },
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 8,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "lineColor": this.props.positiveColor,
                "negativeLineColor": this.props.negativeColor,
                "useLineColorForBulletBorder": true,
                "valueField": this.props.categoryValue,
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "categoryField": this.props.categoryField,
            "categoryAxis": this.props.formatting == "date" ? {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            } : {"gridPosition": "start"},
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "export": {
                "enabled":this.props.report,
                "menu": this.state.menu
            },
            "dataProvider": this.props.data
        }

        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }
}
