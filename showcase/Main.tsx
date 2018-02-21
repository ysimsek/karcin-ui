import * as React from "react";
import { Container, Row, Col, Button, Collapse,
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
export default class Main extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            menuClass: "",
            logo: "logo-reverse",
            isOpen: false
        };
    }

    render() {
        return <div id="showcase-content">
            <Navbar fixed={"top"} className={`main-menu ${this.state.menuClass}`} expand="md">
                <Container>
                    <NavbarBrand href="/" className="mr-auto"><img src={`./assets/img/${this.state.logo}.png`} height="50" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}><FaIcon code={`${(this.state.isOpen)?"fa-times":"fa-bars"}`}  /></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Docs</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Samples</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
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
                </Container>
            </Navbar>
            <div className="header">
                <div className="header-section">
                    <div className="overlay"></div>
                    <div className="header-bg"></div>
                    <Container className="slide-title">
                        <h3>Karçin UI Showcase</h3>
                        <p>REACT & TYPESCRIPT & BOOTSTRAP</p>
                        <div>
                            <Button color="primary" size="lg">GET STARTED</Button>{' '}
                            <Button color="success" size="lg">COMPONENTS</Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>;
    }

    componentDidMount(){
        window.addEventListener('scroll', (event:any) => {
            let menuClass = "";
            let logo = "logo-reverse";
            if (window.scrollY > 20){
                menuClass = "active-menu";
                logo = "logo";
            }
            this.setState({menuClass:menuClass, logo:logo});
        });
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}