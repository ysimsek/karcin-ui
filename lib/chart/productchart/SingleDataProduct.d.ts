import * as React from "react";
export interface SingleChartProps {
    data?: Array<any>;
    theme?: string;
    type?: string;
    categoryField?: string;
    categoryValue?: string;
    height?: number;
    textColor?: string;
}
export default class SingleDataProduct extends React.Component<SingleChartProps> {
    state: any;
    i: any;
    j: any;
    pieModel: any;
    static defaultProps: {};
    constructor(props: any);
    render(): any;
    returnChartProperties(): JSX.Element;
    seperationOfChart(name: string): JSX.Element;
    seperationOfPieChart(chart: JSX.Element[], name: string): JSX.Element[];
    seperationOfLineChart(chart: JSX.Element[], name: string): JSX.Element[];
    seperationOfAreaChart(chart: JSX.Element[], name: string): JSX.Element[];
    seperationOfBarChart(chart: JSX.Element[], name: string): JSX.Element[];
    seperationOfPyramidChart(chart: JSX.Element[], name: string): JSX.Element[];
    renderChartProperties(): JSX.Element;
    addNewData(e: any): void;
    addNewChart(): void;
    renderTextInputElement(): JSX.Element;
    renderNewInputElement(val: any, idx: number): JSX.Element[];
    cutOfStateChange(e: any): void;
    colorColumnBarChartChange(e: any): void;
    returnJSONElement(): any;
    handleChangeText(e: any): void;
    handleChange2(e: any): void;
    handleChange(e: any): void;
}
