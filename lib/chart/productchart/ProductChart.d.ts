import * as React from "react";
export interface CommonChartProps {
    data?: Array<any>;
    theme?: string;
    type?: string;
    categoryField?: string;
    categoryValue?: string;
    height?: number;
    textColor?: string;
    map?: boolean;
}
export default class ProductChart extends React.Component<CommonChartProps> {
    state: any;
    i: any;
    j: any;
    pieModel: any;
    static defaultProps: {};
    constructor(props: any);
    render(): any;
    UNSAFE_componentWillMount(): void;
}
