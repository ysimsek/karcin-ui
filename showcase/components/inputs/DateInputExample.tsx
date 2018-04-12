import * as React from "react";
import {Row,Col, Label} from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment = require('moment');
import "react-datepicker/dist/react-datepicker.css";

export interface dataGridState {
    startDate1: moment.Moment;
    startDate2: moment.Moment;
    startDate3: moment.Moment;
    displayName: string;
}

export default class DateInputExample extends React.Component<any, dataGridState> {
    constructor(props: any) {
        super(props);

        this.state = {
            startDate1 : moment(),
            startDate2 : moment(),
            startDate3 : moment(),
            displayName: 'Example'
        }

        this.handleChange = this.handleChange.bind(this);
    }


    render() {
        return (<Row>
                <Col xs={4}>
                    <Label style={{fontWeight:'bold'}}>Input focus DatePicker</Label>
                    <div>
                        <DatePicker
                            selected={this.state.startDate1}
                            onChange={(e)=>{this.handleChange(e, 1)}}
                            onYearChange={this.handleYearChange}
                            className="form-control"
                        />
                    </div>
                </Col>
                <Col xs={4}>
                    <Label style={{fontWeight:'bold'}}>Inline DatePicker</Label>
                    <div>
                        <DatePicker
                            inline
                            selected={this.state.startDate2}
                            onChange={(e)=>{this.handleChange(e, 2)}}
                            onYearChange={this.handleYearChange}
                        />
                    </div>
                </Col>
                <Col>
                    <Label style={{fontWeight:'bold'}}>Time DatePicker</Label>
                    <div>
                        <DatePicker
                            selected={this.state.startDate3}
                            onChange={(e)=>{this.handleChange(e, 3)}}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="LLL"
                            className="form-control"
                        />
                    </div>
                </Col>
            </Row>
        );
    }

    handleChange(date?: moment.Moment | null, getId?: any) {
        this.state['startDate' + getId] = date;
        this.forceUpdate();
    };

    handleYearChange(date: moment.Moment, getId?: any | null) {
        this.state['startDate' + getId] = date;
        this.forceUpdate();
    }
}