import * as React from 'react';
import '../../css/karcin-ui.css';
export interface ContextMenuProps {
    /**
     * selector id element name
     */
    id?: string | any;
    /**
     * selector class element name
     */
    class?: string | any;
    /**
     * menu array data (title, link, icon, items, callback)
     */
    data?: Array<MenuData>;
}
export interface MenuData {
    title: string | any;
    link?: string | any;
    icon?: string | any;
    items?: Array<MenuData> | any;
    callback?: React.EventHandler<any>;
}
export interface ContextMenuState {
    showContext?: boolean | any;
    eventDirection: object | any;
}
export default class ContextMenu extends React.Component<any, any> {
    static defaultProps: Partial<ContextMenuProps>;
    constructor(props: ContextMenuProps);
    render(): JSX.Element;
    /**
     * get props data loop to menu
     * @param getData
     * @returns {any[]}
     */
    menuLoop(getData: any): any[];
    /**
     * mouse right click control
     */
    clickControl(): void;
    /**
     * splace click control
     * @param event
     */
    pathControl(event: any): void;
}
