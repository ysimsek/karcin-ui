import * as React from "react";
export interface GetInputProps {
    type: any;
    data?: any;
    value?: any;
    name?: any;
    onChange?: any;
}
export default class GetInput extends React.Component<GetInputProps, any> {
    static defaultProps: Partial<any>;
    constructor(props: any);
    UNSAFE_componentWillReceiveProps(props: any): void;
    render(): JSX.Element;
    getInput(): any;
    handleChange(e: any): void;
    listAddItem(): void;
    listSelectedItems(): any;
    removeSelectedItems(id: any): void;
    generalOnChange(e: any, data?: any): void;
}
