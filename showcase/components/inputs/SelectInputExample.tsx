import * as React from "react";
import {SelectInput} from "karcin-ui";


const items = [
    {
        id:1,name:"Mustafa",userName:"MustafaGungorMG",project:"KARÇİN-Uİ"
    },
    {
        id:2,name:"Yunus",userName:"YunusSimsek",project:"KARÇİN-BACKEND"
    },
    {
        id:3,name:"Kerem",userName:"KeremYılmaz",project:"KARÇİN-SKELETON"
    },
    {
        id:4,name:"Deniz",userName:"DenizDalkilic",project:"APACHE KARAF"
    },

];

export default class SelectInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            selectInput : ""
        }
    }
    render(){
        return <div>
            <SelectInput
                values={items}
                label={"SelectInput Exam"}
                name={"selectInput"}
                id={"id"}
                value={"name"}
                valueField={"project"}
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