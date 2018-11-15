import * as React from "react";
import '../../css/condition.css';
export interface ConditionProps {
    data?: any[] | any;
    field?: any[] | any;
    onChange?: React.EventHandler<any> | any;
}
export default class Condition extends React.Component<ConditionProps, any> {
    data: any[];
    field: any[];
    likeOperator: any;
    operators: any[];
    newData: any;
    whereData: any;
    constructor(props: ConditionProps);
    UNSAFE_componentWillReceiveProps(props: ConditionProps): void;
    init(props: ConditionProps): void;
    /**
     * @returns {any}
     */
    render(): any;
    dataParseLoop(data: any, key?: any, returns?: any): any;
    getSingleModel(value: any, keys: any, data: any, index: any): JSX.Element;
    addItems(val: any, type: any): void;
    deleteItem(value: any, keys: any, data: any, index: any): void;
    getValueComponent(value: any): any;
    getWhereTemplate(): {
        data: any[];
        where: any;
    };
    getDataWhere(data: any): void;
    getWhere(): any;
}
