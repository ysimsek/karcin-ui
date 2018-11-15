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

export interface CylinderChartProps {
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
    data : object;
    /**
     * Set the defaultField
     */
    categoryField : string;
    /**
     * Set the default title value
     */
    categoryTitle : string;
    /**
     * Set the default value
     */
    categoryValue : string;
    /**
     * default unit = br
     */
    unit ?: string;
    /**
     * Set the 3d true or false
     */
    threeD ?: boolean;
    /**
     * Max chart height
     * default 300px
     */
    height ?: number;
    /**
     * Set the title
     */
    title ?: string;
}

export default class CylinderChart extends React.Component<CylinderChartProps,any>{

    /**
     * Initial props value
     * @type {{height: number; theme: string; representType: string; unit: string}}
     */
    static defaultProps:Partial<CylinderChartProps> ={
        height : 300,
        theme : "light",
        representType : "height",
        unit : "br"
    }

    render():any{
        let propsData : any = this.returnChartData(this.props.data);
        let data = {
            "theme": "light",
            "type": "serial",
            "depth3D": 100,
            "angle": 30,
            "autoMargins": false,
            "marginBottom": 100,
            "marginLeft": 150,
            "marginRight": 150,
            "dataProvider": propsData.data,
            "valueAxes": [ {
                "stackType": "100%",
                "gridAlpha": 0
            } ],
            "graphs": propsData.graphsData,
            "categoryField": this.props.categoryTitle,
            "categoryAxis": {
                "axisAlpha": 0,
                "labelOffset": 40,
                "gridAlpha": 0
            },
            "export": {
                "enabled": false
            }
        };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }
    returnChartData(propsData:any):JSX.Element[]{
        let data = propsData[this.props.categoryField];
        let title = propsData[this.props.categoryTitle];
        let graphsData:Array<any> = [];
        let normData:Array<any> = [];
        let objectData:any = {};
        objectData[this.props.categoryTitle] = title;
        let me = this;
        data.forEach(function (v:any,i:number) {
            graphsData.push({
                "type": "column",
                "topRadius": 1,
                "columnWidth": 1,
                "showOnAxis": true,
                "lineThickness": 2,
                "lineAlpha": 0.5,
                "lineColor": v["lineColor"] != undefined ? v["lineColor"] : me.randomColorFunc(),
                "fillColors":v["fillColor"] != undefined ? v["fillColor"] : me.randomColorFunc() ,
                "fillAlphas": 0.8,
                "valueField": me.props.categoryValue+(i+1)
            });
            objectData[me.props.categoryValue+(i+1)] = v[me.props.categoryValue];
        })
        normData.push(objectData);
        let newArr:any = {
            data: normData,
            graphsData: graphsData
        };
        return newArr;
    }

    /**
     * Return random color
     * @returns {string}
     */
    randomColorFunc(){
        return Math.floor(Math.random()*16777215).toString(16);
    }
}
