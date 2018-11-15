import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt"
import "amcharts3/amcharts/xy";
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");

export interface ScatterChartProps {
    /**
     * Set the data
     */
    data : Array<any>;
    /**
     * Max height (px)
     */
    height ?: number;
    /**
     * diamond, bubble, circle, round, xError, yError, triangleUp
     */
    bullet ?:string;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
     */
    theme ?: string;
    /**
     * Change the text color
     */
    textColor ?: string;
    /**
     * Complete with line
     */
    line ?: boolean;
}

export default class ScatterChart extends React.Component<ScatterChartProps,any>{
    /**
     * Initial props value
     * @type {{height: number; theme: string}}
     */
    static defaultProps:Partial<ScatterChartProps> ={
        height : 300,
        theme : "none",
    }

    /**
     * @returns {any}
     */
    render():any{
        let newData = this.configData(this.props.data);
        let data = {
            "type": "xy",
            "color":this.props.textColor,
            "theme": this.props.theme,
            "balloon":{
                "fixedPosition":true,
            },
            "dataProvider": newData,
            "valueAxes": [ {
                "id": "ValueAxis-1",
                "axisAlpha": 0
            }, {
                "id": "ValueAxis-2",
                "axisAlpha": 0,
                "position": "bottom"
            } ],
            "startDuration": 1.5,
            "graphs": this.graphsData(this.props.data),
            "marginLeft": 46,
            "marginBottom": 35,
            "export": {
                "enabled": false
            }
        }
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }

    /**
     * return config data
     * @param getData
     * @returns {any[]}
     */
    configData(getData:any):JSX.Element[]{
        let combineData:any[] = [];
        let newResultData:any[] = [];
        getData.forEach((value:any)=>{
            combineData.push(value.data);
        });

        for(let i = 0; i < combineData.length; i++){
            for(let j = 0; j < combineData[i].length; j++){
                newResultData[j] = this.combineObject(newResultData[j], combineData[i][j]);
            }
        }
        return newResultData;
    }

    /**
     * return graphs data in chart data
     * @param propsData
     * @returns {any[]}
     */
    graphsData(propsData:any):JSX.Element[]{
        let returnData : any[] = [];
        let me = this;
        propsData.forEach(function (v:any) {
            returnData.push({
                "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
                "bullet": v.graph,
                "bulletBorderAlpha": 0.2,
                "bulletAlpha": 0.8,
                "lineAlpha": me.props.line == true ? 0.8 : 0,
                "fillAlphas": 0,
                "lineThickness": 2,
                "lineColor": v.color,
                "valueField": v.value,
                "xField": v.xCoor,
                "yField": v.yCoor,
                "maxBulletSize": 100
            })
        })
        return returnData;
    }

    /**
     * @param a
     * @param b
     * @returns {Object | any}
     */
    combineObject(a:any,b:any):any | Object{
        let c:Object | any = {};
        for (let key in a) {
            c[key] = a[key];
        }
        for (let key in b) {
            c[key] = b[key];
        }
        return c;
    }
}
