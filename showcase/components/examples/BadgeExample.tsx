import * as React from "react";
import {Badge} from "karcin-ui";


export default class BadgeExample extends React.Component<any,any>{
    render(){
        return <div>
            <span className="example-reagent">Badge</span>
            <ul>
                <li>Matematik <Badge color={"dark"}>51</Badge></li>
                <li>Türkçe <Badge color={"primary"}>78</Badge></li>
                <li>Edebiyat <Badge color={"secondary"}>88</Badge></li>
                <li>Tarih <Badge color={"danger"}>68</Badge></li>
            </ul>

            <span className="example-reagent">Badge Size</span>
            <ul>
                <li>Dolar <Badge color={"success"} size={14}>5.4730</Badge></li>
                <li>Euro <Badge color={"warning"} size={14}>6.2672</Badge></li>
                <li>Yuan <Badge color={"danger"} size={14}>0,80</Badge></li>
                <li>Tarih <Badge color={"info"} size={14}>0,083</Badge></li>
            </ul>
        </div>
    }
}
