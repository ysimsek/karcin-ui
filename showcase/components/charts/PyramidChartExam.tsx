import * as React from "react";
import {Row,Col} from "reactstrap";
import {Panel} from "karcin-ui";
import PyramidChart from "../../../src/chart/extrachart/PyramidChart";

const data = [ {
    "title": "Website visits",
    "value": 300
}, {
    "title": "Downloads",
    "value": 123
}, {
    "title": "Requested price list",
    "value": 98
}, {
    "title": "Contaced for more info",
    "value": 72
}, {
    "title": "Purchased",
    "value": 35
}, {
    "title": "Contacted for support",
    "value": 15
}, {
    "title": "Purchased additional products",
    "value": 8
} ];

export default class PyramidChartExam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){

        return <Row>
                    <Col md={6}>
                        <Panel title={"Simple PyramidChart"}>
                            <PyramidChart
                                data={data}
                                categoryField={"value"}
                                rotate={true}
                                unit={"br"}
                                categoryTitle={"title"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title={"3D PyramidChart"}>
                            <PyramidChart
                                data={data}
                                threeD={true}
                                rotate={true}
                                unit={"mt"}
                                categoryField={"value"}
                                categoryTitle={"title"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title={"Simple Reverse PyramidChart"}>
                            <PyramidChart
                                data={data}
                                categoryField={"value"}
                                unit={"feet"}
                                categoryTitle={"title"}
                                theme={"dark"}
                                textColor={"red"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title={"RepresentType PyramidChart"}>
                            <PyramidChart
                                data={data}
                                categoryField={"value"}
                                categoryTitle={"title"}
                                theme={"dark"}
                                unit={"kg/s"}
                                representType={"area"}
                                textColor={"red"}/>
                        </Panel>
                    </Col>

                </Row>
    }
}