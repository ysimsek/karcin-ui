import * as React from "react";
import RadioInput from "../../../src/inputs/RadioInput";


export default class RadioInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return <RadioInput onClick={this.handleChange.bind(this)}/>
    }
    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}
