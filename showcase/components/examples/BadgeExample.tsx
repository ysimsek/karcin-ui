import * as React from "react";
import {Badge} from "karcin-ui";


export default class BadgeExample extends React.Component<any,any>{
    render(){
        return <div>
            <Badge color={"success"}  size={26}>BadgeText Size 26</Badge><br/><hr/>
            <Badge color={"info"} size={24}>BadgeText Size 24</Badge><br/><hr/>
            <Badge color={"danger"} size={22}>BadgeText Size 22</Badge><br/><hr/>
            <Badge color={"warning"} size={20}>BadgeText Size 20</Badge><br/><hr/>
            <Badge color={"secondary"} size={18}>BadgeText Size 18</Badge><br/><hr/>
            <Badge color={"primary"} size={16}>BadgeText Size 16</Badge><br/><hr/>
            <Badge color={"dark"} size={14}>BadgeText Size 14</Badge><br/><hr/>
            <Badge color={"light"} size={12}>BadgeText Size 12</Badge><br/><hr/>
            <Badge color={"link"} >BadgeText default text size 14</Badge>
        </div>
    }
}