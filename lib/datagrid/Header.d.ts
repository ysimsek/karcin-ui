import * as React from "react";
export interface HeaderProps {
    type?: string | any;
    store?: Array<any> | any;
    paginationData?: React.EventHandler<any>;
    selectedRow?: any;
    pageShow?: any;
    fields?: any;
    title?: any;
    toolbars?: any;
}
export default class Header extends React.Component<HeaderProps, any> {
    /**
     * general variable
     */
    paginationControl: boolean;
    editValues: any;
    dataForm: any;
    /**
     * Initial props value
     */
    static defaultProps: Partial<HeaderProps>;
    /**
     * Initial values
     */
    constructor(props: HeaderProps);
    UNSAFE_componentWillReceiveProps(props: HeaderProps): void;
    /**
     * return any
     */
    render(): any;
    /**
     * location url
     * @param url
     */
    urlDirectory(url: any): void;
}
