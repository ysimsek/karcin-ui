import * as React from "react";
import {Form,FormGroup,Input,Label} from "reactstrap";

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    /**
     * email,password,select,textarea,file,radio,checkbox,time,color,search,datetime,number
     */
    type?:string;
    label?:string;
    bsSize?:string | any;
    tag?:string;
    id?:string | any;
    values?:Array<any> | any;
    inline?:boolean | any;
    checkId?:any;
    onChange?:any;
}


export default class BaseInput extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {

        }
    }
    render(){
        return <Form>
            <FormGroup tag={this.props.tag}>
                <Label for={this.props.id}><b>{this.props.label}</b></Label>
                {this.returnInput()}
            </FormGroup>
        </Form>
    }

    /**
     * Select the Input types
     * @returns {()[]}
     */
    returnInput(){
        let component = [];
        //email,password,select,textarea,file,radio,checkbox,time,color,search,datetime
        //TODO toolTip ekle, valid özelliği
        switch (this.props.type){
            case "text" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "number" :
                //TODO: . VE , OLAYLARINI ÇÖZ
                //TODO Decimal(, den sonra kaç karakter olacağını ayarla)
                //TODO Money input yap (3 er haneli sayı dilimleri)
                //TODO Artırım tuşunu step step yap
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "email" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "password" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "select" :
                component.push(this.returnSelectInput(this.props.type))
                break;
            case "textarea" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "file" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "radio" :
                component.push(this.returnRadioInput(this.props.type))
                break;
            case "checkbox" :
                component.push(this.returnCheckInput(this.props.type));
                break;
            case "time" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "datetime" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "color" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "search" :
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
        }
        return component;
    }
    returnBaseNormalInput(type:any){
        return <Input
                    className={'type'+type}
                    key={this.props.id}
                    type={type}
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    bsSize={this.props.bsSize}
                    onChange={this.onChange.bind(this)}
                    />
    }

    /**
     * Returned SelectInput Properties
     */
    returnSelectInput(type:any){
        //TODO valueField, idField ekle
        //TODO Lütfen Seçiniz seçili olmaması lazım
        //TODO multi özelliği
        let component:JSX.Element | any = [];
        let values:Array<any> = this.props.values;
        let multiple = this.props.multiple == true ? true : false;
        component.push(<option key={"default"} id={"default"}>Lütfen Seçiniz</option>);
        values.forEach(function (v:any) {
            component.push(<option key={v.id} id={v.id}>{v.value}</option>);
        }.bind(this));
        return <Input
                    type={type}
                    name={this.props.name}
                    id={this.props.id}
                    multiple={this.props.multiple}
                    onChange={this.onChange.bind(this)}>{component}</Input>
    }
    /**
     * Returned RadioInput Properties
     */
    returnRadioInput(type:any){
        //TODO : RETURN OBJECT ELEMENTS
        //TODO valuefield, idField ekle
        let component : JSX.Element | any = [];
        let values:Array<any> = this.props.values;
        let me=this;
        let className= this.props.inline || this.props.inline == true ? "radio-inline":"";
        let isChecked = this.props.checkId;
        values.forEach(function (v:any) {
            if(isChecked == v.value){
                isChecked =true;
            }else isChecked = false;
            component.push(<FormGroup check disabled={v.disabled} className={className}>
                <Label check>
                    <Input key={v.id} type={type} name={me.props.name} value={v.id}/>{' '}{v.value}
                </Label>
            </FormGroup>)
        });
        return <FormGroup tag="fieldset" onChange={me.onChange.bind(me)}>
            {component}
        </FormGroup>
    }

    returnCheckInput(type:any){
        let component:JSX.Element | any = [];
        let values:Array<any> = this.props.values;
        let me = this;
        values.forEach(function (v:any) {
            component.push(<Form onChange={me.onChange.bind(me)}><FormGroup check>
                <Label check>
                    <Input type={type} value={v.value}/>{v.value}
                </Label>
            </FormGroup></Form>)
        });
        return component;
    }

    onChange(e:any){
        this.props.onChange(e);
    }
}