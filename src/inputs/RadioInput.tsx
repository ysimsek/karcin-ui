import * as React from "react";
import "./input.css"
import {checked} from "glamor";

export interface RadioInputProps{
    inline?:boolean;
    value?:string;
    idField?:string | any;
    textField?:string | any;
    onChange?:any;
    items?: Array<any>;
    name?:string;
    checked?:boolean;
}

export default class RadioInput extends React.Component<any,RadioInputProps>{
    constructor(props:any){
        super(props);
    }

    render(){
        return <form><div onChange={this.onChange.bind(this)} className={"form-control"}>{this.returnRadioElements(this,this.props.items)}</div></form>
    }

    private returnRadioElements(e:any,value:Array<any>):any{

        let component:Array<any> = [];
        let inline = false;
        if(this.props.inline || this.props.inline == true){
            inline = true;
        }
        let checkValue = e.props.value;
        value.forEach(function (v:any) {
            let isChecked = v.id == checkValue ? true: false ;
            if(inline == true){
                component.push(<label style={{paddingLeft: "2px"}}><label><input
                    className={"radio"}
                    type="radio"
                    checked={isChecked}
                    key={v.id}
                    name={e.props.name}
                    value={v.id} />{v.value}</label></label>)
            }else{
                component.push(<div><label><input
                    className={"radio"}
                    type="radio"
                    checked={isChecked}
                    key={v.id}
                    name={e.props.name}
                    value={v.id} />{v.value}</label></div>)
            }
        }.bind(e));
        return component;
    }

    onChange(e:any){
        this.props.onChange(e);
    }
}