import * as React from "react";
import {FaIcon, Badge} from 'karcin-ui';
const iconList = require("./../models/FaIconModel.json");

export default class FaIconExample extends React.Component<any, any> {

    constructor(props:any){
        super(props);
        this.state = {
            icon: "fa-html5"
        }

    }
    render() {
        return <div>
            {this.getFaIconList(iconList)}
            {this.getFaIcon()}
        </div>
    }

    getFaIconList(iconList:any){
        let component = [];
        iconList.fields.map((icon,idx)=>{
            component.push( <FaIcon code={icon} key={icon}
                                    onClick={this.onClick.bind(this)}
            ></FaIcon>)
        })
        return component
    }

    getFaIcon(){
        return <div>
            <hr/>
            <Badge color={"primary"}>{"<FaIcon code='"+this.state.icon+"'/>"}</Badge>
            <hr />
            <FaIcon code={this.state.icon}></FaIcon>
            <FaIcon code={this.state.icon} size="fa-2x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-4x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-5x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-6x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-7x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-8x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-9x"></FaIcon>
            <hr />
            <FaIcon color={"primary"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"secondary"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"success"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"info"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"warning"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"danger"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"dark"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon color={"light"} code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon code={this.state.icon} size="fa-3x"></FaIcon>
            <hr />
            <FaIcon color={"primary"} code={this.state.icon+" fa-spin"} size="fa-6x"></FaIcon>
            <FaIcon color={"success"} code={this.state.icon+" fa-spin"} size="fa-6x"></FaIcon>
        </div>
    }

    onClick(e){
        this.setState({icon : e.target.classList[2]});
    }
}
