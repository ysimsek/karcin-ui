import * as React from "react";
import {PropertyGrid} from "karcin-ui";


let model = [
    {
        divTitle : "Behavioral",
        fields : [
            {
                id : "id",
                type : "select",
                name : "behavioralName",
                label :"Behavioral Name",
                idField: "id",
                valueField : "value"
            }
        ]
    },
    {
        divTitle : "Structural",
        fields : [
            {
                id : "id",
                type : "select",
                name : "structuralName",
                label :"StructuralName"
            }
        ]
    },
    {
        divTitle : "Creational",
        fields : [
            {
                id : "id",
                type : "select",
                name : "creationalName",
                label :"Creational Name"
            }
        ]
    },
    {
        divTitle : "Other",
        fields : [
            {
                id : "id",
                type : "select",
                name : "otherName",
                label :"Other Name"
            }
        ]
    },

]

export default class PropertyGridExample extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            values : {
                behavioralName : [
                    {id:1,value:"Apple",des:"D1"},
                    {id:2,value:"Samsung",des:"D1"},
                    {id:3,value:"Huawei",des:"D1"},
                    {id:4,value:"Lg",des:"D1"},
                    {id:5,value:"Lenovo",des:"D1"}
                ]
            }
        }
    }

    render(){
        return <PropertyGrid fields={model} values={this.state.values}/>
    }


}
