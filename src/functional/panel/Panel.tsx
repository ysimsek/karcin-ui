import * as React from "react";
import {Collapse, CardBody, Card} from "reactstrap";
import Button from "../button/Button";
import FaIcon from "../faicon/FaIcon";
import "../../css/karcin-ui.css"; 

export interface PanelProps {
    /**
     * Add the panel title is required
     */
    title: string | any;
    /**
     * Change the Panel color
     * primary, info, warning, danger, success, secondary
     */
    color?: string | any;
    /**
     * Change the collapse default false
     */
    collapse?:boolean | any;
    /**
     * Change the opened and closed default false
     */
    collapsible?: boolean | any;
    /**
     * return function
     */
    onOpened    ?: React.EventHandler<any> | any;
    /**
     * return function
     */
    onClosed    ?: React.EventHandler<any> | any;
    /**
     * return function
     */
    onClick     ?: React.EventHandler<any> | any;
    /**
     * Default value false
     */
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
        /**
         * Initial props value
         * @type {{title: string; color: string; collapsible: boolean; collapse: boolean; accordion: boolean}}
         */
        static defaultProps: Partial<PanelProps> = {
            title           : "",
            color           : "default",
            collapsible     : false,
            collapse        : true,
            accordion       : false
        };

        /**
         * Intial values
         * @param {PanelProps} props
         */
        constructor(props:PanelProps) {
            super(props);

            this.init(props);
        }

        /**
         * Set the first state
         * @param {PanelProps} props
         */
        init(props:PanelProps){
            this.state = {
                contentStyle   : {},
                icon           : "fa-plus",
                collapse       : props.collapsible ? props.collapse : true,
                accordionClickId : null,
                accordion        : props.accordion,
            };
        }

        /**
         * @returns {Object}
         */
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

        /**
         * Props function returned
         */
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
