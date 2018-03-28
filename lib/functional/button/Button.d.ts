/// <reference types="react" />
import * as React from "react";
import { CSSModule } from "reactstrap";
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
export default class Button extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
