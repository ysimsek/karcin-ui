import * as React from "react";
import Input, {BaseInputProps} from "./base/BaseInput";

export interface PasswordInputProps{
    style?: React.CSSProperties,
    label?: string,
    name?: string,
    value?: any,
    validations?: object,
    type?: string,
    disabled?: boolean,
    readOnly?: boolean,
    hidden?: boolean,
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
        type:"password"
    }

    constructor(props:any){
        super(props);
    }
    render(){
        //todo :label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != "" ? <span>{this.props.label}</span> : null;
        return <div>{label}<Input {...this.props}/></div>;
    }

}