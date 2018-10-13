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


export interface DynamicChartProps{
   /**
    * Views data
    */
   data : Array<any>;
   height ?: number;
}

export default class DynamicChart extends React.Component<DynamicChartProps,any>{

   static defaultProps:Partial<DynamicChartProps> = {
      height : 200
   }

   /**
    * @returns {any}
    */
   render():any{

       return <AmCharts.React options={this.props.data} style={{width:"100%",height:this.props.height+"px"}}/>
   }
}
