import * as React from "react";
import {CSSModule, Label as LabelX} from "reactstrap";

export interface LabelProps{
    /**
     * Show or Hide default false
     */
    hidden?: boolean;
    /**
     * Bonded another components
     */
    for?: string;
    tag?: string;
    className?: string;
    cssModule?: CSSModule;
    /**
     * Text size , default 16px
     */
    size ?: number | string;
    /**
     * Color (red,blue), hex or rgb
     */
    color ?: string;
}

export default class Label extends React.Component<LabelProps,any>{
    /**
     * @type {{size: number}}
     */
    static defaultProps:Partial<LabelProps> = {
        size : 16
    }

    /**
     * Initial values
     * @param props
     */
    constructor(props:any){
        super(props);
    }

    /**
     * @returns {any}
     */
    render():any{
        return <LabelX
                    hidden={this.props.hidden}
                    for={this.props.for}
                    className={this.props.className}
                    tag={this.props.tag}
                    ><div style={{fontSize: this.props.size+"px", color: this.props.color}}>{this.props.children}</div></LabelX>
    }
}