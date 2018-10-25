import * as React from 'react';
import moment = require('moment');
import {DateInput} from "karcin-ui";


export default class DateInputExample extends React.Component<any, any>{
    constructor(props:any){
        super(props);

        this.state = {
            date: moment(),
            focused: false
        }
    }

    render(){
        return (<DateInput name="deniz" value={'23.01.2019'} label={'Example DateInput'} onChange={(date:any)=>{this.handleChange(date);}}/>);
    }

    toggleFocus(){
        this.setState({
            focused: !this.state.focused
        })
    }

    handleChange(data:any){
        debugger;
    }
}