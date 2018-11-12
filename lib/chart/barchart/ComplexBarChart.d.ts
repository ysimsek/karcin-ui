import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt";
import "amcharts3/amcharts/serial";
import "ammap3/ammap/ammap";
export interface ComposedBarChartData {
    /**
     * Set the view data
     title is required, valueField is required
     */
    data: Array<any>;
    /**
     * Set the textColor
     */
    textColor?: string;
    /**
     * column or line
     */
    type: Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
     */
    theme?: string;
    /**
     * Default show field
     */
    categoryField?: string;
    /**
     * Default show value
     */
    categoryValue?: string;
    /**
     * Max chart height
     * default 300px
     */
    height?: number;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;
}
export default class ComplexBarChart extends React.Component<ComposedBarChartData, any> {
    /**
     * Initial props value
     * @type {{height: number; theme: string; barColor: string}}
     */
    static defaultProps: Partial<ComposedBarChartData>;
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * Configüration graphs data
     * @param propsData
     * @returns {any[]}
     */
    returnGrapsData(propsData: any): JSX.Element[];
}
