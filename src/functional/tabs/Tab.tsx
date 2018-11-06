import * as React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export interface TabProps {
    /**
     * active tab id
     */
    activeTab?:number;
    /**
     * new class name add
     */
    className?:string;

    /**
     * vertical option boolean
     */
    vertical?:boolean | any;

    /**
     * align option "left" and "right"
     */
    align?:string;

    /**
     * tab head color style "primary", "secondary", "danger", "warning", "info", "dark", "light", "success"
     */
    color?:string | any;
}

export default class Tab extends React.Component<TabProps,any> {

    static defaultProps: Partial<TabProps> = {
        align:'left',
        color: 'secondary'
    };

    constructor(props:any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: props.activeTab || 0
        };
    }

    componentWillReceiveProps(nextProps:any){
        this.setState(nextProps);
        this.forceUpdate();
    }

    render() {
        return (
            <div className={`karcin-tab ${(this.props.className !== undefined) ? this.props.className : ''} ${this.props.color}`}>
                <Nav tabs={true} className={`${(this.props.vertical !== undefined && this.props.vertical) ? 'vertical' : ''} ${this.props.align}`}>
                    {this.getTab().header}
                </Nav>
                <TabContent className={(this.props.vertical !== undefined && this.props.vertical) ? 'vertical' : ''} activeTab={this.state.activeTab}>
                    {this.getTab().body}
                </TabContent>
            </div>
        );
    }

    toggle(tab:any) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    getTab(){
        let header:any = [];
        let body:any = [];
        let item:any = [];

        if (this.props.children){
            if (Array.isArray(this.props.children)){
                item = this.props.children;
            } else {
                item.push(this.props.children);
            }
            item.forEach((v:any,i:number)=>{
                if (v){
                    let className = (this.state.activeTab === i)?"active":"";
                    if (v.props.className){
                        className = className + " " + v.props.className;
                    }

                    header.push(<NavItem className={v.props.action !== undefined && v.props.action.icon ? 'closible' : ""} key={i}>
                        <NavLink
                            className={className}
                            onClick={() => { if(v.props.action !== undefined) { v.props.action.handler(i) } else {this.toggle(i);} }}
                        >
                            {v.props.action !== undefined ? v.props.action.title : v.props.title}
                        {(v.props.action !== undefined && v.props.action.icon ? <div className="close-tab"><i className={v.props.action.icon}></i></div> : "")}
                        </NavLink>
                    </NavItem>);

                    body.push(<TabPane {...v.props} onClick={this.getClickElement.bind(this)}  tabId={i} key={i}>
                        {v.props.children}
                    </TabPane>);
                }
            });
        }
        return {header:header, body:body};
    }
    getClickElement(e:any){
        // debugger
    }
}
