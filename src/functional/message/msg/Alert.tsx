import * as React from "react";
import * as ReactDOM from "react-dom";
import {FaIcon,Button} from "./../../../index";

export default class Alert extends React.Component<any,any>{


    state:any;

    static defaultProps:any={
        iconColor:"primary",
        color:"warning",
        icon:"fa-info-circle"
    }

    colorArr:any = {
        primary : "faicon_primary",
        secondary : "faicon_secondary",
        success : "faicon_success",
        info : "faicon_info",
        warning : "faicon_warning",
        danger : "faicon_danger",
        dark : "faicon_dark",
        light : "faicon_light"
    };

    constructor(props:any){
        super(props)
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props:any){
        this.state = {
            show : props.show
        }
    }

    render (){
        return this.getMessageElement()
    }
    getMessageElement(){
        let color = this.props.color != undefined ? this.getColor(this.props.color) : "";
        return <div className={"modal fade show-box left "+(this.state.show == true ? "show" : "")}
                    style={this.state.show == true ? {display:"block"} : {display:"none"}}
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                {<div className={"alert-option "+this.props.color}><FaIcon code={this.props.icon}/></div>}
                                <div className="general-content">
                                    {(this.props.title !== undefined) ? <h3 className={color}>{this.props.title}</h3> : null}
                                    {(this.props.message !== undefined) ? <p>{this.props.message}</p> : null}
                                    <Button color={this.props.color} name={"OK"} onClick={this.tmm.bind(this)}>Tamam</Button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }

    getColor(color:string):string{
        return this.colorArr[color] != undefined ? this.colorArr[color] : "";
    }

    componentWillUnmount(){
        let mount:any = ReactDOM.findDOMNode(this);
        document.body.style.removeProperty('overflow');
        document.body.removeChild(mount.parentElement);
    }

    tmm(e:any){
        this.setState({show : false})
        let mount:any = ReactDOM.findDOMNode(this);
        e.response = {name:e.target.name, value:true};
        this.props.callBack != undefined ? this.props.callBack(e) : null;
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    }



}
