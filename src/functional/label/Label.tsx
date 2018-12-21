import * as React from "react";

export interface LabelProps{
    /**
     * Show or Hide default false
     */
    hidden ?: boolean;
    /**
     * Bonded another components
     */
    for ?: string;

    /**
     * class name 
     */
    className ?: string;

    /**
     * id
     */
    id ?:string,

    /**
     * css module
     */
    cssModule ?: React.CSSProperties;
    /**
     * Text size , default 16px
     */
    size ?: number | string;
    /**
     * Color (red,blue), hex or rgb
     */
    color ?: string;

    style ?: any;

    requireText ?: string;

    [key:string] : any;
}

export default class Label extends React.Component<LabelProps,any>{

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

        // remove props className, size, color 
        let {style, className, size, color, ...labelObject} = this.props; 

        let styles:any = {};

        if(this.props.style){
            styles = this.props.style;
        }

        if(this.props.color){
            styles['color'] = this.props.color;
        }
        
        if(this.props.size){
            styles['font-size'] = this.props.size;
        }

        return <label className={'karcin-label' + (this.props.className ? this.props.className : '')} {...labelObject} style={styles}>
            {this.props.children} {(this.props.requireText) ? <span className="require-text">{this.props.requireText}</span> : '' }
        </label>;
    }
}