import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge"
import "ammap3/ammap/ammap";
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
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            },
            "dataProvider": this.props.data
        } ;
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>;
    }

}
