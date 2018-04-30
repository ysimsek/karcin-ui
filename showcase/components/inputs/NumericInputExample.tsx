import * as React from "react";
import {NumericInput} from "karcin-ui";

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
                label={"NumericInput Exam"}
                name={"numericInput"}
                id={"numericInput"}
                onChange={this.handleChange.bind(this)}/>
            <span><i>{this.state.numericInput}</i></span>
            <NumericInput
                label={"NumericInput Disabled"}
                name={"numericInput2"}
                id={"numericInput2"}
                properties={{disabled:true,hidden:false}}
                onChange={this.handleChange.bind(this)}
            />
        </div>)
    }

    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

}