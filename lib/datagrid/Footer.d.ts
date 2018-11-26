import * as React from "react";
export interface FooterProps {
    type?: string | any;
    store?: Array<any> | any;
    changePage?: any;
    paginationData?: React.EventHandler<any>;
    selectedRow?: any;
    pageShow?: any;
    fields?: any;
    pageShowCount?: any;
}
export default class Footer extends React.Component<FooterProps, any> {
    /**
     * general variable
     */
    paginationControl: boolean;
    editValues: any;
    dataForm: any;
    /**
     * Initial props value
     */
    static defaultProps: Partial<FooterProps>;
    /**
     * Initial values
     */
    constructor(props: FooterProps);
    UNSAFE_componentWillReceiveProps(props: FooterProps): void;
    /**
     * return any
     */
    render(): any;
    pageChange(event?: any): void;
}
