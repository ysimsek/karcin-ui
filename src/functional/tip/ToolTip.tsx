import * as React from "react";
import { Tooltip as Tool} from 'reactstrap';
import {Popper} from "reactstrap/lib/Popper";

export interface ToolTipProps{
    /**
     * Choose the elements ,
     * auto , auto-start , auto-end , top , top-end , top-start ,
     * right , right-start, right-end , bottom , bottom-start , bottom-end ,
     * left , left-start , left-end
     */
    position ?: Popper.Placement;
    /**
     * Up element id
     */
    id ?: string | HTMLElement;
    /**
     * True or false in toogle
     */
    show ?: boolean;
    /**
     * Return function
     */
    toggle ?: any;
}

export default class ToolTip extends React.Component<any,any>{

    static defaultProps:Partial<ToolTipProps> = {
        show : false,
        position : "right"
    }

    render(){
        return <Tool
                    placement={this.props.position}
                    target={this.props.id}
                    isOpen={this.props.show}
                    toggle={this.toggle.bind(this)}>
                {this.props.children}
               </Tool>
    }

    toggle(e:any){
        if(this.props.toggle){
            this.props.toggle(e);
        }
    }
}