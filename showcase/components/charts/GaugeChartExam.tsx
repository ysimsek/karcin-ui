import * as React from "react";
import {GaugeChart,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";

export default class GaugeChartExam extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            kmh:0
        }
    }

    render(){

        return <Row>
            <Col md={6}>
                <GaugeChart type={"black"} value={this.state.kmh}/>
            </Col>
            <Col md={6}>
                <GaugeChart value={this.state.kmh} percent={true} endValue={100} height={500}/>
            </Col>
        </Row>
    }

    getKmh(){
        let a = setInterval(()=>{
            if(this.state.kmh == 220){
                this.getDecreasedKmh()
                clearTimeout(a)
            }else {
                this.setState({kmh: this.state.kmh + 10})
            }
        },200);
    }

    getDecreasedKmh(){
        let a = setInterval(()=>{
            if(this.state.kmh == 0){
                this.getKmh()
                clearTimeout(a)
            }else {
                this.setState({kmh: this.state.kmh - 10})
            }
        },200);
    }

    componentDidMount(){
        this.getKmh()
        // this.getKmExam()
    }

    getKmExam(){
        var ws = new WebSocket("ws://10.230.1.48:9292");
        let me:any = this;
        ws.onopen = function() {

            // Web Socket is connected, send data using send()
            console.log("Message is sent...");
            setInterval(()=>{
                    ws.send("data")

                }
                ,2000)
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            me.setState({kmh : evt.data.split("|")[0]})
        };

    }
}

