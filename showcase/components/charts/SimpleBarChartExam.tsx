import * as React from "react";
import {BarChart,Panel} from "karcin-ui"
import {Col,Row} from "reactstrap";


export default class SimpleBarChartExam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        let data = [{
            "country": "Turkey",
            "visits": 4025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 1882,
            "color": "#FF6600"
        }, {
            "country": "Japan",
            "visits": 1809,
            "color": "#FF9E01"
        }, {
            "country": "Germany",
            "visits": 1322,
            "color": "#FCD202"
        }, {
            "country": "UK",
            "visits": 1122,
            "color": "#F8FF01"
        }, {
            "country": "France",
            "visits": 1114,
            "color": "#B0DE09"
        }, {
            "country": "India",
            "visits": 984,
            "color": "#04D215"
        }];
        return <Row>
            <Col md={6}>
                <Panel title={"Simple Light Theme Chart"}>
                    <BarChart
                        data={data}
                        theme={"light"}
                        textColor={"#000000"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                        report={true}
                        reportName={"SimpleChartReport_"}
                    />
                </Panel>
             </Col>
            <Col md={6}>
                <Panel title={"Simple Dark Theme Chart(Inline)"}>
                    <BarChart
                        data={data}
                        theme={"dark"}
                        inline={true}
                        textColor={"#aa00cc"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Simple Pattern Theme Chart Scrolling"}>
                    <BarChart
                        data={data}
                        theme={"black"}
                        scroll={true}
                        textColor={"#3333aa"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                        valueLine={true}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Color Column Chart"}>
                    <BarChart
                        data={data}
                        textColor={"#3333aa"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                        colorField={"color"}
                        valueLine={true}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Simple 3D Square Chart"}>
                    <BarChart
                        data={data}
                        threeD={true}
                        textColor={"#3333aa"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                        colorField={"color"}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Simple 3D Oval Chart"}>
                    <BarChart
                        ovalColumn
                        data={data}
                        threeD={true}
                        textColor={"#3333aa"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                        colorField={"color"}
                    />
                </Panel>
            </Col>

        </Row>
    }
}
