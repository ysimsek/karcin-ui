import * as React from "react";
import {Row,Col} from 'reactstrap';
import {DateInput} from "karcin-ui";


export default class DateInputExample extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value : new Date()
        }
    }


    render() {
        return (<Row>
                    <Col md={4}>
                        <DateInput
                            name={"value"}
                            label={"Focus DateInput"}
                            value={this.state.value}
                            handleChange={this.handleChange.bind(this)}
                         />
                    </Col>
                    <Col md={4}>
                        <DateInput
                            name={"value2"}
                            label={"Inline DateInput"}
                            value={this.state.value2}
                            inline
                            handleChange={this.handleChange.bind(this)}
                        />
                    </Col>
                    <Col md={4}>
                        <DateInput
                            name={"value2"}
                            label={"Time DatePicker"}
                            value={this.state.value2}
                            showTime
                            timeFormat="HH:mm"
                            timeInterval={15}
                            dateFormat="LLL"
                            handleChange={this.handleChange.bind(this)}
                        />
                    </Col>

                    <Col md={4}>
                        <DatePicker
                            name={"value3"}
                            selected={this.state.value3}
                            onChange={this.handleChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={20}
                            dateFormat="LT"
                            timeCaption="Time"
                        />
                    </Col>

            </Row>
        );
    }
    handleChange(e:any){
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();

    }



}