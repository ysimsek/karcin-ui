import * as React from "react";
import {Container} from "reactstrap";
const model = require("./jsons/DocList.json");

export default class Docs extends React.Component<any, any> {

    render() {
        return <Container className="content-page">
            Docs
        </Container>;
    }

}
