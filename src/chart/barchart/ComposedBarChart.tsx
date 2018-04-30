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
    theme ?: string;
    categoryField ?: string;
    categoryValue ?: string;
    height ?: number;

}

export default class ComposedBarChart extends React.Component<ComposedBarChartData,any>{

    static defaultProps: Partial<ComposedBarChartData> = {
        height : 200,
        theme: "none"
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
            "export":
                {
                    "enabled":true
                }
        };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }

    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    returnGrapsData(propsData:any){
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