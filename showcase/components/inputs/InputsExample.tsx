import * as React from "react";
import {Input} from "karcin-ui";


export default class InputExample extends React.Component<any,any>{
    
    constructor(props:any){
        super(props);
        this.state = {
            valueText : "",
            checkInputs : [{
                lineText: 'deniz',
                checked:true,
                name:'denem1',
                onChange: this.handleChange
            },{
                lineText: 'deniz2',
                checked:false,
                name:'denem12',
                onChange: this.handleChange
            }],
            radioInputs : [{
                lineText: 'deniz',
                checked:true,
                name:'denem1',
                onChange: this.handleChange
            },{
                lineText: 'deniz2',
                checked:false,
                name:'denem1',
                onChange: this.handleChange
            }]
        }
    }
    render(){
        return <div>
            <Input type="text" icon="fa-check" id="deneme" IconColor={'primary'} name="valueText" label="Example Text Input" value={this.state.valueText} placeholder="Example Text Input" onChange={this.handleChange}/>
            <Input type="textarea" name="valueTextarea" label="Example Textarea" value={this.state.valueTextarea} placeholder="Example Textarea" onChange={this.handleChange}/>
            <Input type="number" name="valueNumber" label="Example Number Input" value={this.state.valueNumber} placeholder="Example Number Input" onChange={this.handleChange}/>
            <Input type="password" name="valuePassword" label="Example Password Input" value={this.state.valuePassword} placeholder="Example Password Input" onChange={this.handleChange}/>
            <Input type="checkbox" name="checkInputs" checkItems={this.state.checkInputs}  label="Example Checkboxs" onChange={this.handleChangeCheck}/>
            <Input type="checkbox" name="checkInput" lineText="Example Single"  label="Example Checkbox" value={this.state.checkInput} onChange={this.handleChangeCheck}/>
            <Input type="radio" name="radioInputs" checkItems={this.state.radioInputs}  label="Example Radios" placeholder="Example Radio" onChange={this.handleChangeCheck}/>
            <Input type="radio" name="radioInput" lineText="Example Single"  label="Example Radio" value={this.state.radioInput} onChange={this.handleChangeCheck}/>
        </div>
    }

    handleChange = (e) => {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    handleChangeCheck = (e:any) => {
        let state:any = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

}
