import * as React from "react";
import Input from "./base/BaseInput";
import {Label,InputGroup, InputGroupAddon} from "reactstrap";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    style?: React.CSSProperties;
    label?: string | JSX.Element;
    name?: string;
    value?: any;
    validations?: object;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    className?:any;
    onChange?:any;
    /**
     * Null or empty control
     */
    valid?:boolean | any;
}


/**
 * Varsayılan olarak * işareti var istenilen sembolle geri dönülsün.
 */
export default class PasswordInput extends React.Component<PasswordInputProps>{
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    public static defaultProps: Partial<PasswordInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label : "",
        type:"password"
    }

    /**
     * Initial value
     * @param props
     */
    constructor(props:any){
        super(props);
    }

    /**
     * @returns {any}
     */
    render():any{
        let validColor:string = this.props.valid != undefined ? (this.props.valid != false ? (this.isValid() == false ? "red" : "") : "") : "";
        //todo :label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != "" ? <Label className={"label-properties"}>{this.props.label}</Label> : null;
        return <div className="karcin-input">{label}<Input {...this.props} style={{borderColor:validColor}}/></div>;
    }
    isValid(){
        //Kontrol true ise boş değil , false ise boş veya null
        let control:boolean = true;
        if(this.props.value == "" || this.props.value == null){
            control = false;
        }
        return control;
    }

}
