import * as React from "react";
export default class Prompt extends React.Component<any, any> {
    state: any;
    static defaultProps: any;
    colorArr: any;
    constructor(props: any);
    componentWillReceiveProps(props: any): void;
    render(): JSX.Element;
    getMessageElement(): JSX.Element;
    componentWillUnmount(): void;
    getColor(color: string): string;
    tmm(e: any): void;
    ipt(e: any): void;
    handleChange(e: any): void;
}
