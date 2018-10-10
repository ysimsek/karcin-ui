import * as React from "react";
import { Table , Row, Col, Alert, Collapse } from 'reactstrap';
import LookUp from "../../functional/lookup/LookUp";
import Store from "../../store/Store";
import SelectInput from "../../inputs/selectInput/SelectInput";
import ColorInput from "../../inputs/ColorInput";
import TextInput from "../../inputs/TextInput";
import NumericInput from "../../inputs/NumericInput";
import PasswordInput from "../../inputs/PasswordInput";
import TextArea from "../../inputs/TextArea";
import RadioInput from "../../inputs/RadioInput";
import CheckInput from "../../inputs/CheckInput";
import DateInput from "../../datepicker/DateInput";
import DataForm from "../../functional/dataform/DataForm";
import Badge from "../../functional/badge/Badge"

export interface  PropertyGridProps{
    fields:Array<any>;
    values:Array<any>;
    nameText?:string;
    labelText?:string;
    typeText?:string;
    titleColor?:string;
}

export default class PropertyGrid extends React.Component<PropertyGridProps,any>{

    static defaultProps:Partial<PropertyGridProps> = {
        nameText: "name",
        labelText:"label",
        typeText:"type",
        titleColor:"success"
    }

    constructor(props:any){
        super(props);
        this.state = {

        }
    }

    render():any{
        return <div className={"property-grid-sizing"}>
            {this.returnElements(this.props.fields, this.props.values)}
        </div>
    }

    /**
     * Get the state values ref method
     * @returns {Readonly<any>}
     */
    getData():object{
        let data = this.state ;
        return data;
    }
    /**
     * Return roperty grid elements
     **/
    returnElements(fields:any,values:any):JSX.Element[]{
        let components:Array<any> = [];
        fields.map((field:any, idx:number)=>{
            if(field.divTitle != undefined){
                components.push(<div className={"propertygrid-full"} style={{width:"100%"}}>
                    <Badge className={"propertygrid-full"} color={this.props.titleColor}>{field.divTitle}</Badge>
                </div>)
                components.push(<table key={idx} style={{width:"100%"}}><tbody id={idx.toString()}>
                {this.returnFields(field.fields,values)}
                {/*{this.getDataFormRenderer(field.fields,values)}*/}
                </tbody></table>)
            }
        });
        return components;
    }


    returnFields(fields:any,values:any):JSX.Element[]{
        let componentFields:Array<any> = [],me:any = this;
        fields.map((field:any, idx:number)=>{
            let v:any= null;
            let comp:any  = [];
            if(values[field.name ] != undefined){
                v = values[field.name];
            }
            comp= me.getComponentSelect(field,v);
            if(comp.length > 0) {
                componentFields.push(
                    <tr className={"propertygrid-tr"} key={idx}>
                        <td style={{width:"30%",outline:"auto"}}>{field.label}</td>
                        <td style={{outline:"auto"}}>{comp}</td>
                    </tr>)
            }
        })

        return componentFields
    }


    getComponentSelect(field:any,value:any):JSX.Element[]{
        let component:any = [];
        switch (field.type){
            case "select":
                component.push(this.getSelectInput(field));
                break;
            case "color":
                component.push(this.getColorInput(field));
                break;
            case "string":
                component.push(this.getTextInput(field));
                break;
            case "int":
                component.push(this.getNumericInput(field));
                break;
            case "password":
                component.push(this.getPasswordInput(field));
                break;
            case "textarea":
                component.push(this.getTextArea(field));
                break;
            case "radio":
                component.push(this.getRadioInput(field));
                break;
            case "check":
                component.push(this.getCheckInput(field));
                break;
            case "date":
                component.push(this.getDateInput(field));
                break;
            case "lookup" :
                component.push(this.getLookUp(field));
                break;
            case "alert" :
                component.push(this.getAlert(field));
                break;

        }
        return component;
    }

    /**
     * Return the SelectInput component
     * @param field
     * @returns :JSX.Element
     */
    getSelectInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        let input:any = null;
        return <SelectInput
            className={"propertgrid-size-select"}
            margin={true}
            name={field[nameText]}
            items={this.props.values[field[nameText]]}
            id={field.idField}
            value={field.valueField}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the ColorInput component
     * @param field
     * @returns :JSX.Element
     */
    getColorInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <ColorInput
            name={field[nameText]}
            value={this.state[field[nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the TextInput Component
     * @param field
     * @returns :JSX.Element
     */
    getTextInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <TextInput
            name={field[nameText]}
            value={this.state[field[nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the NumericInput component
     * @param field
     * @returns :JSX.Element
     */
    getNumericInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <NumericInput
            name={field[nameText]}
            value={this.state[field[nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the PasswordInput component
     * @param field
     * @returns :JSX.Element
     */
    getPasswordInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <PasswordInput
            name={field[nameText]}
            value={this.state[field[nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the TextArea component
     * @param field
     * @returns :JSX.Element
     */
    getTextArea(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <TextArea
            name={field[nameText]}
            value={this.state[field[nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the RadioInput component
     * @param field
     * @returns :JSX.Element
     */
    getRadioInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <RadioInput
            name={field[nameText]}
            value={this.state[field[nameText]]}
            inline
            formControl={true}
            items={this.props.values[field[nameText]]}
            idField={field.idField}
            textField={field.valueField}
            onChange={this.handleChangeRadio.bind(this)}/>
    }

    /**
     * Return the CheckInput component
     * @param field
     * @returns :JSX.Element
     */
    getCheckInput(field:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <CheckInput
            name={field[nameText]}
            // item={this.items[0]}
            items={this.props.values[field[nameText]]}
            id={field.idField}
            value={field.valueField}
            onChange={this.handleChange.bind(this)}/>
    }

    /**
     * Return the DateInput component
     * @param value
     * @returns :JSX.Element
     */
    getDateInput(value:any):JSX.Element{
        let nameText:string = this.props.nameText != undefined ? this.props.nameText : "";
        return <DateInput
            name={value[nameText]}
            value={this.state[value[nameText]]}
            onChange={this.handleChange.bind(this)}
        />
    }

    /**
     * Return the LookUp component
     * @param value
     * @returns :JSX.Element
     */
    getLookUp(value:any):JSX.Element{
        let values:any = this.props.values;
        let store:any = null, fieldLookup:any = [];
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
            name={value.name}
            textField={value.textField}
            onChange={this.lookupOnChange.bind(this)}/>
    }

    /**
     * Return the get Alert component
     * @param value
     * @returns {any}
     */
    getAlert(value:any):JSX.Element{
        return <div>
            {value.title != undefined ? <label className={"label-properties"}>{value.title}</label> : null}
            <Alert color={value.color}>{value.message}</Alert></div>
    }

    /**
     * Change the State
     * @param e
     * @param f
     */
    lookupOnChange(e:any,f:any){
        let state:any={};
        state[f] = e;
        this.setState(state);
    }

    /**
     * Change the State
     * All input but radioinput not
     * @param e
     */
    handleChange(e:any){
        let name:any = e.target.name;
        let state:any = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

    /**
     * Change the State RadioInput
     * @param e
     */
    handleChangeRadio(e:any){
        let name:string = e.target.name;
        let state:any = [];
        let fields:any = this.props.fields;
        let values:any = this.props.values;
        let ffRadio:any = e.target.classList.value;
        try {
            if (fields.length > 0) {
                fields.map((fieldX: any) => {
                    fieldX.fields.map((field: any, id: any) => {
                        if (field.type == "radio") {
                            if (values[field.name] != undefined) {
                                values[field.name].map((value: any) => {
                                    if (value.id == Number(e.target.value)) {
                                        state[e.target.name] = value
                                    }
                                })
                            }
                        }
                    });
                })
            }
        }catch (e){
            console.log("Tanımlanamayan nesne kullanıldı.")
        }
        this.setState(state);
    }

    /**
     * Change the State
     * Control the object,array,string or number
     */
    getControl(){
        let state:any = {};
        let values:any  =  this.props.values;
        let me = this;
        try {
            me.props.fields.map((val: any, idx: string | number) => {
                val.fields.map((fieldModel: any, idxModel: string | number) => {
                    if (Array.isArray(values[fieldModel.name])) {
                        let model = values[fieldModel.name];
                        state[fieldModel.name] = model;
                    } else if (typeof(values[fieldModel.name]) == "string") {
                        state[fieldModel.name] = values[fieldModel.name];
                    } else if (typeof(values[fieldModel.name]) == "undefined") {
                        state[fieldModel.name] = null;
                        //passwordu burda kontrol et
                    } else if (typeof(values[fieldModel.name]) == "number") {
                        state[fieldModel.name] = values[fieldModel.name];
                    } else if (typeof(values[fieldModel.name]) == "object") {
                        state[fieldModel.name] = values[fieldModel.name];
                    } else {
                        console.log("Tanımlanamayan nesne kullanıldı.")
                    }
                });
            })
        }catch(e){
            e.message;
            console.log("Tanımlanamayan nesne kullanıldı.")
        }
        this.setState(state);
    }

    /**
     * Control
     * @constructor
     */
    UNSAFE_componentWillMount(){
        this.getControl()
    }
}
