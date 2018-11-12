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
export interface GaugeChartProps {
    percent?: boolean;
    startValue?: number;
    endValue?: number;
    kmh?: number;
    height?: number;
    interval?: number;
}
export default class GaugeChart extends React.Component<any, any> {
    static defaultProps: {
        startValue: number;
        endValue: number;
        height: number;
        value: number;
        percent: boolean;
        interval: number;
    };
    render(): JSX.Element;
    getKmGauge(): JSX.Element;
    getPercentGauge(): JSX.Element;
}
