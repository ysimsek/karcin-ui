import * as React from "react";
import {Row,Col, Label} from 'reactstrap';
import DatePickerX from 'react-datepicker';
import moment = require('moment');
import "react-datepicker/dist/react-datepicker.css";

export interface dateInputState {
    startDate: any;
    displayName: string;
}

export interface DateInputProps{
    value ?: string | any;
    name ?: string;
    handleYearChange ?: any;
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

export default class DateInput extends React.Component<DateInputProps, dateInputState> {

    static defaultProps: Partial<DateInputProps> = {
        startDate : moment(),
        dateFormat: "DD.MM.YYYY"
    }

    constructor(props: any) {
        super(props);
        this.state = {
            startDate : (this.props.inline !== undefined ? moment(props.value) : moment(props.value, this.props.dateFormat)),
            displayName: 'Example'
        };
        this.handleChange = this.handleChange.bind(this);
    }


    render() {
        return (
                <div>
                     <Label className={"label-properties"}>{this.props.label}</Label>
                    <div>
                        <DatePickerX
                            {...this.props}
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            onYearChange={this.handleYearChange}
                            className="form-control"
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
    handleChange(date?: moment.Moment | null | any, getId?: any) {
        let me : any = this;
        me.state['startDate'] = date;
        me.forceUpdate();
        this.props.onChange({date : date,target : {parsedValue : moment(date._d).format(this.props.dateFormat), name : me.props.name}, id : getId});
    };

    handleYearChange(date: moment.Moment, getId?: any | null) {
        let me : any = this;
        // me.state['startDate' + getId] = date;
        // me.forceUpdate();
        this.props.handleYearChange({date:date,id:getId});
    }
}