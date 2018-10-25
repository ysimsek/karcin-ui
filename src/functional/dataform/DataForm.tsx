import * as React from "react";

import DateInput from "../../datepicker/DateInput";
import NumericInput from "../../inputs/NumericInput";
import PasswordInput from "../../inputs/PasswordInput";
import SelectInput from "../../inputs/selectInput/SelectInput";
import ColorInput from "../../inputs/ColorInput";
import TextInput from "../../inputs/TextInput";
import TextArea from "../../inputs/TextArea";
import RadioInput from "../../inputs/RadioInput";
import CheckInput from "../../inputs/CheckInput";
import LookUp from "../../functional/lookup/LookUp";
import Store from "../../store/Store";

import {Row,Col,Alert} from "reactstrap";


export interface DataFormProps{
    col ?: number;
    /**
     * string, password, int, select, date, radio, check, textarea, lookup, alert, color
     */
    fields : Array<any> | any;
    returnData ?: any;
    nameText?:any,
    labelText?:any,
    visibilityText?:any
    typeText?:any;
    values : Array<any> |any;
    label?:boolean;
}

export default class DataForm extends React.Component<DataFormProps,any>{


    fieldLength:number = 0;

    static defaultProps = {
        col : 2,
        buttonName : "Kaydet",
        nameText: "name",
        labelText:"label",
        typeText:"type",
        visibilityText: "visibility"
    }
    state:any = {}
    constructor(props:any){
        super(props);

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
                    case "lookup" :
                        components.push(<Col key={idx} md={12/me.props.col}>{me.getLookUp(val)}</Col>);
                        break;
                    case "alert" :
                        components.push(<Col key={idx} md={12/me.props.col}>{me.getAlert(val)}</Col>);
                        break;
                    case "color" :
                        components.push(<Col key={idx} md={12/me.props.col}>{me.getColorInput(val)}</Col>);
                        break;
                }
            }
        });
        return components;
    }

    getTextInput(value:any){
        return <TextInput
            name={value[this.props.nameText]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    getPasswordInput(value:any){
        return <PasswordInput
            name={value[this.props.nameText]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    getNumericInput(value:any){
        return <NumericInput
            name={value[this.props.nameText]}
            value={this.state[value[this.props.nameText]]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * SelectInput component
     * @param value
     * @returns {any}
     */
    getSelectInput(value:any){
        return <SelectInput
            name={value[this.props.nameText]}
            items={this.props.values[value[this.props.nameText]]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            id={value.idField}
            value={value.valueField}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * DateInput
     * @param value
     * @returns {any}
     */
    getDateInput(value:any){
        return <DateInput
            name={value[this.props.nameText]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
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
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            inline
            formControl={true}
            items={this.props.values[value[this.props.nameText]]}
            idField={value.idField}
            textField={value.valueField}
            onChange={this.handleChangeRadio.bind(this)}/>
    }

    /**
     * CheckInput Component
     * @param value
     * @returns {any}
     */
    getCheckInput(value:any){
        return <CheckInput
            name={value[this.props.nameText]}
            // item={this.items[0]}
            items={this.props.values[value[this.props.nameText]]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            id={value.idField}
            value={value.valueField}
            onChange={this.handleChange.bind(this)}/>
    }

    /**
     * @param value
     * @returns {any}
     */
    getTextArea(value:any){
        return <TextArea
            name={value[this.props.nameText]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * LookUp component
     * @param value
     */
    getLookUp(value:any){
        let values:any = this.props.values;
        let store:any = null, fieldLookup:any = [], textField;
        if(values[value.name] != undefined){
            let inStore = values[value.name].store;
            fieldLookup = values[value.name].fields;
            store =new Store(
                inStore
            )
        }
        return <LookUp
                    field={fieldLookup}
                    store={store}
                    label={this.props.label != false ? value.label : undefined}
                    name={value.name}
                    textField={value.textField}
                    onChange={this.onChange.bind(this)}/>
    }

    /**
     * Alert component
     * @param value
     */
    getAlert(value:any){
        return <div>
            {this.props.label == false ? undefined : <label className={"label-properties"}>{value.title}</label>}
            <Alert color={value.color}>{value.message}</Alert></div>
    }

    /**
     * ColorInput component
     * @param value
     * @returns {any}
     */
    getColorInput(value:any){
        return <ColorInput
            name={value[this.props.nameText]}
            label={this.props.label != false ? value[this.props.labelText] : undefined}
            value={this.state[value[this.props.nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    onChange(e:any,f:any){
        let state:any={};
        state[f] = e;
        this.setState(state);
    }


    /**
     * TODO : POPOVER AND TOOLTIP EKLE
     */
    getChangeData() {
        let data:any = this.state;
        //TODO ilk başta array tipinde items alanlar tüm değerleri state de seçili geliyor,
        //TODO CHECKİNPUT TA array şeklinde data return ediyor Kontrollerin yapılması lazım
        // for(let item in data){
        //     if(typeof(data[item]) == "object"){
        //         if(data[item].length != undefined) {
        //             if (data[item].length > 1) {
        //                 data[item] = null;
        //             }
        //         }
        //     }
        // }
        return data;
    }

    handleChange(e:any){
        let name:any = e.target.name;
        let state:any = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

    handleChangeRadio(e:any){
        let name:string = e.target.name;
        let state:any = [];
        let fields:any = this.props.fields;
        let values:any = this.props.values;
        let ffRadio:any = e.target.classList.value;
        if(fields.length>0) {
            fields.map((field:any) => {
                if (field.type == "radio") {
                    if (values[field.name] != undefined) {
                        values[field.name].map((value:any) => {
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
        let values:any  =  this.props.values;
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
