import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/karcin-ui.css';
export interface DataGridProps {
    /**
     * Set the array data
     */
    store?: any;
    /**
     * Set the data array models
     */
    fields?: Array<any>;
    /**
     * Set the selected data returned func
     */
    onSelected?: any;
    /**
     * multi select
     */
    onDoubleSelected?: any;
    /**
     * multi selected option
     */
    multiSelect?: boolean;
    /**
    * pagination control
    */
    pagination?: boolean;
    /**
     * show page data
     */
    pageShow?: number | any;
    toolbars?: any;
    title?: any;
    fieldShowing?: any;
    select?: boolean | any;
}
export interface DataGridState {
    store?: any;
    fields?: Array<any> | any;
}
export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    static defaultPorps: Partial<DataGridProps>;
    tbodyRef: any;
    constructor(props: DataGridProps);
    UNSAFE_componentWillReceiveProps(props: DataGridProps): void;
    _init(props: DataGridProps): void;
    render(): JSX.Element;
    componentDidMount(): void;
    resetData(): void;
    resetSelected(): void;
    storeRun(): void;
    fieldOptionReset(fields: any): void;
}
