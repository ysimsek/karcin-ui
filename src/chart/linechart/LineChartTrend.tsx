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
     * Set the colorField
     */
    colorField?:string;
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
}

export default class LineChartTrend extends React.Component<LineChartProps,any>{
    /**
     * Initial props value
     * @type {{theme: string; inline: boolean}}
     */
    static defaultProps:Partial<LineChartProps> = {
        theme : "none",
        inline : false
    }


    /**
     * @returns {any}
     */
    render(){
        let data = {
            "type": "serial",
            "theme": "light",
            "marginRight":80,
            "autoMarginOffset":20,
            "dataDateFormat": "YYYY-MM-DD HH:NN",
            "dataProvider": this.props.data,
            "valueAxes": [{
                "axisAlpha": 0,
                "guides": [{
                    "fillAlpha": 0.1,
                    "fillColor": "#888888",
                    "lineAlpha": 0,
                    "toValue": 16,
                    "value": 10
                }],
                "position": "left",
                "tickLength": 0
            }],
            "graphs": [{
                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
                "bullet": "round",
                "dashLength": 3,
                "colorField":this.props.colorField,
                "valueField": this.props.categoryValue
            }],
            "trendLines": [{
                "finalDate": "2012-01-11 12",
                "finalValue": 19,
                "initialDate": "2012-01-02 12",
                "initialValue": 10,
                "lineColor": "#CC0000"
            }, {
                "finalDate": "2012-01-22 12",
                "finalValue": 10,
                "initialDate": "2012-01-17 12",
                "initialValue": 16,
                "lineColor": "#CC0000"
            }],
            "chartScrollbar": {
                "scrollbarHeight":2,
                "offset":-1,
                "backgroundAlpha":0.1,
                "backgroundColor":"#888888",
                "selectedBackgroundColor":"#67b7dc",
                "selectedBackgroundAlpha":1
            },
            "chartCursor": {
                "fullWidth":true,
                "valueLineEabled":true,
                "valueLineBalloonEnabled":true,
                "valueLineAlpha":0.5,
                "cursorAlpha":0
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "parseDates": true,
                "axisAlpha": 0,
                "gridAlpha": 0.1,
                "minorGridAlpha": 0.1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        }

        return <AmCharts.React options={data} style={{width:"100%",height:"200px"}}/>
    }
}
