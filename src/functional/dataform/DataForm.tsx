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
    nameText?:any,
    labelText?:any,
    visibilityText?:any
    typeText?:any;
}

export default class DataForm extends React.Component<any,any>{


    fieldLength = 0;

    static defaultProps = {
        col : 2,
        buttonName : "Kaydet",
        nameText: "name",
        labelText:"label",
        typeText:"type",
        visibilityText: "visibility"
    }

    constructor(props:any){
        super(props);
        this.state = {
        }

    }
    render(){

        return <div className={"karcin-dataform"}>
            <Row>
                {this.returnElements(this.props.fields)}
            </Row>
        </div>
    }

    returnElements(fields:any){
        let components:Array<any> = [];
        let me:any = this;
        this.fieldLength = fields.length;
        fields.map((val:any,idx:number | string) =>  {
            if(val[this.props.visibilityText] || val[this.props.visibilityText] === undefined){
                switch (val[this.props.typeText]){
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
            }
        });
        return components;
    }
    getTextInput(value:any){
        return <TextInput
            name={value[this.props.nameText]}
            label={value[this.props.labelText]}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }
    getPasswordInput(value:any){
        return <PasswordInput
            name={value[this.props.nameText]}
            label={value[this.props.labelText]}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }
    getNumericInput(value:any){
        return <NumericInput
            name={value[this.props.nameText]}
            value={this.state[value[this.props.nameText]]}
            label={value[this.props.labelText]}
            onChange={this.handleChange.bind(this)}
        />
    }
    getSelectInput(value:any){
        return <SelectInput
            name={value[this.props.nameText]}
            items={this.props.values[value[this.props.nameText]]}
            label={value[this.props.labelText]}
            id={value.idField}
            value={value.valueField}
            onChange={this.handleChange.bind(this)}
        />
    }
    getDateInput(value:any){
        return <DateInput
            name={value[this.props.nameText]}
            label={value[this.props.labelText]}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
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
            name={value[this.props.nameText]}
            value={this.state[value[this.props.nameText]]}
            label={value[this.props.labelText]}
            inline
            formControl={true}
            items={this.props.values[value[this.props.nameText]]}
            idField={value.idField}
            textField={value.valueField}
            onChange={this.handleChangeRadio.bind(this)}/>
    }
    getCheckInput(value:any){
        return <CheckInput
            name={value[this.props.nameText]}
            // item={this.items[0]}
            items={this.props.values[value[this.props.nameText]]}
            label={value[this.props.labelText]}
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
            name={value[this.props.nameText]}
            label={value[this.props.labelText]}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }


    /**
     * TODO : POPOVER AND TOOLTIP EKLE
     */
    getChangeData() {
        debugger
        let data:any = this.state;
        return data;
    }

    handleChange(e:any){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

    handleChangeRadio(e:any){
        let name = e.target.name;
        let state = [];
        let fields = this.props.fields;
        let values = this.props.values;
        let ffRadio = e.target.classList.value;
        if(fields.length>0) {
            fields.map((field) => {
                if (field.type == "radio") {
                    if (values[field.name] != undefined) {
                        values[field.name].map((value) => {
                            if (value.id == Number(e.target.value)) {
                                state[e.target.name] = value
                            }
                        })
                    }
                }
            })
        }
        this.setState(state);
    }

    /**
     * TODO : OBJEMİ DEĞİL Mİ KONTROLÜ YAP
     * @constructor
     */
    UNSAFE_componentWillMount(){
        let state:any = {};
        let values  =  this.props.values;
        this.props.fields.map((val:any,idx:string | number) => {
            if(typeof values[val[this.props.nameText]] == "string"){
                state[val[this.props.nameText]] = values[val[this.props.nameText]];
            }else if(val[this.props.typeText] == "date"){
                //bir şey yapılmasın
            } else{
                state[val[this.props.nameText]] = values[val[this.props.nameText]] || null;
            }
        });
        this.setState(state);
    }
}
