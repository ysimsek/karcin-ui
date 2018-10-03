import * as React from "react";
import {Row,Col, Button} from 'reactstrap';
import {DateInput, Condition} from "karcin-ui";


export default class ConditionExample extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {id:1, where:0, box:"group", children:[
                    {id:2, field:null, operator:null, value:null, box:'box'},
                    {id:3, field:null, operator:null, value:null, box:'box'},
                    {id:4, field:null, operator:null, value:null, box:'box'},
                ]},
                {id:6, where:0, box:"group", children:[
                    {id:7, field:null, operator:null, value:null, box:'box'},
                    {id:8, field:null, operator:null, value:null, box:'box'},
                    {id:9, field:null, operator:null, value:null, box:'box'},
                ]},
                {id:11, field:null, operator:null, value:null, box:'box'}
            ],
            field:[
                {id:1, field:'Deneme', fieldFullName:'deneme12.Asd'},
                {id:2, field:'Denemes', fieldFullName:'deneme12.dsds'},
                {id:3, field:'Denemeq', fieldFullName:'deneme12.wewew'},
                {id:4, field:'Denemer', fieldFullName:'deneme12.bklklk'}
            ]
        }
    }


    render() {
        return (<div>
            <Condition data={this.state.data} field={this.state.field}/>
        </div>
        );
    }

}