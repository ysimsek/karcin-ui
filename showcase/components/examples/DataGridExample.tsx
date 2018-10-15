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
                    "width":600
                },
                {
                    "type": "textarea",
                    "name": "body",
                    "label": "Deneme",
                    "groupName":"Mars"
                },
                {
                    "type": "textarea",
                    "name": "govde",
                    "label": "Gövde",
                    "groupName":"Mars"
                },
                {
                    "type": "textarea",
                    "name": "aciklama",
                    "label": "Açıklama",
                    "groupName":"Venus"
                }
            ],
            store: new Store({
                idField: 'id',
                data: [
                    {id:1, title:'Button', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button2', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button3', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button4', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button5', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button6', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button7', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'},
                    {id:1, title:'Button8', body:'Karçin Button', govde:'Karçin Button', aciklama:'deneme'}
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
            <DataGrid store={this.state.store} fields={this.state.fields}/>
        )
    }
}