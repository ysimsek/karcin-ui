import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row, InputGroup, InputGroupAddon, Input, Button, ButtonGroup, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';

export interface TableBodyProps {
    data : any;
    fields : any;
    onSelected ?: any;
}

export interface TableBodyState {
    data : any,
    fields: any,
    clickActive?: any[],
    clickActiveRow?: any[]
}

export default class TableBody extends React.Component<TableBodyProps, TableBodyState> {
    constructor(props:TableBodyProps){
        super(props);
        this.state = {
            data    : this.props.data,
            fields  : this.props.fields,
            clickActive : [],
            clickActiveRow : []
        }
    }

    componentWillReceiveProps(props:any){
        this.setState({
            data:this.props.data,
            fields : this.props.fields
        })
    }


    render() {
        let Rows = [];
        for(let i = 0; i < this.props.data.length; i++) {
            let value = this.props.data[i];
            let id = i;

            let Cell = [];
            for(let j = 0; j < this.state.fields.length; j++){
                let valueField = this.state.fields[j];

                Cell.push(<td key={j}>{value[valueField.value]}</td>);
            }

            if(value.id !== undefined){
                id = value.id;
            }

            Rows.push(<tr key={i} className={(this.state.clickActive.indexOf(id) !== -1 ? 'active' : '')} onClick={(e)=>{this.onClickRow(e,id, this.props.data[i])}}>{Cell}</tr>);
        }
        return <tbody>{Rows}</tbody>;
    }


    public onClickRow(e:any, active:any, data:any) : void {
        if(e.metaKey){
            if(this.state.clickActive.indexOf(active) !== -1){

                // change rows id remove
                this.state.clickActive.splice(this.state.clickActive.indexOf(active), 1);

                // change rows json remove
                for(let i = 0; i < this.state.clickActiveRow.length; i++){
                    if(this.state.clickActiveRow[i].id === active){
                        this.state.clickActiveRow.splice(i, 1);
                    }
                }
            }else {

                //add row id
                this.state.clickActive.push(active);

                // add row json data
                this.state.clickActiveRow.push(data);
            }
        }else {

            // id first remove after add new id
            this.state.clickActive.splice(0, this.state.clickActive.length);
            this.state.clickActive.push(active);

            // json first remove after add new rows json data
            this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
            this.state.clickActiveRow.push(data);
        }

        this.forceUpdate();


        // selectedProps
        if(this.props.onSelected !== undefined){
            this.props.onSelected(this.state.clickActiveRow, this.state.clickActive);
        }
    }

}