import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/sass/table.scss';

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
}

export interface DataGridState {
    data?: Array<any>;
    fields?: Array<any>;
    toolbar?: Array<any>;
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {

    private dataGridId = Math.floor(Math.random() * 20);

    constructor(props: DataGridProps) {
        super(props);

        this.init(props);

    }

    componentWillReceiveProps(props:DataGridProps){
        this.init(props);
    }

    private init(props:DataGridProps){
        this.state = {
            data: props.data,
            fields: props.fields
        }
    }


    render() {
        return <div className="karcin-data-grid" id={'karcinDataGrid' + this.dataGridId}>
            <Toolbar data={this.props.toolbar}/>
            <div className="data-grid-body">
                <table className="table table-bordered dataGrid">
                    <TableHead fields={this.state.fields}/>
                    <TableBody onSelected={this.props.onSelected} data={this.state.data} fields={this.state.fields}/>
                </table>
            </div>
            {/*<Toolbar type="footer"/>*/}
        </div>;
    }

}