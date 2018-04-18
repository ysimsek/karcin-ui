import * as React from "react";
import BaseInput from "./BaseInput";


export interface TextInputProps {
    name?:string;
    label?:string;
    tag?:string;
    id?:string | number;
    key?:string | number;
    onChange?:any;
}

export default class TextInput extends React.Component<any,any>{
    type = "text";
    static propTypes :Partial<TextInputProps> ={
        name:"textinput"
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
