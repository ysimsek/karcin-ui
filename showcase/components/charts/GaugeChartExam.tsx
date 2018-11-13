import * as React from "react";
import {GaugeChart,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";

export default class GaugeChartExam extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            kmh:50
        }
    }

    render(){

        return <Row>
            <Col md={6}>
                <GaugeChart type={"black"} value={this.state.kmh} endValue={100} interval={2} color={"red"} report={true}/>
            </Col>
            <Col md={6}>
                <GaugeChart value={this.state.kmh} percent={true} endValue={100} height={500}/>
            </Col>
        </Row>
    }

    getKmh(){
        let a = setInterval(()=>{
            if(this.state.kmh == 100){
                this.getDecreasedKmh()
                clearTimeout(a)
            }else {
                // this.setState({kmh: this.state.kmh + 1})
            }
        },200);
    }

    getDecreasedKmh(){
        let a = setInterval(()=>{
            if(this.state.kmh == 0){
                this.getKmh()
                clearTimeout(a)
            }else {
                this.setState({kmh: this.state.kmh - 1})
            }
        },200);
    }

    componentDidMount(){
        this.getKmh()
    }
}

