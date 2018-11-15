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
    report ?: boolean;
    menu?:any;
    reportName?:string;

}

export default class ComposedBarChart extends React.Component<ComposedBarChartData,any>{
    /**
     * Initial props value
     * @type {{height: number; theme: string}}
     */
    static defaultProps: Partial<ComposedBarChartData> = {
        height : 200,
        theme: "none",
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


    render(){
        let graphs = this.returnGrapsData(this.props.data);
        let data = {
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
        propsData.forEach(function (v:any) {
            graphsData.push({
                "title": v.title,
                "labelText": "[[value]]",
                "valueField": v.valueField,
                "type": "column",
                "fillAlphas": 1
            });
        })
        return graphsData;
    }
}
