import * as React from "react";
import {Button} from "karcin-ui";
export class Main extends React.Component {
    render() {
        return <div><Button color={"primary"}>Deneme</Button> <img className="hidden-xs" src="./img/logo.png" alt="logo"/></div>;
    }
}