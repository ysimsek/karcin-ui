import * as React from "react";
export default class Alert extends React.Component<any, any> {
    state: any;
    static defaultProps: any;
    colorArr: any;
    constructor(props: any);
    componentWillReceiveProps(props: any): void;
    render(): JSX.Element;
    getMessageElement(): JSX.Element;
    getColor(color: string): string;
    componentWillUnmount(): void;
    tmm(e: any): void;
}
