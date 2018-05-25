import * as React from "react";
import {Calendar} from 'karcin-ui';
import {Row, Col} from 'reactstrap';

export default class BigCalendarExample extends React.Component<any, any> {

    render() {
        const events = [
            // Upper Calendar
            {
                title: 'A (2 days)',
                allDay: true,
                start: '2015-04-12T00:00:00.000Z',
                end: '2015-04-14T00:00:00.000Z'
            },
            // Lower calendar
            {
                title: 'B (2 days)',
                allDay: true,
                start: '2017-12-12T00:00:00.000Z',
                end: '2017-12-14T00:00:00.000Z'
            },
            {
                title: 'C (1 day)',
                allDay: true,
                start: '2017-12-02T00:00:00.000Z',
                end: '2017-12-03T00:00:00.000Z'
            },
            {
                title: 'D (2 days)',
                allDay: true,
                start: '2017-12-02T00:00:00.000Z',
                end: '2017-12-04T00:00:00.000Z'
            },
            {
                title: 'E (1 day)',
                allDay: true,
                start: '2017-12-04T00:00:00.000Z',
                end: '2017-12-05T00:00:00.000Z'
            },
        ];

        return (<div>
                    <Calendar
                        events={events}
                        step={60}
                        showMultiDayTimes
                        defaultDate={new Date(2015, 3, 1)}
                        style={{height:700}}
                    />
                </div>
        );
    }
  }