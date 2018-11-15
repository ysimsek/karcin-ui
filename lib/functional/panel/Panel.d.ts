import * as React from "react";
import "../../css/karcin-ui.css";
export interface PanelProps {
    /**
     * Add the panel title is required
     */
    title?: string | any;
    /**
     * Change the Panel color
     * primary, info, warning, danger, success, secondary
     */
    color?: string | any;
    /**
     * Change the collapse default false
     */
    collapse?: boolean | any;
    /**
     * Change the opened and closed default false
     */
    collapsible?: boolean | any;
    /**
     * return function
     */
    onOpened?: React.EventHandler<any> | any;
    /**
     * return function
     */
    onClosed?: React.EventHandler<any> | any;
    /**
     * return function
     */
    onClick?: React.EventHandler<any> | any;
    /**
     * Default value false
     */
    accordion?: boolean | any;
    /**
     * title icon
     */
    icon?: any;
    /**
     * title renderer method
     */
    titleRenderer?: any;
}
export interface PanelState {
    contentStyle?: object | any;
    icon?: string;
    collapse?: boolean;
    accordionClickId?: any;
    accordion?: boolean;
}
export default class Panel extends React.Component<PanelProps, PanelState> {
    /**
     * Initial props value
     * @type {{title: string; color: string; collapsible: boolean; collapse: boolean; accordion: boolean}}
     */
    static defaultProps: Partial<PanelProps>;
    /**
     * Intial values
     * @param {PanelProps} props
     */
    constructor(props: PanelProps);
    /**
     * Set the first state
     * @param {PanelProps} props
     */
    init(props: PanelProps): void;
    /**
     * @returns {Object}
     */
    render(): Object;
    /**
     * Props function returned
     */
    onOpened(): void;
    onClosed(): void;
    openPanel(): void;
}
