import * as React from "react";
import {Row,Col} from "reactstrap";
import {Panel} from "karcin-ui";
import List from "../../../src/functional/list/List";
import ListItem from "../../../src/functional/list/ListItem";

export default class ListExample extends React.Component{

    render(){
        let data = [
            {id:1, value:"Lorem Ipsum is simply dummy text",href:"",badge:"new"},
            {id:2, value:"Of the printing and typesetting ",href:""},
            {id:3, value:"Industry. Lorem Ipsum has been",href:"",badge:"5"},
            {id:4, value:"The industry's standard dummy ",href:""},
            {id:5, value:"Text ever since the 1500s",href:"",badge:"1299th"},
            ];

        return <Row>
                   <Col md={4}>
                       <Panel title={"Simple List"}>
                            <List
                                data={data}
                                value={"value"}/>
                       </Panel>
                   </Col>
                   <Col md={4}>
                       <Panel title={"Action List"}>
                            <List
                                data={data}
                                value={"value"}
                                action={true}/>
                       </Panel>
                   </Col>
                   <Col md={4}>
                        <Panel title={"Simple Child List"}>
                            <List>
                                <ListItem>Lorem</ListItem>
                                <ListItem>Ipsum</ListItem>
                                <ListItem>is simply</ListItem>
                                <div>Dummy Text</div>
                                <span>Of the printing</span>
                            </List>
                        </Panel>
                   </Col>
                   <Col md={4}>
                       <Panel title={"Link to Data (<a>)"}>
                            <List
                                data={data}
                                value={"value"}
                                tag={"a"}
                                tagValue={"href"}/>
                       </Panel>
                   </Col>
                   <Col md={4}>
                       <Panel title={"Link to Data (<button>)"}>
                            <List
                                data={data}
                                value={"value"}
                                tag={"button"}
                                tagValue={"href"}/>
                       </Panel>
                   </Col>
                   <Col md={4}>
                       <Panel title={"Active Link"}>
                            <List
                                data={data}
                                value={"value"}
                                active={true}
                                activeValue={"id"}
                                activeId={4}/>
                       </Panel>
                   </Col>

               </Row>
    }
}