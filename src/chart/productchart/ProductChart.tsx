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
import SingleDataProduct from "./SingleDataProduct";


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


export interface CommonChartProps{
    data ?: Array<any>;
    theme ?: string;
    type ?: string;
    categoryField ?: string;
    categoryValue ?: string;
    height?: number;
    textColor ?: string;
    map ?: boolean;
}


export default class ProductChart extends React.Component<CommonChartProps> {

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
            let component = [];
        if(this.props.map != true){
            component.push(<SingleDataProduct/>)
        }else{

        }
        return component;
    }


    UNSAFE_componentWillMount(){

    }

}