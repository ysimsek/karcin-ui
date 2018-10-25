import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export interface TheadProps {
    store: any;
    fields: any;
    fieldShowing?: boolean | any;
    fieldOption?: boolean | any;
    fieldOptionReset?: any;
}
export interface TheadState {
    store: any;
    fields: any;
    dropDownMenu?: any;
    orderIng?: any;
    fieldShowing?: boolean | any;
    fieldOption?: boolean | any;
    filterShowing?: any;
    filterRemote: any;
    filterDelay?: any;
    filterOption: any;
}
export default class Thead extends React.Component<TheadProps, TheadState> {
    static defaultProps: Partial<TheadProps>;
    itemRef: any;
    resizeEvent: any;
    resizeOption: any;
    _filterDelay: number;
    _filterInterval: any;
    constructor(props: TheadProps);
    UNSAFE_componentWillReceiveProps(props: TheadProps): void;
    _init(props: TheadProps): void;
    render(): JSX.Element;
    getItemControl(): JSX.Element;
    groupItems(): any;
    getItems(data: any, index?: any): any;
    resizing(event: any, itemRef: any, index: any): void;
    removeResizing(e?: any, itemRef?: any): void;
    widthResult: (event?: any) => void;
    getGroupAdd(data?: any, groupName?: any, index?: any): any;
    dropDownMenu(value: any): "" | JSX.Element;
    toggleDropdown(name: any): void;
    fieldShowing(index: any): void;
    orderIng(value: any, type: any): void;
    orderIcon(value: any): any;
    getFilter(data: any): any;
    filterToggle(data: any): void;
    filterData(fieldName: any, element: any): void;
}
