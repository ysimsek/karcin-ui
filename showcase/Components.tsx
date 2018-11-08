import * as React from "react";
import {Menu} from "karcin-ui";
import RenderComponents from "./RenderComponent";
import LeftMenu from "./base/LeftMenu";
export default class Components extends React.Component<any, any> {
    private menucmp;
    constructor(props){
        super(props);
        const json = require('./ComponentList.json');
        this.state = {
            data:json.data
        };
    }

    render() {
        let item = this.getItem(window.location.hash, this.state.data);
        let detailCmp = null;
        if (item.length > 0){
            detailCmp = (
                <RenderComponents
                    item={item[0]}
                />
            );
        } else {
            detailCmp = <span>404 Not Found</span>;
        }

        return <div className="content-component">
            <div className="side-menu" style={{display:"none"}}>
                <div className="side-menu-container">
                    <Menu ref={(v) => { this.menucmp = v; }} data={this.state.data} />
                </div>
            </div>
            <LeftMenu/>
            <div className="container-component content-page">{detailCmp}</div>
        </div>;
    }

    componentDidMount(){
        this.setActiveMenu();
    }

    componentDidUpdate(){
        this.setActiveMenu();
    }

    setActiveMenu(){
        let item = this.getItem(window.location.hash, this.state.data);
        if (window.location.hash.split("#/Components/")[1] == undefined){
            window.location.hash = "#Components/Button";
        }
        if (item.length > 0){
            this.menucmp.setActiveItem(item[0]);
        }
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

}