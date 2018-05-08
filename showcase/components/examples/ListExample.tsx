import * as React from "react";
import {Row,Col} from "reactstrap";
import {Panel} from "karcin-ui";
import List from "../../../src/functional/list/List";

export default class ListExample extends React.Component{

    render(){
        let data = [
            {id:1, value:"Lorem Ipsum is simply dummy text"},
            {id:2, value:"Of the printing and typesetting "},
            {id:3, value:"Industry. Lorem Ipsum has been"},
            {id:4, value:"The industry's standard dummy "},
            {id:5, value:"Text ever since the 1500s"},
            ]

        return <Row>
                   <Col md={4}>
                        <List data={data} value={"value"}/>
                   </Col>
                   <Col md={4}>
                        <List data={data} value={"value"} action={true}/>
                   </Col>
                   <Col md={4}>
                        <List data={data} value={"value"} color={"info"}/>
                   </Col>

               </Row>
    }
}