import * as React from "react";
import Input from "./base/BaseInput";
import {Label,InputGroup, InputGroupAddon} from "reactstrap";

export interface PasswordInputProps{
    style?: React.CSSProperties;
    label?: string | JSX.Element;
    labelType?:string | any;//prepend or append
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
        labelType:'append',
        type:"password"
    }

    constructor(props:any){
        super(props);
    }
    render(){
        //todo :label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != "" ? <Label>{this.props.label}</Label> : null;
        return <div>{label}<Input {...this.props}/></div>;
    }

}