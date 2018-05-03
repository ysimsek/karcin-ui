import * as React from "react";
import {PieChart} from "karcin-ui";
import {Row,Col} from "reactstrap";

const data = [ {
    "country": "İstanbul",
    "litres": 501.9
}, {
    "country": "Ankara",
    "litres": 301.9
}, {
    "country": "Konya",
    "litres": 201.1
}, {
    "country": "İzmir",
    "litres": 165.8
}, {
    "country": "İzmit",
    "litres": 139.9
}, {
    "country": "Trabzon",
    "litres": 128.3
}, {
    "country": "Erzurum",
    "litres": 99
}, {
    "country": "Hakkari",
    "litres": 60
}, {
    "country": "Hatay",
    "litres": 50
} ];

export default class PieChartExam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        return <Row>
            <Col md={6}>
                <PieChart
                        data={data}
                        categoryField={"country"}
                        categoryValue={"litres"}
                        height={300}
                    />
            </Col>
            <Col md={6}>
                <PieChart
                        data={data}
                        categoryField={"country"}
                        categoryValue={"litres"}
                        height={300}
                        innerSize={40}
                    />
            </Col>
            <Col md={6}>
                <PieChart
                        data={data}
                        categoryField={"country"}
                        categoryValue={"litres"}
                        height={300}
                        deepth={true}
                    />
            </Col>
            <Col md={6}>
                <PieChart
                        data={data}
                        categoryField={"country"}
                        categoryValue={"litres"}
                        height={300}
                        threeD={true}
                    />
            </Col>

        </Row>
    }
}
