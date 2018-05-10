import * as React from "react";
import {Menu} from "karcin-ui";
import RenderComponents from "./RenderComponent";

export interface ComponentsProps {
    menuToggle ?: any
}

export interface ComponentsState {
    data?:any,
    active?:any[] | any,
    menuResponsiveSize : any,
    menuToggle : any,
    responsiveMenu: any
}

export default class Components extends React.Component<ComponentsProps, ComponentsState> {

    constructor(props:ComponentsProps){
        super(props);

        const json = require('./jsons/ComponentList.json');
        this.state = {
            data:json.data,
            active : [],
            menuResponsiveSize:900,
            menuToggle: props.menuToggle,
            responsiveMenu: {control:false}
        };

        if(this.state.menuResponsiveSize >= window.innerWidth){
            this.state.responsiveMenu.control = true;
        }


        window.addEventListener('resize', () => {
            if(window.innerWidth <= this.state.menuResponsiveSize){
                this.state.responsiveMenu.control = true;
            }else {
                this.state.responsiveMenu.control = false;
            }
            this.forceUpdate();
        });
    }


    render() {
        let item = this.getItem(window.location.hash, this.state.data);
        let detailCmp = null;
        if (item.length > 0){
            detailCmp = (
                <RenderComponents item={item[0]}/>
            );
        } else {
            detailCmp = <span>Component Bulunamadı...</span>;
        }

        return (<div className="content-component">
            <div className={`side-menu ${(this.state.responsiveMenu.control) ? 'responsive-menu' : ''} ${this.state.menuToggle ? 'close-menu' : ''}`}>
                <div className="side-menu-container">
                    <Menu data={this.state.data} accordion={true} active={this.state.active}/>
                </div>
            </div>
            <div className="container-component content-page">{detailCmp}</div></div>);
    }

    componentDidMount(){
        this.setActiveMenu();
    }

    componentWillReceiveProps(props:ComponentsProps){
        this.setActiveMenu();

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
        if (item.length > 0){
            this.state.active.length = 0;
            this.state.active.push(item[0]);
            this.forceUpdate();
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