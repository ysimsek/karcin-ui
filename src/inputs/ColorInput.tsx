import * as React from "react";
import {Label} from "reactstrap";
import Input from "./base/BaseInput";
import {TextInputProps} from "./TextInput";

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
    // validationDisplay: oneOf(["overlay", "block"])
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
        //label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != undefined ? <Label className={"label-properties"}>{this.props.label}</Label> : null;
        return <div className="karcin-input">{label}<Input
            {...this.props}
            onChange={this.___onChange.bind(this)}
        /></div>;
    }

    isValid(value:any){
        let name = this.props.name;
        let control = Object.keys(this.state).length === 0 && this.state.constructor === Object;
        let control2 = value === "" ? true : false;
        control == false && control2 == false ? this.errorState =  "form-control" : this.errorState = "form-control error";
        this.forceUpdate();
        return control == true && control2 == false ? true : false;
    }

    emptyControl(value : any){
        value != "" ?  this.errorState =  "form-control" : this.errorState = "form-control error";
        this.forceUpdate()
    }

    ___onChange(e:any){
        let value = e.target.value;
        let state:any = {};
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        //Boş mu değilmi kontrolü geri dönülüyor
        //Boşsa true değilse false
        //this.isValid(value) == true ? this.color = true : this.color = false;
        this.emptyControl(value);
        this.props.onChange(e)
    }

}
