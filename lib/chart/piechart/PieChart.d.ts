import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt";
import "amcharts3/amcharts/pie";
import "ammap3/ammap/ammap";
export interface PieChartProps {
    /**
     * Views data
     */
    data?: Array<any>;
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
     * Set the max value
     * default 300px
     */
    height?: number;
    /**
     * Set the innerSize
     * default 0
     */
    innerSize?: number;
    /**
     * Default false
     */
    deepth?: boolean;
    /**
     * Default false
     */
    threeD?: boolean;
    /**
     * Show the list piechart
     * default false
     */
    describeList?: boolean;
    report?: boolean;
    menu?: any;
    reportName?: string;
}
export default class PieChart extends React.Component<PieChartProps, any> {
    /**
     * Initial props value
     * @type {{theme: string; height: number; innerSize: number; deepth: boolean; threeD: boolean}}
     */
    static defaultProps: Partial<PieChartProps>;
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
}
