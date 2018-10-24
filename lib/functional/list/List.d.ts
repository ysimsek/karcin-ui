import * as React from "react";
export interface ListProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Set the array data
     */
    data?: Array<any>;
    /**
     * a or button tag
     */
    tag?: string;
    /**
     * orientation url path
     */
    tagValue?: string;
    /**
     * Default value false
     */
    action?: boolean;
    /**
     * primary, success, danger, secondary, warning, info
     */
    color?: string;
    /**
     * Show the field
     */
    value?: string;
    /**
     * Show the badge field true or false
     * badgeValue is required
     */
    badge?: boolean;
    /**
     * Show the badgeValue
     */
    badgeValue?: string;
    /**
     * Active is true or false
     * activeValue and activeId is required
     */
    active?: boolean;
    /**
     * Show the active field
     */
    activeValue?: string;
    /**
     * Set the activeId
     */
    activeId?: number;
    /**
     * Change state durumu
     */
    onClick?: any;
}
/**
 * List array data or childs data returned
 */
export default class List extends React.Component<ListProps, any> {
    /**
     * Initial values
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * Return Childs Elements
     * @param childs
     * @returns {JSX.Element[]}
     */
    renderShowChilds(childs: any): JSX.Element[];
    /**
     * Childs elements in list
     * @param {Array<any>} list
     * @returns {JSX.Element[]}
     */
    childsReturn(list: any): JSX.Element[];
    /**
     * Change the State
     * @param f
     */
    onClick(f: any): void;
}
