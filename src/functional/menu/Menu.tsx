import * as React from "react";
import {Nav, NavItem, NavLink, Collapse, Badge} from "reactstrap";
import {FaIcon} from "../../index";
import "../../css/sass/menu.scss";

export interface MenuProps {
    data: Array<MenuItemsProps>;
    onChange?: React.EventHandler<any>;
    active?: MenuItemsProps;
    type?: string;
    accordion?: boolean;
}

export interface MenuItemsProps {
    id: number,
    name: string,
    title?: string,
    icon?: string,
    href?: string,
    collapse?: boolean,
    items?: Array<MenuItemsProps>,
    badgeColor?: string,
    badge?: string
}

export interface MenuState {
    active?: any,
    activeList ?:any[]
}


export default class Menu extends React.Component<MenuProps, MenuState> {

    static defaultProps: Partial<MenuProps> = {
        type: 'dropDown'
    };

    constructor(props: MenuProps) {
        super(props);
        this.state = {
            active: {},
            activeList : []
        };
    }


    render() {
        let menu = this.getMenu(this.props.data, undefined);
        return (menu);
    }

    getMenu(arr: Array<MenuItemsProps>, id:any) {
        let me = this;
        let menu: any = [];
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach((v, i) => {
                let subMenu = null;
                let keys = (id !== undefined) ? id + "-" + i : i;
                if (v.items != undefined && Array.isArray(v.items) && v.items.length > 0) {
                    subMenu = me.getMenu(v.items, keys);
                    let childMenu = me.getChildItems(v,keys,subMenu);

                    menu.push(childMenu);

                    // menu.push(<CollapseMenu key={i} id={keys} item={v} collapse={v.collapse} type={me.props.type} active={this.state.active} accordion={this.props.accordion}>
                    //     {subMenu}
                    // </CollapseMenu>);
                } else {
                    menu.push(me.getMenuItem(v, i));
                }
            });
        }
        return <Nav vertical
                    className={`karcin-menu ${(this.props.type === 'hover') ? 'hover-menu' : ''}`}>{menu}</Nav>;
    }

    getMenuItem(item: MenuItemsProps, key: any) {
        let activeClass = (item.id == this.state.active.id && item.name == this.state.active.name) ? "active" : "";
        return <NavItem key={key} className={activeClass}>
            <div className="menu-head" onClick={() => {
                if (this.props.type === 'dropDown') {
                    this.setActiveItem(item)
                }
            }}>
                <NavLink href={(item.href) ? item.href : "#"}>
                    {(item.icon !== undefined) ? <FaIcon code={item.icon} className="menu-icon"/> : ''}
                    {item.title}{(item.badge !== undefined) ? <Badge color={item.badgeColor}>{item.badge}</Badge> : ''}
                    {(item.items !== undefined) ? (this.props.type === "hover" ?
                        <FaIcon code="fa-angle-right" className="open-icon"/> : activeClass ?
                            <FaIcon code="fa-angle-down" className="open-icon"/> :
                            <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
                </NavLink>
            </div>
        </NavItem>;
    }

    setActiveItem(item: MenuItemsProps) {
        this.setState({active: item});
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    }


    getChildItems(getItems:any, getKey:any, getSubMenu:any){

        let self = this;
        let collapse = false;

        return <NavItem className={(collapse ? "opened" : "")}>
            <div className="menu-head" onClick={() => {
                if (this.props.type === 'dropDown') {
                    self.toggle(getKey);
                }
            }}>
                {(getItems.icon !== undefined) ? <FaIcon code={getItems.icon} className="menu-icon"/> : ''}
                <NavLink href={(getItems.href) ? getItems.href : '#'}>{getItems.title}</NavLink>
                {(getItems.badge !== undefined) ? <Badge color={getItems.badgeColor}>{getItems.badge}</Badge> : ''}
                {(getItems.items !== undefined) ? (this.props.type === "hover" ?
                    <FaIcon code="fa-angle-right" className="open-icon"/> : collapse ?
                        <FaIcon code="fa-angle-down" className="open-icon"/> :
                        <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
            </div>
            <Collapse isOpen={(self.state.activeList.indexOf(getKey) !== -1 ? true : false)}>
                {getSubMenu}
            </Collapse>
        </NavItem>
    }

    toggle(key:any) {

        if(this.state.activeList.indexOf(key) === -1){
            this.state.activeList.push(key);
            this.forceUpdate();
        }
    }

}