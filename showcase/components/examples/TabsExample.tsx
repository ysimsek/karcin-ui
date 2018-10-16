import * as React from "react";
import {Tab, TabPanel, Button} from 'karcin-ui';
const json = require("./../models/Examples.json");

export default class TabsExample extends React.Component<any, any> {

    constructor(props:any){
        super(props);
        this.state = {
            model:json.fields.tabs
        }
    }

    render() {
        return (<div>
                <span className="example-reagent first">Normal Tab</span>
                <Tab color={"primary"}>
                    <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                    <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                    <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                    <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                </Tab>
                <span className="example-reagent">Align Left Tab</span>
                <Tab color={"warning"} vertical={true} align="left">
                    <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                    <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                    <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                    <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                </Tab>
                <span className="example-reagent">Align Right Tab</span>
                <Tab color={"success"} vertical={true} align="right">
                    <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                    <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                    <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                    <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                </Tab>
                <span className="example-reagent first">Custom Tab</span>
                <Tab color={"danger"}>
                    <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                    <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                    <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                    <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                    <TabPanel title={"Çıkış"} action={{title:"close", icon:"fa fa-times", handler:()=>{
                        alert('Çıkış Yapıldı');
                    }}}>Çıkış Yapınız</TabPanel>
                </Tab>
        </div>);
    }
}
