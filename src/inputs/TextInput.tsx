import * as React from "react";
import Input, {BaseInputProps} from "./base/BaseInput";
import {Button} from "reactstrap";

export interface TextInputProps{
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
    placeHolder?:string;
    maxlength?:string;
    autofocus?:boolean;
    // validationDisplay: oneOf(["overlay", "block"])
}



export default class TextInput extends React.Component<TextInputProps>{


    public static defaultProps: Partial<TextInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label : "",
        type:"text",
        maxlength:"1000"
    }

    constructor(props:any){
        super(props);
    }
    render(){
        //label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != null ? <span>{this.props.label}</span> : null;
        return <div>{label}<Input {...this.props}/></div>;
    }

}