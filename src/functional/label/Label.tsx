import * as React from "react";
import {Badge as Labelx} from 'reactstrap';

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
    textSize?:number | string;
    /**
     * Label Text
     */
    text?:string;
}


export default class Label extends React.Component<LabelProps,any>{
    static defaultProps:Partial<LabelProps> ={
        color:"light",
        textSize:14
    }
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        return <Labelx
            color={this.props.color}
            style={{fontSize: this.props.textSize+"px"}}
        >{this.props.text}</Labelx>;
    }
}
