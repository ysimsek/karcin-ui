import * as React from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/funnel";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gauge";
import "ammap3/ammap/ammap";
export interface GaugeChartProps {
    percent?: boolean;
    startValue?: number;
    endValue?: number;
    kmh?: number;
    height?: number;
    interval?: number;
    unit?: string;
    report?: boolean;
    menu?: any;
    reportName?: string;
}
export default class GaugeChart extends React.Component<any, any> {
    static defaultProps: {
        startValue: number;
        endValue: number;
        height: number;
        value: number;
        percent: boolean;
        interval: number;
        unit: string;
    };
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
    render(): JSX.Element;
    getKmGauge(): JSX.Element;
    getPercentGauge(): JSX.Element;
}
