import * as React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment = require('moment');
import 'moment/locale/tr';
const BigCalendar = require('react-big-calendar');


BigCalendar.momentLocalizer(moment);
export interface CalendarProps {
    /**
     * calendar showing items (id, title, allDay, start, end)
     */
    events?: Array<eventArray>;
    [key:string] : any;
}

export interface CalendarState {
    
}

export interface eventArray {
    id?:number | any,
    title?: string | any,
    allDay?: boolean | any,
    start?: any,
    end?: any
}

export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props:CalendarProps){
        super(props);

        
    }

    render(){
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
        return(<div>
            <BigCalendar events={this.props.events} {...this.props} />
        </div>);
    }
}