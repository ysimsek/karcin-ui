import * as React from "react";
import {LineChart2,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";

const data = [{
    "year": 1930,
    "italy": 4,
    "germany": 5,
    "uk": 1,
    "turkey":10
}, {
    "year": 1934,
    "italy": 4,
    "germany": 1,
    "uk": 6,
    "turkey":3
}, {
    "year": 1938,
    "italy": 2,
    "germany": 3,
    "uk": 1,
    "turkey":4
}, {
    "year": 1950,
    "italy": 3,
    "germany": 4,
    "uk": 1,
    "turkey":10
}, {
    "year": 1954,
    "italy": 5,
    "germany": 1,
    "uk": 2,
    "turkey":6
}, {
    "year": 1958,
    "italy": 3,
    "germany": 2,
    "uk": 1,
    "turkey":10
}, {
    "year": 1962,
    "italy": 1,
    "germany": 2,
    "uk": 3,
    "turkey":8
}, {
    "year": 1966,
    "italy": 2,
    "germany": 1,
    "uk": 5,
    "turkey":1
}, {
    "year": 1970,
    "italy": 3,
    "germany": 5,
    "uk": 2,
    "turkey":6
}, {
    "year": 1974,
    "italy": 4,
    "germany": 3,
    "uk": 6,
    "turkey":1
}, {
    "year": 1978,
    "italy": 1,
    "germany": 2,
    "uk": 4,
    "turkey":10
}];

export default class LineChart2Exam extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            showValues : [
                {title:"turkey",value:"turkey",description:"place taken by Turkey in ",color:"red"},
                {title:"italy",value:"italy",description:"place taken by Italy in ",color:"blue"},
                {title:"germany",value:"germany",description:"place taken by Germany in ",color:"#84b761"},
                {title:"uk",value:"uk",hidden:true,description:"place taken by UK in "},
            ]
        }
    }
    render(){
        return <Row>
            <Col md={12}>
                <Panel title={"LineChart"}>
                    <LineChart2
                        data={data}
                        height={300}
                        categoryField={"year"}
                        showValues={this.state.showValues}/>
                </Panel>
            </Col>
            <Col md={12}>
                <Panel title={"LineChart"}>
                    <LineChart2
                        theme={"black"}
                        data={data}
                        height={300}
                        categoryField={"year"}
                        showValues={this.state.showValues}/>
                </Panel>
            </Col>
        </Row>
    }
}
