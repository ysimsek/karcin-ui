import * as React from "react";
import {Button as Buttonx} from 'reactstrap';
import {CSSModule} from "reactstrap";
import FaIcon from "../faicon/FaIcon";

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
    async ?:boolean;
    icon ?: string;
    /**
     * left,right
     */
    iconALign ?:string;
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export default class Button extends React.Component<any,ButtonProps> {


    /**
     * @returns {any}
     */
    render():any {
        this.props.iconAlign
        return <Buttonx {...this.props}>{this.props.children}<FaIcon code={this.props.icon}/></Buttonx>
    }

}

