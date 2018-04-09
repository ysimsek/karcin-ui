import * as React from "react";
import Input from "./base/BaseInput";
import {Label,InputGroup, InputGroupAddon} from "reactstrap";

export interface PasswordInputProps{
    style?: React.CSSProperties;
    label?: string;
    labelType?:string | any;//prepend or append
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


/**
 * Varsayılan olarak * işareti var istenilen sembolle geri dönülsün.
 */
export default class PasswordInput extends React.Component<PasswordInputProps>{

    public static defaultProps: Partial<PasswordInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label : "",
        labelType:"prepend",
        type:"password"
    }

    constructor(props:any){
        super(props);
    }
    render(){
        //todo :label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != "" ? <InputGroupAddon addonType={this.props.labelType}>{this.props.label}</InputGroupAddon> : null;
        return <InputGroup>{label}<Input {...this.props}/></InputGroup>;
    }

}