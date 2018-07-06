import * as React from "react";
import {Row,Col, Label} from 'reactstrap';
import DatePicker from "./DatePicker";
import moment = require('moment');

export interface dateInputState {
    startDate: moment.Moment;
    displayName: string;
}

export interface DateInputProps{
    value ?: string | number;
    name ?: string;
    handleYearChange ?: any;
    handleChange ?: any;
    inline ?: boolean;
    showTime ?: boolean;
    startDate ?: moment.Moment;
    label ?: string;
    timeFormat ?: string;
    timeInterval ?: number;
    dateFormat ?: string;
    className ?: string;
}

export default class DateInput extends React.Component<DateInputProps, dateInputState> {

    static defaultProps: Partial<DateInputProps> = {
        startDate : moment()
    }

    constructor(props: any) {
        super(props);

        this.state = {
            startDate : moment(props.value),
            displayName: 'Example'
        };
        this.handleChange = this.handleChange.bind(this);
    }


    render() {
        return (
                <div>
                     <Label className={"label-properties"}>{this.props.label}</Label>
                    <div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={(e)=>{this.handleChange(e, 1)}}
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
        this.props.handleChange({date : date,target : {parsedValue : date._d, name : me.props.name}, id : getId});
    };

    handleYearChange(date: moment.Moment, getId?: any | null) {
        let me : any = this;
        // me.state['startDate' + getId] = date;
        // me.forceUpdate();
        this.props.handleYearChange({date:date,id:getId});
    }
}