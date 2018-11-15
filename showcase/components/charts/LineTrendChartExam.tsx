import * as React from "react";
import {Panel,LineChartTrend} from "karcin-ui";


export default class LineTrendChartExam extends React.Component<any,any>{
    render(){
        let data = [{
            "date": "2012-01-01",
            "value": 8
        }, {
            "date": "2012-01-02",
            "color":"#CC0000",
            "value": 10
        }, {
            "date": "2012-01-03",
            "value": 12
        }, {
            "date": "2012-01-04",
            "value": 14
        }, {
            "date": "2012-01-05",
            "value": 11
        }, {
            "date": "2012-01-06",
            "value": 6
        }, {
            "date": "2012-01-07",
            "value": 7
        }, {
            "date": "2012-01-08",
            "value": 9
        }, {
            "date": "2012-01-09",
            "value": 13
        }, {
            "date": "2012-01-10",
            "value": 15
        }, {
            "date": "2012-01-11",
            "color":"#CC0000",
            "value": 19
        }, {
            "date": "2012-01-12",
            "value": 21
        }, {
            "date": "2012-01-13",
            "value": 22
        }, {
            "date": "2012-01-14",
            "value": 20
        }, {
            "date": "2012-01-15",
            "value": 18
        }, {
            "date": "2012-01-16",
            "value": 14
        }, {
            "date": "2012-01-17",
            "color":"#CC0000",
            "value": 16
        }, {
            "date": "2012-01-18",
            "value": 18
        }, {
            "date": "2012-01-19",
            "value": 17
        }, {
            "date": "2012-01-20",
            "value": 15
        }, {
            "date": "2012-01-21",
            "value": 12
        }, {
            "date": "2012-01-22",
            "color":"#CC0000",
            "value": 10
        }, {
            "date": "2012-01-23",
            "value": 8
        }];
        return <Panel title={"Line Changes Chart"}>
                    <LineChartTrend
                        data={data}
                        categoryValue={"value"}
                        colorField={"color"}
                        categoryField={"date"}
                        report={true}
                    /></Panel>
    }
}
