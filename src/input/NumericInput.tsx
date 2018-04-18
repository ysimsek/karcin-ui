import * as React from "react";
import BaseInput from "./BaseInput";


export interface NumericInputProps {
    name?:string;
    label?:string;
    tag?:string;
    id?:string | number;
    key?:string | number;
    onChange?:any;
}

export default class NumericInput extends React.Component<any,any>{
    type = "number";
    static propTypes :Partial<NumericInputProps> ={
        name:"numericinput"
    }
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        return <BaseInput type={this.type}
                          name={this.props.name}
                          label={this.props.label}
                          tag={this.props.tag}
                          id={this.props.id}
                          key={this.props.id}
                          onChange={this.onChange.bind(this)}
        />
    }
    onChange(e:any){
        this.props.onChange(e);
    }
}
