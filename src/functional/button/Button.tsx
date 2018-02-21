import * as React from "react";
import Buttonx from 'reactstrap/lib/Button';
import {CSSModule} from "reactstrap";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    outline?: boolean;
    active?: boolean;
    block?: boolean;
    color?: string;
    disabled?: boolean;
    tag?: React.ReactType;
    innerRef?: string | ((instance: HTMLButtonElement) => any);
    onClick?: React.MouseEventHandler<any>;
    size?: any;
    id?: string;
    style?: React.CSSProperties;
    cssModule?: CSSModule;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Button extends React.Component<ButtonProps> {
    render() {
        return <Buttonx {...this.props}>{this.props.children}</Buttonx>;
    }
}