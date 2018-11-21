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
export interface LineChartProps {
    /**
     * Views data
     */
    data: Array<any>;
    /**
     * set the theme,
     * default theme = light,
     * other theme = light , dark , chalk, black, patterns
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
     * Set the colorField
     */
    colorField?: string;
    /**
     * Set the text color
     */
    textColor?: string;
    /**
     * Set the increase color
     */
    positiveColor?: string;
    /**
     * Set the decrease color
     */
    negativeColor?: string;
    /**
     * Line changes true or false
     */
    inline?: boolean;
    /**
     * Scroll true or false
     * default false
     */
    scroll?: boolean;
    height?: number;
    report?: boolean;
    menu?: any;
    reportName?: string;
}
export default class LineChartTrend extends React.Component<LineChartProps, any> {
    /**
     * Initial props value
     * @type {{theme: string; inline: boolean}}
     */
    static defaultProps: Partial<LineChartProps>;
    defaultDownloadType: any;
    defaultDownloadFunction: any;
    reportName: any;
    constructor(props: any);
    createMenus(menu: any): any[] | null;
    seperateType(type: any): any;
    getRandomNumber(): number;
    getPNG(): (this: any) => void;
    getJPG(): (this: any) => void;
    getCSV(): (this: any) => void;
    getXLSX(): (this: any) => void;
    getSVG(): (this: any) => void;
    getJSON(): (this: any) => void;
    defaultMenus(): {
        "class": string;
        "menu": ({
            "label": string;
            "menu": {
                label: string;
                click: (this: any) => void;
            }[];
            "action"?: undefined;
        } | {
            "label": string;
            "action": string;
            "menu": {
                "class": string;
                "menu": ({
                    label: string;
                    action: string;
                    widths: number[];
                    "menu"?: undefined;
                    "format"?: undefined;
                } | {
                    "label": string;
                    "menu": string[];
                    "action"?: undefined;
                    widths?: undefined;
                    "format"?: undefined;
                } | {
                    "label": string;
                    "format": string;
                    "action"?: undefined;
                    widths?: undefined;
                    "menu"?: undefined;
                })[];
            }[];
        })[];
    }[];
    /**
     * @returns {any}
     */
    render(): JSX.Element;
}
