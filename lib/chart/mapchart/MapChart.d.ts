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
export interface AmChartProps {
    /**
     * AmCharts theme {black,chalk,dark,light,patterns}
     */
    theme?: string;
    /**
     * AmCharts color intensity {0...}
     */
    colorSteps?: number;
    /**
     * AmChart waiting data
     */
    centerAllCode?: any;
    /**
     * onChange returned
     */
    clickOnChange?: any;
    /**
     * Click the zoom
     * true or false default false
     */
    zoom?: boolean;
    /**
     * Set the country code
     */
    code?: any;
    /**
     * Set the map title
     */
    title?: string;
    /**
     * Set the Page height
     */
    height?: string | number;
    /**
     * Set the array data with idField, descrField and valueField
     */
    data?: Array<any>;
    /**
     * id in Data field
     */
    idField?: any;
    /**
     * value in data field
     */
    valueField?: any;
    /**
     * description in data field
     */
    descrField?: any;
    rendererItems?: any;
    /**
     * HaritaMap
     */
    map?: any;
}
export default class MapChart extends React.Component<AmChartProps, any> {
    static defaultProps: Partial<AmChartProps>;
    defaultMap: string;
    geo: {
        "country_code": string;
        "country_name": string;
    };
    countryMaps: any;
    titles: Array<any>;
    currentMap: any;
    balloonTextShow: any;
    allCentralKey: any;
    /**
     * initial values
     * @param props
     */
    constructor(props: Object);
    mapData: {
        "type": string;
        "theme": string | undefined;
        "colorSteps": number | undefined;
        "dataProvider": {
            "mapURL": string;
            "getAreasFromMap": boolean;
            "zoomLevel": number;
            "areas": never[];
        };
        "areasSettings": {
            "autoZoom": string | undefined;
            "balloonText": string;
        };
        "valueLegend": {
            "right": number;
            "minValue": string;
            "maxValue": string;
        };
        "zoomControl": {
            "minZoomLevel": number;
        };
        "titles": any[];
        "listeners": {
            "event": string;
            "method": any;
        }[];
    };
    render(): JSX.Element;
    balloonText(): string;
    /**
     * map ile gelen event gösterimi için değişken,
     * init de gösterilecek data ayıklanıyor
     * @type {*}
     */
    updateHeatmap(event: any): void;
    /**
     * Change Map Turkey
     * e = true (Object), a,b,c === false()
     * Harita onClick olduğunda şehirler
     * @param e
     * @param a
     * @param b
     * @param c
     */
    handleCursorChange(e: any, value: any): any;
}
