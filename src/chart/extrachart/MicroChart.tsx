import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/funnel";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt"
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");

export interface MicroChartProps{
    /**
     * Set the type
       line,line2,pie,therm,bar or bar2
     */
    chartType ?: string;
    /**
     * Set the Array data
     */
    data : Array<any>;
    /**
     * Show value
     */
    categoryValue : string;
    /**
     * Show fields
     */
    categoryField : string;
    /**
     * Default cut-off point
     */
    cutOffPoint : number;
    /**
     * Max chart height
     * default 100px
     */
    width ?: number;
    /**
     * Max chart height
     * default 25px
     */
    height ?: number;
    /**
     * set the theme,
      default theme = light,
      other theme = light , dark , chalk, black, patterns
     */
    theme ?: string;

}


export default class MicroChart extends React.Component<any,any>{
    /**
     * Initial props value
     * @type {{width: number; height: number; theme: string; lineColor: string}}
     */
    static defaultProps = {
        width : 100,
        height : 25,
        theme : "light",
        lineColor : "#a9ec49"
    }

    /**
     * @returns {any}
     */
    render():any{
        let data = this.returnChart(this.props.chartType);
        return <AmCharts.React options={data} style={{width:this.props.width+"px",height:this.props.height+"px"}}/>
    }

    /**
     * Return chart data initial
     * @param {string} type
     * @returns {{}}
     */
    returnChart(type:string){
        let data = {};
        switch(type) {
            //linechart
            case "line":
                data = {
                    "type": "serial",
                    "theme": this.props.theme,
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 5,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [{
                        "valueField": this.props.categoryValue,
                        "bulletField": "bullet",
                        "showBalloon": false,
                        "lineColor": this.props.lineColor
                    }],
                    "valueAxes": [{
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0,
                        "startOnAxis": true
                    }
                };
                break;
            //piechart
            case "pie" :
                data = {
                    "type": "pie",
                    "dataProvider": this.props.data,
                    "labelField": this.props.categoryField,
                    "valueField": this.props.categoryValue,
                    "labelsEnabled": false,
                    "balloonText": "",
                    "valueText": undefined,
                    "radius": 9,
                    "outlineThickness": 1,
                    "colors": [ "#"+this.randomColorFunc(), "#"+this.randomColorFunc() ],
                    "startDuration": 0
                };
                break;
            //linechart
            case "line2":
                data ={
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 5,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [ {
                        "valueField": this.props.categoryValue,
                        "showBalloon": false,
                        "lineColor": "#"+this.randomColorFunc(),
                        "negativeLineColor": "#"+this.randomColorFunc()
                    } ],
                    "valueAxes": [ {
                        "gridAlpha": 0,
                        "axisAlpha": 0,
                        "guides": [ {
                            "value": 0,
                            "lineAlpha": 0.1
                        } ]
                    } ],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0,
                        "startOnAxis": true
                    }
                }
                break;
            //Thermochart
            case "therm":
                data ={
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "rotate": true,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [ {
                        "valueField": this.props.categoryValue,
                        "type": "column",
                        "fillAlphas": 1,
                        "fillColors": [ "#"+this.randomColorFunc(), "#"+this.randomColorFunc() ],
                        "gradientOrientation": "horizontal",
                        "lineColor": "#FFFFFF",
                        "showBalloon": false
                    } ],
                    "valueAxes": [ {
                        "gridAlpha": 0,
                        "axisAlpha": 0,
                        "stackType": "100%",
                        "guides": [ {
                            "value": this.props.cutOffPoint,
                            "lineAlpha": 1,
                            "above": true
                        } ]
                    } ],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }
                }
                break;
            //BarChart
            case "bar":
                data = {
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [ {
                        "valueField": this.props.categoryValue,
                        "type": "column",
                        "fillAlphas": 1,
                        "lineColor": "#"+this.randomColorFunc(),
                        "showBalloon": false
                    } ],
                    "valueAxes": [ {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    } ],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }
                };
                break;
            //BarChart
            case "bar2":
                data = {
                    "type": "serial",
                    "dataProvider": this.props.data,
                    "categoryField": this.props.categoryField,
                    "autoMargins": false,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "graphs": [ {
                        "valueField": this.props.categoryValue,
                        "type": "column",
                        "fillAlphas": 1,
                        "showBalloon": false,
                        "lineColor": "#"+this.randomColorFunc(),
                        "negativeFillColors": "#"+this.randomColorFunc(),
                        "negativeLineColor": "#"+this.randomColorFunc()
                    } ],
                    "valueAxes": [ {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    } ],
                    "categoryAxis": {
                        "gridAlpha": 0,
                        "axisAlpha": 0
                    }
                }
                break;

        }
        return data;
    }

    /**
     * return random color
     * @returns {string}
     */
    randomColorFunc():string{
        return Math.floor(Math.random()*16777215).toString(16);
    }

}