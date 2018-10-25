import * as React from "react";
import {TextInput} from "karcin-ui";


export default class TextInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            textInput : ""
        }
    }
    render(){
        return <div>
            <TextInput
                ref={"text"}
                name={"textInput"}
                label={"TextInput Example"}
                placeholder={"denemeee"}
                valid
                value={this.state.textInput}
                onChange={this.handleChange.bind(this)}
            />
            <span><i>{this.state.textInput}</i></span>
        </div>
    }
    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

}
