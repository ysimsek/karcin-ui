import * as React from "react";
import {Button,PopOver} from "karcin-ui";

export default class PopOverExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            show : false,
            show2 : false
        }
    }
    render(){
        return <div>
                    <Button id={"pop1"} onClick={this.toggle.bind(this)}>Click to Me</Button>
                    <PopOver id={"pop1"} show={this.state.show} toggle={this.toggle.bind(this)} title={"What is React?"}>
                        <div>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</div>
                    </PopOver>
                    <hr/>
                    <span id={"pop2"} onClick={this.toggle2.bind(this)}>Click to Me</span>
                    <PopOver id={"pop2"} show={this.state.show2} toggle={this.toggle2.bind(this)} title={"What is React?"}>
                        <div>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</div>
                    </PopOver>
                </div>
    }

    toggle(e:any){
        this.setState({show:!this.state.show});
    }

    toggle2(e:any){
        this.setState({show2:!this.state.show2});
    }
}