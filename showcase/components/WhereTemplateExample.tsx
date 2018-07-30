import * as React from "react";
import {Row,Col, Button} from 'reactstrap';
import {DateInput} from "karcin-ui";
import WhereTemplate from '../../src/functional/WhereTemplate';


export default class WhereTemplateExample extends React.Component<any,any> {
    themplate:any;
    constructor(props: any) {
        super(props);
        this.state = {
            data: {data:[]}
        }
    }


    render() {
        return (<div>
            <WhereTemplate ref={(e)=>{
                this.themplate = e;
            }}/>
            <Button onClick={()=>{
               this.getButton();
            }}>Getir</Button>   
        </div>
        );
    }

    getButton(){
        let data = this.themplate.getWhere();
        console.log(data);
        
        //console.log(this.dataParse(data.data).join((data.where === 0 ? '&&' : '||')));
    }


    dataParse(data:any, reverse?:any){
        let parseData:any = [];
        data.forEach((value:any)=>{
            let items = [];
            let chart = {start:"", last: ""};
            let where = (value.where === 0 ? '&&' : '||');
            
            if(value.box === 'group'){
                chart.start = "(";
            }else {
                items.push(value.key);
            }
            if(value.children !== undefined && value.children.length > 0){
                items.push(this.dataParse(value.children).join(where));
                chart.last = ")";
            }

            parseData.push(chart.start + items.join(where) + chart.last);
        });

        return parseData;
    }



}