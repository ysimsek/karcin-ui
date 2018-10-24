import * as React from 'react';
export interface LookUpProp {
    store?: Array<any> | any;
    field?: Array<any> | any;
    textField?: any;
    renderer?: any;
    onChange?: any;
    dataGridOption?: any;
    name?: any;
    label?: any;
    className?: any;
    /**
     * Fa icon code exam fa-pie-chart
     */
    icon?: string;
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
    openPopup(): void;
    returnModal(): JSX.Element;
    dataSelected: (val: any, index: any) => void;
    toggle: () => void;
    onDoubleClick: (e: any) => void;
    selectedSave: () => void;
}
