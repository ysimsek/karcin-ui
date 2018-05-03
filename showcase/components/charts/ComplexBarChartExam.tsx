import * as React from "react";
import {ComplexBarChart,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";

export default class ComposedBarChartExam extends React.Component<any,any>{
    render(){
        let data = [ {date: "2012-01-01", distance: 227, townName: "İstanbul", townName2: "İstanbul", townSize: 25, latitude: 40.71, duration: 408},
            {date: "2012-01-02", distance: 371, townName: "Ankara", townSize: 14, latitude: 38.89, duration: 482},
            {date: "2012-01-03", distance: 433, townName: "Konya", townSize: 6, latitude: 34.22, duration: 562},
            {date: "2012-01-04", distance: 345, townName: "ŞanlıUrfa", townSize: 7, latitude: 130.35, duration: 379},
            {date: "2012-01-05", distance: 480, townName: "Trabzon", townName2: "Trabzon", townSize: 10, latitude: 25.83, duration: 501},
            {date: "2012-01-06", distance: 386, townName: "Bitlis", townSize: 7, latitude: 170.46, duration: 443},
            {date: "2012-01-07", distance: 348, townName: "Mersin", townSize: 10, latitude: 129.94, duration: 405},
            {date: "2012-01-08", distance: 238, townName: "İzmir", townName2: "İzmir", townSize: 16, latitude: 29.76, duration: 309
        }]

        return <Row>
            <Col md={6}>
                <Panel title={"Three Data in ComplexBarChart"}>
                    <ComplexBarChart
                        data={data}
                        categoryField={"date"}
                        type={[
                            {type:"column",valueField:"distance"},
                            {type:"line",valueField:"latitude"},
                            {type:"line",valueField:"duration"}]}/>
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Three Column BarChart"}>
                    <ComplexBarChart
                        data={data}
                        categoryField={"date"}
                        textColor={"red"}
                        type={[
                            {type:"column",valueField:"distance",color:"gray"},
                            {type:"column",valueField:"latitude",color:"blue"},
                            {type:"column",valueField:"duration",color:"#aabbcc"}]}/>
                </Panel>
            </Col>
        </Row>
    }
}