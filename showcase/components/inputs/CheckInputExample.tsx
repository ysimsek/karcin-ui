import * as React from "react";
import Deneme from "../../../src/input/Deneme";
import Label from "../../../src/extras/Label";

export default class CheckInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        let selectValues = [
            {id:1,value:"value1"},
            {id:2,value:"value2"},
            {id:3,value:"value3"},
            {id:4,value:"value4"},
            ];
        return <div>
            <Label color={"success"} text={"LabelDeneme"}/>
            <Label color={"info"} text={"LabelDeneme"}/>
            <Label color={"danger"} text={"LabelDeneme"}/>
            <Label color={"warning"} text={"LabelDeneme"}/>
            <Label color={"secondary"} text={"LabelDeneme"}/>
            <Label color={"primary"} text={"LabelDeneme"}/>
            <Deneme type={"text"} label={"TextInput Exam"} name={"Tdeneme"} id={"Tdeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"number"} label={"NumericInput Exam"} name={"Ndeneme"} id={"Ndeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"textarea"} label={"TextAreaInput Exam"} name={"TAdeneme"} id={"TAdeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"password"} label={"PasswordInput Exam"} name={"Pdeneme"} id={"Pdeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"email"} label={"EmailInput Exam"} name={"Edeneme"} id={"Edeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"file"} label={"FileInput Exam"} name={"file"} id={"Fdeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"search"} label={"SearchInput Exam"} name={"search"} id={"Sdeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"color"} label={"ColorInput Exam"} name={"color"} id={"Colordeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"select"}  values={selectValues} label={"SelectInput Exam"} name={"select"} id={"selectdeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"radio"} checkId={"value1"} inline tag={"fieldset"} values={selectValues} label={"RadioInput Exam"} name={"radio"} id={"radiodeneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"radio"} tag={"fieldset"} values={selectValues} label={"RadioInput2 Exam"} name={"radio2"} id={"radio2deneme"} onChange={this.onChange.bind(this)}/>
            <Deneme type={"checkbox"} tag={"fieldset"} values={selectValues} label={"CheckInput Exam"} name={"check"} id={"check"} onChange={this.onChange.bind(this)}/>

        </div>
    }

    onChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}