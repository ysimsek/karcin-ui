import * as React from "react";
import {ColorInput} from "karcin-ui";


export default class ColorInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            colorInput : "#ffaa11"
        }
    }
    render(){
        return <div>
            <ColorInput
                name={"colorInput"}
                label={"ColortInput Example"}
                value={this.state.colorInput}
                onChange={this.handleChange.bind(this)}
            />
            <span><i>{this.state.colorInput}</i></span>
        </div>
    }
    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}
