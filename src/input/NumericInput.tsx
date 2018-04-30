import * as React from "react";
import BaseInput from "./BaseInput";

export interface NumericInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    tag?:string;
    id?:string | number | any;
    key?:string | number;
    style?: React.CSSProperties;
    label?: string;
    name?: string;
    value?: any;
    validations?: object;
    type?: string;
    onChange?: any;
    properties?:object;
}


/**
 * Number components
 */
export default class NumericInput extends React.Component<any,any>{

    //Static type is number function
    static type = "number";

    /**
     * initial values are set for properties
     * @type {{name: string}}
     */
    static propTypes :Partial<NumericInputProps> ={
        name:"numericinput"
    }
    constructor(props:any){
        super(props);
        this.state = {}
    }

    /**
     * Return render views
     * @returns {any}
     */
    render(){
        //{disabled,hidden,readOnly,placeHolder}
        let properties = this.props.properties ;
        return <BaseInput type={NumericInput.type}
                          name={this.props.name}
                          label={this.props.label}
                          tag={this.props.tag}
                          id={this.props.id}
                          key={this.props.id}
                          {...properties}
                          onChange={this.onChange.bind(this)}
        />
    }

    /**
     * Return the props coming onChange function
     * @param e
     */
    onChange(e:any){
        this.props.onChange(e);
    }
}
