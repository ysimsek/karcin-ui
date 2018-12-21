import * as React from "react";
export interface InputProps {
    type?: string | any;
    name?: string;
    value?: string;
    label?: string;
    labelPosition?: string;
    onChange?: React.EventHandler<any>;
    placeholder?: string;
    size?: number;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    cols?: number;
    rows?: number;
    inputClass?: string;
    inputId?: string;
    valid?: boolean;
    requireText?: string;
    checkIcon?: string;
    checkIconColor?: string;
    checked?: boolean;
    lineText?: string;
    checkItems?: Array<ItemsProps> | any;
    icon?: string;
    IconColor?: string;
    [key: string]: any;
}
export interface ItemsProps {
    lineText?: string;
    checkIcon?: string;
    checkIconColor?: string;
    className?: string;
    id?: string;
    style?: any;
    onChange?: React.EventHandler<any>;
    name?: string;
    checked?: boolean;
}
export interface InputState {
    value?: string;
}
export default class Input extends React.Component<InputProps, any> {
    static defaultProps: Partial<InputProps>;
    constructor(props: InputProps);
    componentWillReceiveProps(props: InputProps): void;
    render(): JSX.Element;
    getFilterProps(filter: any): any;
    getInput(): any;
    getCheck(inputClass: any, inputProps: any, index?: number): JSX.Element;
    handleChange: (e: any, id?: any) => void;
}
