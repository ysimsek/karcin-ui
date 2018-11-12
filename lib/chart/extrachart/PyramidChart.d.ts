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
export interface PyramidChartProps {
    /**
     * area or height
     */
    representType?: string;
    /**
     * position true or false
     */
    rotate?: boolean;
    /**
     * Change the chart text color
     */
    textColor?: string;
    /**
     * set the theme,
      default theme = light,
      other theme = light , dark , chalk, black, patterns
     */
    theme?: string;
    /**
     * Views data
     */
    data: Array<any>;
    /**
     * Set the defaultField
     */
    categoryField: string;
    /**
     * Set the default value
     */
    categoryTitle: string;
    /**
     * default unit = br
     */
    unit?: string;
    /**
     * Set the 3d true or false
     */
    threeD?: boolean;
    /**
     * Set the max value
     * Default height = 300px
     */
    height?: number;
}
export default class PyramidChart extends React.Component<PyramidChartProps, any> {
    /**
     * Initial props value
     * @type {{height: number; theme: string; representType: string; unit: string}}
     */
    static defaultProps: {
        height: number;
        theme: string;
        representType: string;
        unit: string;
    };
    /**
     * @returns {any}
     */
    render(): any;
}
