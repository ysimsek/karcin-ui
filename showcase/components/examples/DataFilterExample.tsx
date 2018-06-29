import * as React from "react";
import {DataFilter} from 'karcin-ui';

import * as Highlight from "react-highlight";

export interface DataFilterExampleState {
    writeCode ?: object | any
}

export default class DataFilterExample extends React.Component<any, any> {
    constructor(props:any){
        super(props);

        this.state = {
            writeCode : {data:[]}
        }

    }
    render() {
        let field = [
            {
                "labels": "Id",
                "types": "number",
                "names": "id"
            },
            {
                "labels": "Name",
                "types": "string",
                "names": "name"
            },
            {
                "labels": "Surname",
                "types": "string",
                "names": "surname"
            },
            {
                "labels": "E-Mail",
                "types": "string",
                "names": "email"
            },
            {
                "labels": "Password",
                "types": "password",
                "names": "password"
            },
            {
                "labels": "Birthdate",
                "types": "date",
                "names": "birthdate"
            },
            {
                "labels": "Job Title",
                "types": "select",
                "names": "job",
                "items": [
                    {
                        names: "sd",
                        labels: "Software Developer"
                    },
                    {
                        names: "sa",
                        labels: "Software Architect"
                    }
                ]
            },
            {
                "labels": "Gender",
                "types": "radio",
                "names": "gender",
                "items": [
                    {
                        names: "male",
                        labels: "Male"
                    },
                    {
                        names: "female",
                        labels: "Female"
                    }
                ]
            }
        ];

        return <div>
            <DataFilter field={field} label="Data Filter Example" labelFieldName="labels" nameFieldName="names" typeFieldName="types" onChange={(e)=>{
                this.getList(e);
            }}/>
            <div style={{marginTop:20}}>
                {(this.state.writeCode.data.length > 0) ? <Highlight className='json' innerHtml={true}>{JSON.stringify(this.state.writeCode.data)}</Highlight> : ''}
            </div>
            
        </div>;
    }

    getList(val:any){
        let getList = [];
        val.forEach((value:any)=>{
            let itemVal:any[] = [];

            value.forEach((val:any)=>{
                itemVal.push(val.labels);
            });
            getList.push(itemVal);
        });
        this.state.writeCode.data = getList;
        this.forceUpdate();
    }

}