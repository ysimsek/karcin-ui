import * as React from "react";
import {DataGrid, Store, Button} from 'karcin-ui';
import Axios from 'axios';


export default class DataGridExample extends React.Component<any, any> {
    show = true;

    constructor(props: any) {
        super(props);

        this.state = {
            fields: [
                {
                    "property": "int",
                    "value": "id",
                    "name": "ID"
                },
                {
                    "property": "string",
                    "value": "name",
                    "name": "isim"
                },
                {
                    "property": "string",
                    "value": "surname",
                    "name": "Soyisim",
                },
                {
                    "property": "string",
                    "value": "title",
                    "name": "Görevi",
                }
            ],
            store: new Store({
                idField: 'id',
                data: [{
                    'id': '1',
                    'name': 'Deniz',
                    'surname': 'DALKILIÇ',
                    'title': 'Yazılım Uzmanı'
                }, {
                    'id': '2',
                    'name': 'Yunus',
                    'surname': 'ŞİMŞEK',
                    'title': 'Yazılım Uzmanı'
                }, {
                    'id': '3',
                    'name': 'Tayyip',
                    'surname': 'DEMİRCAN',
                    'title': 'Yazılım Uzmanı'
                }, {
                    'id': '4',
                    'name': 'Mustafa',
                    'surname': 'GÜNGÖR',
                    'title': 'Yazılım Uzmanı'
                }, {
                    'id': '5',
                    'name': 'Bora',
                    'surname': 'AVCI',
                    'title': 'Yazılım Uzmanı'
                }]
            }),
            page:1,
        };

    }

    render() {
        return (<div><DataGrid store={this.state.store} fields={this.state.fields} page={this.state.page} changePage={(page:any)=>{
            this.pageChange(page);
        }} toolbar={[{
            name: 'Ekle',
            icon: 'fa-plus',
            url: 'https://www.google.com',
            disabled: this.show
        }, {
            name: 'Düzenle', icon: 'fa-minus', onClick: () => {
                this.clickEdit()
            }
        }]} pagination={true} pageShow={3}/>
        <Button color="danger" onClick={()=>{this.deleteData();}}>Delete Deniz</Button>
        <Button color="info" onClick={()=>{this.updateData();}}>Update Bora</Button>
        <Button color="success" onClick={()=>{this.addData();}}>Insert Ayça</Button>
        </div>);
    }

    clickEdit(){

    }

    deleteData(){
        this.state.store.delete([{
            'id': '1',
            'name': 'Deniz',
            'surname': 'DALKILIÇ',
            'title': 'Yazılım Uzmanı'
        }],(data:any)=>{
            console.log(data);
        })
    }

    updateData(){
        this.state.store.update([{
            'id': '5',
            'name': 'Bora',
            'surname': 'AVCI',
            'title': 'Project Manager'
        }],(data:any)=>{
            console.log(data);
        })
    }

    addData(){
        this.state.store.create([{
            'id': '6',
            'name': 'Ayça',
            'surname': 'DEMİRBİLEK',
            'title': 'İnsan Kaynakları'
        }],(data:any)=>{
            console.log(data);
        })
    }


    pageChange(pages) {
        let state = {page:pages};
        this.setState(state);;
    }
}