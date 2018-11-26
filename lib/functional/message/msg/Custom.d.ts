import * as React from "react";
export default class Custom extends React.Component<any, any> {
    state: any;
    static defaultProps: any;
    constructor(props: any);
    componentWillReceiveProps(props: any): void;
    render(): JSX.Element;
    getMessageElement(): JSX.Element;
    componentWillUnmount(): void;
    close(e: any): void;
    getButtonElement(): any[];
    onClick(e: any, f: Function): void;
}
