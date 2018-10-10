import * as React from "react";
import {Menu} from "karcin-ui";
import RenderComponents from "./RenderComponent";

export interface ComponentsProps {
    menuToggle ?: any,
    responsiveMenu ?:any
}

export interface ComponentsState {
    data?:any,
    active?:any[] | any,
    menuToggle?: any,
    responsiveMenu?: any
}

export default class Components extends React.Component<ComponentsProps, ComponentsState> {

    constructor(props:ComponentsProps){
        super(props);

        const json = require('./jsons/ComponentList.json');
        this.state = {
            data:json.data,
            active : [],
            menuToggle: props.menuToggle,
            responsiveMenu:props.responsiveMenu
        };
    }

    UNSAFE_componentWillReceiveProps(props:any){
        this.setState({
            menuToggle: props.menuToggle,
            responsiveMenu : props.responsiveMenu
        })
    }


    render() {
        let item = this.getItem(window.location.hash, this.state.data);
        let detailCmp = null;
        if (item.length > 0){
            detailCmp = <RenderComponents type={"component"} item={item[0]}/>;
        } else {
            detailCmp = <span>Component Bulunamadı...</span>;
        }

        return (<div className="content-component">
            <div className={`side-menu ${(this.state.responsiveMenu) ? 'responsive-menu' : ''} ${this.state.menuToggle ? 'close-menu' : ''}`}>
                <div className="side-menu-container">
                    <Menu data={this.state.data} accordion={true} active={this.setActiveMenu()}/>
                </div>
            </div>
            <div className="container-component content-page">{detailCmp}</div></div>);
    }

    componentDidMount(){
       // this.setActiveMenu();
    }

    componentWillReceiveProps(props:ComponentsProps){
        //this.setActiveMenu();

        if(props.menuToggle !== undefined){
            this.setState({
                menuToggle:props.menuToggle
            })
        }
    }

    setActiveMenu(){
        let item = this.getItem(window.location.hash, this.state.data);
        if (window.location.hash.split("#/Components/")[1] == undefined){
            window.location.hash = "#Components/Button";
        }
        return item;
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
