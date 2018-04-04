import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row, InputGroup, InputGroupAddon, Input, Button, ButtonGroup, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';

export interface TableBodyProps {
    data : any,
    fields : any
}

export interface TableBodyState {
    data : any,
    fields: any,
    clickActive : any[]
}

export default class TableBody extends React.Component<TableBodyProps, TableBodyState> {
    constructor(props:TableBodyProps){
        super(props);
        this.state = {
            data    : this.props.data,
            fields  : this.props.fields,
            clickActive : []
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

            let Cell = [];
            for(let j = 0; j < this.state.fields.length; j++){
                let valueField = this.state.fields[j];

                Cell.push(<td key={j}>{value[valueField.value]}</td>);
            }

            Rows.push(<tr key={i} className={(this.state.clickActive.indexOf(i) !== -1 ? 'active' : '')} onClick={(e)=>{this.onClickRow(e,i)}}>{Cell}</tr>);
        }
        return <tbody>{Rows}</tbody>;
    }


    public onClickRow(e:any, active:any) : void {
        if(e.metaKey){
            if(this.state.clickActive.indexOf(active) !== -1){
                this.state.clickActive.splice(this.state.clickActive.indexOf(active), 1);
            }else {
                this.state.clickActive.push(active);
            }
        }else {
            this.state.clickActive.splice(0, this.state.clickActive.length);
            this.state.clickActive.push(active);
        }
        this.forceUpdate();
    }

}