import * as React from "react";
import {FaIcon,Button,TextInput} from "./../../../index";
import * as ReactDOM from "react-dom";

export default class Prompt extends React.Component<any,any>{
    state:any;

    static defaultProps:any={
        iconColor:"primary"
    }

    constructor(props:any){
        super(props)
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props:any){
        this.state = {
            show : props.show,
            textInput : ""
        }
    }

    render (){
        return this.getMessageElement()
    }

    getMessageElement(){
        const {show,willUnmount} = this.props;

        return <div className={"modal fade show-box left "+(show == true ? "show" : "")}
                    style={this.state.show == true ? {display:"block"} : {display:"none"}}
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        {(this.props.icon !== undefined) ? <span><FaIcon  color={this.props.iconColor}  code={this.props.icon}/></span> : null}
                        {(this.props.title !== undefined) ? <h3>{this.props.title}</h3> : null}
                        <TextInput
                            ref={"text"}
                            name={"textInput"}
                            label={this.props.label}
                            placeholder={this.props.placeholder}
                            value={this.state.textInput}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="modal-footer">
                        <Button name="OK"  onClick={this.tmm.bind(this)} color={"primary"}>Tamam</Button>
                        <Button name="CANCEL" outline onClick={this.ipt.bind(this)} color={"dark"}>İptal</Button>
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
        this.setState({show : false});
        e.response = {name:e.target.name, value:true,inputValue:this.state.textInput};
        this.props.callBack != undefined ? this.props.callBack(e):null;
        let mount:any = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    }

    ipt(e:any){
        this.setState({show : false})
        e.response = {name:e.target.name, value:false,inputValue:this.state.textInput};
        this.props.callBack != undefined ? this.props.callBack(e) : null;
        let mount:any = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    }

    handleChange(e:any){
        let name = e.target.name;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}
