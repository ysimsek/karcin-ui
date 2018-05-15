import * as React from 'react';
import {Collapse, Nav, NavItem, Badge, NavLink} from 'reactstrap';
import FaIcon from '../../functional/faicon/FaIcon'
import '../../css/karcin-ui.css';

export interface MenuProps {
    /**
     * Set the array data
     */
    data: Array<MenuData> | any;
    /**
     * hover
     */
    hover?: boolean;
    /**
     * Default false
     */
    accordion?: boolean;
    /**
     * Active menu
     */
    active?: Array<MenuData>;
    onChange?: React.EventHandler<any> | any;
    /**
     * menu loop text change method
     */
    renderer?: React.EventHandler<any> | any;
}

export interface MenuData {
    id: number;
    name: string;
    title?: string;
    icon?: string;
    href?: string;
    collapse?: boolean;
    catTitle?: string;
    items?: Array<MenuData>;
    badge?: string;
    path?: string;
    badgeColor?: string;
}

export interface MenuState {
    menuData: Array<MenuData> | any;
    menuActive?: any[] | any;
    hover?: boolean;
    active?: any;
    activeControl?: boolean;
    collapseActive?: boolean;
}

export default class Menu extends React.Component<MenuProps, MenuState> {
    /**
     * @type {null}
     */
    menuChilds: any = null;
    /**
     * @type {{hover: boolean; accordion: boolean; active: any[]}}
     */
    static defaultProps: Partial<MenuProps> = {
        hover: false,
        accordion: false,
        active: [],
    };

    /**
     * Initial values
     * @param {MenuProps} props
     */
    constructor(props: MenuProps) {
        super(props);

        this.state = {
            menuData: [],
            menuActive: [],
            hover: this.props.hover,
            active: null,
            activeControl: false,
            collapseActive: false
        };
    }

    UNSAFE_componentWillReceiveProps() {
    }

    /**
     *
     * @param {MenuProps} props
     */
    componentWillReceiveProps(props: MenuProps) {
        this.setState({
            menuData: props.data.slice(0),
            hover: props.hover
        });

        this.activeFind(this.props.active);
    }

    /**
     * End render finished
     */
    componentDidMount() {
        this.activeFind(this.props.active);
    }

    /**
     * @returns {any}
     */
    render(): any {
        let menusList = this.props.data.slice(0);
        this.state.menuData.length = 0;
        this.menuChilds = this.menuLoop(menusList, undefined, 0, false);
        return <Nav key="0" className={`karcin-menu ${(this.state.hover) ? 'hover-menu' : ''}`}>
            {this.menuChilds}
        </Nav>;
    }


    /**
     * get start menu loop
     * @param {any[]} getData
     */
    menuLoop(getData: any, key: any, level: any, collapse: boolean) {

        // reset list menu
        this.menuChilds = [];

        // loop main menu titles

        let listMenu: any[] = [];
        let self = this;
        let newData = getData.slice(0);

        newData.forEach((value: any, index: number) => {

            // active control
            let keys = (key !== undefined) ? key + "-" + index : index.toString();
            let params = {keys: keys, level: level, collapse: false, hover:false, onOpened: false, onClosed: false};
            let activeControlBool = false;

            self.state.menuActive.forEach((val: any) => {
                if (val.keys === keys) {
                    activeControlBool = true;
                }
            });

            if (!activeControlBool) {
                self.state.menuActive.push(params);
                value['keys']   = keys;
                value['level']  = level;
                self.state.menuData.push(value);
            }


            let getActiveValue = this.menuItemActive(keys);
            let actives = false;

            if (getActiveValue['value']['onOpened'] !== false && getActiveValue['value']['onClosed'] === false) {
                actives = true;
            } else if (value.items === undefined) {
                actives = getActiveValue['active'];
            }


            listMenu.push(<NavItem key={index}  className={(actives ? 'active' : '')}>
                <div className="menu-head" onClick={() => {
                    if (!this.state.hover) {
                        this.toggleActiveMenu(params)
                    }
                }}>
                    {(this.props.renderer !== undefined ?
                            <NavLink href={(value.href) ? value.href : "#"}>{this.props.renderer(value)}</NavLink> :
                            <NavLink href={(value.href) ? value.href : "#"}>
                                {(value.icon !== undefined) ? <FaIcon code={value.icon} className="menu-icon"/> : ''}
                                <strong>{value.title}{(value.badge !== undefined) ?
                                    <Badge color={value.badgeColor}>{value.badge}</Badge> : ''}</strong>
                                {(value.items !== undefined) ? (actives ?
                                    <FaIcon code="fa-angle-down" className="open-icon"/> :
                                    <FaIcon code="fa-angle-right" className="open-icon"/>) : ''}
                            </NavLink>
                    )}
                </div>
                {(value.items !== undefined && value.items.length > 0) ? this.menuLoop(value.items, keys, level + 1, true) : ''}
            </NavItem>);
        });

        let active = (!this.state.hover) ? this.menuItemActive(key) : false;

        return (collapse ? <Collapse isOpen={active['active']} onEntered={() => {
            this.collapseOnControl(key, true)
        }} onExited={() => {
            this.collapseOnControl(key, false)
        }}><Nav>{listMenu}</Nav></Collapse> : <Nav>{listMenu}</Nav>);
    }


    /**
     * menu collapse opened and closed controlling method
     * @param key
     * @param val
     */
    collapseOnControl(key: any, val: any) {
        let active = this.menuItemActive(key);

        if (val) {
            this.state.menuActive[active['index']].onOpened = true;
            this.state.menuActive[active['index']].onClosed = false;
        } else {
            this.state.menuActive[active['index']].onClosed = true;
            this.state.menuActive[active['index']].onOpened = false;
        }

        this.forceUpdate();
    }

    /**
     * click dropdown menu toggle
     * @param param
     * @returns {any}
     */
    toggleActiveMenu(param: any): any {
        let self = this;
        this.state.menuActive.map((val: any, index: number) => {
            if (self.props.accordion) {
                if (param.level === val.level) {
                    if (param.keys === val.keys) {
                        val.collapse = !val.collapse;
                    }
                    else {
                        val.collapse = false;
                    }

                    if (self.props.onChange !== undefined) {
                        let changeMenu = self.state.menuData.slice(0);
                        self.props.onChange(changeMenu.filter((v: any) => v.keys === val.keys));
                    }
                }
            } else {

                if (param.keys === val.keys && param.level === val.level) {
                    val.collapse = !val.collapse;

                    if (self.props.onChange !== undefined) {
                        let changeMenu = self.state.menuData.slice(0);
                        self.props.onChange(changeMenu.filter((v: any) => v.keys === val.keys));
                    }
                }
            }

            return val;
        });
        this.forceUpdate();

    }

    /**
     * active find function
     * @param getActive
     * @returns {any}
     */
    activeFind(getActive: any): any {
        if (this.state.menuData.length > 0 && getActive !== undefined && getActive !== null && getActive.length > 0 && !this.state.activeControl) {
            getActive = getActive[0];
            this.state.menuData.forEach((val: any) => {
                if (val.href === getActive.href && val.name === getActive.name) {
                    for (let i = val.level; i >= 0; i--) {
                        let splitKey = val.keys.split('-');
                        this.state.menuActive.map((vals: any) => {
                            let id = splitKey.slice(0, i + 1).join('-');
                            if (this.props.accordion) {
                                if (vals.level === i && id === vals.keys) {
                                    vals.collapse = true;
                                } else if (vals.level === i) {
                                    vals.collapse = false;
                                }
                            } else {

                                if (vals.level === i && vals.keys === id) {
                                    vals.collapse = !vals.collapse;
                                }
                            }

                            return vals;
                        });

                    }
                }
            });
            this.forceUpdate();
        }
    }


    /**
     * active control func
     * @param id
     * @returns {boolean}
     */
    menuItemActive(id: any) {
        let value = {};

        this.state.menuActive.forEach((val: any, index: number) => {
            let keys = (id !== undefined) ? id : "0";
            if (val.keys === keys) {
                value['value'] = val;
                value['index'] = index;

                if(!this.props.hover) {
                    value['active'] = val.collapse;
                }
            }
        });

        return value;
    }


}