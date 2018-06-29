import * as React from "react";
import {Button as Buttonx} from 'reactstrap';
import {CSSModule} from "reactstrap";

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
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export default class Button extends React.Component<any,ButtonProps> {
    /**
     * @returns {any}
     */
    render():any {
        return <Buttonx {...this.props}>{this.props.children}</Buttonx>
    }

}

