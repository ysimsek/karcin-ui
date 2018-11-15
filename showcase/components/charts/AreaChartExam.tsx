import * as React from "react";
import {AreaChart,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";


export default class AreaChartExam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        let data =[ {
            "date": "2012-12-22",
            "value": 59,
            "lineColor": "blue"
        }, {
            "date": "2012-12-23",
            "value": 58
        }, {
            "date": "2012-12-24",
            "value": 55
        }, {
            "date": "2012-12-25",
            "value": 52
        }, {
            "date": "2012-12-26",
            "value": 54
        }, {
            "date": "2012-12-27",
            "value": 50
        }, {
            "date": "2012-12-28",
            "value": 50,
            "lineColor": "#FF9E01"
        }, {
            "date": "2012-12-29",
            "value": 51
        }, {
            "date": "2012-12-30",
            "value": 52
        }, {
            "date": "2012-12-31",
            "value": 58
        }, {
            "date": "2013-01-01",
            "value": 60
        }, {
            "date": "2013-01-02",
            "value": 67
        }, {
            "date": "2013-01-03",
            "value": 64
        }, {
            "date": "2013-01-04",
            "value": 66
        }, {
            "date": "2013-01-05",
            "value": 60
        }, {
            "date": "2013-01-06",
            "value": 63
        }, {
            "date": "2013-01-07",
            "value": 61
        }, {
            "date": "2013-01-08",
            "value": 60,
            "lineColor": "yellow"
        }, {
            "date": "2013-01-09",
            "value": 65
        }, {
            "date": "2013-01-10",
            "value": 75
        }, {
            "date": "2013-01-11",
            "value": 77
        } ];
        return <Row>
            <Col md={6}>
                <Panel title={"Simple AreaChart(none theme)"}>
                    <AreaChart
                        data={data}
                        categoryValue={"value"}
                        categoryField={"date"}
                        formatting={"date"}
                        report={true}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Simple AreaChart(light theme)"}>
                    <AreaChart
                        theme={"light"}
                        data={data}
                        textColor={"#aabbcc"}
                        categoryValue={"value"}
                        categoryField={"date"}
                        formatting={"date"}
                        report={true}
                        menu={[
                            {
                                label:"İndir",
                                type:"download",//draw
                                child:[
                                    {type:"svg"},
                                    {label:"CSV İndir",type:"csv"},
                                    {label:"Jpg İndir",type:"jpg",callBack:(res)=>{console.log(res)}},
                                    {label:"Xlsx İndir",type:"xlsx",callBack:(res)=>{console.log(res)}},
                                    {label:"Verileri Göster",callBack:(res)=>{console.log(res)}},
                                ]
                            }
                        ]}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Simple AreaChart(dark theme)"}>
                    <AreaChart
                        theme={"dark"}
                        data={data}
                        textColor={"red"}
                        categoryValue={"value"}
                        categoryField={"date"}
                        formatting={"date"}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Simple AreaChart Changes values"}>
                    <AreaChart
                        data={data}
                        categoryValue={"value"}
                        categoryField={"date"}
                        cutOffColor={"lineColor"}
                        formatting={"date"}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"Horizantal Area Chart"}>
                    <AreaChart
                        data={data}
                        inline={true}
                        categoryValue={"value"}
                        categoryField={"date"}
                        cutOffColor={"lineColor"}
                        formatting={"date"}
                    />
                </Panel>
            </Col>
        </Row>
    }
}
