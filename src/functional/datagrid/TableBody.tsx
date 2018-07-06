import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export interface TableBodyProps {
    store: any;
    fields: any;
    onSelected ?: any;
    cellRenderer?: any;
    rowRenderer?:any;
    fieldOption?:any;
    showingPageData?:any;
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
            showingPageData: null
        }
    }

    /**
     * Rerender props values
     * @param props
     */
    componentWillReceiveProps(props: any) {
        this.props = props;
        this.setState({
            store: props.store,
            fields: props.fields,
            showingPageData:props.showingPageData
        });
    }

    /**
     * @returns {any}
     */
    render():any {
        return <tbody>{this.getItems()}</tbody>;
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

                    // style
                    let style: standartObject = {};
                    if(valueField.visibility !== undefined && !valueField.visibility){
                        style['display'] = 'none';
                    }

                    if(this.props.fieldOption !== undefined){
                        style['width'] = this.props.fieldOption[valueField.value] + "px";
                    }

                    Cell.push(<td key={j} style={style}>
                        {(self.props.cellRenderer !== undefined) ?  self.props.cellRenderer(value, valueField) : value[valueField.value]}
                    </td>);
                }


                    Rows.push(<tr key={i} className={(self.state.clickActive.indexOf(getId) !== -1) ? 'active' : ''}
                                  onClick={(e) => {
                                      this.onClickRow(e, getId, data[i])
                                  }}>{(self.props.rowRenderer !== undefined) ? self.props.rowRenderer(value, this.props.fields) : Cell}</tr>);

            }
        }

        
        if(this.props.showingPageData.pagination !== true || this.props.store.props.totalCount <= 0) {
            return Rows;
        }else {
            let pagesData = [];
            let start = this.props.showingPageData.pageShow * (this.props.showingPageData.page - 1);
            let finis = this.props.showingPageData.pageShow * this.props.showingPageData.page;

            for(let i = 0; i < Rows.length; i++){
                if(i >= start && i < finis){
                    pagesData.push(Rows[i]);
                }
            }

            return pagesData;
        }

    }


    /**
     * @param e
     * @param active
     * @param data
     */
    public onClickRow(e: any, active: any, data: any): void {
        if (e.metaKey || e.ctrlKey) {
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

}