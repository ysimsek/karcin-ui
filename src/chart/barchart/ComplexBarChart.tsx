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
    /**
     * column or line
     */
    type : Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
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
     * Max chart height
     * default 300px
     */
    height ?: number;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;

}

export default class ComplexBarChart extends React.Component<ComposedBarChartData,any>{

    /**
     * Initial props value
     * @type {{height: number; theme: string; barColor: string}}
     */
    static defaultProps: Partial<ComposedBarChartData> = {
        height : 300,
        theme: "none",
        scroll: false
    }

    /**
     * @returns {any}
     */
    render():any{
        let data =  {
            "type": "serial",
            "theme": "none",
            color:this.props.textColor,
            "dataDateFormat": "YYYY-MM-DD",
            "dataProvider": this.props.data,
            "addClassNames": true,
            "startDuration": 1,
            "marginLeft": 0,
            "categoryField": this.props.categoryField,
            "categoryAxis": {
                "parseDates": true,
                "minPeriod": "DD",
                "autoGridCount": false,
                "gridCount": 50,
                "gridAlpha": 0.1,
                "gridColor": "#cccccc",
                "axisColor": "#cccccc",
                "dateFormats": [ {
                    "period": 'DD',
                    "format": 'DD'
                }, {
                    "period": 'WW',
                    "format": 'MMM DD'
                }, {
                    "period": 'MM',
                    "format": 'MMM'
                }, {
                    "period": 'YYYY',
                    "format": 'YYYY'
                } ]
            },

            "valueAxes": [ {
                "id": "a1",
                "title": this.props.type[0].valueField,
                "gridAlpha": 0,
                "axisAlpha": 0
            }, {
                "id": "a2",
                "position": "right",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "labelsEnabled": false
            }, {
                "id": "a3",
                "title": "duration",
                "position": "right",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "inside": true,
                "duration": "mm",
                "durationUnits": {
                    "DD": "d. ",
                    "hh": "h ",
                    "mm": "min",
                    "ss": ""
                }
            } ],
            "graphs": this.returnGrapsData(this.props.type),
            "chartScrollbar": (this.props.scroll == true ? {} : undefined),
            "chartCursor": {
                "zoomable": false,
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0,
                "valueBalloonsEnabled": false
            },
            "legend": {
                "bulletType": "round",
                "equalWidths": false,
                "valueWidth": 120,
                "useGraphSettings": true
            }
        };
        return <AmCharts.React options={data} style={{width:"100%",height:this.props.height+"px"}}/>
    }

    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    returnGrapsData(propsData:any):JSX.Element[]{
        let graphsData : any[]= [];
        let me= this;

        propsData.forEach(function (val:any,i:number) {
            if(val.type == "column"){
                graphsData.push( {
                    "id": i,
                    "valueField": val.valueField,
                    "title": val.valueField,
                    "type": val.type,
                    "fillAlphas": 0.9,
                    "valueAxis": "a1",
                    "balloonText": "[[value]] miles",
                    "legendValueText": "[[value]] mi",
                    "legendPeriodValueText": "total: [[value.sum]] mi",
                    "lineColor": val.color,
                    "alphaField": "alpha"
                })
            }else if(val.type == "line"){
                graphsData.push({
                    "id": i,
                    "valueField": val.valueField,
                    "classNameField": "bulletClass"+i,
                    "title": val.valueField,
                    "type": val.type,
                    "valueAxis": "a2",
                    "lineColor": val.color,
                    "lineThickness": 1,
                    "legendValueText": "[[value]]/[[description]]",
                    "descriptionField": "townName",
                    "bullet": "round",
                    "bulletSizeField": "townSize",
                    "bulletBorderColor": "#786c56",
                    "bulletBorderAlpha": 1,
                    "bulletBorderThickness": 2,
                    "bulletColor": "#000000",
                    "labelText": "[[townName2]]",
                    "labelPosition": "right",
                    "balloonText": val.valueField+":[[value]]",
                    "showBalloon": true,
                    "animationPlayed": true
                });
            }

        })
        return graphsData;
    }
}