import * as React from "react";
import {DataForm} from "karcin-ui";



const fields = [
    {
        id : "id",
        type : "string",
        name : "name",
        label :"Name",
        isRequired : true
    },
    {
        id : "id",
        type : "string",
        name : "surname",
        label :"Surname",
        isRequired : true
    },
    {
        id : "id",
        type : "int",
        name : "age",
        label :"Age",
        isRequired : true
    },
    {
        id : "id",
        type : "string",
        name : "job",
        label :"Job",
        isRequired : true
    },{
        id : "id",
        type : "select",
        name : "telephone",
        label :"Telephone",
        isRequired : true
    },
    {
        id : "id",
        type : "string",
        name : "location",
        label :"Location",
        isRequired : true
    }
];

export default class DataFormExample extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            values : {
                telephone : [
                    {id:1,value:"Apple",des:"D1"},
                    {id:2,value:"Samsung",des:"D1"},
                    {id:3,value:"Huawei",des:"D1"},
                    {id:4,value:"Lg",des:"D1"},
                    {id:5,value:"Lenovo",des:"D1"}
                ],
                location : "Ankara",
                job : "Engineer"
            }
        }
    }

    render(){
        return <div>
            <DataForm
                    values={this.state.values}
                    fields={fields}
                    ref={"dataform1"}
                    col={3}
                    returnData={this.returnData.bind(this)}/>
        </div>
    }

    returnData(e){
        //return all fields in state
        console.log(e);
    }
}