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
            <br/><br/>
            <Progress title={"39 of 135"} value={39} max={135}/>
            <br/><br/>
            <Progress multi title={"Max value 80"}>
                <Progress bar color={"success"} value={25} max={80}>25</Progress>
                <Progress bar color={"danger"} value={25} max={80}>25</Progress>
                <Progress bar color={"info"}  value={25} max={80}>25</Progress>
            </Progress>


        </div>
    }
}