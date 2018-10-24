import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export interface TableBodyProps {
    store: any;
    fields: any;
    onSelected?: any;
    cellRenderer?: any;
    rowRenderer?: any;
    fieldOption?: any;
    showingPageData?: any;
    multiSelect?: boolean;
    onDoubleClick?: any;
}
export interface TableBodyState {
    store: any;
    fields: any;
    clickActive: Array<any>;
    clickActiveRow: Array<any>;
    showingPageData: any;
}
export interface standartObject {
    [key: string]: any;
}
export default class TableBody extends React.Component<TableBodyProps, TableBodyState> {
    /**
     * Initial values
     * @param {TableBodyProps} props
     */
    constructor(props: TableBodyProps);
    /**
     * Rerender props values
     * @param props
     */
    UNSAFE_componentWillReceiveProps(props: TableBodyProps): void;
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * get renderer items
     * @returns {any[]}
     */
    getItems(): JSX.Element[];
    /**
     * @param e
     * @param active
     * @param data
     */
    onClickRow(e: any, active: any, data: any): void;
    resetSelected(): void;
    mappingDataFind(response: any, mapping: any): any;
    findResponseData(response: any, mapping: any): any;
}
