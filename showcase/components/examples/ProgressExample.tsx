import * as React from "react";
import {Progress} from "karcin-ui";

export default class ProgressExample extends React.Component<any,any>{
    render(){
        return <div>
            <Progress/>
            <br/><br/>
            <Progress value={22} title={"22%"}/>
            <br/><br/>
            <Progress value={42} striped>Stripe</Progress>
            <br/><br/>
            <Progress value={42} animated>Animated</Progress>
            <br/><br/>
            <Progress multi >
                <Progress bar color={"success"} value={25}>%25</Progress>
                <Progress bar color={"danger"} value={25}>%25</Progress>
                <Progress bar color={"info"}  value={25}>%25</Progress>
            </Progress>

        </div>
    }
}