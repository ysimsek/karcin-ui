import * as React from "react";
import {Button} from "karcin-ui";
import DataForm from '../../../src/functional/dataform/DataForm';



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
    },
    {
        id: "id",
        type : "radio",
        name : "opened",
        label : "Yapıldı mı?"
    },
    {
        id:"id",
        type:"date",
        name : "startDate",
        label : "Başlangıç Zamanı"
    }
];

export default class DataFormExample extends React.Component<any,any>{

    dataFormRef:any;

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
                opened : [{id:1,value:"Açık"},{id:2,value:"Kapalı"}],
                location : "Ankara",
                job : "Engineer",
                startDate : new Date()
            }
        }
    }

    render(){
        return <div>
            <DataForm
                    values={this.state.values}
                    fields={fields}
                    ref={(e)=>{
                        this.dataFormRef = e;
                    }}
                    col={3} />
            <Button onClick={()=>{this.returnData()}}>Deneme</Button>
        </div>
    }

    returnData(){
        //return all fields in state
        debugger
        console.log(this.dataFormRef.getChangeData());
    }
}
