import * as React from "react";
import {ToolTip, Button, Panel} from "karcin-ui";
import {Row, Col} from "reactstrap";

export default class ToolTipExample extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            direction: {left: false, right: false, top: false, bottom: false, links: false, button:false}
        }

    }

    //state değişiklşiği
    render() {
        return <div>
            <Row className="basic-row">
                <span className="example-reagent">Text Tooltip</span>
                <Col sm={3}>
                    <span id="left">Left Tooltip</span>
                    <ToolTip
                        position={"left"}
                        id={"left"}
                        show={this.state.direction.left}
                        toggle={() => {
                            this.toggle('left')
                        }}>I'M LEFT</ToolTip>
                </Col>
                <Col sm={3}>
                    <span id="right">Right Tooltip</span>
                    <ToolTip
                        position={"right"}
                        id={"right"}
                        show={this.state.direction.right}
                        toggle={() => {
                            this.toggle('right')
                        }}>{this.basicPanel()}</ToolTip>
                </Col>
                <Col sm={3}>
                    <span id="top">Top Tooltip</span>
                    <ToolTip
                        position={"top"}
                        id={"top"}
                        show={this.state.direction.top}
                        toggle={() => {
                            this.toggle('top')
                        }}>I'M TOP</ToolTip>
                </Col>
                <Col sm={3}>
                    <span id="bottom">Bottom Tooltip</span>
                    <ToolTip
                        position={"bottom"}
                        id={"bottom"}
                        show={this.state.direction.bottom}
                        toggle={() => {
                            this.toggle('bottom')
                        }}>I'M BOTTOM</ToolTip>
                </Col>

                <span className="example-reagent">Link Tooltip</span>
                <Col sm={12}>
                    <p>Link <a href="#" id={"links"}>Tooltip</a></p>
                    <ToolTip
                        position={"right"}
                        id={"links"}
                        show={this.state.direction.links}
                        toggle={() => {
                            this.toggle('links')
                        }}>I'M RIGHT :)</ToolTip>
                </Col>

                <span className="example-reagent">Button Tooltip</span>
                <Col sm={12}>
                    <Button color={"primary"} id={"buttons"}>Buton</Button>
                    <ToolTip
                        position={"right"}
                        id={"buttons"}
                        show={this.state.direction.buttons}
                        toggle={() => {
                            this.toggle('buttons')
                        }}>I'M RIGHT :)</ToolTip>
                </Col>
            </Row>
        </div>
    }

    toggle(direction: any) {
        this.state.direction[direction] = !this.state.direction[direction];
        this.forceUpdate();
    }

    basicPanel(){
        return <div>
            <Panel collapse={true} collapsible={true} color="success">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio eu massa accumsan rhoncus.
                Cras eu vulputate lacus. Ut consectetur bibendum purus, sit amet euismod velit elementum eget. Nullam
                id augue dictum, tincidunt enim eget, finibus turpis. Vestibulum vel turpis orci. Nunc a ultrices
                magna, sed maximus diam. Sed egestas dapibus mi, ut pharetra augue iaculis sit amet. In ut dolor
                sed urna semper ultricies sed ac turpis. Fusce finibus purus at nisl molestie, id sodales turpis
                dignissim. In gravida ipsum a risus elementum imperdiet. Maecenas non turpis in ligula efficitur pharetra.</Panel>
        </div>
    }


}
