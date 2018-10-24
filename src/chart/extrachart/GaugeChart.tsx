import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/funnel";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge";
import "ammap3/ammap/ammap";
var AmCharts = require("@amcharts/amcharts3-react");

export interface GaugeChartProps  {
    percent?:boolean;
    startValue?:number;
    endValue?:number;
    kmh?:number;
    height?:number;
}

export default class GaugeChart extends React.Component<any,any> {

    static defaultProps ={
        startValue : 0,
        endValue : 220,
        height : 400,
        value : 0,
        percent : false
    }



    render() {
       return this.props.percent == false ? this.getKmGauge() : this.getPercentGauge();
    }
    getKmGauge(){
        let data = {
            "type": "gauge",
            "theme": "light",
            "growSlices": true,
            "axes": [{
                "axisThickness": 0.1,
                "axisAlpha": 0,
                "tickAlpha": 0,
                "valueInterval": 10,
                "bands": [ {
                    "color": "#f90000a1",
                    "endValue": this.props.endValue,
                    "innerRadius": "95%",
                    "startValue": this.props.startValue,
                    "gradientRatio": [0.5, 0, -0.5]
                }],
                "bottomText": "0 km/h",
                "bottomTextYOffset": -20,
                "endValue": 220
            }],
            "arrows": [{}],
            "export": {
                "enabled": true
            }
        }

        let chart = <AmCharts.React options={data} style={{width: "100%", height: this.props.height + "px"}}/>
        chart.props.options.arrows[0]["value"] = this.props.endValue<this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].bottomText =(this.props.endValue<this.props.value ? this.props.endValue : this.props.value)+" km/h"
        return chart;
    }
    getPercentGauge(){
        let data =  {
            "theme": "light",
            "type": "gauge",
            "axes": [{
                "topTextFontSize": 20,
                "topTextYOffset": 70,
                "axisColor": "#31d6ea",
                "axisThickness": 1,
                "endValue": this.props.endValue,
                "gridInside": true,
                "inside": true,
                "radius": "50%",
                "valueInterval": 10,
                "tickColor": "#67b7dc",
                "startAngle": -90,
                "endAngle": 90,
                "unit": "%",
                "bandOutlineAlpha": 0,
                "bands": [{
                    "color": "#0080ff",
                    "endValue": 100,
                    "innerRadius": "105%",
                    "radius": "170%",
                    "gradientRatio": [0.5, 0, -0.5],
                    "startValue": 0
                }, {
                    "color": "#3cd3a3",
                    "endValue": 0,
                    "innerRadius": "105%",
                    "radius": "170%",
                    "gradientRatio": [0.5, 0, -0.5],
                    "startValue": 0
                }]
            }],
            "arrows": [{
                "alpha": 1,
                "innerRadius": "35%",
                "nailRadius": 0,
                "radius": "170%"
            }]
        };
        let chart = <AmCharts.React options={data} style={{width: "100%", height: this.props.height + "px"}}/>
        chart.props.options.arrows[0]["value"] = this.props.endValue<this.props.value ? this.props.endValue : this.props.value;
        chart.props.options.axes[0].topText =(this.props.endValue<this.props.value ? this.props.endValue : this.props.value)+" %";
        chart.props.options.axes[0].bands[1].endValue = this.props.endValue<this.props.value ? this.props.endValue : this.props.value;
        return chart
    }


}
