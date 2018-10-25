import * as React from 'react';
import moment = require('moment');
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import FaIcon from '../../functional/faicon/FaIcon';

export interface DateInputProps {
    name:string | any;
    value?:string |any;
    onChange?:any;
    label?:string | any;
    format?:string | any;
}

export default class DateInput extends React.Component<DateInputProps, any>{

    static defaultProps:Partial<any> = {
        name: 'karcin-date',
        value: moment(),
        format: 'DD.MM.YYYY'
    }

    constructor(props:any){
        super(props);

        this.state = {
            value: (this.props.value !== undefined ? moment(this.props.value, this.props.format) : moment()),
            focused: false
        }
    }

    render(){
        return (<div className={'karcin-dateInput'}>
            <div className="form-group">
            {(this.props.label !== undefined) ? <label>{this.props.label}</label> : ''}
            <SingleDatePicker
                id="SingleDatePickerInput"
                date={this.state.value}
                onDateChange={(e:any)=>{
                    this.handleChange(e);
                }}
                focused={this.state.focused}
                onFocusChange={()=>{this.toggleFocus()}}
                numberOfMonths={1}
                showDefaultInputIcon={true}
                customInputIcon={<FaIcon code={"fa-home"}/>}
                hideKeyboardShortcutsPanel={true}
            />
            </div>
        </div>);
    }

    toggleFocus(){
        this.setState({
            focused: !this.state.focused
        })
    }

    handleChange(data:any){
        let getDate = moment(data).format(this.props.format);

        let datas:any = {};
        datas['target'] = {'name': this.props.name, value:getDate};

        if(this.props.onChange !== undefined){
            this.props.onChange(datas);
        }
    }
}