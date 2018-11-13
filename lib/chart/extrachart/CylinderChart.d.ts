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
export interface CylinderChartProps {
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
    data: object;
    /**
     * Set the defaultField
     */
    categoryField: string;
    /**
     * Set the default title value
     */
    categoryTitle: string;
    /**
     * Set the default value
     */
    categoryValue: string;
    /**
     * default unit = br
     */
    unit?: string;
    /**
     * Set the 3d true or false
     */
    threeD?: boolean;
    /**
     * Max chart height
     * default 300px
     */
    height?: number;
    /**
     * Set the title
     */
    title?: string;
}
export default class CylinderChart extends React.Component<CylinderChartProps, any> {
    /**
     * Initial props value
     * @type {{height: number; theme: string; representType: string; unit: string}}
     */
    static defaultProps: Partial<CylinderChartProps>;
    render(): any;
    returnChartData(propsData: any): JSX.Element[];
    /**
     * Return random color
     * @returns {string}
     */
    randomColorFunc(): string;
}
