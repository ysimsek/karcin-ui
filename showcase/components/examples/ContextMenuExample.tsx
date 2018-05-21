import * as React from "react";
import {ContextMenu, Button} from 'karcin-ui';
import {Row, Col} from 'reactstrap';

export default class ButtonExample extends React.Component<any, any> {

    render() {
        let data = [
            {title:'Create', icon:'fa-plus', callback:this.callbacks},
            {title:'Edit', icon:'fa-edit', callback:this.callbacks},
            {title:'Edit', icon:'fa-edit', items: [
                    {title:'Reactstrap', link:'https://reactstrap.github.io'}
                ]},
        ];
        return (<div>
                    <Row>
                        <Col sm={6}>
                            <span className="example-reagent first">Button Example</span>
                            <Button id="buttonContext">Example</Button>
                            <ContextMenu id="buttonContext" data={data}></ContextMenu>
                        </Col>
                        <Col sm={6}>
                            <span className="example-reagent first">Text Example</span>
                            <span id="textContext">Example Text</span>
                            <ContextMenu id="textContext" data={data}></ContextMenu>
                        </Col>
                    </Row>
                </div>
        );
    }

    callbacks(val) {
        console.log(val);
    }
}