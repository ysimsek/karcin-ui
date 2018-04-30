import * as React from "react";
import BaseInput from "./BaseInput";
import {Tooltip} from "reactstrap";

export default class SelectInput extends React.Component<any,any>{
    type = "select";
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
                          value={this.props.value}
                          valueField={this.props.valueField}
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
