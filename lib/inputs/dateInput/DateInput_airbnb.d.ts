import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
export interface DateInputProps {
    name: any;
    value?: any;
    onChange?: any;
    label?: any;
    format?: any;
    icon?: any;
    id?: any;
}
export default class DateInput extends React.Component<DateInputProps, any> {
    static defaultProps: Partial<any>;
    constructor(props: any);
    componentWillReceiveProps(props: any): void;
    render(): JSX.Element;
    toggleFocus(): void;
    handleChange(data: any): void;
}
