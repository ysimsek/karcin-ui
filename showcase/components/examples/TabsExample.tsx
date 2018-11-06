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
                    <Tab>
                        <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                        <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                        <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                        <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                    </Tab>
                    <span className="example-reagent">Align Left Tab</span>
                    <Tab vertical={true} align="left">
                        <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                        <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                        <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                        <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                    </Tab>
                    <span className="example-reagent">Align Right Tab</span>
                    <Tab vertical={true} align="right">
                        <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                        <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                        <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                        <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                    </Tab>
                    <span className="example-reagent">Custom Tab</span>
                    <Tab>
                        <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                        <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                        <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                        <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                        <TabPanel title={"Çıkış"} action={{title:"close", icon:"fa fa-times", renderer:this.renderer.bind(this)}}>Çıkış Yapınız</TabPanel>
                    </Tab>
                    <span className="example-reagent">Color Tab</span>
                    <Tab color={"primary"}>
                        <TabPanel title={this.state.model[0].name}>{this.state.model[0].text}</TabPanel>
                        <TabPanel title={this.state.model[1].name}>{this.state.model[1].text}</TabPanel>
                        <TabPanel title={this.state.model[2].name}>{this.state.model[2].text}</TabPanel>
                        <TabPanel title={this.state.model[3].name}>{this.state.model[3].text}</TabPanel>
                    </Tab>
        </div>);
    }

    renderer(e:any){
        // debugger
    }
}
