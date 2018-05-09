import * as React from "react";
import {Badge as BadgeX} from 'reactstrap';

/**
 * Label Properties(interfaces)
 */
export interface LabelProps {
    /**
     * Label body color
     */
    color?:string;
    /**
     * Label text Size
     */
    size?:number | string;
}


export default class Badge extends React.Component<LabelProps,any>{
    /**
     * Initial props value
     * @type {{color: string; size: number}}
     */
    static defaultProps:Partial<LabelProps> ={
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
            color={this.props.color}
            style={{fontSize: this.props.size+"px"}}
        >{this.props.children}</BadgeX>;
    }
}
