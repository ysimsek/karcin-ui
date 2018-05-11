import * as React from "react";
import {ToolTip} from "karcin-ui";

export default class ToolTipExample extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state={
            showFirst : false,
            showSecond : false
        }

    }

    //state değişiklşiği
    render(){
        return <div>
                    <p>It opens when it  <a id="first" href="#">comes on</a></p>
                    <ToolTip
                        position={"right"}
                        id={"first"}
                        show={this.state.showFirst}
                        toggle={this.toggle.bind(this)}>Hello First Tip</ToolTip>
                    <hr/>
                    <span id={"second"}>Come on over</span>
                    <ToolTip
                        position={"bottom"}
                        id={"second"}
                        show={this.state.showSecond}
                        toggle={this.toggleSecond.bind(this)}>Congratulations</ToolTip>
              </div>
    }

    toggle(){
        this.setState({showFirst : !this.state.showFirst});
    }
    toggleSecond(){
        this.setState({showSecond : !this.state.showSecond});
    }

}