import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt"
import "amcharts3/amcharts/serial";
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");

export interface ComposedBarChartData{
    /**
     * Set the view data
     title is required, valueField is required
     */
    data : Array<any>;
    /**
     * Set the textColor
     */
    textColor ?: string;
    /**
     * column or line
     */
    type : Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
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
     * Max chart height
     * default 300px
     */
    height ?: number;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;
    report ?: boolean;
    menu?:any;
    reportName?:string;

}

export default class ComplexBarChart extends React.Component<ComposedBarChartData,any>{

    /**
     * Initial props value
     * @type {{height: number; theme: string; barColor: string}}
     */
    static defaultProps: Partial<ComposedBarChartData> = {
        height : 300,
        theme: "none",
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


    /**
     * @returns {any}
     */
    render():any{
        let data =  {
            "type": "serial",
            "theme": "none",
            color:this.props.textColor,
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
                "dateFormats": [ {
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
                } ]
            },

            "valueAxes": [ {
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
            } ],
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
                "enabled":this.props.report,
                "menu": this.state.menu
            }
        };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }

    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    returnGrapsData(propsData:any):JSX.Element[]{
        let graphsData : any[]= [];
        let me= this;

        propsData.forEach(function (val:any,i:number) {
            if(val.type == "column"){
                graphsData.push( {
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
                })
            }else if(val.type == "line"){
                graphsData.push({
                    "id": i,
                    "valueField": val.valueField,
                    "classNameField": "bulletClass"+i,
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
                    "balloonText": val.valueField+":[[value]]",
                    "showBalloon": true,
                    "animationPlayed": true
                });
            }

        })
        return graphsData;
    }
}
