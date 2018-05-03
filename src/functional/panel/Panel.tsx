import * as React from "react";
import {Collapse, CardBody, Card} from "reactstrap";
import Button from "../button/Button";
import FaIcon from "../faicon/FaIcon";
import "../../css/sass/Panel.scss";

export interface PanelProps {
    title: string | any;
    color?: string | any;
    collapse?:boolean | any;
    collapsible?: boolean | any;
    onOpened    ?: React.EventHandler<any> | any,
    onClosed    ?: React.EventHandler<any> | any;
    onClick     ?: React.EventHandler<any> | any;
    accordion   ?: boolean | any,
}

export interface PanelState {
    contentStyle   ?: object | any,
    icon           ?: string,
    collapse       ?: boolean,
    accordionClickId ?: any,
    accordion        ?: boolean,
}

export default class Panel extends React.Component<PanelProps, PanelState> {

    static defaultProps: Partial<PanelProps> = {
        title           : "",
        color           : "default",
        collapsible     : false,
        collapse        : true,
        accordion       : false
    };

    constructor(props:PanelProps) {
        super(props);

        this.init(props);
    }

    init(props:PanelProps){
        this.state = {
            contentStyle   : {},
            icon           : "fa-plus",
            collapse       : props.collapsible ? props.collapse : true,
            accordionClickId : null,
            accordion        : props.accordion,
        };
    }


       render(): Object {

           let childHtmlElement:any = this.props.children;

           let panelTitle:any = null;
           let openButton:any = null;
           let openedIcon:any = null;

           if(this.state.collapse !== undefined && this.props.collapsible) {
               openedIcon = <FaIcon code={(this.state.collapse) ? "fa-angle-up" : "fa-angle-down"}/>;
               openButton = <div className="panel-head-button"><Button onClick={()=>{if(this.props.onClick) { this.props.onClick() }else{ this.openPanel()}}}>{openedIcon}</Button></div>;


               if(this.state.collapse){
                    if(this.props.onOpened !== undefined){
                        this.props.onOpened();
                    }
               }else {
                if(this.props.onClosed !== undefined){
                    this.props.onClosed();
                }
               }
           }

           if(this.state.accordion) {
               panelTitle = <div className={`accordion-title ${(this.state.collapse ? 'active' : '')}`}><Button onClick={this.props.onClick}><span>{this.props.title}</span>{openedIcon}</Button></div>;
           }else {
               panelTitle = <div className="panel-title"><span>{this.props.title}</span>{openButton}</div>;
           }


           return (
               <div className={`panel-main ${this.props.color}`}>
                   {panelTitle}
                   <Collapse
                       isOpen={this.state.collapse}>
                       <div className="panel-content">
                           {childHtmlElement}
                       </div>
                   </Collapse>
               </div>
           );
       }

       onOpened() {
           if(this.props.onOpened !== undefined) {
               this.props.onOpened(event);
           }
       }

       onClosed() {
           if(this.props.onClosed !== undefined){
               this.props.onClosed(event);
           }
       }

       openPanel(){
           if(this.props.collapsible) {
               if (this.state.collapse) {
                   this.setState({
                       collapse: false
                   });
               } else {
                   this.setState({
                       collapse: true
                   });
               }
           }
       }


}
