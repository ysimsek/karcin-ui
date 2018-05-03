import * as React from "react";
import {ComposedBarChart,Panel} from "karcin-ui"
import {Row,Col} from "reactstrap";

export default class ComposedBarChartExam extends React.Component<any,any>{
    render(){
        let data = [{
            "continent": "North America",
            "title": "Trucks",
            "valueField":"trucks",
            "trucks": 40000,
            "SUVs": 180000,
            "cars": 90000,
            "total": 310000
        }, {
            "continent": "Asia",
            "title": "SUVs",
            "valueField":"SUVs",
            "trucks": 90000,
            "SUVs": 40000,
            "cars": 110000,
            "total": 240000
        }, {
            "continent": "Europe",
            "title": "Cars",
            "valueField":"cars",
            "trucks": 30000,
            "SUVs": 50000,
            "cars": 110000,
            "total": 190000
        }];
        return <Row>
                    <Col md={6}>
                        <Panel title={"Three Chart side by side BarChart"}>
                            <ComposedBarChart
                                height={300}
                                data={data}
                                categoryField={"continent"}
                                categoryValue={"total"}
                                theme={"light"}
                                textColor={"black"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title={"Dark Theme side by side BarChart"}>
                            <ComposedBarChart
                                height={300}
                                data={data}
                                categoryField={"continent"}
                                categoryValue={"total"}
                                theme={"dark"}
                                textColor={"red"}/>
                        </Panel>
                    </Col>

        </Row>
    }
}