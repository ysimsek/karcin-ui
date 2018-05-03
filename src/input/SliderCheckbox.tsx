import * as React from 'react';
import FaIcon from "../functional/faicon/FaIcon";

export interface SliderCheckboxProps {
    successIcon?:string | any;
    rejectIcon?:string | any;
}

export interface SliderCheckboxState {
    checked?:boolean
}

export default class SliderCheckbox extends React.Component<SliderCheckboxProps, SliderCheckboxState> {

    constructor(props:SliderCheckboxProps){
        super(props);

        this.state = {
            checked: false
        }
    }

    render(){
        let icon = null;
        if(this.props.successIcon !== undefined && this.props.rejectIcon !== undefined){
            icon = <span className={`show-icon ${(this.state.checked) ? 'success' : 'reject'}`}><FaIcon code={(this.state.checked) ? this.props.successIcon : this.props.rejectIcon}/></span>
        }
        return (<div className={`slider-checkbox ${this.state.checked ? 'active' : ''}`}>
            <label>
                {icon}
                <input type="checkbox" checked={this.state.checked} onChange={()=> {this.toggleChange()}}/>
                <span className="circle"/>
            </label>
        </div>);
    }

    toggleChange(){
        this.setState({checked:!this.state.checked});
    }

}