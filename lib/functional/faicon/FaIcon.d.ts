/// <reference types="react" />
import * as React from "react";
import "font-awesome/css/font-awesome.min.css";
export interface FaIconProps {
    size?: string;
    fixed?: boolean;
    className?: string;
    code: string;
    style?: object;
    onClick?(): void;
}
export default class FaIcon extends React.Component<FaIconProps> {
    static defaultProps: Partial<FaIconProps>;
    render(): JSX.Element;
}
