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
                            onChange={this.handleChange.bind(this)}
                         />
                    </Col>
                    <Col md={4}>
                        <DateInput
                            name={"value2"}
                            label={"Inline DateInput"}
                            value={this.state.value2}
                            inline
                            onChange={this.handleChange.bind(this)}
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
                            onChange={this.handleChange.bind(this)}
                        />
                    </Col>

                    <Col md={4}>
                    <DateInput
                            name={"value3"}
                            label=""
                            value={this.state.value3}
                            onChange={this.handleChange2.bind(this)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
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

    handleChange2(e:any){
        console.log(e); 
    }



}