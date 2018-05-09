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
}

export default class SimpleLineChart extends React.Component<SimpleBarChartProps,any>{

    static defaultProps: Partial<SimpleBarChartProps> = {
        data : [],
        theme : "light",
        threeD: false,
        inline: false,
        height:200
    }

    constructor(props:any){
        super(props);
        this.state = {}
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
                    "enabled": true
                }

            };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }
}
