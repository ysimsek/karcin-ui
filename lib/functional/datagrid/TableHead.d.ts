import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export interface TableHeadProps {
    fields: any;
    store?: any;
    resetData?: React.EventHandler<any>;
    fieldOption?: any;
    filter?: boolean;
    order?: boolean;
}
export interface TableHeadState {
    fields: any;
    clickActive: any[];
    popover: any[];
    orderActive: any;
    filterRemote: any;
    filterDelay?: any;
    orders: any[];
    filterOption: any;
}
export interface standartObject {
    [key: string]: any;
}
export default class TableHead extends React.Component<TableHeadProps, TableHeadState> {
    static defaultProps: Partial<TableHeadProps>;
    /**
     * Initial values
     * @param {TableHeadProps} props
     */
    constructor(props: TableHeadProps);
    _filterDelay: number;
    _filterInterval: any;
    /**
     * rerender state
     * @param props
     */
    componentWillReceiveProps(props: any): void;
    /**
     * @returns {any}
     */
    render(): any;
    returnItems(): JSX.Element[];
    /**
     * @param {number} param
     */
    popoverOpen(param: number): void;
    orderData(fieldName: any): void;
    orderCallback(): void;
    filterData(fieldName: any, element: any): void;
}
