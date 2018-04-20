import * as React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "../../css/sass/tab.scss";

export interface TabProps {
    activeTab?:number;
    className?:string;
}

export default class Tab extends React.Component<TabProps,any> {

    constructor(props:any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: props.activeTab || 0
        };
    }

    componentWillReceiveProps(nextProps:any){
        this.setState(nextProps);
    }

    render() {
        return (
            <div className={`karcin-tab ${(this.props.className !== undefined) ? this.props.className : ''}`}>
                <Nav tabs={true}>
                    {this.getTab().header}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
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
                    header.push(<NavItem key={i}>
                        <NavLink
                            className={className}
                            onClick={() => { this.toggle(i); }}
                        >
                            {v.props.title}
                        </NavLink>
                    </NavItem>);
                    body.push(<TabPane {...v.props} tabId={i} key={i}>
                        {v}
                    </TabPane>);
                }
            });
        }
        return {header:header, body:body};
    }

}