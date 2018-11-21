import * as React from "react";
export interface TabProps {
    /**
     * active tab id
     */
    activeTab?: number;
    /**
     * new class name add
     */
    className?: string;
    /**
     * vertical option boolean
     */
    vertical?: boolean | any;
    /**
     * align option "left" and "right"
     */
    align?: string;
    /**
     * tab head color style "primary", "secondary", "danger", "warning", "info", "dark", "light", "success"
     */
    color?: string | any;
}
export default class Tab extends React.Component<TabProps, any> {
    static defaultProps: Partial<TabProps>;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    toggle(tab: any): void;
    getTab(): {
        header: any;
        body: any;
    };
    getClickElement(e: any): void;
}
