import * as React from "react";
import {DataGrid} from 'karcin-ui';

export default class DataGridExample extends React.Component {
    render() {
        let fields = [
            {
                "property": "int",
                "value": "id",
                "name": "ID",
                "visibility" : false
            },
            {
                "property": "string",
                "value": "name",
                "name": "İsim"
            },
            {
                "property": "string",
                "value": "surname",
                "name": "Soyisim"
            },
            {
                "property": "string",
                "value": "description",
                "name": "Açıklama"
            }
        ];


        let dataGridData = [{
            'id': '1',
            'name': 'Deniz',
            'surname': 'Dalkılıç',
            'description': 'Belirtilmedi'
        }, {
            'id': '2',
            'name': 'Cabbar',
            'surname': 'Demir',
            'description': 'Belirtilmedi'
        }, {
            'id': '3',
            'name': 'Asiye',
            'surname': 'Koç',
            'description': 'Belirtilmedi'
        }, {
            'id': '4',
            'name': 'Kazım',
            'surname': 'Bekir',
            'description': 'Belirtilmedi'
        }, {
            'id': '5',
            'name': 'Mehmet',
            'surname': 'Ak',
            'description': 'Belirtilmedi'
        }, {
            'id': '6',
            'name': 'Remziye',
            'surname': 'Demir',
            'description': 'Belirtilmedi'
        }];
        return (<div><DataGrid data={dataGridData} onSelected={(e,b) => {
            this.getSelectData(e,b)
        }} toolbar={[{
            name: 'Ekle',
            icon: 'fa-plus',
            url: 'https://www.google.com',
            disabled:true
        }, {
            name: 'Düzenle', icon: 'fa-minus', onClick: () => {
                this.clickEdit()
            }
        }]} fields={fields}/></div>);
    }


    clickEdit() {
        debugger;
    }

    getSelectData(e,b) {
        console.log(e,b);
    }
}