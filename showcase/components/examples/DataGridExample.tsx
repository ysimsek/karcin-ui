import * as React from "react";
import {DataGrid, Store} from 'karcin-ui';
import Axios from 'axios';


export default class DataGridExample extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            fields: [
                {
                    "property": "int",
                    "value": "id",
                    "name": "ID",
                    "visibility": false
                },
                {
                    "property": "string",
                    "value": "title",
                    "name": "isim"
                },
                {
                    "property": "string",
                    "value": "body",
                    "name": "açıklama",
                    "width" : 200
                },
                {
                    "property": "string",
                    "value" : "url",
                    "name" : "image",
                    "width" : 500
                }
            ],
            store: new Store({
                idField: 'id',
                data: [],
                //url: 'https://jsonplaceholder.typicode.com/photos',
                responseData:'data'
            })
        };



        this.dataUpdate();


    }

    render() {

        return (<div><DataGrid store={this.state.store} fields={this.state.fields} onSelected={(e, b) => {
            this.getSelectData(e, b)
        }} toolbar={[{
            name: 'Ekle',
            icon: 'fa-plus',
            url: 'https://www.google.com',
            disabled: true
        }, {
            name: 'Düzenle', icon: 'fa-minus', onClick: () => {
                this.clickEdit()
            }
        }]} pagination={true} pageShow={1}/></div>);
    }

    dataUpdate(){
        setTimeout(()=>{
            this.state.store.props.data = [{id:1, title:'deniz', body:'denememe', url:'dededede'}];
            this.state.store.read();
        },1000);
    }


    clickEdit() {

    }

    getSelectData(e, b) {

    }
}