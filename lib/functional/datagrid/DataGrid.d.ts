import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/karcin-ui.css';
import { DOMAttributes } from "react";
export interface DataGridProps extends DOMAttributes<any> {
    /**
     * Set the array data
     */
    store?: any;
    /**
     * Set the data array models
     */
    fields?: Array<any>;
    /**
     * Set the toolbar array models
     */
    toolbar?: Array<any>;
    /**
     * Set the selected data returned func
     */
    onSelected?: any;
    /**
     * cell(td) renderer
     */
    cellRenderer?: React.EventHandler<any> | any;
    /**
     * row(tr) renderer
     */
    rowRenderer?: React.EventHandler<any> | any;
    /**
     * pagination control
     */
    pagination?: boolean;
    /**
     * show page data
     */
    pageShow?: number | any;
    /**
     * change page
     */
    changePage?: React.EventHandler<any> | any;
    /**
     * page size
     */
    page?: number | any;
    /**
     * grud operation (update, add, remove)
     */
    grud?: Array<any> | any;
    /***
     * data form label text
     */
    dataFormLabelText?: any;
    /**
     * data form name text
     */
    dataFormNameText?: any;
    /**
     * multi selected option
     */
    multiSelect?: boolean;
    /**
     * datagrid Title
     */
    title?: string | any;
    /**
     * filter özelliğini kaptmak için kullanılır
     */
    filter?: boolean;
    /**
     * filter özelliğini kaptmak için kullanılır
     */
    order?: boolean;
}
export interface DataGridState {
    store?: any;
    fields?: Array<any> | any;
    toolbar?: Array<any> | any;
    eventDataGrid: any;
    fieldOption?: any;
    pageShowData?: any;
}
export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    /**
     * @type {number}
     */
    private dataGridId;
    eventDataGrid: any;
    fieldOption: any;
    returnComponent: any;
    tbodyRef: any;
    loadingShow: any;
    _selectedRow: Array<any>;
    static defaultProps: Partial<DataGridProps>;
    /**
     * Initial values
     */
    constructor(props: DataGridProps);
    UNSAFE_componentWillReceiveProps(props: DataGridProps): void;
    /**
     * set the first values
     */
    init(props: DataGridProps): void;
    storeRun(): void;
    /**
     *
     */
    render(): any;
    dataGridLoadComponent(): any;
    onDoubleClick(e: any): void;
    componentDidMount(): void;
    resetData(): void;
    resetSelected(): void;
    columnStyle(): void;
    pageChange(event?: any): void;
}
