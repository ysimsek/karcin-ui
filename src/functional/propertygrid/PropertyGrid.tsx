import * as React from "react";
import { Table , Row, Col, Alert, Collapse} from 'reactstrap';
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
import DateInput from "../../inputs/dateInput/DateInput";
import DataForm from "../../functional/dataform/DataForm";
import Badge from "../../functional/badge/Badge"
import FaIcon from "../faicon/FaIcon";
import PopOver from "../tip/PopOver";

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
        titleColor:"primary"
    }

    constructor(props:any){
        super(props);
        this.state = {
            showTitleIDs:[]
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
                components.push(<div id={idx.toString()} className={"propertygrid-full"} style={{width:"100%"}}>
                    <Badge id={idx.toString()} className={"propertygrid-full propertygrid-badge"} color={this.props.titleColor}>{field.divTitle}</Badge>
                </div>)
                components.push(
                    <table key={idx} style={{width:"100%"}}>
                    <tbody id={idx.toString()}>
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
            let display = {display:"none"};
            let display2 = {};
            if(comp.length > 0) {
                componentFields.push(
                    <tr className={"propertygrid-tr"}  key={idx}>
                        <td style={{width:"30%"}} className={"propertygrid-td-first"}>{field.label}</td>
                        <td style={me.state.selectedProp == field.name ? display2 : display} className={"propertygrid-td-second"}>{comp}</td>
                        <td style={me.state.selectedProp == field.name ? display : display2}
                            id={field.name}
                            onClick={()=>{me.getLabelActiveToInput(idx,field)}}>
                            {this.getLabelActiveToLabel(field)}
                        </td>
                    </tr>)
            }
        })

        return componentFields
    }

    /**
     * Label ile gösterim
     * @param e
     */
    getLabelActiveToInput(e:any,field:any){
        this.setState({selectedProp: field.name, selectedId: e});
    }

    /**
     * Label separeting
     * @param field
     * @returns {any}
     */
    getLabelActiveToLabel(field:any){
        try {
            if (typeof(this.state[field.name]) == "string") {
                if(field.type == "password"){
                    let pass :any = "";
                    for(let i=0;i<this.state[field.name].length;i++){
                        pass += "*";
                    }
                    return this.provideOfShowLabel(pass,{},"fa-unlock");
                }
                if(field.type == "color"){
                    let color = {color : this.state[field.name]};
                    return this.provideOfShowLabel(this.state[field.name],color,"fa-square");
                }
                if(field.type == "string"){
                    return this.provideOfShowLabel(this.state[field.name],{},"fa-text-width");
                }
                if(field.type == "textarea"){
                    return this.provideOfShowLabel(this.state[field.name],{},"fa-text-width");
                }
                if(field.type == "date"){
                    return this.provideOfShowLabel(this.state[field.name],{},"fa-calendar");
                }
                if(field.type == "int"){
                    return this.provideOfShowLabel(this.state[field.name],{},"fa-sort-numeric-asc");
                }

                return this.state[field.name];
            } else if (typeof(this.state[field.name]) == "number") {
                return this.provideOfShowLabel(this.state[field.name],{},"fa-sort-numeric-asc");
            } else if (typeof(this.state[field.name]) == "object") {

                if(field.type == "lookup") {
                    if ((this.state[field.name])[field.textField] != undefined) {
                        return this.provideOfShowLabel((this.state[field.name])[field.textField],{},"fa-align-left")
                    }
                }
                if(field.type == "check") {
                    let arr = this.state[field.name];
                    let returnName:any = "";
                    arr.length > 0 ? arr.map((res:any)=>{
                        returnName += res[field.valueField] != null ? res[field.valueField]+ "," : "" ;
                    }) : null;
                    return this.provideOfShowLabel(returnName,{},"fa-list-ol");
                }
                if(field.type == "radio"){
                    if((this.state[field.name])["value"] != undefined || (this.state[field.name])[field.valueField] != undefined ){
                        return this.provideOfShowLabel((this.state[field.name])["value"] != undefined ? (this.state[field.name])["value"] : (this.state[field.name])[field.valueField],{},"fa-list-ul");
                    }
                }

                if((this.state[field.name])["value"] != undefined || (this.state[field.name])[field.valueField] != undefined ){
                    return this.provideOfShowLabel((this.state[field.name])["value"] != undefined ? (this.state[field.name])["value"] : (this.state[field.name])[field.valueField],{},"fa-align-justify")
                }
                return null;
            } else if (typeof(this.state[field.name]) == "undefined") {
                debugger
            }
        }catch(e){

        }
        return this.state[field.name]
    }

    provideOfShowLabel(field:any,color:any,code:string){
        return <span><FaIcon style={color} code={code}/>
            <span style={{marginLeft:10}}>{field}</span></span>
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
            className={"propertgrid-size-select propertygrid-select"}
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
            className={"property-grid-input"}
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
            className={"property-grid-input"}
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
            className={"property-grid-input"}
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
            className={"property-grid-input"}
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
            className={"property-grid-input-area"}
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
            className={"property-grid-input"}
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
            className={"property-grid-input"}
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
            className={"property-grid-input"}
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
