import * as React from "react";
import {Panel,LineChartTrend} from "karcin-ui";


export default class LineTrendChartExam extends React.Component<any,any>{
    render(){
        return <Panel title={"Line Changes Chart"}><LineChartTrend/></Panel>
    }
}