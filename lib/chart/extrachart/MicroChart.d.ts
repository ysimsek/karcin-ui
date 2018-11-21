import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/funnel";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt";
import "ammap3/ammap/ammap";
export interface MicroChartProps {
    /**
     * Set the type
       line,line2,pie,therm,bar or bar2
     */
    chartType?: string;
    /**
     * Set the Array data
     */
    data: Array<any>;
    /**
     * Show value
     */
    categoryValue: string;
    /**
     * Show fields
     */
    categoryField: string;
    /**
     * Default cut-off point
     */
    cutOffPoint: number;
    /**
     * Max chart height
     * default 100px
     */
    width?: number;
    /**
     * Max chart height
     * default 25px
     */
    height?: number;
    /**
     * set the theme,
      default theme = light,
      other theme = light , dark , chalk, black, patterns
     */
    theme?: string;
}
export default class MicroChart extends React.Component<any, any> {
    /**
     * Initial props value
     * @type {{width: number; height: number; theme: string; lineColor: string}}
     */
    static defaultProps: {
        width: number;
        height: number;
        theme: string;
        lineColor: string;
    };
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * Return chart data initial
     * @param {string} type
     * @returns {{}}
     */
    returnChart(type: string): {};
    /**
     * return random color
     * @returns {string}
     */
    randomColorFunc(): string;
}
