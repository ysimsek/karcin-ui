import * as React from "react";
import CylinderChart from "../../../src/chart/extrachart/CylinderChart";
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
                        <CylinderChart
                            data={data1}
                            height={400}
                            categoryField={"data"}
                            categoryTitle={"category"}
                            categoryValue={"value"}/>
                    </Col>
                    <Col md={6}>
                        <CylinderChart
                            data={data2}
                            categoryField={"data"}
                            categoryTitle={"category"}
                            categoryValue={"value"}/>
                    </Col>
                </Row>
    }
}