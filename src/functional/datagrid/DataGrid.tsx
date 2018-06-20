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
    onSelected?: any;
    /**
     * cell(td) renderer
     */
    cellRenderer?: any;
    /**
     * row(tr) renderer
     */
    rowRenderer?: any;
    /**
     * pagination control
     */
    pagination?: boolean;

    /**
     * show page data
     */
    pageShow?: number | any;
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

    static defaultProps: Partial<DataGridProps> = {
        pagination: false
    };

    /**
     * Initial values
     */
    constructor(props: DataGridProps) {
        super(props);

        this.init(props);

        this.props.store.__callback = () => {
            this.resetData();
        };

        this.pageChange();
    }

    UNSAFE_componentWillReceiveProps(props: DataGridProps) {
        this.init(props);
    }

    /**
     * set the first values
     */
    init(props: DataGridProps) {
        this.state = {
            store: props.store,
            fields: props.fields,
            eventDataGrid: null,
            pageShowData: {'start':0, 'finis': this.props.pageShow}
        }
    }

    /**
     *
     */
    render(): any {
        return <div className="karcin-data-grid" id={'karcinDataGrid' + this.dataGridId} ref={(e) => {
            this.eventDataGrid = e;
        }}>
            {this.returnComponent}
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
                    <TableBody onSelected={this.props.onSelected}
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
         this.forceUpdate();
    }


    componentDidMount() {
        setTimeout(() => {
            this.columnStyle();
            this.dataGridLoadComponent();
        }, 200);

        window.addEventListener('load', () => {
            this.columnStyle();
            this.dataGridLoadComponent();
        })
    }


    resetData() {
        this.forceUpdate();
    }

    columnStyle() {
        if (this.eventDataGrid !== null) {

            // field width
            let fieldWidth: any = {};
            let dataGridWidth = this.eventDataGrid.offsetWidth;
            let totalWidth: number = 0;
            let emptyFieldCount: number = 0;
            let newField: any[] = [];

            this.state.fields.forEach((value: any) => {
                if (value.visibility === undefined || value.visibility) {
                    newField.push(value);
                    fieldWidth[value.value] = (value.width > 0 ? value.width : 0);
                    totalWidth += (value.width > 0) ? value.width : 0;
                    emptyFieldCount += (value.width <= 0 || value.width === undefined ? 0 : 1);
                }
            });

            if (dataGridWidth >= totalWidth && newField.length <= 3) {
                let newCount = (newField.length - emptyFieldCount);
                let newWid = (dataGridWidth - 2) - totalWidth;

                for (let item in fieldWidth) {
                    if (fieldWidth[item] === 0) {
                        fieldWidth[item] = (newWid / newCount) - 8;
                    }
                }
            }

            this.fieldOption = fieldWidth;

        }

    }


    pageChange(event?: any) {

        if(event !== undefined){
            let start = this.state.pageShowData.finis;
            let finis = event.page * this.props.pageShow;

            this.state.pageShowData.start = start;
            this.state.pageShowData.finis = finis;

        }

        this.dataGridLoadComponent();
    }
}

