/// <reference types="react" />
import * as React from "react";
export interface TabProps {
    activeTab?: number;
}
export default class Tab extends React.Component<TabProps, any> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    toggle(tab: any): void;
    getTab(): {
        header: any;
        body: any;
    };
}
