import * as React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/tr';
export interface CalendarProps {
    /**
     * calendar showing items (id, title, allDay, start, end)
     */
    events?: Array<eventArray>;
    [key: string]: any;
}
export interface CalendarState {
}
export interface eventArray {
    id?: number | any;
    title?: string | any;
    allDay?: boolean | any;
    start?: any;
    end?: any;
}
export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps);
    render(): JSX.Element;
}
