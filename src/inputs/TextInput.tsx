import * as React from "react";
import Input, {BaseInputProps} from "./base/BaseInput";
import {Label} from "reactstrap";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    style?: React.CSSProperties;
    label?: string;
    name?: string;
    value?: any;
    validations?: object;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    onChange?:any;
    // validationDisplay: oneOf(["overlay", "block"])
}



export default class TextInput extends React.Component<TextInputProps>{


    public static defaultProps: Partial<TextInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label : "",
        type:"text"
    }

    constructor(props:any){
        super(props);
    }
    render(){
        //label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != null ? <Label>{this.props.label}</Label> : null;
        return <div>{label}<Input {...this.props}/></div>;
    }

}