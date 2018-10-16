import * as React from "react";
import {Store, Button} from 'karcin-ui';
import Axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

import DataGrid from '../../../src/datagrid/DataGrid';


export default class DataGridExample extends React.Component<any, any> {
    show = true;

    constructor(props: any) {
        super(props);

        let data = [];

        this.state = {
            fields: [
                {
                    "type": "int",
                    "name": "id",
                    "label": "ID",
                    "visibility": false,
                },
                {
                    "type": "string",
                    "name": "title",
                    "label": "Başlık",
                    "width" : 600,
                    "filter" : false,
                    "order" : false
                },
                {
                    "type": "textarea",
                    "name": "body",
                    "label": "Deneme"
                },
                {
                    "type": "textarea",
                    "name": "govde",
                    "label": "Gövde"
                },
                {
                    "type": "textarea",
                    "name": "aciklama",
                    "label": "Açıklama"
                }
            ],
            store: new Store({
                idField: 'id',
                data: [
                    {id:1, title:'Button', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:2, title:'Button2', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:3, title:'Button3', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:4, title:'Button4', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:5, title:'Button5', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:6, title:'Button6', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:7, title:'Button7', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:8, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:9, title:'Button9', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:10, title:'Button10', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:11, title:'Button11', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:12, title:'Button12', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:13, title:'Button13', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:14, title:'Button14', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:15, title:'Button15', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:16, title:'Button16', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:17, title:'Button17', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:18, title:'Button18', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'}
                ]
            })
        };
    }

    render() {
       /*return (<div>
            <div className="karcin-datagrid">
                <div className="toolbar head"></div>
                <table className="datagrid-table table">
                    <div className="datagrid-head"> 
                        <thead>
                            <tr>
                                <th colSpan={2} className={'group'}>Deneme</th>
                                <th className={'empty'}></th>
                                <th className={'empty'}></th>
                            </tr>
                            <tr>
                                <th>Deneme</th>
                                <th>Deneme</th>
                                <th>Deneme</th>
                                <th>Deneme</th>
                            </tr>
                        </thead>
                    </div>
                    <div className="datagrid-body">  
                        <Scrollbars>    
                        <tbody>
                            <tr>
                                <td>Deneme</td>
                                <td>Deneme</td>
                                <td>Deneme</td>
                                <td>Deneme</td>
                            </tr>
                            
                        </tbody>
                        </Scrollbars>
                    </div>
                </table>
                <div className="toolbar footer"></div>
            </div>
        </div>);*/

        return (
            <DataGrid store={this.state.store} fields={this.state.fields} pagination={true} pageShow={5} title="Example DataGrid"/>
        )
    }
}