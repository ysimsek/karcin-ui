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
}

export default class LineChart extends React.Component<LineChartProps,any>{
    static defaultProps:Partial<LineChartProps> = {
        theme : "none",
        inline : false
    }
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        let data = {
            "type": "serial",
            "theme": this.props.theme,
            "color":this.props.textColor,
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "rotate":this.props.inline,
            // "mouseWheelZoomEnabled":true,
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
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "export": {
                "enabled": true
            },
            "dataProvider": this.props.data
        }

        return <AmCharts.React options={data} style={{width:"100%",height:"200px"}}/>
    }
}
