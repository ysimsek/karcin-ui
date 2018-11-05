import * as React from "react";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {DOMAttributes} from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";

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
     * address : https://fontawesome.com/v4.7.0/icons/
     */
    code:any;
    spin?:boolean;
    /**
     * primary , secondary,  success, info, warning, danger, danger, dark, light
     */
    color?:string;
    style?:object;
    onClick?(e:any):any;
    onMouseOver?():void;
    id?:any;
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
        fixed: true,
        spin : false
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
        let className = `fa ${(this.props.fixed ? "fa-fw" : "")} ${this.props.code} ${this.props.size} ${classNameProps} ${this.props.spin == true ? " fa-spin" : ""}`;
        let color = this.props.color != undefined ? this.getColor(this.props.color) : "";
        const { fixed, code, size, ...props } = this.props;
        let iconS :any = Icons;
        return this.props.code != undefined ? (this.props.code.split("-").length >= 2 ?
            <i {...(props.spin != undefined ? delete props.spin : props)} id={this.props.id} className={className+ " "+color} aria-hidden="true" onClick={this.onClick.bind(this)} />
            : <span onClick={this.onClick.bind(this)}>
                <FontAwesomeIcon className={color} {...props} size={this.getSizeProp(this.props.size)} spin={this.props.spin} icon={iconS[this.props.code]}/></span>) : null;
    }

    getColor(color:string):string{
        return this.colorArr[color] != undefined ? this.colorArr[color] : "";
    }

    getSizeProp(size:any){
        let dimension :SizeProp = size.substr(3);;
        return dimension;
    }

    onClick(e:any){
        e.name = this.props.code;
        this.props.onClick != undefined ? this.props.onClick(e) : null;
    }

}
