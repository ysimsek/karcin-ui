import * as React from "react";
import {FaIcon, Badge} from 'karcin-ui';
import {Row,Col} from "reactstrap";
const iconList = require("./../models/FaIconModel.json");

export default class FaIconExample extends React.Component<any, any> {

    constructor(props:any){
        super(props);
        this.state = {
            icon: "fa-html5"
        }

    }
    render() {
        return <Row>
            <Col md={8} className={'fa-icons'}>
                {this.getFaIconList(iconList)}
            </Col>
            <Col md={4} className={"showing-icon"}>
                {this.getFaIcon()}
            </Col>
        </Row>
    }

    getFaIconList(iconList:any){
        let component = [];
        iconList.fields.map((icon,idx)=>{
            component.push( <FaIcon code={icon} key={idx+icon}
                                    onClick={this.onClick.bind(this)}
            ></FaIcon>)
        })

        component.push(<hr/>);

        iconList.fields2.map((icon,idx)=>{
            component.push( <FaIcon id={icon} code={icon} key={idx+icon}
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
            <FaIcon code={this.state.icon}></FaIcon>{' '}
            <FaIcon code={this.state.icon} size="fa-2x"></FaIcon>{' '}
            <FaIcon code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon code={this.state.icon} size="fa-4x"></FaIcon>{' '}
            <FaIcon code={this.state.icon} size="fa-5x"></FaIcon>{' '}
            <FaIcon code={this.state.icon} size="fa-6x"></FaIcon>{' '}
            <hr />
            <FaIcon color={"primary"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon color={"secondary"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon color={"success"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon color={"info"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon color={"warning"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon color={"danger"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon color={"dark"} code={this.state.icon} size="fa-3x"></FaIcon>{' '}
            <FaIcon code={this.state.icon} size="fa-3x"></FaIcon>
            <FaIcon code="fas fa-accessible-icon"/>
            <hr />
            <FaIcon color={"primary"} code={this.state.icon} spin={true} size="fa-6x"></FaIcon>{' '}
            <FaIcon color={"success"} code={this.state.icon} spin={true} size="fa-6x"></FaIcon>{' '}
        </div>
    }

    onClick(e){
        this.setState({icon : e.name});
    }
}
