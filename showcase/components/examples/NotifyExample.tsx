import * as React from "react";
import {Button,Row,Col,Label} from "reactstrap";
import {SelectInput,TextInput,FaIcon,Notify} from "karcin-ui";
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
    constructor(props:Object){
        super(props);
        this.state = {
            selectPosition : "",
            message:"Default message"
        }
    }
    render(){
        return <Row>
            <Col md={4}>
                <Label>Notify pozisyonunu seçiniz!</Label>
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
                    value={this.state.message}
                    onChange={this.__onSelect.bind(this)}
                />
            </Col>
            <Button color={""} onClick={this.__notify.bind(this)}>NOTIFY</Button>
            <Button color={""} onClick={this.__topLeft}>custom</Button>
        </Row>
    }

    __onSelect(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

    __notify(){
        let position:string  = "";
        items.forEach(function (v) {
            debugger;
            if(v.id == Number(this.state.selectPosition)){
                position = v.position;
            }
        }.bind(this));
        let data = {}
    }

    __topLeft(e){
        let message = <div>Components import <FaIcon code={"fa-pie-chart"}/></div>;
        let object = {
            message:message, //string or jsx
            time:false,  ///number and boolean
            position:"TOP_LEFT" //string
        };
        //delay kontrolü yap
        Notify.success(object);
    }

    __topRight(e){
        let object = {
            message:"TOP RİGHT",
            time:6,
            position:"TOP_RIGHT"
        };
        Notify.info(object);
    }

    __topCenter(e){
        let object = {
            message:"TOP CENTER",
            time:7,
            position:"TOP_CENTER"
        };
        Notify.warning(object);
    }

    __bottomLeft(e){
        let object = {
            message:"TOP CENTER",
            time:1,
            position:"TOP_CENTER"
        };
        Notify.warning(object);
    }
    __bottomRight(e){
        // Notify.customNotify();
    }
    __bottomCenter(e){

    }
}