import * as React from "react";
import {Badge as BadgeX} from 'reactstrap';

/**
 * Label Properties(interfaces)
 */
export interface BadgeProps {
    /**
     * Label body color
     */
    color?:string;
    /**
     * Label text Size
     */
    size?:number | string;
    /**
     * Set the style
     */
    className?: any;
    /**
     * Click the component
     */
    onClick:any;
    id?:any;

}


export default class Badge extends React.Component<BadgeProps,any>{
    /**
     * Initial props value
     * @type {{color: string; size: number}}
     */
    static defaultProps:Partial<BadgeProps> ={
        color:"light",
        size:14
    }

    /**
     * Initial props
     * @param props
     */
    constructor(props:any){
        super(props);
        this.state = {}
    }

    /**
     * @returns {any}
     */
    render():any{
        return <BadgeX
            {...this.props}
            color={this.props.color}
            className={this.props.className}
            onClick={this.onClick.bind(this)}
            style={{fontSize: this.props.size+"px"}}
            id={this.props.id}
        >{this.props.children}</BadgeX>;
    }

    onClick(e:any){
        this.props.onClick != undefined ? this.props.onClick(e) : null;
    }
}
