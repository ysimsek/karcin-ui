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

export interface PyramidChartProps {
    /**
     * area or height
     */
    representType ?: string;
    /**
     * position true or false
     */
    rotate ?: boolean;
    /**
     * Change the chart text color
     */
    textColor ?: string;
    /**
     * set the theme,
      default theme = light,
      other theme = light , dark , chalk, black, patterns
     */
    theme ?: string;
    /**
     * Views data
     */
    data : Array<any>;
    /**
     * Set the defaultField
     */
    categoryField : string;
    /**
     * Set the default value
     */
    categoryTitle : string;
    /**
     * default unit = br
     */
    unit ?: string;
    /**
     * Set the 3d true or false
     */
    threeD ?: boolean;
    /**
     * Set the max value
     * Default height = 300px
     */
    height ?: number;
}

export default class PyramidChart extends React.Component<PyramidChartProps,any>{
    /**
     * Initial props value
     * @type {{height: number; theme: string; representType: string; unit: string}}
     */
    static defaultProps ={
        height : 300,
        theme : "light",
        representType : "height",
        unit : "br"
    }

    /**
     * @returns {any}
     */
    render():any{
        let data = {
            color : this.props.textColor,
            "type": "funnel",
            "theme": this.props.theme,
            "dataProvider": this.props.data,
            "balloon": {
                "fixedPosition": true
            },
            "valueField": this.props.categoryField,
            "titleField": this.props.categoryTitle,
            "marginRight": 240,
            "depth3D": (this.props.threeD == true ? 100 : null),
            "angle": (this.props.threeD == true ? 40 : null),
            "marginLeft": 50,
            "startX": -500,
            "labelPosition": "right",
            "rotate": this.props.rotate == true ? true : false,
            "outlineThickness": 2,
            "outlineAlpha": 1,
            "outlineColor": "#FFFFFF",
            "valueRepresents":this.props.representType,
            "balloonText": "[["+this.props.categoryTitle+"]]: [["+this.props.categoryField+"]]"+this.props.unit+"[[description]]",
            "export": {
                "enabled": false
            }
        };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }
}
