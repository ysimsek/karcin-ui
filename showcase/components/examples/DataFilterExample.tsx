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
                "label": "Id",
                "type": "number",
                "name": "id"
            },
            {
                "label": "Name",
                "type": "string",
                "name": "name"
            },
            {
                "label": "Surname",
                "type": "string",
                "name": "surname"
            },
            {
                "label": "E-Mail",
                "type": "string",
                "name": "email"
            },
            {
                "label": "Password",
                "type": "password",
                "name": "password"
            },
            {
                "label": "Birthdate",
                "type": "date",
                "name": "birthdate"
            },
            {
                "label": "Job Title",
                "type": "select",
                "name": "job",
                "items": [
                    {
                        name: "sd",
                        label: "Software Developer"
                    },
                    {
                        name: "sa",
                        label: "Software Architect"
                    }
                ]
            },
            {
                "label": "Gender",
                "type": "radio",
                "name": "gender",
                "items": [
                    {
                        name: "male",
                        label: "Male"
                    },
                    {
                        name: "female",
                        label: "Female"
                    }
                ]
            }
        ];

        return <div>
            <DataFilter field={field} onChange={(e)=>{
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
                itemVal.push(val.label);
            });
            getList.push(itemVal);
        });
        this.state.writeCode.data = getList;
        this.forceUpdate();
    }

}