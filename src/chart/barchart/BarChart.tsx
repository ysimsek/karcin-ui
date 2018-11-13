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

export interface SimpleBarChartProps{
    /**
     * Views data
     */
    data : Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
     */
    theme ?: string;
    properties ?:object | any;
    /**
     * Set the balloontext field 'a' = 5
     */
    categoryField ?: string;
    /**
     * Set the balloontext value a = '5'
     */
    categoryValue ?: string;
    /**
     * Set the color chard column
     */
    colorField ?: string;
    /**
     * Set the text color
     */
    textColor ?: string;
    /**
     *  3d or 2d true or false
     */
    threeD ?: boolean;
    /**
     * oval and square
     */
    ovalColumn?: boolean;
    /**
     * Line changes true or false
     */
    inline ?:boolean;
    /**
     * valueLine is true or false
     */
    valueLine?:boolean;
    /**
     * Max chart height
     * default 200px
     */
    height?:number;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;
    report ?: boolean;
    menu?:any;
    reportName?:string;
}

export default class SimpleLineChart extends React.Component<SimpleBarChartProps,any>{
    /**
     * @type {{data: any[]; theme: string; threeD: boolean; inline: boolean; height: number}}
     */
    static defaultProps: Partial<SimpleBarChartProps> = {
        data : [],
        theme : "light",
        threeD: false,
        inline: false,
        height:200,
        scroll: false,
        report:false

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

    state:any;
    reportName:any;

    constructor(props:any){
        super(props);
        this.reportName  = props.reportName != undefined ? this.props.reportName : "" ;
        this.state = {
            menu : props.menu != undefined ? this.createMenus(props.menu) : this.defaultMenus(),
            reportName : props.reportName != undefined ? this.props.reportName : "" + this.getRandomNumber()
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
        let name = this.reportName+ this.getRandomNumber();
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
        let name = this.reportName+ this.getRandomNumber();
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
        let name = this.reportName+ this.getRandomNumber();
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
        let name = this.reportName+ this.getRandomNumber();
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
        let name = this.reportName+ this.getRandomNumber();
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
        let name = this.reportName+ this.getRandomNumber();
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


    render(){
        let data = {
                "color": this.props.textColor,
                "type": "serial",
                "theme": this.props.theme,
                "dataProvider":  this.props.data ,
                "startDuration": 2,
                "valueAxes": [ {
                    "gridColor": "#ffffff",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                } ],
                "rotate": this.props.inline,
                "gridAboveGraphs": true,
                "depth3D": (this.props.threeD == true ? 40 : null),
                "angle": (this.props.threeD == true ? 30 : null),
                "chartScrollbar": (this.props.scroll == true ? {} : undefined),
                "graphs": [ {
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillColorsField": this.props.colorField,
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "topRadius":(this.props.ovalColumn ? 1 : undefined ),
                    "valueField": this.props.categoryValue
                } ],
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "cursorAlpha": 0,
                    "zoomable": false,
                    "valueLineEnabled": this.props.valueLine,
                    "valueLineBalloonEnabled": this.props.valueLine
                },
                "categoryField": this.props.categoryField,
                "categoryAxis": {
                    "gridPosition": "start",
                    "gridAlpha": 0,
                    "tickPosition": "start",
                    "tickLength": 20
                },

                "export": {
                    "enabled":this.props.report,
                    "menu": this.state.menu
                }

            };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }
}
