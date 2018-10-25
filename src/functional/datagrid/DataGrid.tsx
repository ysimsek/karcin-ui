import * as React from "react";
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/karcin-ui.css';

import TableBody from './TableBody';
import TableHead from './TableHead';
import Toolbar from './Toolbar';
import Loading from '../loading/Loading';
import {DOMAttributes} from "react";

export interface DataGridProps extends DOMAttributes<any>{
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
    toolbar?: Array<any> | any;
    /**
     * Set the selected data returned func
     */
    onSelected?: any;
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
     grud?:Array<any> | any;

     /***
      * data form label text
      */
     dataFormLabelText?:any;

     /**
      * data form name text
      */

     dataFormNameText?:any;

     /**
      * multi selected option
      */
     multiSelect?:boolean;

     /**
      * datagrid Title
      */
     title?:string | any;

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
    loadingShow:any = {show:false}

    _selectedRow:Array<any> = [];

    static defaultProps: Partial<DataGridProps> = {
        pagination: false,
        page:1,
        multiSelect:false
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
            this.resetSelected();
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
        this.state = {
            store: props.store,
            fields: props.fields,
            eventDataGrid: null,
            pageShowData: {page: this.props.page, pageShow:this.props.pageShow, pagination:this.props.pagination},
        }
    }

    storeRun(){
        this.props.store.pagination(this.props.page, this.props.pageShow);
        this.props.store.storeRead();
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

        // loading control
        if(this.props.store.props.endPoint !== undefined && this.props.store.props.endPoint.props.endPoint === 'remoteEndPoint' && this.loadingShow.response === undefined){
            this.loadingShow.show = true;
        }else {
            this.loadingShow.show = false;
        }

        this.returnComponent = <div>
            <Toolbar
                data={this.props.toolbar}
                store={this.props.store}
                type="header"
                selectedRow={this._selectedRow}
                dataFormLabelText={this.props.dataFormLabelText}
                dataFormNameText={this.props.dataFormNameText}
                {...this.props}
                />
            <div className="data-grid-body">
                <table className="table table-bordered dataGrid">
                    <TableHead fields={this.state.fields}
                               fieldOption={this.fieldOption}
                               store={this.props.store}
                               resetData={() => {
                                   this.resetData()
                               }}
                               {...this.props}
                               />
                    <Loading show={false} size={'inset'} />
                    <TableBody ref={ref => {this.tbodyRef = ref; }}
                                onSelected={(this.props.onSelected !== false ? (data:any, select:any)=>{
                                    this._selectedRow = data;
                                    if(this.props.onSelected !== undefined){
                                        this.props.onSelected(data, select);
                                    }
                                } : this.props.onSelected)}
                               onDoubleClick={this.onDoubleClick.bind(this)}
                               fieldOption={this.fieldOption}
                               store={this.props.store}
                               cellRenderer={this.props.cellRenderer}
                               rowRenderer={this.props.rowRenderer}
                               fields={this.state.fields}
                               showingPageData={this.state.pageShowData}
                               multiSelect={this.props.multiSelect}/>
                </table>
            </div>

            <Toolbar store={this.props.store}
                     {...this.props}
                     changePage={(e:any)=>{
                            this.pageChange(e);
                        }}/>
        </div>;

        return this.returnComponent;
    }

    onDoubleClick(e:any){
        this.props.onDoubleClick != undefined ? this.props.onDoubleClick(e) : null;
    }


    componentDidMount() {
        this.storeRun();

        setTimeout(() => {
            this.columnStyle();
            this.dataGridLoadComponent();
        }, 200);

        window.addEventListener('load', () => {
            this.columnStyle();
            this.dataGridLoadComponent();
        });

        window.addEventListener('resize', () => {
            this.columnStyle();
            this.dataGridLoadComponent();
        });
    }

    resetData() {
        this.loadingShow.show = false;
        this.loadingShow['response'] = true;
        this.forceUpdate();
    }

    resetSelected(){
        if(this.tbodyRef !== null){
            this.tbodyRef.resetSelected();
        }
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
        if(event !== undefined){
            this.props.store.pagination(event.page, this.props.pageShow);
        }
    }
}
