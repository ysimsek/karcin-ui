///<reference path="../../../node_modules/@types/react/index.d.ts"/>
import * as React from "react";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import {DOMAttributes} from "react";

export interface FaIconProps extends DOMAttributes<any>{
    /**
     * Default fa-sm
     * Another fa-2x , fa-3x, fa-4x, fa-5x, fa-6x, fa-7x, fa-8x , fa-9x
     */
    size?: string;
    /**
     * default false
     */
    fixed?: boolean;
    className?:string;
    /**
     * fa icon code
     * address : https://fontawesome.com/v4.7.0/icons/,  https://fontawesome.com/v5.3.1/icons?d=gallery&m=free
     */
    code:string;
    /**
     * primary , secondary,  success, info, warning, danger, danger, dark, light
     */
    color?:string;
    style?:object;
    onClick?():void;
    onMouseOver?():void;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class FaIcon extends React.Component<FaIconProps> {
    /**
     * Initial props value
     * @type {{size: string; fixed: boolean}}
     */
    public static defaultProps: Partial<FaIconProps> = {
        size: "fa-sm",
        fixed: true
    };

    colorArr:any = {
        primary : "faicon_primary",
        secondary : "faicon_secondary",
        success : "faicon_success",
        info : "faicon_info",
        warning : "faicon_warning",
        danger : "faicon_danger",
        dark : "faicon_dark",
        light : "faicon_light"
    };

    /**
     * @returns {any}
     */
    render():any {
        let classNameProps = this.props.className === undefined ? "" : this.props.className;
        let className = `fa ${(this.props.fixed ? "fa-fw" : "")} ${this.props.code} ${this.props.size} ${classNameProps}`;
        let color = this.props.color != undefined ? this.getColor(this.props.color) : "";
        const { fixed, code, size, ...props } = this.props;
        return <i {...props} className={className+ " "+color} aria-hidden="true" />;
    }

    getColor(color:string):string{
        return this.colorArr[color] != undefined ? this.colorArr[color] : "";
    }

}
