import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/plugins/export/export.min";
import "amcharts3/amcharts/plugins/export/libs/FileSaver.js/FileSaver";
import "amcharts3/amcharts/plugins/export/libs/jszip/jszip.min.js";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge";
import "ammap3/ammap/ammap";
import "amcharts3/amcharts/plugins/export/export.css";
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
    report?: boolean;
    menu?: any;
    reportName?: string;
}
export default class SimleAreaChart extends React.Component<SimpleAreaChartProps, any> {
    /**
     * @type {{theme: string; height: number; inline: boolean}}
     */
    static defaultProps: Partial<SimpleAreaChartProps>;
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
    render(): any;
    componentDidMount(): void;
}
