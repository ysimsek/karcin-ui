import * as React from "react";
import "font-awesome/css/font-awesome.min.css";

export interface FaIconProps {
    size?: string;
    fixed?: boolean;
    className?:string;
    code:string;
    style?:object;
    onClick?():void;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class FaIcon extends React.Component<FaIconProps> {

    public static defaultProps: Partial<FaIconProps> = {
        size: "fa-sm",
        fixed: true
    };

    render() {
        let classNameProps = this.props.className === undefined ? "" : this.props.className;
        let className = `fa ${(this.props.fixed ? "fa-fw" : "")} ${this.props.code} ${this.props.size} ${classNameProps}`;
        const { fixed, code, size, ...props } = this.props;
        return <i
            {...props}
            className={className}
            aria-hidden="true"/>;
    }
}