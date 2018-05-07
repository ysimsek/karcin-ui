import * as React from "react";
import {Row,Col} from "reactstrap";
import {MicroChart,Panel} from "karcin-ui";

const dataLine = [{
    "day": 1,
    "value": 100
}, {
    "day": 2,
    "value": 84
}, {
    "day": 3,
    "value": 167
}, {
    "day": 4,
    "value": 102
}, {
    "day": 5,
    "value": -11
}, {
    "day": 6,
    "value": -53
}, {
    "day": 7,
    "value": 118
}, {
    "day": 8,
    "value": 113
}, {
    "day": 9,
    "value": 122
}, {
    "day": 10,
    "value": 125,
    "bullet": "round"
}];

const dataPie =[ {
    "x": 1,
    "value": 29
}, {
    "x": 2,
    "value": 71
} ];

const dataTerm =[ {
    "x": 1,
    "y": 100
} ];

const dataBar =[ {
    "day": 1,
    "value": -5
}, {
    "day": 2,
    "value": 3
}, {
    "day": 3,
    "value": 7
}, {
    "day": 4,
    "value": -3
}, {
    "day": 5,
    "value": 3
}, {
    "day": 6,
    "value": 4
}, {
    "day": 7,
    "value": 6
}, {
    "day": 8,
    "value": -3
}, {
    "day": 9,
    "value": -2
}, {
    "day": 10,
    "value": 6
} ];

export default class MicroChartExam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return <Row>
            <Col>
                <Panel title={"MicroChart Examples"}>
                    <MicroChart chartType={"line"} data={dataLine} categoryValue={"value"} categoryField={"day"}/><br/>
                    <MicroChart chartType={"line2"} data={dataLine} categoryValue={"value"} categoryField={"day"}/>{'  '}
                    <MicroChart chartType={"pie"} data={dataPie} categoryValue={"value"} categoryField={"x"}/><br/>
                    <MicroChart chartType={"therm"} data={dataTerm} categoryValue={"y"} categoryField={"x"} cutOffPoint={66}/>{'  '}
                    <MicroChart chartType={"therm"} data={dataTerm} categoryValue={"y"} categoryField={"x"} cutOffPoint={36}/><br/>
                    <MicroChart chartType={"bar"} data={dataBar} categoryValue={"value"} categoryField={"day"}/>{'  '}
                    <MicroChart chartType={"bar2"} data={dataBar} categoryValue={"value"} categoryField={"day"}/><br/>
                </Panel>
            </Col>
        </Row>
    }
}