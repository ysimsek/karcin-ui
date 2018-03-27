import * as React from "react";
import Input, {BaseInputProps} from "./base/BaseInput";

export interface NumericInputProps{
    /**
     * React Css Properties
     */
    style?: React.CSSProperties,
    /**
     * label used to edit the text
     */
    label?: string,
    /**
     * input name
     */
    name?: string,
    /**
     * input value
     */
    value?: any,
    validations?: object,
    /**
     * Html input types
     * default as numeric
     */
    type?: string,
    disabled?: boolean,
    readOnly?: boolean,
    hidden?: boolean,
    onChange?: any,
    placeHolder?: string
    // validationDisplay: oneOf(["overlay", "block"])
}



export default class TextInput extends React.Component<NumericInputProps>{

    public static defaultProps: Partial<NumericInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        type:"text"
    }

    constructor(props:any){
        super(props);
    }

    render(){
        let { ...newProps } = this.props;
        //todo: label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        //selectinput için yapıldı
        let label = this.props.label != null ? <span>{this.props.label}</span> : null;
        return <div>{label}<Input
            {...newProps}
            onChange={this.__onChange.bind(this)}
        />
        </div>;
    }

    /**
     * number control
     * @param e
     * @returns {boolean}
     * @private
     */
    __onChange(e:any){
        let result = true;
        let value = e.target.value;
        //boşluk karakteri ve diğerlerine bak
        if (value && isNaN(value)) {
            result = false;
        } else if (this.props.onChange) {
            let parsedVal = parseInt(value, 10);
            e.target.parsedValue = isNaN(parsedVal) ? undefined : parsedVal;
            result = e.target.parsedValue != undefined ? this.props.onChange(e) : false;
        }
        if (!result) {
            e.preventDefault();
            e.stopPropagation();
        }
        return result;
    }
}