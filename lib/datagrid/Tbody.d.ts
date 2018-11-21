import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export interface TbodyProps {
    store: any;
    fields: any;
    onSelected?: any;
    multiSelect?: boolean;
    onDoubleSelected?: any;
    select?: boolean | any;
    rowContextData?: any;
}
export interface TbodyState {
    store: any;
    fields: any;
    clickActive?: Array<any> | any;
    clickActiveRow?: Array<any> | any;
}
export default class Tbody extends React.Component<TbodyProps, TbodyState> {
    static defaultProps: Partial<TbodyProps>;
    constructor(props: TbodyProps);
    UNSAFE_componentWillReceiveProps(props: TbodyProps): void;
    render(): JSX.Element;
    getData(): any;
    contextCallback(e: any): void;
    /**
     * @param e
     * @param active
     * @param data
     */
    onClickRow(e: any, active: any, data: any): void;
    resetSelected(): void;
}
