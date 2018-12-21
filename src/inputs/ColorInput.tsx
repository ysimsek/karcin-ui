import * as React from "react";
import Input from "./base/BaseInput";
import {TextInputProps} from "./TextInput";
import Label from "../functional/label/Label";

export interface ColorInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    style?: React.CSSProperties;
    label?: string;
    /**
     * Set the name
     */
    name?: string;
    /**
     * Set the value
     */
    value?: any;
    /**
     alt,
     autoComplete,
     autoFocus,
     capture,
     checked,
     crossOrigin,
     disabled,
     form,
     formAction,
     formEncType,
     formMethod,
     formNoValidate,
     formTarget,
     height,
     max,
     maxLength,
     min,
     minLength,
     multiple,
     pattern,
     placeholder,
     readOnly,
     required,
     size,
     src,
     step,
     */
    validations?: object;
    type?: string;
    /**
     * Default value false
     */
    disabled?: boolean;
    /**
     * Default value false
     */
    readOnly?: boolean;
    /**
     * Default value false
     */
    hidden?: boolean;
    /**
     * Returned props function
     */
    onChange?:any;
    /**
     * Null or empty control
     */
    valid?:boolean | any;
}



export default class ColorInput extends React.Component<ColorInputProps>{

    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    public static defaultProps: Partial<TextInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        type:"color",
        value:"#ffffff"
    }

    constructor(props:any){
        super(props);

    }

    errorState = "form-control";
    color = false;


    render(){
        let validColor:string = this.props.valid != undefined ? (this.props.valid != false ? (this.isValid() == false ? " is-invalid" : "") : "") : "";
        //label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != undefined ? <Label className={"label-properties"}>{this.props.label}</Label> : null;
        return <div className="karcin-input">{label}<Input
            {...this.props}
            className={validColor}
            onChange={this.___onChange.bind(this)}
            style={{borderColor:validColor}}
        /></div>;
    }

    isValid(){
        //Kontrol true ise boş değil , false ise boş veya null
        let control:boolean = true;
        if(this.props.value == "" || this.props.value == null){
            control = false;
        }
        return control;
    }

    ___onChange(e:any){
        let value = e.target.value;
        let state:any = {};
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.props.onChange(e)
    }

}
