import * as React from 'react';
import {Collapse, Nav, NavItem, Badge, NavLink} from 'reactstrap';
import FaIcon from '../faicon/FaIcon'
import "../../css/sass/menu.scss";

export interface MenuProps {
    data: Array<MenuData> | any;
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
    items?: Array<MenuData>,
    badge : string,
    badgeColor: string
}

export interface MenuState {
    menuData: Array<MenuData> | any,
    menuActive?: any[] | any,
    type?: string,
    active ?: any
}

export default class MenuDeneme extends React.Component<MenuProps, MenuState> {

    menuChilds: Array<any> = [];

    static defaultProps: Partial<MenuProps> = {
        type: 'dropDown'
    };

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            menuData: this.props.data,
            menuActive: [],
            type: this.props.type,
            active : null
        };

        this.menuLoop(this.state.menuData);
    }

    componentWillReceiveProps(props:MenuProps){
        this.setState({
            menuData : props.data,
            type: props.type
        })
    }

    render() {
        return <Nav className={`karcin-menu ${(this.state.type === 'hover') ? 'hover-menu' : ''}`}>
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
        for (let i:number = 0; i < getData.length; i++) {
            let value = getData[i];

            // active control
            let activeIconControl: boolean = false;
            if (this.state.menuActive.indexOf(i.toString()) !== -1) {
                activeIconControl = true;
            } else {
                activeIconControl = false;
            }

            let menuHtml = <NavItem key={i.toString()} className={(activeIconControl) ? 'active' : ''} id={i.toString()}>
                <div className="menu-head" onClick={()=>{ if(this.state.type === 'dropDown'){this.setActive(value, i.toString())} }}>
                    <NavLink href={(value.href)?value.href:"#"}>
                        {(value.icon !== undefined) ? <FaIcon code={value.icon} className="menu-icon"/> : ''}
                        {value.title}{(value.badge !== undefined) ? <Badge color={value.badgeColor}>{value.badge}</Badge> : ''}
                        {(value.items !== undefined) ? (activeIconControl ? <FaIcon code="fa-angle-down" className="open-icon"/> : <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
                    </NavLink>
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
        let self:any = this;

        //active control
        let active: boolean = false;
        if (self.state.menuActive.indexOf(id) !== -1) { active = true; } else { active = false; }

        childs.push(<Nav>
            <Collapse key={id} isOpen={active} id={id}>
                {getChild.map((val:any, i:number) => {
                    let oldKey:string = id;
                    let newKey:string = id + "-" + i;

                    // dropdown icon control
                    let activeIconControl: boolean = false;
                    if (self.state.menuActive.indexOf(newKey) !== -1) { activeIconControl = true; } else { activeIconControl = false; }

                    return <NavItem key={i + id} id={newKey}>
                        <div className="menu-head" onClick={()=>{ if(this.state.type === 'dropDown'){this.toggleActiveMenu(newKey)} }}>
                            {(val.icon !== undefined) ? <FaIcon code={val.icon} className="menu-icon"/> : ''}
                            <NavLink href={(val.href) ? val.href : '#'}>{val.title}</NavLink>
                            {(val.badge !== undefined) ? <Badge color={val.badgeColor}>{val.badge}</Badge> : ''}
                            {(val.items !== undefined) ? (activeIconControl ? <FaIcon code="fa-angle-down" className="open-icon"/> : <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
                        </div>
                        {(val.items !== undefined && val.items.length > 0) ? self.menuChildLoop(val.items, newKey) : ''}
                    </NavItem>
                })}
            </Collapse>
        </Nav>);

        return childs;
    }

    /**
     * toggle menu active
     * @param {string} id
     */
    toggleActiveMenu(id: string) {
        // if (this.state.menuActive.indexOf(id) !== -1) {
        //     this.state.menuActive.splice(this.state.menuActive.indexOf(id), 1);
        // } else {
        //     this.state.menuActive.push(id);
        // }
        //
        // this.forceUpdate();
        // this.menuLoop(this.state.menuData);
    }


    setActive(getData:any, getId:any){
        if(getData !== undefined && getId === undefined){
            this.setState({active:getData});
        }
    }


}