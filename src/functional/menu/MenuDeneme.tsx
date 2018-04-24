import * as React from 'react';
import {Collapse, Nav, NavItem, Badge, NavLink} from 'reactstrap';
import FaIcon from '../faicon/FaIcon'
import "../../css/sass/menu.scss";

export interface MenuProps {
    data: Array<MenuData> | any;
    type?: string;
    accordion?:boolean;
    active?:Array<MenuData>;
}

export interface MenuData {
    id: number,
    name: string,
    title?: string,
    icon?: string,
    href?: string,
    collapse?: boolean,
    catTitle?: string,
    items?: Array<MenuData>,
    badge?: string,
    badgeColor?: string
}

export interface MenuState {
    menuData: Array<MenuData> | any,
    menuActive?: any[] | any,
    type?: string,
    active ?: any,
    addActive?: boolean
}

export default class MenuDeneme extends React.Component<MenuProps, MenuState> {

    menuChilds: any = null;

    static defaultProps: Partial<MenuProps> = {
        type: 'dropDown',
        accordion:false
    };

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            menuData: [],
            menuActive: [],
            type: this.props.type,
            active : null,
            addActive : false
        };
    }

    componentWillReceiveProps(props:MenuProps){
        this.setState({
            menuData : props.data,
            type: props.type
        });

    }

    render() {
        this.menuChilds = this.menuLoop(this.props.data, undefined, 0,false);
        console.log(this.state.menuActive);
        return <Nav key="0" className={`karcin-menu ${(this.state.type === 'hover') ? 'hover-menu' : ''}`}>
            {this.menuChilds}
        </Nav>;
    }


    /**
     * get start menu loop
     * @param {any[]} getData
     */
    menuLoop(getData: any, key: any, level:any, collapse:boolean) {
        // reset list menu
        this.menuChilds = [];

        // loop main menu titles

        let listMenu = [];
        let self = this;
        getData.forEach((value, index)=> {

            // active control
            let activeIconControl = false;
            let keys = (key !== undefined) ? key + "-" + index : index;

            let params = {keys:keys, level:level, collapse:false};
            if(!self.state.addActive){
                self.state.menuActive.push(params);
                value['key'] = keys;
                self.state.menuData.push(value);
            }



            listMenu.push(<NavItem key={index} className={(activeIconControl) ? 'active' : ''} id={index}>
                <div className="menu-head" onClick={()=>{ if(this.state.type === 'dropDown'){this.toggleActiveMenu(params)} }}>
                    <NavLink href={(value.href) ? value.href : "#"}>
                        {(value.icon !== undefined) ? <FaIcon code={value.icon} className="menu-icon"/> : ''}
                        {value.title}{(value.badge !== undefined) ? <Badge color={value.badgeColor}>{value.badge}</Badge> : ''}
                        {(value.items !== undefined) ? (activeIconControl ? <FaIcon code="fa-angle-down" className="open-icon"/> : <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
                    </NavLink>
                </div>
                {(value.items !== undefined && value.items.length > 0) ? this.menuLoop(value.items, keys, level + 1, true) : ''}
            </NavItem>);
        });



        let active = false;
        this.state.menuActive.forEach((val)=>{
            if(val.keys === key){
                active = val.collapse;
            }
        });

        this.state.menuData = getData;

        return (collapse ? <Collapse isOpen={active}><Nav>{listMenu}</Nav></Collapse> : <Nav>{listMenu}</Nav>);
    }

    toggleActiveMenu(param:any){

        let self = this;
        this.state.menuActive.map((val)=>{
            // let splitId = param.keys.split('-');

            if(self.props.accordion){

                if(param.level === val.level){
                    if(param.keys === val.keys){
                        return val.collapse = true;
                    }
                    else {
                        return val.collapse = false;
                    }
                }

            }else {
                if(param.keys === val.keys && param.level === val.level){
                    return val.collapse = (!val.collapse ? true : false);
                }
            }
        });
        this.setState({addActive:true});
        this.forceUpdate();
    }


    activeFind(){

    }



}