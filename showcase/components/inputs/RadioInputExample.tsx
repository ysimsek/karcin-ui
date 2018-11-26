import * as React from "react";
import {RadioInput} from "karcin-ui";


export default class RadioInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            radioInputInline : "4",
            radioInputHori : "1"
        }
    }
    render(){
        let value= [
            {id:1,value:"Apple",des:"D1"},
            {id:2,value:"Samsung",des:"D1"},
            {id:3,value:"Huawei",des:"D1"},
            {id:4,value:"Lg",des:"D1"},
            {id:5,value:"Lenovo",des:"D1"}
        ];
        return <div>
            <RadioInput
                name={"radioInputInline"}
                value={this.state.radioInputInline}
                label={"Inline RadioInput Example"}
                inline
                items={value}
                idField="id"
                textField="value"
                onChange={this.handleChange.bind(this)}/>
            <RadioInput
                name={"radioInputHori"}
                label={"Horizontal RadioInput Example"}
                value={this.state.radioInputHori}
                items={value}
                idField="id"
                textField="value"
                onChange={this.handleChange.bind(this)}/>
        </div>
    }
    handleChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }

}
