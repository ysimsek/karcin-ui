import * as React from "react";
import {PieChart,Panel} from "karcin-ui";
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
                <Panel title={"PieChart default none theme"}>
                    <PieChart
                            data={data}
                            categoryField={"country"}
                            categoryValue={"litres"}
                            height={300}
                            describeList={true}
                        />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"PieChart İnner Size Example"}>
                    <PieChart
                            data={data}
                            categoryField={"country"}
                            categoryValue={"litres"}
                            height={300}
                            innerSize={40}
                            describeList={true}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"PieChart deepth property"}>
                    <PieChart
                            data={data}
                            categoryField={"country"}
                            categoryValue={"litres"}
                            height={300}
                            deepth={true}
                        />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"PieChart 3D property"}>
                    <PieChart
                            data={data}
                            categoryField={"country"}
                            categoryValue={"litres"}
                            height={300}
                            threeD={true}
                    />
                </Panel>
            </Col>

        </Row>
    }
}
