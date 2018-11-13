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


export interface LineChart2Props{
    /**
     * Views data
     */
    data : Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
     */
    theme?:string;
    height?: number;
    showValues : Array<any>;
    categoryField ?: string;

}

export default class DynamicChart extends React.Component<LineChart2Props,any>{

    static defaultProps:Partial<LineChart2Props> = {
        theme : "serial",
        height : 200
    }

    /**
     * @returns {any}
     */
    render():any{
        let data = {
            "type": "serial",
            "theme": this.props.theme,
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": this.props.data,

            "startDuration": 0.5,
            "graphs": this.getGraps(this.props.showValues),
            "chartCursor": {
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "fillAlpha": 0.05,
                "fillColor": "#000000",
                "gridAlpha": 0,
                "position": "top"
            },
            "export": {
                "enabled": false,
                "position": "bottom-right"
            }
        };

        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }

    getGraps(values:any){
        let arr:Array<any> = [];
        values.map((res:any)=>{
            arr.push({
                "balloonText": res.description + "[[category]]: [[value]]",
                "bullet": "round",
                "hidden": res.hidden,
                "title": res.title,
                "valueField": res.value,
                "fillAlphas": 0,
                "lineColor":res.color
            })
        });
        return arr;
    }
}
