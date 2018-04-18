import * as React from "react";
import Deneme from "../../../src/input/Deneme";
import Label from "../../../src/extras/Label";
import Pagination from "../../../src/extras/Pagination";
import NumericInput from "../../../src/input/NumericInput";
import PasswordInput from "../../../src/input/PasswordInput";
import TextInput from "../../../src/input/TextInput";
import TextArea from "../../../src/input/TextArea";
import MailInput from "../../../src/input/MailInput";
import FileInput from "../../../src/input/FileInput";
import ColorInput from "../../../src/input/ColorInput";
import CheckInput from "../../../src/input/CheckInput";
import RadioInput from "../../../src/input/RadioInput";
import SelectInput from "../../../src/input/SelectInput";

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
            <Pagination pageSize={5} href={"#/Components/Deneme"}/>
            <Label color={"success"} text={"LabelDeneme"} textSize={26}/>
            <Label color={"info"} text={"LabelDeneme"} textSize={24}/>
            <Label color={"danger"} text={"LabelDeneme"} textSize={22}/>
            <Label color={"warning"} text={"LabelDeneme"} textSize={18}/>
            <Label color={"secondary"} text={"LabelDeneme"} textSize={16}/>
            <Label color={"primary"} text={"LabelDeneme"} textSize={14}/>
            <Label color={"dark"} text={"LabelDeneme"} textSize={12}/>
            <Label color={"light"} text={"LabelDeneme"} textSize={10}/>
            <Label color={"link"} text={"LabelDeneme"}/>
            <TextInput
                label={"TextInput Exam"}
                name={"Tdeneme"}
                id={"Tdeneme"}
                onChange={this.onChange.bind(this)}/>
            <NumericInput
                label={"NumericInput Exam"}
                name={"Ndeneme"}
                id={"Ndeneme"}
                onChange={this.onChange.bind(this)}/>
            <TextArea
                label={"TextAreaInput Exam"}
                name={"TAdeneme"}
                id={"TAdeneme"}
                onChange={this.onChange.bind(this)}/>
            <PasswordInput
                label={"PasswordInput Exam"}
                name={"Pdeneme"}
                id={"Pdeneme"}
                onChange={this.onChange.bind(this)}/>
            <MailInput
                label={"EmailInput Exam"}
                name={"Edeneme"}
                id={"Edeneme"}
                onChange={this.onChange.bind(this)}/>
            <FileInput
                label={"FileInput Exam"}
                name={"file"}
                id={"Fdeneme"}
                onChange={this.onChange.bind(this)}/>
            <Deneme type={"search"} label={"SearchInput Exam"} name={"search"} id={"Sdeneme"} onChange={this.onChange.bind(this)}/>
            <ColorInput
                label={"ColorInput Exam"}
                name={"color"}
                id={"Colordeneme"}
                onChange={this.onChange.bind(this)}/>
            <SelectInput
                values={selectValues}
                label={"SelectInput Exam"}
                name={"select"}
                id={"selectdeneme"}
                onChange={this.onChange.bind(this)}/>
            <RadioInput
                checkId={"value1"}
                inline
                tag={"fieldset"}
                values={selectValues}
                label={"RadioInput Exam Inline"}
                name={"radio"}
                id={"radiodeneme"}
                onChange={this.onChange.bind(this)}/>
            <RadioInput
                tag={"fieldset"}
                values={selectValues}
                label={"RadioInput Exam"}
                name={"radio2"}
                id={"radio2deneme"}
                onChange={this.onChange.bind(this)}/>
            <CheckInput
                tag={"fieldset"}
                values={selectValues}
                label={"CheckInput Exam"}
                name={"check"}
                id={"check"}
                onChange={this.onChange.bind(this)}/>
        </div>
    }

    onChange(e){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}
