import * as React from "react";
import Input from "./base/BaseInput";
import {Label,InputGroup,InputGroupAddon} from "reactstrap";
//css de hem veritical hem horizontal olması sağlandı

export interface TextAreaProps{
    className?:string;
    name?:string;
    value?:string;
    properties?:object | any;
    onChange?: any;
}


export default class TextArea extends React.Component<TextAreaProps,any>{

    public static defaultProps:Partial<TextAreaProps> = {
        properties : {},
        name:"textArea",
        value: "Text Area!"
    }

    constructor(props:any){
        super(props);
    }

    render(){
        return <div>
            <Label className={"label-properties"}>TextArea Label</Label>
            <textarea
                className={this.props.className+ " form-control"}
                name={this.props.name}
                value={this.props.value}
                autoFocus={this.props.properties.autoFocus}
                readOnly={this.props.properties.readOnly}
                required={this.props.properties.required}
                disabled={this.props.properties.disabled}
                onChange={this.onChange.bind(this)}
                cols={this.props.properties.cols}
                rows={this.props.properties.rows}
            />
            </div>
    }

    onChange(e){
        this.props.onChange(e);
    }
}