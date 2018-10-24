import * as React from "react";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export interface PopOverProps{
    /**
     * Choose the elements ,
     * auto , auto-start , auto-end , top , top-end , top-start ,
     * right , right-start, right-end , bottom , bottom-start , bottom-end ,
     * left , left-start , left-end,
     * default value right
     */
    position ?: Popper.Placement;
    /**
     * Up element id
     */
    id : string | HTMLElement;
    /**
     * True or false in toogle
     */
    show ?: boolean;
    /**
     * Return function
     */
    toggle ?: any;
    /**
     * Set the message title
     */
    title ?: string | JSX.Element[];

}

export default class PopOver extends React.Component<PopOverProps,any>{

    static defaultProps:Partial<PopOverProps> = {
        position : "right",
        show : false,
        title : ""
    }

    render(){
        return <Popover placement={this.props.position} isOpen={this.props.show} target={this.props.id} toggle={this.toggle.bind(this)}>
            <PopoverHeader>{this.props.title}</PopoverHeader>
            <PopoverBody>{this.props.children}</PopoverBody>
        </Popover>
    }

    toggle(e:any){
        if(this.props.toggle){
            this.props.toggle(e);
        }
    }
}