import * as React from "react";
import BaseInput from "./BaseInput";


export interface FileInputProps {
    name?:string;
    label?:string;
    tag?:string;
    id?:string | number;
    key?:string | number;
    onChange?:any;
}

export default class FileInput extends React.Component<any,any>{
    type = "file";
    static propTypes :Partial<FileInputProps> ={
        name:"fileinput"
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
