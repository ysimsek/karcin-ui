import * as React from "react";
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/karcin-ui.css';

import TableBody from './TableBody';
import TableHead from './TableHead';
import Toolbar from './Toolbar';
import {Data} from "reactstrap/lib/Popper";

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
     * Set the toolbar array models
     */
    toolbar?: Array<any>;
    /**
     * Set the selected data returned func
     */
    onSelected?: React.EventHandler<any> | any;
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
}

export interface DataGridState {
    store?: any;
    fields?: Array<any> | any;
    toolbar?: Array<any> | any;
    eventDataGrid: any;
    fieldOption?: any;
    pageShowData?:any;
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    /**
     * @type {number}
     */
    private dataGridId = Math.floor(Math.random() * 20);

    eventDataGrid: any;
    fieldOption: any;
    returnComponent: any;
    tbodyRef:any;

    static defaultProps: Partial<DataGridProps> = {
        pagination: false,
        page:1
    };

    /**
     * Initial values
     */
    constructor(props: DataGridProps) {
        super(props);

        this.init(props);

        this.props.store.__callback = () => {
            this.resetData();
            this.columnStyle();
            this.resetSelected()
        };
    }

    UNSAFE_componentWillReceiveProps(props: DataGridProps) {
        this.init(props);
        this.forceUpdate();
    }

    /**
     * set the first values
     */
    init(props: DataGridProps) {
        this.props = props;
        this.state = {
            store: props.store,
            fields: props.fields,
            eventDataGrid: null,
            pageShowData: {page: this.props.page, pageShow:this.props.pageShow, pagination:this.props.pagination}
        }
    }

    /**
     *
     */
    render(): any {

        return <div className="karcin-data-grid" id={'karcinDataGrid' + this.dataGridId} ref={(e) => {
            this.eventDataGrid = e;
        }}>
            {this.dataGridLoadComponent()}
        </div>;
    }

    dataGridLoadComponent() {
        let self = this;
        this.returnComponent = <div>
            <Toolbar data={this.props.toolbar} store={this.props.store}/>
            <div className="data-grid-body">
                <table className="table table-bordered dataGrid">
                    <TableHead fields={this.state.fields}
                               fieldOption={this.fieldOption}
                               store={this.props.store}
                               resetData={() => {
                                   this.resetData()
                               }}/>
                    <TableBody ref={ref => {this.tbodyRef = ref; }}
                                onSelected={this.props.onSelected}
                               fieldOption={this.fieldOption}
                               store={this.props.store}
                               cellRenderer={this.props.cellRenderer}
                               rowRenderer={this.props.rowRenderer}
                               fields={this.state.fields}
                               showingPageData={this.state.pageShowData}/>
                </table>
            </div>
            <Toolbar type="footer"
                     store={this.props.store}
                     options={{
                        'pagination': this.props.pagination,
                        'pageShow': this.props.pageShow,
                        'changePageFunc': (e: any) => {
                            self.pageChange(e)
                        }
                    }}/>
        </div>;

        return this.returnComponent;
    }


    componentDidMount() {
        setTimeout(() => {
            this.columnStyle();
        }, 200);

        window.addEventListener('load', () => {
            this.columnStyle();
        })
    }


    resetData() {
        this.forceUpdate();
    }

    resetSelected(){
        this.tbodyRef.resetSelected();
    }

    columnStyle() {
        if (this.eventDataGrid !== null) {
            this.fieldOption = {};
            // field width
            let fieldWidth: any = {};
            let dataGridWidth = this.eventDataGrid.offsetWidth;
            let dataGridHeight = this.eventDataGrid.offsetHeight;
            let tableBodyHeight = this.eventDataGrid.querySelector('tbody') !== null ? this.eventDataGrid.querySelector('tbody').offsetHeight : 0;
            let totalWidth: number = 0;
            let emptyFieldCount: number = 0;
            let newField: any[] = [];


            let scrollSize = 0;
            if(tableBodyHeight <= 0 && tableBodyHeight > dataGridHeight){
                scrollSize = 8;
            }


            this.state.fields.forEach((value: any) => {
                if (value.visibility === undefined || value.visibility) {
                    newField.push(value);
                    fieldWidth[value.value] = (value.width > 0 ? value.width : 0);
                    totalWidth += (value.width > 0) ? value.width : 0;
                    emptyFieldCount += (value.width <= 0 || value.width === undefined ? 0 : 1);
                }
            });

            if (dataGridWidth >= totalWidth) {
                let newCount = (newField.length - emptyFieldCount);
                let newWid = ((dataGridWidth - 2) - totalWidth) - scrollSize;

                for (let item in fieldWidth) {
                    if (fieldWidth[item] === 0) {
                        fieldWidth[item] = ((newWid - 1) / newCount);
                    }
                }
            }

    

            this.fieldOption = fieldWidth;
            this.eventDataGrid = null;
            this.forceUpdate();

        }

    }


    pageChange(event?: any) {
        if(event !== undefined && this.props.changePage){
            this.props.changePage(event.page);
        }
    }
}

