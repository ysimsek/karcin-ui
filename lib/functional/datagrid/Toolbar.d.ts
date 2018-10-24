import * as React from "react";
export interface ToolbarProps {
    type?: string | any;
    store?: Array<any> | any;
    data?: Array<any>;
    changePage?: any;
    paginationData?: React.EventHandler<any>;
    selectedRow?: any;
    pageShow?: any;
    grud?: any;
    fields?: any;
    dataFormLabelText?: any;
    dataFormNameText?: any;
    title?: any;
}
export default class Toolbar extends React.Component<ToolbarProps, any> {
    /**
     * general variable
     */
    paginationControl: boolean;
    editValues: any;
    dataForm: any;
    /**
     * Initial props value
     */
    static defaultProps: Partial<ToolbarProps>;
    /**
     * Initial values
     */
    constructor(props: ToolbarProps);
    UNSAFE_componentWillReceiveProps(props: ToolbarProps): void;
    /**
     * return any
     */
    render(): any;
    /**
     * location url
     * @param url
     */
    urlDirectory(url: any): void;
    getGrudButtons(): any;
    openSave: () => void;
    openEdit: () => void;
    openRemove: () => void;
    modalHtml: () => JSX.Element;
    openModal: (type: any) => void;
    toggleModal: () => void;
}
