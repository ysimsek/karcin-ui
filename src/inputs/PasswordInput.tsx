import * as React from "react";
import Input from "./base/BaseInput";
import {Label,InputGroup, InputGroupAddon} from "reactstrap";
import "./input.css";

export interface PasswordInputProps{
    style?: React.CSSProperties;
    label?: string | JSX.Element;
    name?: string;
    value?: any;
    validations?: object;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    onChange?:any;
}


/**
 * Varsayılan olarak * işareti var istenilen sembolle geri dönülsün.
 */
export default class PasswordInput extends React.Component<PasswordInputProps>{

    public static defaultProps: Partial<PasswordInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label : "",
        type:"password"
    }

    constructor(props:any){
        super(props);
    }
    render(){
        //todo :label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != "" ? <Label className={"label-properties"}>{this.props.label}</Label> : null;
        return <div>{label}<Input {...this.props}/></div>;
    }

}