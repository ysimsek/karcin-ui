import * as React from "react";
import { CSSModule } from "reactstrap";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    /**
     * default false
     */
    outline?: boolean;
    /**
     * default false
     */
    active?: boolean;
    /**
     * default false
     */
    block?: boolean;
    color?: string;
    /**
     * default false
     */
    disabled?: boolean;
    /**
     * a or button react types
     */
    tag?: React.ReactType;
    innerRef?: string | ((instance: HTMLButtonElement) => any);
    onClick?: React.MouseEventHandler<any>;
    size?: any;
    id?: string;
    style?: React.CSSProperties;
    cssModule?: CSSModule;
    async?: boolean;
    icon?: string;
    /**
     * left,right
     */
    iconALign?: string;
}
export default class Button extends React.Component<any, any> {
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    onClick(e: any): void;
    done(): void;
}
