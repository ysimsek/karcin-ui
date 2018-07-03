import * as React from "react";
import DataForm from "../../../src/functional/dataform/DataForm";


const fields = [
    {
        id : "id",
        type : "string",
        name : "textinput",
        label :"textinput",
        isRequired : true
    },
    {
        id : "id",
        type : "int",
        name : "numericinput",
        label :"numericinput",
        isRequired : true
    },
    {
        id : "id",
        type : "select",
        name : "selectinput",
        label :"selectinput",
        idField: "id",
        valueField : "value",
        isRequired : true
    },
    {
        id : "id",
        type : "password",
        name : "passwordinputx",
        label :"passwordinput",
        isRequired : true
    },
    {
        id : "id",
        type : "date",
        name : "dateinput",
        label :"dateinput"
    },
    {
        id : "id",
        type : "radio",
        name : "radioinput",
        label :"radioinput",
        idField : "id",
        valueField : "value",
        isRequired : true
    },
    {
        id : "id",
        type : "check",
        name : "checkinput",
        label :"checkinput",
        idField : "id",
        valueField : "value",
        isRequired : true
    },
    {
        id : "id",
        type : "textarea",
        name : "textarea",
        label :"textarea",
        title : "textarea",
        isRequired : true
    }

];

const fields2 = [
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
                checkinput : [
                    {id:1,value:"Apple",des:"D1"}
                ],
                selectinput : [
                    {id:1,value:"Apple",des:"D1"},
                    {id:2,value:"Samsung",des:"D1"},
                    {id:3,value:"Huawei",des:"D1"},
                    {id:4,value:"Lg",des:"D1"},
                    {id:5,value:"Lenovo",des:"D1"}
                ],
                radioinput : [
                    {id:1,value:"Apple",des:"D1"},
                    {id:2,value:"Samsung",des:"D1"}
                ]
            },
            values2 : {
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
            {/*<DataForm*/}
                    {/*values={this.state.values}*/}
                    {/*fields={fields}*/}
                    {/*ref={"dataform1"}*/}
                    {/*col={3}*/}
                    {/*returnData={this.returnData.bind(this)}/>*/}
            <DataForm
                    values={this.state.values2}
                    fields={fields2}
                    ref={"dataform2"}
                    col={3}
                    returnData={this.returnData.bind(this)}/>
        </div>
    }

    returnData(e){
        debugger;
    }
}