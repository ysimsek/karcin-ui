import * as React from 'react';
import FaIcon from "../functional/faicon/FaIcon";

export interface ToggleButtonProps {
    successIcon?:string | any;
    rejectIcon?:string | any;
    onChange?:React.EventHandler<any> | any;
    name ?:string | any;
    label ?:string | any;
    labelPosition ?:string | any;

}

export interface ToggleButtonState {
    checked?:boolean
}

export default class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
    /**
     * Initial values
     * @param {ToggleButtonProps} props
     */
    constructor(props:ToggleButtonProps){
        super(props);

        this.state = {
            checked: false
        }
    }

    /**
     * @returns {any}
     */
    render():any{
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

    /**
     * Change the state
     */
    toggleChange(){
        this.setState({checked:!this.state.checked});
        this.propsOnChange();
    }

    /**
     * return eventValues
     */
    propsOnChange(){
        if(this.props.onChange !== undefined) {
            let eventValue: Object | any = {};
            eventValue['name'] = this.props.name;
            eventValue['label'] = this.props.label;
            eventValue['value'] = this.state.checked;

            this.props.onChange(eventValue);
        }
    }

}