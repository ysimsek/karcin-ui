import * as React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export interface TabPanelProps {
    title?:any;
    className?:any;
    action?:any;
}

export default class TabPanel extends React.Component<TabPanelProps,any> {
    /**
     * @returns {any}
     */
    render():any {
        return (
            <div>{this.props.children}</div>
        );
    }


}