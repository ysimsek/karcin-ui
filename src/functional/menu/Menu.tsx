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
    addActive?: boolean,
    activeControl ?:boolean
}

export default class Menu extends React.Component<MenuProps, MenuState> {

    menuChilds: any = null;

    static defaultProps: Partial<MenuProps> = {
        type: 'dropDown',
        accordion:false,
        active: null
    };

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            menuData: [],
            menuActive: [],
            type: this.props.type,
            active : null,
            addActive : false,
            activeControl : false
        };
    }

    componentWillReceiveProps(props:MenuProps){
        this.setState({
            menuData : props.data,
            type: props.type
        });

    }

    componentDidMount(){
        this.activeFind(this.props.active);
    }

    render() {
        this.menuChilds = this.menuLoop(this.props.data, undefined, 0,false);
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
            let keys = (key !== undefined) ? key + "-" + index : index.toString();

            let params = {keys:keys, level:level, collapse:false};
            let activeControlBool = false;
            self.state.menuActive.forEach((val)=>{
                if(val.keys === keys){
                    activeControlBool = true;
                }
            });
            if(!activeControlBool){
                self.state.menuActive.push(params);
                value['keys'] = keys;
                value['level'] = level;
                self.state.menuData.push(value);
            }


            let actives = this.menuItemActive(keys);


            listMenu.push(<NavItem key={index} className={(actives) ? 'active' : ''} id={index}>
                <div className="menu-head" onClick={()=>{ if(this.state.type === 'dropDown'){this.toggleActiveMenu(params)} }}>
                    <NavLink href={(value.href) ? value.href : "#"}>
                        {(value.icon !== undefined) ? <FaIcon code={value.icon} className="menu-icon"/> : ''}
                        <strong>{value.title}{(value.badge !== undefined) ? <Badge color={value.badgeColor}>{value.badge}</Badge> : ''}</strong>
                        {(value.items !== undefined) ? (actives ? <FaIcon code="fa-angle-down" className="open-icon"/> : <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
                    </NavLink>
                </div>
                {(value.items !== undefined && value.items.length > 0) ? this.menuLoop(value.items, keys, level + 1, true) : ''}
            </NavItem>);
        });

        let active = this.menuItemActive(key);

        return (collapse ? <Collapse isOpen={active}><Nav>{listMenu}</Nav></Collapse> : <Nav>{listMenu}</Nav>);
    }

    toggleActiveMenu(param:any){
        console.log(this.state.menuActive);
        let self = this;
        this.state.menuActive.map((val)=>{
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
                    return val.collapse = !val.collapse;
                }
            }
        });


        let state = {};
        state['addActive'] = true;
        this.setState(state);
    }


    activeFind(getActive:any){
        if(this.state.menuData.length > 0 && getActive !== undefined && getActive !== null && getActive.length > 0 && !this.state.activeControl) {
            getActive = getActive[0];
            this.state.menuData.forEach((val) => {
                if (val.href === getActive.href && val.name === getActive.name) {

                    for (let i = val.level; i >= 0; i--) {
                        let splitKey = val.keys.split('-');
                        this.state.menuActive.map((vals) => {
                            let id = splitKey.slice(0, i + 1).join('-');
                            if (this.props.accordion) {
                                if (vals.level === i && id === vals.keys) {
                                    return vals.collapse = true;
                                } else if (vals.level === i) {
                                    return vals.collapse = false;
                                }
                            } else {

                                if (vals.level === i && vals.keys === id) {
                                    return vals.collapse = !vals.collapse;
                                }
                            }
                        });

                    }
                }
            });
            this.forceUpdate();
        }
    }


    menuItemActive(id:any){
        let active = false;
        this.state.menuActive.forEach((val)=>{
            let keys = (id !== undefined) ? id : "0";
            if(val.keys === keys){
                active = val.collapse;
            }
        });

        return active;
    }



}