import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt";
import "amcharts3/amcharts/xy";
import "ammap3/ammap/ammap";
export interface ScatterChartProps {
    /**
     * Set the data
     */
    data: Array<any>;
    /**
     * Max height (px)
     */
    height?: number;
    /**
     * diamond, bubble, circle, round, xError, yError, triangleUp
     */
    bullet?: string;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
     */
    theme?: string;
    /**
     * Change the text color
     */
    textColor?: string;
    /**
     * Complete with line
     */
    line?: boolean;
}
export default class ScatterChart extends React.Component<ScatterChartProps, any> {
    /**
     * Initial props value
     * @type {{height: number; theme: string}}
     */
    static defaultProps: Partial<ScatterChartProps>;
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * return config data
     * @param getData
     * @returns {any[]}
     */
    configData(getData: any): JSX.Element[];
    /**
     * return graphs data in chart data
     * @param propsData
     * @returns {any[]}
     */
    graphsData(propsData: any): JSX.Element[];
    /**
     * @param a
     * @param b
     * @returns {Object | any}
     */
    combineObject(a: any, b: any): any | Object;
}
