import * as React from "react";
export interface LabelProps {
    /**
     * Show or Hide default false
     */
    hidden?: boolean;
    /**
     * Bonded another components
     */
    for?: string;
    /**
     * class name
     */
    className?: string;
    /**
     * id
     */
    id?: string;
    /**
     * css module
     */
    cssModule?: React.CSSProperties;
    /**
     * Text size , default 16px
     */
    size?: number | string;
    /**
     * Color (red,blue), hex or rgb
     */
    color?: string;
    style?: any;
    requireText?: string;
    [key: string]: any;
}
export default class Label extends React.Component<LabelProps, any> {
    /**
     * Initial values
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
}
