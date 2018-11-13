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
export interface SimpleBarChartProps {
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
    properties?: object | any;
    /**
     * Set the balloontext field 'a' = 5
     */
    categoryField?: string;
    /**
     * Set the balloontext value a = '5'
     */
    categoryValue?: string;
    /**
     * Set the color chard column
     */
    colorField?: string;
    /**
     * Set the text color
     */
    textColor?: string;
    /**
     *  3d or 2d true or false
     */
    threeD?: boolean;
    /**
     * oval and square
     */
    ovalColumn?: boolean;
    /**
     * Line changes true or false
     */
    inline?: boolean;
    /**
     * valueLine is true or false
     */
    valueLine?: boolean;
    /**
     * Max chart height
     * default 200px
     */
    height?: number;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;
}
export default class SimpleLineChart extends React.Component<SimpleBarChartProps, any> {
    /**
     * @type {{data: any[]; theme: string; threeD: boolean; inline: boolean; height: number}}
     */
    static defaultProps: Partial<SimpleBarChartProps>;
    render(): JSX.Element;
}
