import * as React from 'react';
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
    /**
     * menu onchange function
     */
    onChange?: React.EventHandler<any> | any;
    /**
     * menu loop text change method
     */
    renderer?: React.EventHandler<any> | any;
    /**
     * active selected click
     */
    activeSelected?: React.EventHandler<any> | any;
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
    activeItem?: any;
    changeActiveItem?: any;
}
export default class Menu extends React.Component<MenuProps, MenuState> {
    /**
     * @type {null}
     */
    menuChilds: any;
    menuData: any[];
    /**
     * @type {{hover: boolean; accordion: boolean; active: any[]}}
     */
    static defaultProps: Partial<MenuProps>;
    /**
     * Initial values
     * @param {MenuProps} props
     */
    constructor(props: MenuProps);
    /**
     *
     * @param {MenuProps} props
     */
    componentWillReceiveProps(props: MenuProps): void;
    /**
     * End render finished
     */
    componentDidMount(): void;
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * get start menu loop
     * @param {any[]} getData
     */
    menuLoop(getData: any, key: any, level: any, collapse: boolean): JSX.Element;
    /**
     * click dropdown menu toggle
     * @param param
     * @returns {any}
     */
    toggleActiveMenu(param: any, items: any[]): any;
    /**
     * active find function
     * @param getActive
     * @returns {any}
     */
    activeFind(getActive: any): any;
    /**
     * active control func
     * @param id
     * @returns {boolean}
     */
    menuItemActive(id: any): boolean;
    menuItemActiveReset(): void;
}
