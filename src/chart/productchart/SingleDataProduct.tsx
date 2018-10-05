import * as React from "react";
import {Collapse,Col,Row,Label,Button} from "reactstrap";
import Panel from "../../functional/panel/Panel";
import FaIcon from "../../functional/faicon/FaIcon";
import SelectInput from "../../inputs/selectInput/SelectInput";
import RadioInput from "../../inputs/RadioInput";
import PieChart from "../piechart/PieChart";
import LineChart from "../linechart/LineChart";
import AreaChart from "../areachart/SimpleAreaChart"
import BarChart from "../barchart/BarChart";
import MapChart from  "../mapchart/MapChart";
import TextInput from "../../inputs/TextInput";
import ColorInput from "../../inputs/ColorInput";
import CheckInput from "../../inputs/CheckInput";
import NumericInput from "../../inputs/NumericInput";
import PyramidChart from "../extrachart/PyramidChart";


const items:any = require("./model/SelectChartModel.json").model;
const itemProps:any = require("./model/ChartPropsModel.json");

const pyramidRepresentItems:any = [
    {
        id:1,name:"area",value:"area"
    },
    {
        id:1,name:"height",value:"height"
    },

]

export interface SingleChartProps{
    data ?: Array<any>;
    theme ?: string;
    type ?: string;
    categoryField ?: string;
    categoryValue ?: string;
    height?: number;
    textColor ?: string;
}


export default class SingleDataProduct extends React.Component<SingleChartProps>{
    state : any ;
    i :any =  0;
    j :any = 1000;
    pieModel :any = {
        name : "pie"+this.i
    }


    static defaultProps = {

    };

    constructor(props:any){
        super(props);
        this.state = {
            selectinput : "",
            chartNumber : 0,
            isOpenChart: false,
            number : "0",
            data : [0],
            chart : [],
            pienumericInput : 0,
            cutOffColorState : true,
            barColorState :{}
        }
    }

    render():any{
        return <div>
            <SelectInput
                name={"selectinput"}
                items={items}
                label={"Chart Seçiniz"}
                id={"id"}
                value={"value"}
                onChange={this.handleChange2.bind(this)}
                activeItem={this.state.chartNumber}
            />
            <Collapse isOpen={this.state.isOpenChart}>
                {this.returnChartProperties()}
                {this.renderChartProperties()}
                <Button children={"Chart Üret"} onClick={this.addNewChart.bind(this)}/>
                <Row>{this.state.chart}</Row>
            </Collapse>
        </div>
    }

    //Chart özelliklerini return eder
    returnChartProperties(){
        let name:string = "";
        let me:any = this;
        items.forEach(function (val:any, idx:number) {
            if(me.state.chartNumber == val.id){
                name = val.name;
            }
        });
        return <Panel color={"info"}>
            {this.seperationOfChart(name)}
        </Panel>
    }

    seperationOfChart(name:string){
        let chart:JSX.Element[] = [];
        if(name == "piechart"){
            chart = this.seperationOfPieChart(chart,name);
        }else if(name == "linechart"){
            chart = this.seperationOfLineChart(chart,name);
        }else if(name == "areachart"){
            chart = this.seperationOfAreaChart(chart,name);
        }else if(name == "barchart"){
            chart = this.seperationOfBarChart(chart,name);
        }else if(name == "pyramidchart"){
            chart = this.seperationOfPyramidChart(chart,name);
        }

        return <Row className={"deepth"}>
            {chart}
        </Row>
    }
    /////////////////1 PIECHART PROPERTY
    seperationOfPieChart(chart:JSX.Element[],name:string){
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].deepth}
            label={"Derinlik olsun mu?"}
            name={"piedeepth"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>)
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].threeD}
            label={"3 Boyut "}
            name={"piethreeD"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>)
        chart.push(<Col md={4}><NumericInput
            ref={"numeric"}
            name={"pienumericInput"}
            value={this.state.pienumericInput}
            label={"İç Boşluk"}
            onChange={this.handleChange.bind(this)}
        /></Col>)
        return chart;
    }
    /////////////////2 LINECHART PROPERTY
    seperationOfLineChart(chart:JSX.Element[],name:string){
        chart.push(<Col md={3}><CheckInput
            item={itemProps[name].formatting}
            label={"Formatting "}
            name={"lineformatting"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>)
        chart.push(<Col md={3}>
            <ColorInput
                ref = "color"
                name={"colorInput"}
                label={"Text Color"}
                value={this.state.colorInput}
                onChange={this.handleChange.bind(this)}
            /></Col>)
        chart.push(<Col md={3}>
            <ColorInput
                ref = "color"
                name={"ncolorInput"}
                label={"Negative Color"}
                value={this.state.ncolorInput}
                onChange={this.handleChange.bind(this)}
            /></Col>)
        chart.push(<Col md={3}>
            <ColorInput
                ref = "color"
                name={"pcolorInput"}
                label={"Positive Color"}
                value={this.state.pcolorInput}
                onChange={this.handleChange.bind(this)}
            /></Col>)
        return chart;
    }
    /////////////////3 AREACHART PROPERTY
    seperationOfAreaChart(chart:JSX.Element[],name:string){
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].formatting}
            label={"Formatting "}
            name={"areaformatting"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>)
        chart.push(<Col md={4}><ColorInput
            ref = "color"
            name={"areacolor"}
            label={"Text Color"}
            value={this.state.areacolor}
            onChange={this.handleChange.bind(this)}/></Col>)
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].inline}
            label={"Inline "}
            name={"areainline"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>)
        return chart;
    }
    /////////////////4 BARCHART PROPERTY
    seperationOfBarChart(chart:JSX.Element[],name:string){
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].inline}
            label={"Inline "}
            name={"barinline"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>);
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].valueLine}
            label={"Value Line "}
            name={"barvalueline"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>);
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].threeD}
            label={"3 Boyut "}
            name={"barthreeD"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>);
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].ovalColumn}
            label={"Oval Column "}
            name={"barovalcolumn"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>);
        chart.push(<Col md={4}><ColorInput
            ref = "barcolor"
            name={"barcolor"}
            label={"Text Color"}
            value={this.state.barcolor}
            onChange={this.handleChange.bind(this)}/></Col>)
        return chart;
    }

    seperationOfPyramidChart(chart:JSX.Element[],name:string){
        chart.push(<Col md={4}><TextInput
            ref={"pyramidtextinput"}
            name={"pyramidUnit"}
            value={this.state.pyramidUnit}
            label={"Birimi"}
            onChange={this.handleChange.bind(this)}
        /></Col>)
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].rotate}
            label={"Rota "}
            name={"pyramidrotate"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>);
        chart.push(<Col md={4}><CheckInput
            item={itemProps[name].threeD}
            label={"3 Boyut "}
            name={"pyramidthreeD"}
            id={"id"}
            value={"name"}
            onChange={this.handleChange.bind(this)}/></Col>);
        chart.push(<Col md={4}><ColorInput
            ref = "pyramidcolor"
            name={"pyramidcolor"}
            label={"Text Color"}
            value={this.state.pyramidcolor}
            onChange={this.handleChange.bind(this)}/></Col>)
        chart.push(<Col md={4}>
            <SelectInput
                name={"pyramidRepresentType"}
                items={pyramidRepresentItems}
                label={"Type Seçiniz"}
                id={"id"}
                value={"value"}
                onChange={this.handleChange.bind(this)}
            />
        </Col>)
        return chart;
    }

    renderChartProperties(){
        return <div>
            <FaIcon code={"fa-plus-square"} size={"fa-2x"} onClick={this.addNewData.bind(this)}/>
            <FaIcon code={"fa-database"} size={"fa-2x"} onClick={this.returnJSONElement.bind(this)}/>
            {this.renderTextInputElement()}
        </div>
    }

    addNewData(e:any){
        let arr:Array<any> = this.state.data;
        this.i = this.i +1;
        this.j = this.j +1;
        arr.push(this.i);
        this.setState({data : arr});
    }

    addNewChart(){
        let chart:JSX.Element[] = this.state.chart;
        //todo : ilk önce inputlar doldurulmuş mu o kontrol edilecek
        if(this.state.chartNumber == 1){
            chart.push(<Col md={6} xs={12} lg={4}><PieChart
                data={this.returnJSONElement()}
                categoryField={"name"}
                categoryValue={"value"}
                height={300}
                deepth={this.state.piedeepth != undefined  ? (this.state.piedeepth.length > 0 ? true : false) : false}
                threeD={this.state.piethreeD != undefined ? (this.state.piethreeD.length >0 ?  true : false) : false}
                innerSize={this.state.pienumericInput}
            /></Col>);

        }else if(this.state.chartNumber == 2){
            chart.push(<Col md={6} xs={12} lg={4}><LineChart
                data={this.returnJSONElement()}
                theme={"none"}
                categoryField={"name"}
                categoryValue={"value"}
                formatting={this.state.lineformatting != undefined ? "date" : undefined}
                textColor={this.state.colorInput != undefined ? this.state.colorInput : undefined}
                negativeColor={this.state.ncolorInput != undefined ? this.state.ncolorInput : undefined}
                positiveColor={this.state.pcolorInput != undefined ? this.state.pcolorInput : undefined}
            /></Col>)
        }else if(this.state.chartNumber == 3){
            chart.push(<Col md={6} xs={12} lg={4}><AreaChart
                data={this.returnJSONElement()}
                theme={"none"}
                categoryField={"name"}
                categoryValue={"value"}
                formatting={this.state.areaformatting != undefined ? "date" : undefined}
                textColor={this.state.areacolor != undefined ? this.state.areacolor : undefined}
                inline={this.state.areainline != undefined ? (this.state.areainline.length >0 ?  true : false) : false}
                cutOffColor={"cutOffColor"}
            /></Col>)
        }else if(this.state.chartNumber == 4){
            chart.push(<Col md={6} xs={12} lg={4}><BarChart
                data={this.returnJSONElement()}
                theme={"none"}
                categoryField={"name"}
                categoryValue={"value"}
                inline={this.state.barinline != undefined ? (this.state.barinline.length > 0 ? true : false) : false}
                valueLine={this.state.barvalueline != undefined ? (this.state.barvalueline.length > 0 ? true : false) : false}
                threeD={this.state.barthreeD != undefined ? (this.state.barthreeD.length > 0 ? true : false) : false}
                ovalColumn={this.state.barovalcolumn != undefined ? (this.state.barovalcolumn.length > 0 ? true : false) : false}
                textColor={this.state.barcolor!= undefined ? (this.state.barcolor) : null}
                colorField ={"colorField"}
            /></Col>)
        }else if(this.state.chartNumber == 5){
            chart.push(<Col md={6} xs={12} lg={4}><PyramidChart
                data={this.returnJSONElement()}
                categoryField={"value"}
                categoryTitle={"name"}
                rotate={this.state.pyramidrotate != undefined ?(this.state.pyramidrotate.length > 0 ? true : false) : false }
                unit={this.state.pyramidUnit != undefined ? this.state.pyramidUnit : "br"}
                threeD={this.state.pyramidthreeD != undefined ? (this.state.pyramidthreeD.length > 0 ? true: false) : false}
                textColor={this.state.pyramidcolor!= undefined ? (this.state.pyramidcolor) : null}
                representType={this.state.pyramidRepresentType != undefined ? this.state.pyramidRepresentType.name : null}
            /></Col>)
        }

        ///////////////Input lar için state deki değerler silinecek
        let state:any = {};
        this.state.data.map(function (val:any,i:number) {
            state[i] = "";
            state[1000+i] = "";
            state[2000+i] = "";
            state[3000+i] = "";
        })
        //////////////End Input values
        this.setState(state);
        this.setState({chart : chart, data : [0]})
    }

    renderTextInputElement(){
        let arr:JSX.Element[] = [], me:any = this;
        this.state.data.forEach(function (val:any,idx:number) {
            arr.push( <Col md={4}><Panel title={(idx+1) +". Element"}>
                <Row>
                    {me.renderNewInputElement(val,idx)}
                </Row>
            </Panel>
            </Col>)
        })
        return <Row>{arr}</Row>;
    }

    renderNewInputElement(val:any, idx:number){
        let arr:JSX.Element[] = [];
        if(this.state.chartNumber == 3){ //areachart
            arr.push(<Col md={4}>
                <TextInput
                    key={idx}
                    name={idx.toString()}
                    label={"Category Field"}
                    value={this.state[idx]}
                    onChange={this.handleChangeText.bind(this)}
                /></Col>)
            arr.push(<Col md={4}>
                <TextInput
                    key={idx+1000}
                    name={(idx+1000).toString()}
                    label={"Category Value"}
                    value={this.state[1000+idx]}
                    onChange={this.handleChangeText.bind(this)}
                /></Col>)
            arr.push(<Col md={4} className="area-color">
                <ColorInput
                    key={idx+10000}
                    name={(idx+2000).toString()}
                    label={"Cut Off Color"}
                    value={this.state[2000+idx]}
                    validations={{disabled:this.state.cutOffColorState[idx+2000] == undefined ? true : false}}
                    onChange={this.handleChangeText.bind(this)}
                />
                <Button children={"+"} name={(2000+idx).toString()} outline onClick={this.cutOfStateChange.bind(this)} />
            </Col>);
        } else if(this.state.chartNumber == 4) { //barchart
            arr.push(<Col md={4}>
                <TextInput
                    key={idx}
                    name={idx.toString()}
                    label={"Category Field"}
                    value={this.state[idx]}
                    onChange={this.handleChangeText.bind(this)}
                /></Col>)
            arr.push(<Col md={4}>
                <TextInput
                    key={idx+1000}
                    name={(idx+1000).toString()}
                    label={"Category Value"}
                    value={this.state[1000+idx]}
                    onChange={this.handleChangeText.bind(this)}
                /></Col>)
            arr.push(<Col md={4} className="area-color">
                <ColorInput
                    key={idx+10000}
                    name={(idx+3000).toString()}
                    label={"Cut Off Color"}
                    value={this.state[3000+idx]}
                    validations={{disabled:this.state.barColorState[idx+3000] == undefined ? true : false}}
                    onChange={this.handleChangeText.bind(this)}
                />
                <Button children={"+"} name={(3000+idx).toString()} outline onClick={this.colorColumnBarChartChange.bind(this)} />
            </Col>);
        }  else{
            arr.push(<Col md={6}>
                <TextInput
                    key={idx}
                    name={idx.toString()}
                    label={"Category Field"}
                    value={this.state[idx]}
                    onChange={this.handleChangeText.bind(this)}
                /></Col>)
            arr.push(<Col md={6}>
                <TextInput
                    key={idx+10000}
                    name={(idx+1000).toString()}
                    label={"Category Value"}
                    value={this.state[1000+idx]}
                    onChange={this.handleChangeText.bind(this)}
                /></Col>)
        }

        return arr;
    }

    cutOfStateChange(e:any){
        let state:any = {};
        state.cutOffColorState  = {};
        state.cutOffColorState[e.target.name] = false;
        this.setState(state);
    }

    colorColumnBarChartChange(e:any){
        let state:any = {};
        state.barColorState = {};
        state.barColorState[e.target.name] = false;
        this.setState(state);
    }


    returnJSONElement(){
        let jsonData:any = [];
        let me: any = this;
        this.state.data.map(function (val:any,i:number) {
            if(me.state.cutOffColorState[2000+i] != undefined){
                jsonData.push({name : me.state[i], value:me.state[1000+i], cutOffColor : me.state[2000+i]})
            }else if(me.state.barColorState[3000+i] != undefined){
                jsonData.push({name : me.state[i], value:me.state[1000+i], colorField : me.state[3000+i]})
            }else {
                jsonData.push({name: me.state[i], value: me.state[1000 + i]})
            }
        })
        console.log(jsonData);
        return jsonData;
    }

    handleChangeText(e:any){
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
    //SelectInput
    handleChange2(e:any){
        this.setState({chartNumber: e.target.value, isOpenChart : true});
    }

    handleChange(e:any){
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    }
}