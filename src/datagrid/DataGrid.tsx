import * as React from "react";
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/karcin-ui.css';

import TableBody from './Tbody';
import TableHead from './Thead';
import Header from './Header';
import Footer from './Footer'; 

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
    onSelected?: any;

    /**
     * multi select 
     */
    onDoubleSelected?:any;

     /**
      * multi selected option
      */
     multiSelect?:boolean;

     /**
     * pagination control
     */
    pagination?: boolean;

    /**
     * show page data
     */
    pageShow?: number | any;

    /**
     * header toolbars
     */
    toolbars?:any;

    /**
     * header title
     */
    title?:any;

    /**
     * column option menu showing
     */
    fieldShowing?:any;

    /**
     * row menu select
     */
    select?:boolean | any;

    /**
     * context menu 
     */
    rowContextData?:any;

}

export interface DataGridState {
    store?: any;
    fields?: Array<any> | any;
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {

    static defaultPorps:Partial<DataGridProps> = {

    }

    tbodyRef:any = null;
    constructor(props:DataGridProps){
        super(props);
        this._init(props);

        this.props.store.__callback = () => {
            this.resetSelected();
            this.resetData();
        };
    }

    UNSAFE_componentWillReceiveProps(props:DataGridProps){
        this._init(props);
    }

    _init(props:DataGridProps){
        this.state = {
            store : props.store,
            fields : props.fields
        }
    }

    render(){
        return(<div className="karcin-datagrid">
            <div className="datagrid-table table">
                {(this.props.title !== undefined || this.props.toolbars !== undefined ? <Header store={this.props.store} fields={this.props.fields} {...this.props}></Header> : '')}  
                <TableHead 
                    store={this.state.store} 
                    fields={this.state.fields} 
                    fieldOptionReset={this.fieldOptionReset.bind(this)}  
                    ref={(e:any) => this.tbodyRef = e} {...this.props}/> 
                <TableBody store={this.state.store} fields={this.state.fields} ref={(e) => this.tbodyRef = e} {...this.props}/>
                
                {(this.props.pagination !== undefined && this.props.pagination ) ? <Footer store={this.props.store} fields={this.props.fields} {...this.props}></Footer> : ''}
            </div>
        </div>)
    }

    componentDidMount(){
        this.props.store.pagination(this.props.pageShow);
        this.props.store.storeRead();
    }

    resetData(){
        this.forceUpdate();
    }

    resetSelected(){
        if(this.tbodyRef !== null){
           this.tbodyRef.resetSelected();
        }
    }

    storeRun(){
        this.props.store.storeRead();
    }

    fieldOptionReset(fields:any){
        if(fields !== undefined){
            this.setState({
                fields:fields
            });
        }
    }


}