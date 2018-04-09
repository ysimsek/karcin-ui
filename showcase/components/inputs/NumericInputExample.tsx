import * as React from "react";
import NumericInput from "../../../src/inputs/NumericInput";

export default class NumericInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            numericInput: null
        }
    }
    render(){
        return (<div>
            <NumericInput
                        name={"numericInput"}
                        value={this.state.numericInput}
                        label={"NumericInput Example"}
                        onChange={this.handleChange.bind(this)}
                />
            <span><i>{this.state.numericInput}</i></span>
        </div>)
    }

    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

}