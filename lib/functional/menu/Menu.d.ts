/// <reference types="react" />
import * as React from "react";
export interface MenuProps {
    data: Array<MenuItemsProps>;
    onChange?: React.EventHandler<any>;
    active?: MenuItemsProps;
}
export interface MenuItemsProps {
    id: number;
    name: string;
    title?: string;
    icon?: string;
    href?: string;
    collapse?: boolean;
    catTitle?: string;
    items?: Array<MenuItemsProps>;
}
export interface MenuState {
    active?: any;
}
export default class Menu extends React.Component<MenuProps, MenuState> {
    constructor(props: MenuProps);
    render(): JSX.Element;
    getMenu(arr: Array<MenuItemsProps>): JSX.Element;
    getMenuItem(item: MenuItemsProps, key: any): JSX.Element;
    setActiveItem(item: MenuItemsProps): void;
}
export declare class CollapseMenu extends React.Component<any, any> {
    constructor(props: any);
    render(): JSX.Element;
    toggle(): void;
}
