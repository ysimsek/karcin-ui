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
                    "order" : false,
                    "mapping": "title.deneme"
                },
                {
                    "type": "textarea",
                    "name": "developers",
                    "label": "Geliştirici"
                },
                {
                    "type": "textarea",
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
                    {id:11, title:'ReactJS', developers:'Facebook', year:'2013', aciklama:'Programlama Dili'},
                    {id:12, title:'Vue', developers:'Evan You', year:'2014', aciklama:'Programlama Dili'},
                    {id:13, title:'Pascal', developers:'Niklaus Wirth', year:'1970', aciklama:'Programlama Dili'},
                    {id:14, title:'HTML', developers:'W3C ve WHATWG', year:'1993', aciklama:'Programlama Dili'},
                    {id:15, title:'CSS', developers: 'World Wide Web Consortium', year:'1996', aciklama:'Programlama Dili'},
                    {id:16, title:'Android', developers:'Google,Open Handset Alliance', year:'2008', aciklama:'Programlama Dili'},
                    {id:17, title:'D', developers:'Walter Bright, Andrei Alexandrescu', year:'2001', aciklama:'Programlama Dili'},
                    {id:18, title:'Cobol', developers:'Üniversiteler, Hükümetler ve Ticari Kuruluşlar', year:'1959', aciklama:'Programlama Dili'}
                ]
            })
        };
    }

    render() {

        let toolbar = [
            {name:'Create', icon:'fa-plus', disabled:false, onClick:this.createButton.bind(this)},
            {name:'Edit', icon:'fa-edit', disabled:true, onClick:this.createButton.bind(this)},
            {name:'Delete', icon:'fa-trash', disabled:true, onClick:this.createButton.bind(this)}
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
        return (
            <DataGrid store={this.state.store} rowContextData={contexData} toolbars={toolbar} pageShow={5} fields={this.state.fields} pagination={true} title={"Deneme"}/> 
        )
    }

    createButton(){ 
        debugger;
    }
}
