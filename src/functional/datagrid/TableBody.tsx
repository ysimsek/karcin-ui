import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import GetInput from '../getInput/GetInput';
import TypeFormating from '../../applications/TypeFormating';
import BaseClass from "../../applications/BaseClass";

export interface TableBodyProps {
    store: any;
    fields: any;
    onSelected ?: any;
    cellRenderer?: any;
    rowRenderer?:any;
    fieldOption?:any;
    showingPageData?:any;
    multiSelect?:boolean;
    onDoubleClick?:any;
}

export interface TableBodyState {
    store: any,
    fields: any,
    clickActive: Array<any>,
    clickActiveRow: Array<any>,
    showingPageData: any
}

export interface standartObject {
    [key: string] : any
}

export default class TableBody extends React.Component<TableBodyProps, TableBodyState> {
    /**
     * Initial values
     * @param {TableBodyProps} props
     */
    constructor(props: TableBodyProps) {
        super(props);
        this.state = {
            store: this.props.store,
            fields: this.props.fields,
            clickActive: [],
            clickActiveRow: [],
            showingPageData: props.showingPageData
        }
    }

    /**
     * Rerender props values
     * @param props
     */
    UNSAFE_componentWillReceiveProps(props: TableBodyProps) {
        this.props = props;
        this.setState({
            store : props.store,
            fields : props.fields,
            showingPageData : props.showingPageData
        });
    }

    /**
     * @returns {any}
     */
    render():any {
        let showingControl = true;
        if(this.props.showingPageData.pagination){
            if(this.props.store.props.pageData.start !== undefined){
                showingControl = true;
            }else {
                showingControl = false;
            }
        }
        return <tbody>{(showingControl ? this.getItems() : "")}</tbody>;
    }

    /**
     * get renderer items
     * @returns {any[]}
     */
    getItems(){
        let Rows = [];
        let self = this;
        let data = this.props.store.props.data;


        if(data !== undefined){
            for (let i = 0; i < data.length; i++) {
                let value = data[i];

                let getId:number = i;
                if (value.id !== undefined) {
                    getId = parseInt(value.id);
                }


                let Cell = [];
                for (let j = 0; j < this.state.fields.length; j++) {

                    let valueField = this.state.fields[j];

                    let fieldValData = '';

                    if(valueField.mapping !== undefined){
                        fieldValData = this.mappingDataFind(value, valueField.mapping);
                    }else {
                        fieldValData = value[valueField.value];
                    }


                    new TypeFormating({
                        data: fieldValData,
                        type: (valueField.type !== undefined ? valueField.type : valueField.property)
                    }, (data:any)=>{
                        fieldValData = data;
                    });

                    // style
                    let style: standartObject = {};
                    if(valueField.visibility !== undefined && !valueField.visibility){
                        style['display'] = 'none';
                    }

                    if(this.props.fieldOption !== undefined){
                        style['width'] = this.props.fieldOption[valueField.value] + "px";
                    }

                    Cell.push(<td key={j} style={style}>
                        {(self.props.cellRenderer !== undefined) ?  self.props.cellRenderer(value, valueField) !== undefined ? self.props.cellRenderer(value, valueField) : fieldValData : fieldValData}
                    </td>);

                }

                Rows.push(<tr key={i} className={(self.state.clickActive.indexOf(getId) !== -1) ? 'active' : ''}
                                onClick={(e) => {
                                    if(this.props.onSelected !== false){
                                        this.onClickRow(e, getId, data[i])
                                    }
                                }}
                              onDoubleClick={this.props.onDoubleClick}
                >{(self.props.rowRenderer !== undefined) ? self.props.rowRenderer(value, this.props.fields) !== undefined ? self.props.rowRenderer(value, this.props.fields) : Cell : Cell}</tr>);

            }
        }

        if(!this.props.showingPageData.pagination || this.props.store.__endPoint === 'remoteEndPoint') {
            return Rows;
        }else {
            let pageData = [];
            let pages = this.props.store.props.pageData;

            for(let i = 0; i < Rows.length; i++){
                if(i >= pages.start && i < (pages.start + pages.limit)){
                    pageData.push(Rows[i]);
                }
            }

            return pageData;
        }

    }


    /**
     * @param e
     * @param active
     * @param data
     */
    onClickRow(e: any, active: any, data: any): void {
        if (e.metaKey || e.ctrlKey && this.props.multiSelect) {
            if (this.state.clickActive.indexOf(active) !== -1) {

                // change rows id remove
                this.state.clickActive.splice(this.state.clickActive.indexOf(active), 1);

                // change rows json remove
                for (let i = 0; i < this.state.clickActiveRow.length; i++) {
                    if (this.state.clickActiveRow[i].id === active) {
                        this.state.clickActiveRow.splice(i, 1);
                    }
                }
            } else {

                //add row id
                this.state.clickActive.push(active);

                // add row json data
                this.state.clickActiveRow.push(data);
            }
        } else {

            // id first remove after add new id
            if(this.state.clickActive[0] !== active) {
                this.state.clickActive.splice(0, this.state.clickActive.length);
                this.state.clickActive.push(active);

                // json first remove after add new rows json data
                this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
                this.state.clickActiveRow.push(data);
            }else {
                this.state.clickActive.splice(0, this.state.clickActive.length);
                this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
            }
        }

        this.forceUpdate();


        // selectedProps
        if (this.props.onSelected !== undefined) {
            this.props.onSelected(this.state.clickActiveRow, this.state.clickActive);
        }
    }

    resetSelected(){
        this.setState({
            clickActive: [],
            clickActiveRow: []
        });
    }

    mappingDataFind(response:any,mapping:any) {
        if(response !== undefined && mapping !== undefined){
            return this.findResponseData(response, mapping.split('.'))
        }
    }

    findResponseData(response:any,mapping:any):any {
        if(response !== undefined && response !== null && mapping !== undefined && mapping.length > 0 && response[mapping[0]] !== undefined){
            return mapping.length > 0 ? this.findResponseData(response[mapping[0]], mapping.slice(1)) : response;
        }else {
            return response;
        }
    }

}
