import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge";
import "ammap3/ammap/ammap";
export interface SimpleAreaChartProps {
    data: Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'none'
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
     * Change the text Color
     */
    textColor?: string;
    /**
     * Set the height, default = 200px
     */
    height?: number;
    /**
     * Change the color in color
     */
    cutOffColor?: string;
    /**
     * Line changes true or false
     */
    inline?: boolean;
    /**
     * date or undefined
     */
    formatting?: string;
}
export default class SimleAreaChart extends React.Component<SimpleAreaChartProps, any> {
    /**
     * @type {{theme: string; height: number; inline: boolean}}
     */
    static defaultProps: Partial<SimpleAreaChartProps>;
    /**
     * @returns {any}
     */
    render(): any;
}
