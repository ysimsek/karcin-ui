import * as React from "react";
import {BarChart} from "karcin-ui"
import {Col,Row,Label} from "reactstrap";


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
                <Label>Simple Light Theme Chart</Label>
                    <BarChart
                        data={data}
                        theme={"light"}
                        textColor={"#000000"}
                        categoryField={"country"}
                        categoryValue={"visits"}
                    />
             </Col>
            <Col md={6}>
                <Label>Simple Dark Theme Chart(Inline)</Label>
                <BarChart
                    data={data}
                    theme={"dark"}
                    inline={true}
                    textColor={"#aa00cc"}
                    categoryField={"country"}
                    categoryValue={"visits"}
                />
            </Col>
            <Col md={6}>
                <Label>Simple Pattern Theme Chart</Label>
                <BarChart
                    data={data}
                    theme={"black"}
                    textColor={"#3333aa"}
                    categoryField={"country"}
                    categoryValue={"visits"}
                    valueLine={true}
                />
            </Col>
            <Col md={6}>
                <Label>Color Column Chart</Label>
                <BarChart
                    data={data}
                    textColor={"#3333aa"}
                    categoryField={"country"}
                    categoryValue={"visits"}
                    colorField={"color"}
                    valueLine={true}
                />
            </Col>
            <Col md={6}>
                <Label>Simple 3D Square Chart</Label>
                <BarChart
                    data={data}
                    threeD={true}
                    textColor={"#3333aa"}
                    categoryField={"country"}
                    categoryValue={"visits"}
                    colorField={"color"}
                />
            </Col>
            <Col md={6}>
                <Label>Simple 3D Oval Chart</Label>
                <BarChart
                    ovalColumn
                    data={data}
                    threeD={true}
                    textColor={"#3333aa"}
                    categoryField={"country"}
                    categoryValue={"visits"}
                    colorField={"color"}
                />
            </Col>

        </Row>
    }
}
