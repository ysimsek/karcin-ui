import * as React from 'react';
export interface LookUpProp {
    /**
     * get store class
     */
    store?: any;
    /**
     * get array datagrid field
     */
    field?: Array<any>;
    /**
     * select input text object name
     */
    textField?: any;
    /**
     * selected input renderer option
     */
    renderer?: any;
    /**
     * onchange method
     */
    onChange?: any;
    /**
     * datagrid full option object
     */
    dataGridOption?: Object;
    /**
     * input name
     */
    name?: string;
    /**
     * label text
     */
    label?: string;
    /**
     * class name
     */
    className?: string;
    /**
     * modal footer button
     */
    modalButtons?: Array<any>;
    /**
     * modal select button text
     */
    modalSelectText?: string;
    /**
     * modal cancel button text
     */
    modalCancelText?: string;
    /**
     * modal select button color
     */
    modalSelectButtonColor?: string;
    /**
     * modal cancel button color
     */
    modalCancelButtonColor?: string;
    /**
    *  datagrid open button icon
    */
    zommButtonIcon?: string;
    /**
    *  selected data remove button icon
    */
    removeButtonIcon?: string;
    /**
     *  datagrid open button color
     */
    zommButtonColor?: string;
    /**
    *  selected data remove button color
    */
    removeButtonColor?: string;
}
export interface LookUpState {
    selected?: any;
    modalShow?: any;
    store?: any;
    save?: boolean;
    doubleSelected?: any;
}
export default class LookUp extends React.Component<LookUpProp, LookUpState> {
    static defaultProps: Partial<LookUpProp>;
    selectedResult: any;
    constructor(props: LookUpProp);
    render(): JSX.Element;
    renderVal(): string;
    returnModal: () => JSX.Element;
    dataSelected: (val: any, index: any) => void;
    toggle: () => void;
    onDoubleClick: (e: any) => void;
    selectedSave: () => void;
    modalFooterButtons: () => any[];
    removeSelect: () => void;
}
