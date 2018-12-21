import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./Main";
import { HashRouter as Router} from "react-router-dom";


ReactDOM.render(<Router><Main /></Router>,document.getElementById("content"));
