import * as React from "react";
import {Label} from 'reactstrap';
import DatePickerX from 'react-datepicker';
import moment = require('moment');
import "react-datepicker/dist/react-datepicker.css";

export interface DateInputState {
    startDate: any;
    displayName: string;
}

export interface DateInputProps{
    value ?: string | any;
    name ?: string;
    onChange ?: any;
    inline ?: boolean;
    showTime ?: boolean;
    startDate ?: moment.Moment;
    label ?: string;
    timeFormat ?: string;
    timeInterval ?: number;
    dateFormat ?: string;
    className ?: string;
    showTimeSelect ?: any;
    showTimeSelectOnly ?:any;
    timeIntervals?:any;
    timeCaption?:any;
}

export default class DateInput extends React.Component<DateInputProps, DateInputState> {

    static defaultProps: Partial<DateInputProps> = {
        startDate : moment(),
        dateFormat: "DD.MM.YYYY"
    }

    constructor(props: any) {
        super(props);
        this.state = {
            startDate : props.value !== (null && undefined) ? moment(props.value) : null,
            displayName: 'Example'
        };
    }


    render() {
        return (
                <div>
                    {this.props.label != undefined ? <Label className={"label-properties"}>{this.props.label}</Label> : null}
                    <div>
                        <DatePickerX
                            {...this.props}
                            selected={this.state.startDate}
                            onChange={(e,id)=>{this.handleChange(e,id)}}
                            className={"form-control "+this.props.className}
                            timeFormat={this.props.timeFormat}
                            timeIntervals={this.props.timeInterval}
                            dateFormat={this.props.dateFormat}
                            inline={this.props.inline != undefined ? true : false}
                            showTimeSelect={this.props.showTime != undefined ? true : false}
                        />
                    </div>
                </div>

        );
    }

    /**
     *
     * @param {moment.Moment | any | null} date
     * @param getId
     */
    handleChange(date?: any, getId?: any){
        this.setState({
            startDate : date
        })
        this.props.onChange({date : date,target : {parsedValue : moment(date._d).format(this.props.dateFormat), name : this.props.name}, id : getId});
    };
}
