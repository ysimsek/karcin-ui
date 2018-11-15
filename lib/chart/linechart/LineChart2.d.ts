import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt";
import "ammap3/ammap/ammap";
export interface LineChart2Props {
    /**
     * Views data
     */
    data: Array<any>;
    /**
     * set the theme , default theme = light
     other theme = light , dark , chalk, black, patterns,
     default = 'light'
     */
    theme?: string;
    height?: number;
    showValues: Array<any>;
    categoryField?: string;
}
export default class DynamicChart extends React.Component<LineChart2Props, any> {
    static defaultProps: Partial<LineChart2Props>;
    /**
     * @returns {any}
     */
    render(): any;
    getGraps(values: any): any[];
}
