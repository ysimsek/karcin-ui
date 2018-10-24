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
            {...this.props}
        >{this.props.children}</BadgeX>;
    }
}
