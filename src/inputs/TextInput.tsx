import * as React from "react";
import Input, {BaseInputProps} from "./base/BaseInput";
import {Label,InputGroup, InputGroupAddon} from "reactstrap";
import * as ReactDOM from "react-dom";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
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
     * Returned props function
     */
    onChange?:any;
    // validationDisplay: oneOf(["overlay", "block"])
}



export default class TextInput extends React.Component<TextInputProps>{

    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    public static defaultProps: Partial<TextInputProps> = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label : null,
        type:"text",
    }

    /**
     * Intial values
     * @param props
     */
    constructor(props:any){
        super(props);
    }

    /**
     * @returns {any}
     */
    render():any{
        //label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        let label = this.props.label != null ? <Label className={"label-properties"}>{this.props.label}</Label> : null;
        return <div>{label}<Input {...this.props}/></div>;
    }
}
