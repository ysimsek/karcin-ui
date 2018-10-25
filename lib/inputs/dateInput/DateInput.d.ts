import * as React from 'react';
import 'react-dates/lib/css/_datepicker.css';
export interface DateInputProp {
    name?: any;
}
export default class DateInput extends React.Component<any, any> {
    constructor(props: any);
    render(): JSX.Element;
    toggleFocus(): void;
    handleChange(data: any): void;
}
