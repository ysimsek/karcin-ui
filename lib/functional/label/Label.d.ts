import * as React from "react";
import { CSSModule } from "reactstrap";
export interface LabelProps {
    /**
     * Show or Hide default false
     */
    hidden?: boolean;
    /**
     * Bonded another components
     */
    for?: string;
    tag?: string;
    className?: string;
    cssModule?: CSSModule;
    /**
     * Text size , default 16px
     */
    size?: number | string;
    /**
     * Color (red,blue), hex or rgb
     */
    color?: string;
}
export default class Label extends React.Component<LabelProps, any> {
    /**
     * Initial props value
     * @type {{size: number}}
     */
    static defaultProps: Partial<LabelProps>;
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
