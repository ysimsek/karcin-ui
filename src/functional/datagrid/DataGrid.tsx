import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/sass/table.scss';

import TableBody from './TableBody';
import TableHead from './TableHead';
import Toolbar  from './Toolbar';

export interface DataGridProps {
    data?:any;
    fields?: any[];
    toolbar?: any[];
    onSelected : any;
}

export interface DataGridState {
    data?: any;
    fields?: any[];
    dataGridId : any;
    toolbar?: any[];
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    constructor(props: DataGridProps) {
        super(props);

        this.state = {
            data : this.props.data,
            fields : this.props.fields,
            dataGridId: Math.floor(Math.random() * 20)
        }
    }

    componentWillReceiveProps(props:any){
        this.setState({
            data:this.props.data,
            fields : this.props.fields
        })
    }


    render() {
        return <div className="karcin-data-grid" id={'karcinDataGrid' + this.state.dataGridId}>
            <Toolbar data={this.props.toolbar}/>
            <div className="data-grid-body">
                <table className="table table-bordered dataGrid">
                    <TableHead fields={this.state.fields}/>
                    <TableBody onSelected={this.props.onSelected} data={this.state.data} fields={this.state.fields}/>
                </table>
            </div>
            <Toolbar type="footer"/>
        </div>;
    }

}