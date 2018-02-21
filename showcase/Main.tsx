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
import {FaIcon, Button} from "karcin-ui";
import * as Highlight from "react-highlight";
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
        let version = (sessionStorage.getItem("version") != "$VERSION")?<p>{`v${sessionStorage.getItem("version")}`}</p>:null;
        return <div id="showcase-content">
            <Navbar fixed={"top"} className={`main-menu ${this.state.menuClass}`} expand="md">
                <Container>
                    <NavbarBrand href="./" className="mr-auto"><img src={`./img/${this.state.logo}.png`} height="50" /></NavbarBrand>
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
                <div className="overlay"></div>
                <div className="header-bg"></div>
                <Container className="slide-title">
                    <h3>Karçin UI Showcase</h3>
                    <p>REACT & TYPESCRIPT & BOOTSTRAP</p>
                    {version}
                    <div>
                        <Button href="#get-started" color="primary" size="lg">GET STARTED</Button>{' '}
                        <Button color="success" size="lg">COMPONENTS</Button>
                    </div>
                </Container>
            </div>
            <div id="get-started">
                <Container>
                    <Row>
                        <Col>
                            <h2>Get Started</h2>
                            <hr/>
                            <h4>NPM</h4>
                            <p>Install karcin-ui and peer dependencies via NPM</p>
                            <pre><code className="hljs"><span className="hljs-keyword">npm install</span> --save <span className="hljs-string">karcin-ui</span></code></pre>
                            <p>Import the components you need</p>
                            <div className="example-card">
                                <p>EXAMPLE</p>
                                <Button color="primary">Hello World!</Button>
                            </div>
                            <Highlight className='javascript'>{'import * as React from \'react\';\n' +
                            'import { Button } from \'karcin-ui\';\n' +
                            '\n' +
                            'export default class Example extends React.Component<any, any> {\n' +
                            '  return (\n' +
                            '    <Button color="primary">Hello World!</Button>\n' +
                            '  );\n' +
                            '};'}</Highlight>
                        </Col>
                    </Row>
                </Container>
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