import * as React from 'react';
import {Collapse, Nav, NavItem} from 'reactstrap';
import FaIcon from "../../../lib/functional/faicon/FaIcon";
import "./Menu.scss";

export interface MenuProps {
    data: Array<MenuData>;
    type?: string;
}

export interface MenuData {
    id: number,
    name: string,
    title?: string,
    icon?: string,
    href?: string,
    collapse?: boolean,
    catTitle?: string,
    items?: Array<MenuData>
}

export interface MenuState {
    menuData: any,
    menuActive: any[]
}

export default class Menu2 extends React.Component<MenuProps, MenuState> {

    menuChilds: Array<any> = [];

    static defaultProps: Partial<MenuProps> = {
        type: 'dropDown'
    };

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            menuData: this.props.data,
            menuActive: []
        };

        this.menuLoop(this.state.menuData);
    }

    render() {
        return <Nav className="karcin-menu">
            {this.menuChilds}
        </Nav>;
    }


    /**
     * get start menu loop
     * @param {any[]} getData
     */
    menuLoop(getData: any[]) {
        // reset list menu
        this.menuChilds = [];

        // loop main menu titles
        for (let i = 0; i < getData.length; i++) {
            let value = getData[i];

            // active control
            let activeIconControl: boolean = false;
            if (this.state.menuActive.indexOf(i.toString()) !== -1) {
                activeIconControl = true;
            } else {
                activeIconControl = false;
            }

            let menuHtml: JSX.Element = <NavItem key={i + 1}>
                <div className="menu-head" onClick={() => {this.toggleActiveMenu(i.toString())}}>
                    {(value.icon !== undefined) ? <FaIcon code={value.icon}/> : ''}<span>{value.title}</span>
                    {(this.props.type === 'dropDown' && value.items !== undefined) ? (activeIconControl ? <FaIcon code="fa-angle-down"/> : <FaIcon code="fa-angle-right"/>) : ''}
                </div>
                {(value.items !== undefined && value.items.length > 0) ? this.menuChildLoop(value.items, i.toString()) : ''}
            </NavItem>;
            this.menuChilds.push(menuHtml);
        }
    }

    /**
     * get child menus
     * @param {any[]} getChild
     * @param {string} id
     * @returns {Array<any>}
     */
    menuChildLoop(getChild: any[], id: string): Array<any> {
        // child menu lists
        let childs: Array<any> = [];

        // child menu loop
        for (let i: number = 0; i < getChild.length; i++) {
            let valueChild = getChild[i];
            let oldKey = id;
            let newKey = id + "-" + i;

            // active control
            let active: boolean = false;
            if (this.state.menuActive.indexOf(oldKey) !== -1) { active = true; } else { active = false; }

            // dropdown icon control
            let activeIconControl: boolean = false;
            if (this.state.menuActive.indexOf(newKey) !== -1) { activeIconControl = true; } else { activeIconControl = false; }

            childs.push(<Collapse key={i} isOpen={active} id={oldKey}>
                <div className="menu-head"  onClick={() => {this.toggleActiveMenu(newKey)}}>
                    {(valueChild.icon !== undefined) ? <FaIcon code={valueChild.icon}/> : ''}<span>{valueChild.title}</span>
                    {(this.props.type === 'dropDown' && valueChild.items !== undefined) ? (activeIconControl ? <FaIcon code="fa-angle-down"/> : <FaIcon code="fa-angle-right"/>) : ''}
                </div>
                {(valueChild.items !== undefined && valueChild.items.length > 0) ? this.menuChildLoop(valueChild.items, newKey) : ''}
            </Collapse>);
        }

        return childs;
    }

    /**
     * toggle menu active
     * @param {string} id
     */
    toggleActiveMenu(id: string) {
        if (this.state.menuActive.indexOf(id) !== -1) {
            this.state.menuActive.splice(this.state.menuActive.indexOf(id), 1);
        } else {
            this.state.menuActive.push(id);
        }

        this.forceUpdate();
        this.menuLoop(this.state.menuData);
    }


}