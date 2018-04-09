import * as React from "react";
import {Row,Col,Label,Card} from "reactstrap";
import {Button,SelectInput,TextInput,FaIcon,Notify} from "karcin-ui";
import {debug} from "util";

const items = [
    {id:1,value:"Bottom Right",position:"BOTTOM_RIGHT"},
    {id:2,value:"Bottom Left",position:"BOTTOM_LEFT"},
    {id:3,value:"Bottom Center",position:"BOTTOM_CENTER"},
    {id:4,value:"Top Right",position:"TOP_RIGHT"},
    {id:5,value:"Top Left",position:"TOP_LEFT"},
    {id:6,value:"Top Center",position:"TOP_CENTER"}
];

export default class NotifyExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            selectPosition : "",
            message:"Default message"
        }
    }
    render(){
        return <Row>
            <Col md={4}>
                <SelectInput
                    name="selectPosition"
                    label={"Notify pozisyonunun seçiniz"}
                    item={this.state.selectPosition}
                    value="value"
                    id="id"
                    items={items}
                    onChange={this.__onSelect.bind(this)}/>
            </Col>
            <Col md={4}>
                <TextInput
                    name="message"
                    label={"Mesaj Yazınız"}
                    value={this.state.message}
                    onChange={this.__onSelect.bind(this)}
                />
            </Col>
        </Row>
    }

    onClick(e){
        debugger;
    }

    __onSelect(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

}