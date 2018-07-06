import * as React from "react";
import  Button from "../../functional/button/Button";
import DateInput from "../../datepicker/DateInput";
import NumericInput from "../../inputs/NumericInput";
import PasswordInput from "../../inputs/PasswordInput";
import SelectInput from "../../inputs/selectInput/SelectInput";
import TextInput from "../../inputs/TextInput";
import TextArea from "../../inputs/TextArea";
import RadioInput from "../../inputs/RadioInput";
import CheckInput from "../../inputs/CheckInput";

import {Row,Col} from "reactstrap";





export interface DataFormProps{
    col ?: number;
    fields ?: Array<any> | any;
    returnData ?: any;
}

export default class DataForm extends React.Component<any,any>{


    fieldLength = 0;

    static defaultProps = {
        col : 2,
        buttonName : "Kaydet"
    }

    constructor(props:any){
        super(props);
        this.state = {
        }

    }
    render(){

        return <div><Row>
            {this.returnElements(this.props.fields)}
        </Row>
            <div style={{textAlign : "right", paddingTop : 10}}>
                <Button name={""} onClick={this.getReturnStateObject.bind(this)}>{this.props.buttonName}</Button>
            </div>
        </div>
    }

    returnElements(fields:any){
        let components:Array<any> = [];
        let me:any = this;
        this.fieldLength = fields.length;
        fields.map(function (val:any,idx:number | string) {
            switch (val.type){
                case "string" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getTextInput(val)}</Col>);
                    break;
                case "password" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getPasswordInput(val)}</Col>);
                    break;
                case "int" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getNumericInput(val)}</Col>);
                    break;
                case "select" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getSelectInput(val)}</Col>);
                    break;
                case "date" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getDateInput(val)}</Col>);
                    break;
                case "radio" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getRadioInput(val)}</Col>);
                    break;
                case "check" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getCheckInput(val)}</Col>);
                    break;
                case "textarea" :
                    components.push(<Col key={idx} md={12/me.props.col}>{me.getTextArea(val)}</Col>);
                    break;

            }
        });
        return components;
    }
    getTextInput(value:any){
        return <TextInput
            name={value.name}
            label={value.label}
            value={this.state[value.name]}
            onChange={this.handleChange.bind(this)}
        />
    }
    getPasswordInput(value:any){
        return <PasswordInput
            name={value.name}
            label={value.label}
            value={this.state[value.name]}
            onChange={this.handleChange.bind(this)}
        />
    }
    getNumericInput(value:any){
        return <NumericInput
            name={value.name}
            value={this.state[value.name]}
            label={value.label}
            onChange={this.handleChange.bind(this)}
        />
    }
    getSelectInput(value:any){
        return <SelectInput
            name={value.name}
            items={this.props.values[value.name]}
            label={value.label}
            id={value.idField}
            value={value.valueField}
            onChange={this.handleChange.bind(this)}
        />
    }
    getDateInput(value:any){
        return <DateInput
            name={value.name}
            label={value.label}
            value={this.state[value.name]}
            handleChange={this.handleChange.bind(this)}
        />
    }

    /**
     * TODO : RadioInput , SelectInput , CheckInput için sabit dataların olması sağlanacak
     * Dışardan data almaya müsait olacaktır.
     * @param value
     * @returns {any}
     */
    getRadioInput(value:any){
        return <RadioInput
            name={value.name}
            value={this.state[value.name]}
            label={value.label}
            inline
            items={this.props.values[value.name]}
            idField={value.idField}
            textField={value.valueField}
            onChange={this.handleChange.bind(this)}/>
    }
    getCheckInput(value:any){
        return <CheckInput
            name={value.name}
            // item={this.items[0]}
            items={this.props.values[value.name]}
            label={value.label}
            id={value.idField}
            value={value.valueField}
            onChange={this.handleChange.bind(this)}/>
    }

    /**
     * TODO : TEXTAREA LABEL PROPSUNU YAP
     * @param value
     * @returns {any}
     */
    getTextArea(value:any){
        return <TextArea
            name={value.name}
            label={value.label}
            value={this.state[value.name]}
            onChange={this.handleChange.bind(this)}
        />
    }


    /**
     * TODO : POPOVER AND TOOLTIP EKLE
     * @param e
     */
    getReturnStateObject(e:any){
        let a = this.state;
        this.props.fields.map(function (val:any,idx: number) {
            console.log(a);
            debugger;
        });
        this.props.returnData(this.state);
    }

    handleChange(e:any){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

    /**
     * TODO : OBJEMİ DEĞİL Mİ KONTROLÜ YAP
     * @constructor
     */
    UNSAFE_componentWillMount(){
        let state:any = {};
        let values  =  this.props.values;
        this.props.fields.map(function (val:any,idx:string | number) {
            debugger;
            if(typeof values[val.name] == "string"){
                state[val.name] = values[val.name];
            }else if(val.type == "date"){
                //bir şey yapılmasın
            }
            else{
                state[val.name] = null;
            }
        });
        this.setState(state);
    }
}