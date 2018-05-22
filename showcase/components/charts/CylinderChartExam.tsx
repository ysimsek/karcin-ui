import * as React from "react";
import {CylinderChart,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";

export default class CylinderChartExam extends React.Component{
    render(){
        let data1 = {
            "category":"Three Data Cylinder Chart",
            "data":[{"value": 30},
                    {"value": 75,lineColor :"#ffffff", fillColor:"white"},
                    {"value": 25}]
        };
        let data2 = {
            "category":"Two Data Cylinder Chart",
            "data":[{"value": 30},
                    {"value": 75,lineColor :"#ffffff", fillColor:"white"}]
        };

        return <Row>
                    <Col md={6}>
                        <Panel title={"Three Data Cylinder Chart Example"}>
                            <CylinderChart
                                data={data1}
                                height={400}
                                categoryField={"data"}
                                categoryTitle={"category"}
                                categoryValue={"value"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title={"Two Data Cylinder Chart Example"}>
                            <CylinderChart
                                data={data2}
                                height={400}
                                categoryField={"data"}
                                categoryTitle={"category"}
                                categoryValue={"value"}/>
                        </Panel>
                    </Col>
                </Row>
    }
}