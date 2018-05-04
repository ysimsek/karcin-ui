import * as React from "react";
import {ScatterChart,Panel} from "karcin-ui";
import {Row,Col,Label} from "reactstrap";


const data1= [
    {"y": 10, "x": 14, "value": 59},
    {"y": 10, "x": 22, "value": 59},
    {"y": -10, "x": 8, "value": 19,},
    {"y": -17, "x": 2, "value": 11,}
];
const data2=[
    {"y2": -5, "x2": -3, "value2": 44},
    {"y2": -5, "x2": -3, "value2": 44},
    {"y2": -4, "x2": 6, "value2": 35},
    {"y2": -5, "x2": -6, "value2": 168}
];
const newData1 = [{name:"firstData", data:data1, xCoor:"x",yCoor:"y",value:"value", graph:"diamond", color:"#00cc11" },
                 {name:"secondData", data:data2, xCoor:"x2", yCoor:"y2", value:"value2", graph : "bubble", color:"blue"}]

const newData2 = [{name:"firstData", data:data1, xCoor:"x",yCoor:"y",value:"value", graph:"xError", color:"#00cc11" },
                 {name:"secondData", data:data2, xCoor:"x2", yCoor:"y2", value:"value2", graph : "yError", color:"blue"}]

const newData3 = [{name:"firstData", data:data1, xCoor:"x",yCoor:"y",value:"value", graph:"circle", color:"#00cc11" },
                 {name:"secondData", data:data2, xCoor:"x2", yCoor:"y2", value:"value2", graph : "yError", color:"blue"}]

const newData4 = [{name:"firstData", data:data1, xCoor:"x",yCoor:"y",value:"value", graph:"bubble", color:"#00cc11" },
                 {name:"secondData", data:data2, xCoor:"x2", yCoor:"y2", value:"value2", graph : "triangleUp", color:"blue"}]


export default class ScatterChartExam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        return <Row>
                    <Col md={6}>
                        <Panel title="Diamond and Bubble Chart Example1">
                            <ScatterChart data={newData1}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title="Diamond and Bubble Chart Example2">
                            <ScatterChart data={newData1} theme={"black"} textColor={"blue"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title="Xerror and Yerror Chart Example1">
                            <ScatterChart data={newData2} theme={"black"} textColor={"red"} line={true}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title="Xerror and Yerror Chart Example2">
                            <ScatterChart data={newData2} textColor={"#aa1177"} line={true}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title="Circle and Yerror Chart Example1">
                            <ScatterChart data={newData3} textColor={"black"}/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel title="Bubble and TriangleUp Chart Example1">
                            <ScatterChart data={newData4} textColor={"black"}/>
                        </Panel>
                    </Col>
        </Row>
    }
}
