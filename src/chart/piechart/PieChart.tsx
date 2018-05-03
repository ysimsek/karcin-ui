import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt"
import "amcharts3/amcharts/pie";
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");

export interface PieChartProps{
    data ?: Array<any>;
    theme ?: string;
    categoryValue?: string;
    categoryField?:string;
    height?: number;
    innerSize ?: number;
    deepth ?: boolean;
    threeD ?: boolean;
}

export default class PieChart extends React.Component<PieChartProps,any>{

    static defaultProps:Partial<PieChartProps>={
        theme : "none",
        height : 300,
        innerSize : 0,
        deepth : false,
        threeD : false
    }
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        let data = {
            "type": "pie",
            "gradientRatio": this.props.deepth == true ? [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5] : undefined,
            "theme": this.props.theme,
            "dataProvider": this.props.data,
            "valueField": this.props.categoryValue,
            "titleField": this.props.categoryField,
            "innerRadius": this.props.innerSize+"%",
            "depth3D": this.props.threeD == true ? 23 : 0,
            "balloon":{
                "fixedPosition":true
            },
            "export": {
                "enabled": true
            }
        };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }
}
