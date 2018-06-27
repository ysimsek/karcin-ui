import * as React from "react";
import {CheckInput} from "karcin-ui";

export default class CheckInputExample extends React.Component<any,any>{

    data = [{id:1,name:"Mustafa",job:"Computer Engineer", age: 26},
        {id:2,name:"Zeynep",job:"Business Manager", age:24},
        {id:3,name:"Meral",job:"Software Specialist", age:29},
        {id:4,name:"Selim",job:"Elektronics Science", age:30},
        {id:5,name:"Melisa",job:"Computer Teacher", age:45}
    ];

    constructor(props:any){
        super(props);
        this.state = {
            textArea : "",
            data : [{id:1,name:"Mustafa",job:"Computer Engineer", age: 26},
                {id:2,name:"Zeynep",job:"Business Manager", age:24},
                {id:3,name:"Meral",job:"Software Specialist", age:29}],
            dataSelect : [{id:1,name:"Mustafa",job:"Computer Engineer", age: 26}]
        }
    }
    render(){
        return <div><CheckInput
            items={this.data}
            label={"Simple CheckInput Example"}
            id={"id"}
            value={"name"}
            onChange={(values) => this.onChange('data', values)}/>
            <CheckInput
                item={this.data[0]}
                label={"Simple CheckInput Example2"}
                id={"id"}
                value={"name"}
                onChange={(values) => this.onChange('data', values)}/>
            <CheckInput
                items={this.data}
                label={"Simple CheckInput Example3"}
                id={"id"}
                value={"name"}
                checkObjects={this.state.data}
                onChange={(values) => this.onChange('data3', values)}/>
            <CheckInput
                item={this.data[0]}
                label={"Simple CheckInput Example4"}
                id={"id"}
                value={"name"}
                checkObjects={this.state.dataSelect}
                onChange={(values) => this.onChange('data3', values)}/>
        </div>
    }
    handleChange(e){
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    }
    onChange(key:string | number,values:any){
        this.setState({ [key]: values })
    }
}