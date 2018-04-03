import * as React from "react";
import {DataGrid} from 'karcin-ui';

export default class DataGridExample extends React.Component {
    render() {
        let fields  = [
            {
                "property" : "int",
                "value"    : "id",
                "name"     : "ID"
            },
            {
                "property" : "string",
                "value"    : "name",
                "name"     : "İsim"
            },
            {
                "property" : "string",
                "value"    : "surname",
                "name"     : "Soyisim"
            },
            {
                "property" : "string",
                "value"    : "description",
                "name"     : "Açıklama"
            }
        ];


        let dataGridData = [{
            'id'   : '1',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        },{
            'id'   : '2',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        },{
            'id'   : '3',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        },{
            'id'   : '4',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        },{
            'id'   : '5',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        },{
            'id'   : '6',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        },{
            'id'   : '7',
            'name' : 'Deniz',
            'surname' : 'Dalkılıç',
            'description': 'Belirtilmedi'
        }];
        return (<div><DataGrid data={dataGridData} fields={fields}/></div>);
    }
}