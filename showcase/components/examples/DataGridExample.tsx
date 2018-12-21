import * as React from "react";
import {Store, Button, DataGrid} from 'karcin-ui';
import Axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';


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
                    "order" : false
                },
                {
                    "type": "string",
                    "name": "developers",
                    "label": "Geliştirici"
                },
                {
                    "type": "date",
                    "name": "year",
                    "label": "Çıkış Tarihi"
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
                    {id:1, title:'Php', developers:'Zeev Suraski ve Andi Gutmans', year:'1997', aciklama:'Programlama Dili'},
                    {id:2, title:'Java', developers:'James Gosling', year:'1995', aciklama:'Programlama Dili'},
                    {id:3, title:'JavaScript', developers:'Brendan Eich', year:'1995', aciklama:'Programlama Dili'},
                    {id:4, title:'Asp', developers:'Microsoft', year:'1996', aciklama:'Programlama Dili'},
                    {id:5, title:'Python', developers:'Guido Van rossum', year:'1990', aciklama:'Programlama Dili'},
                    {id:6, title:'Ruby', developers:'Yukihiro Matsumoto ', year:'1993', aciklama:'Programlama Dili'},
                    {id:7, title:'Go', developers:'Google', year:'2007', aciklama:'Programlama Dili'},
                    {id:8, title:'C', developers:'Ken Thompson ve Dennis Ritchie', year:'1972', aciklama:'Programlama Dili'},
                    {id:9, title:'C++', developers:'Bjarne Stroustrup', year:'1979', aciklama:'Programlama Dili'},
                    {id:10, title:'AngularJS', developers:'Misko Hevery', year:'2009', aciklama:'Programlama Dili'},
                    {id:11, title:'ReactJS', developers:'Facebook', year:'2013', aciklama:'Programlama Dili'}
                ]
            })
        };
    }

    render() {

        let toolbar = [
            {name:'Create', icon:'fa-plus', disabled:false},
            {name:'Edit', icon:'fa-edit', disabled:true},
            {name:'Delete', icon:'fa-trash', disabled:true}
        ];

        let contexData = [
            {title:'Create', icon:'fa-plus', callback:(e, e2)=>{
                console.log(e, e2);
            }},
            {title:'Edit', icon:'fa-edit'},
            {title:'Edit', icon:'fa-edit', items: [
                    {title:'Reactstrap', link:'https://reactstrap.github.io'}
                ]},
        ];
        return (<div>
            <DataGrid store={this.state.store} rowContextData={contexData} toolbars={toolbar} pageShow={5} fields={this.state.fields} pagination={true} title={"Deneme"}/>
            </div>
        )
    }
}
