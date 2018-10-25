import * as React from "react";
import {PasswordInput} from "karcin-ui";


export default class PasswordInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            passwordInput : ""
        }
    }
    render(){
        return <div>
            <PasswordInput
                name={"passwordInput"}
                label={"PasswordInput Example"}
                value={this.state.passwordInput}
                valid
                onChange={this.handleChange.bind(this)}
            />
            <span><i>{this.state.passwordInput}</i></span>
        </div>
    }

    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}
