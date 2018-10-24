import * as React from "react";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import { DOMAttributes } from "react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
export interface FaIconProps extends DOMAttributes<any> {
    /**
     * Default fa-sm
     * Another fa-2x , fa-3x, fa-4x, fa-5x, fa-6x, fa-7x, fa-8x , fa-9x
     */
    size?: string;
    /**
     * default false
     */
    fixed?: boolean;
    className?: string;
    /**
     * fa icon code
     * address : https://fontawesome.com/v4.7.0/icons/
     */
    code: any;
    spin?: boolean;
    /**
     * primary , secondary,  success, info, warning, danger, danger, dark, light
     */
    color?: string;
    style?: object;
    onClick?(e: any): any;
    onMouseOver?(): void;
    id?: any;
}
export default class FaIcon extends React.Component<FaIconProps> {
    /**
     * Initial props value
     * @type {{size: string; fixed: boolean}}
     */
    static defaultProps: Partial<FaIconProps>;
    colorArr: any;
    /**
     * @returns {any}
     */
    render(): any;
    getColor(color: string): string;
    getSizeProp(size: any): SizeProp;
    onClick(e: any): void;
}
