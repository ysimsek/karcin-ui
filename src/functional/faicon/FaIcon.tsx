import * as React from "react";
import "font-awesome/css/font-awesome.min.css";

export interface FaIconProps {
    /**
     * Default fa-sm
     * Another fa-2x , fa-3x, fa-4x, fa-5x
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
    code:string;
    style?:object;
    onClick?():void;
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

    /**
     * @returns {any}
     */
    render():any {
        let classNameProps = this.props.className === undefined ? "" : this.props.className;
        let className = `fa ${(this.props.fixed ? "fa-fw" : "")} ${this.props.code} ${this.props.size} ${classNameProps}`;
        const { fixed, code, size, ...props } = this.props;
        return <i {...props} className={className} aria-hidden="true" />;
    }
}