import * as React from "react";
import * as ReactDOM from "react-dom";
import {FaIcon,Button} from "./../../../index";

export default class Alert extends React.Component<any,any>{


    state:any;

    static defaultProps:any={
        iconColor:"primary",
        color:"warning"
    }

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
                                {<span><FaIcon color={this.props.color} code={"fa-exclamation-triangle"}/></span>}
                                {(this.props.title !== undefined) ? <h3>{this.props.title}</h3> : null}
                                {(this.props.message !== undefined) ? <p>{this.props.message}</p> : null}
                            </div>
                            <div className="modal-footer">
                                <Button color={this.props.color} name={"OK"} onClick={this.tmm.bind(this)}>Tamam</Button>
                            </div>
                        </div>
                    </div>
        </div>
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
