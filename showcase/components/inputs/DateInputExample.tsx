import * as React from "react";
import {Row,Col} from 'reactstrap';
import {DateInput} from "karcin-ui";


export default class DateInputExample extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value : null,
            value3:null
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
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="LLL"
                            timeCaption="time"
                            onChange={this.handleChange.bind(this)}
                        />
                    </Col>

                    <Col md={4}>
                    <DateInput
                            name={"value3"}
                            value={this.state.value3} 
                            onChange={this.handleChange.bind(this)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="LT"
                            timeFormat="HH:mm"
                        />
                    </Col>
            </Row>
        );
    }
    handleChange(e:any){
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state); 
    }

    handleChange2(e:any){
        console.log(e); 
    }



}