import * as React from "react";
import moment = require('moment');
import "react-datepicker/dist/react-datepicker.css";
export interface DateInputState {
    startDate: any;
    displayName: string;
}
export interface DateInputProps {
    value?: string | any;
    name?: string;
    onChange?: any;
    inline?: boolean;
    showTime?: boolean;
    startDate?: moment.Moment;
    label?: string;
    timeFormat?: string;
    timeInterval?: number;
    dateFormat?: string;
    className?: string;
    showTimeSelect?: any;
    showTimeSelectOnly?: any;
    timeIntervals?: any;
    timeCaption?: any;
}
export default class DateInput extends React.Component<DateInputProps, DateInputState> {
    static defaultProps: Partial<DateInputProps>;
    constructor(props: any);
    render(): JSX.Element;
    /**
     *
     * @param {moment.Moment | any | null} date
     * @param getId
     */
    handleChange(date?: any, getId?: any): void;
}
