import * as React from "react";
import {Container,Jumbotron,Row,Col} from "reactstrap";
import {Menu} from "karcin-ui";
import RenderComponents from "./RenderComponent";
const model = require("./jsons/DocList.json");

const data =[

            {
                "id": 1,
                "name": "AjaxRequest",
                "title": "AjaxRequest",
                "href": "#/Docs/AjaxRequest"
            },
            {
                "id": 2,
                "name": "Model",
                "title": "Model",
                "href": "#/Docs/Model"
            },
            {
                "id": 3,
                "name": "Store",
                "title": "Store",
                "href": "#/Docs/Store"
            }
];

export default class Docs extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = {
            data : model.data
        }
    }

    render() {
        return <Container>
                    {this.getMenus()}
                </Container>;
    }

    getMenus(){
        let item = this.getItem(window.location.hash, this.state.data);
        let detailCmp = null;
        if (item.length > 0){
            detailCmp = <RenderComponents type={"docs"} item={item[0]}/>;
        } else {
            detailCmp = <span>Component Bulunamadı...</span>;
        }
        return (<div className="content-component">
                <div className="side-menu-container">
                    <Menu data={this.state.data} accordion={true} onChange={(val)=>{this.handleChange(val)}} />
                </div>
            <div className="container-component content-page">{detailCmp}</div>
        </div>);
    }

    getItem(href,data, item=[]){
        if (data && this.state.data.length > 0){
            data.forEach((v,i)=>{
                if (v.items && v.items.length > 0){
                    this.getItem(href,v.items, item);
                } else {
                    if (v.href == href){
                        item.push(v);
                    }
                }
            });
        }
        return item;
    }

    handleChange(val:any){
        console.log(val);
    }
}
