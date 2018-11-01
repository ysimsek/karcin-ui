import * as React from "react";
import {Container} from "reactstrap";
export default class NotFound extends React.Component {

    render() {
        return <Container className="content-page">
            <div style={{textAlign:"center"}}><img src="./img/404.jpg"></img></div>
            <h1 className="text-center">404 Not Found</h1>
        </Container>;
    }

}
