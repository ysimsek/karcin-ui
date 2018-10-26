import * as React from 'react';
import moment = require('moment');
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import FaIcon from '../../functional/faicon/FaIcon';

export interface DateInputProps {
    name:any;
    value?:any;
    onChange?:any;
    label?:any;
    format?:any;
    icon?:any;
    id?:any;
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
            focused: false,
            icon: this.props.icon
        }
    }


    componentWillReceiveProps(props:any){
        this.setState({
            value:moment(props.value, this.state.format)
        })
    };

    render(){
        return (<div className={'karcin-dateInput'}>
            <div className="form-group">
            {(this.props.label !== undefined) ? <label className={'label-properties'}>{this.props.label}</label> : ''}
            <SingleDatePicker
                id={this.props.id}
                date={this.state.value}
                onDateChange={(e:any)=>{
                    this.handleChange(e);
                }}
                focused={this.state.focused}
                onFocusChange={()=>{this.toggleFocus()}}
                numberOfMonths={1}
                showDefaultInputIcon={(this.state.icon !== undefined ? true : false)}
                customInputIcon={(this.state.icon !== undefined ? this.state.icon : '')}
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
        let getDate:any = moment(data, this.props.format);

        let datas:any = {};
        datas['target'] = {'name': this.props.name, value:new Date(getDate)};

        if(this.props.onChange !== undefined){
            this.props.onChange(datas);
        }
    }
}