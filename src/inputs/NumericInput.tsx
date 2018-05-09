import * as React from 'react';
import Input from "./base/BaseInput";
import {Label,InputGroup, InputGroupAddon} from "reactstrap";

export interface NumericInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    /**
     * React css style with in object
     */
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
     * Return props function
     */
    onChange?: any;
}




export default class NumericInput extends React.Component<NumericInputProps,any>{
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; type: string}}
     */
    public static defaultProps: Partial<NumericInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        type:"number"
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
        let { ...newProps } = this.props;
        //todo: label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        //selectinput için yapıldı
        let label = this.props.label != null ? <Label className={"label-properties"}>{this.props.label}</Label> : null;
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
        this.props.onChange(e)


        // //boşluk karakteri ve diğerlerine bak
        // if (value && isNaN(value)) {
        //     result = false;
        // } else if (this.props.onChange) {
        //     let parsedVal = parseInt(value, 10);
        //     e.target.parsedValue = isNaN(parsedVal) ? undefined : parsedVal;
        //     result = e.target.parsedValue != undefined ? this.props.onChange(e) : false;
        // }
        // if (!result) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        // return result;
    }
}