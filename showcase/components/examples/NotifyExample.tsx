import * as React from "react";
import {Row,Col,Label,Card} from "reactstrap";
import {Button,SelectInput,TextInput,NumericInput,FaIcon,Notify} from "karcin-ui";

const items = [
    {id:1,value:"Bottom Right",position:"bottom-right"},
    {id:2,value:"Bottom Left",position:"bottom-left"},
    {id:3,value:"Bottom Center",position:"bottom-center"},
    {id:4,value:"Top Right",position:"top-right"},
    {id:5,value:"Top Left",position:"top-left"},
    {id:6,value:"Top Center",position:"top-center"}
];

export default class NotifyExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            position : "",
            message:"Mesaj",
            second: 5
        }
    }

    render(){
        return (
            <div>
            <Row>
                <Col md={4}>
                    <SelectInput
                        name="position"
                        label={"Notify pozisyonunu seçiniz"}
                        value="value"
                        id="position"
                        items={items}
                        onChange={this.selectOnChange.bind(this)}/>
                </Col>
                <Col md={4}>
                    <TextInput
                        name="message"
                        label={"Mesaj Yazınız"}
                        value={this.state.message}
                        onChange={this.onChange.bind(this)}
                    />
                </Col>
                <Col md={4}>
                    <NumericInput
                        name={"second"}
                        value={this.state.second}
                        label={"Notify Süresini(sn) Yazınız"}
                        onChange={this.onChange.bind(this)}
                    />
                </Col>
            </Row>
            <hr/>
            <div>
                <div className={"form"}>
                    <Button name={"success"} color="success" outline onClick={this.success.bind(this)}>Success</Button>{' '}
                    <Button name={"warning"} color="warning" outline onClick={this.warning.bind(this)}>Warning</Button>{' '}
                    <Button name={"error"} color="danger" outline onClick={this.error.bind(this)}>Error</Button>{' '}
                    <Button name={"info"} color="info" outline onClick={this.info.bind(this)}>Info</Button>{' '}
                    <Button name={"custom"} color="secondary" outline onClick={this.custom.bind(this)}>Custom modified</Button>{' '}
                    <Button name={"all"} color={"success"} outline onClick={this.all.bind(this)}>All notify</Button>{' '}
                    <Button color="dark" outline onClick={this.successDefault.bind(this)}>Default Message</Button>{' '}
                </div>
            </div>
            <hr/>
        </div>
        );
    }


    success(e){
        Notify.success({message:this.state.message,position:this.state.position,time:this.state.second});
    }
    error(e){
        Notify.error({message:this.state.message,position:this.state.position,time:this.state.second});
    }
    warning(e){
        Notify.warning({message:this.state.message,position:this.state.position,time:this.state.second});
    }
    info(e){
        Notify.info({message:this.state.message,position:this.state.position,time:this.state.second});
    }
    custom(e){
        Notify.customNotify({message:this.state.message,position:this.state.position,time:this.state.second});
    }
    all(e){
        Notify.notify({message:this.state.message,position:this.state.position,time:this.state.second})
    }
    successDefault(e){
        Notify.success("Only just message : "+ this.state.message)
    }
    selectOnChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.id;
        this.setState(state);
    }

    onChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

}
