import * as React from "react";
import { Container, Row, Col, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
import {FaIcon} from "karcin-ui";
import HomePage from "./HomePage";
import { HashRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
import Components from "./Components";
import Docs from "./Docs";
import NotFound from "./NotFound";

  

export default class Main extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            sideMenuOpen: false
        };
    }

    render() {
        return <div id="showcase-content">
                <Navbar className={`main-menu ${(window.location.hash == "#/")?"active-menu":""}`} expand="md">
                        <div className="header-logo">
                            <a href="#" className="logo-img">
                                <img src={`./img/logo-reverse.png`} height="50" />
                            </a>
                            <div className={`side-menu-button ${this.state.sideMenuOpen ? 'active' : ''}`} onClick={()=>this.sideMenuToggle()}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <NavbarToggler onClick={this.toggle}><FaIcon code={`${(this.state.isOpen)?"fa-times":"fa-bars"}`}  /></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#Components">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#Docs">Docs</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#Samples">Samples</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#About">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/ysimsek/karcin-ui">Github</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Language
                                    </DropdownToggle>
                                    <DropdownMenu right={true}>
                                        <DropdownItem>
                                            Türkçe
                                        </DropdownItem>
                                        <DropdownItem>
                                            English
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                </Navbar>
                <div className={`${(window.location.hash == "#/")?"main-content":"subpage-content"}`}>
                    <Switch >
                        <Route exact path="/" component={HomePage} />
                        <Route path="/Components" render={()=><Components menuToggle={this.state.sideMenuOpen} />} />
                        <Route path="/Docs" component={Docs} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col className="footer-left">
                                <iframe src="https://ghbtns.com/github-btn.html?user=ysimsek&amp;repo=karcin-ui&amp;type=star&amp;count=true" scrolling="0" width="100" height="20px"></iframe>
                                <iframe src="https://ghbtns.com/github-btn.html?user=ysimsek&amp;repo=karcin-ui&amp;type=fork&amp;count=true" scrolling="0" width="100" height="20px"></iframe>
                            </Col>
                            <Col className="footer-right"><img src="./img/logo_asis.png" height="50" /></Col>
                        </Row>
                    </Container>
                </div>
            </div>;
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    sideMenuToggle(){
        this.setState({
            sideMenuOpen: !this.state.sideMenuOpen
        });
    }

}