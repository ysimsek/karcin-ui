import * as React from "react";
import TextArea from "../../../src/inputs/TextArea";

export default class RadioInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            textArea : ""
        }
    }
    render(){
        return <TextArea
                    name={"textArea"}
                    value={this.state.textArea}
                    properties={{disabled:false,autoFocus:false}}
                    onChange={this.handleChange.bind(this)}
        />
    }
    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}