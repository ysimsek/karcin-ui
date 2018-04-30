import * as React from "react";
import BaseInput from "./BaseInput";
import {Tooltip} from "reactstrap";

export default class RadioInput extends React.Component<any,any>{
    type = "radio";
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        return <BaseInput type={this.type}
                          name={this.props.name}
                          label={this.props.label}
                          tag={this.props.tag}
                          values={this.props.values}
                          multiple={this.props.multi}
                          id={this.props.id}
                          checkId={this.props.checkId}
                          inline={this.props.inline}
                          onChange={this.onChange.bind(this)}
        />
    }

    onChange(e:any){
        this.props.onChange(e);
    }
}
