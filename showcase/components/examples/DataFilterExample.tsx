import * as React from "react";
import {DataFilter} from 'karcin-ui';

export default class DataFilterExample extends React.Component<any, any> {
    constructor(props:any){
        super(props);

    }
    render() {
        let field = [
            {
                "label": "Id",
                "type": "number",
                "name": "id",
                "filter": true
            },
            {
                "label": "Name",
                "type": "string",
                "name": "name",
                "filter": true
            },
            {
                "label": "Surname",
                "type": "string",
                "name": "surname",
                "filter": true
            },
            {
                "label": "E-Mail",
                "type": "string",
                "name": "email",
                "filter": true
            },
            {
                "label": "Password",
                "type": "password",
                "name": "password",
                "filter": false
            },
            {
                "label": "Birthdate",
                "type": "date",
                "name": "birthdate",
                "filter": true
            },
            {
                "label": "Job Title",
                "type": "select",
                "name": "job",
                "filter": true,
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
                "filter": true,
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
            <DataFilter field={field}/>
        </div>;
    }

}