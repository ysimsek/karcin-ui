import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/karcin-ui.css';

import TableBody from './TableBody';
import TableHead from './TableHead';
import Toolbar  from './Toolbar';

export interface DataGridProps {
    /**
     * Set the array data
     */
    data?:Array<any>;
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
    rowRenderer?:any;
}

export interface DataGridState {
    data?: Array<any>;
    fields?: Array<any>;
    toolbar?: Array<any>;
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    /**
     * @type {number}
     */
    private dataGridId = Math.floor(Math.random() * 20);

    /**
     * Initial values
     */
    constructor(props: DataGridProps) {
        super(props);

        this.init(props);

    }

    componentWillReceiveProps(props:DataGridProps){
        this.init(props);
    }
    /**
     * set the first values
     */
    private init(props:DataGridProps){
        this.state = {
            data: props.data,
            fields: props.fields
        }
    }

    /**
     *
     */
    render():any {
        return <div className="karcin-data-grid" id={'karcinDataGrid' + this.dataGridId}>
            <Toolbar data={this.props.toolbar}/>
            <div className="data-grid-body">
                <table className="table table-bordered dataGrid">
                    <TableHead fields={this.state.fields}/>
                    <TableBody onSelected={this.props.onSelected} data={this.state.data} cellRenderer={this.props.cellRenderer} rowRenderer={this.props.rowRenderer} fields={this.state.fields}/>
                </table>
            </div>
            {/*<Toolbar type="footer"/>*/}
        </div>;
    }

}