import * as React from "react";
import {Nav, NavItem, NavLink, Collapse} from "reactstrap";
import {FaIcon} from "../../index";

export interface MenuProps {
    data: Array<MenuItemsProps>;
    onChange?: React.EventHandler<any>;
    active?: MenuItemsProps;
}

export interface MenuItemsProps {
    id:number,
    name:string,
    title?:string,
    icon?:string,
    href?:string,
    collapse?:boolean,
    catTitle?:string,
    items?:Array<MenuItemsProps>
}

export interface MenuState {
    active?: any
}


export default class Menu extends React.Component<MenuProps,MenuState> {

    constructor(props:MenuProps){
        super(props);
        this.state = {
            active: {}
        };
    }

    render() {
        let menu = this.getMenu(this.props.data);
        return menu;
    }

    getMenu(arr:Array<MenuItemsProps>){
        let me = this;
        let menu:any = [];
        if (Array.isArray(arr) && arr.length > 0){
            arr.forEach((v,i)=>{
                let subMenu = null;
                if (v.items != undefined && Array.isArray(v.items) && v.items.length > 0){
                    subMenu = me.getMenu(v.items);
                    menu.push(<CollapseMenu key={i} item={v} collapse={v.collapse}>
                        {subMenu}
                    </CollapseMenu>);
                } else {
                    menu.push(me.getMenuItem(v,i));
                }
            });
        }
        return <Nav vertical className={"karcin-menu"}>{menu}</Nav>;
    }

    getMenuItem(item:MenuItemsProps,key:any){
        let activeClass = (item.id == this.state.active.id && item.name == this.state.active.name)?"active":"";
        return <NavItem key={key}>
            <NavLink className={activeClass} onClick={()=>{
                this.setActiveItem(item);
            }} href={(item.href)?item.href:"#"}>{(item.icon)?<FaIcon code={item.icon} />:""}{item.title}</NavLink>
        </NavItem>;
    }

    setActiveItem(item:MenuItemsProps){
        this.setState({active:item});
        if (this.props.onChange){
            this.props.onChange(item);
        }
    }
}

export class CollapseMenu extends React.Component<any,any> {

    constructor(props:any){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: props.collapse || false };
    }

    render(){
        let item = this.props.item;
        return <NavItem className={(this.state.collapse ? "opened" : "")}>
            {(item.catTitle !== undefined ? <h4 className="catTitle">{item.catTitle}</h4>: "")}
            <NavLink href="#" onClick={this.toggle}>{(item.icon)?<FaIcon code={item.icon} />:""}  <span>{item.title}</span> <FaIcon className="collapse-icon" code={(this.state.collapse)?"fa-angle-down":"fa-angle-right"} /></NavLink>
            <Collapse isOpen={this.state.collapse}>
                {this.props.children}
            </Collapse>
        </NavItem>
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
}