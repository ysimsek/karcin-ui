import * as React from "react";
import {Tab, TabPanel, Panel} from 'karcin-ui';

export default class ButtonExample extends React.Component<any, any> {
    render() {
        return (<div>
                <span className="example-reagent first">Normal Tab</span>
                <Tab>
                    <TabPanel title="Tab1">Tab 1 Example</TabPanel>
                    <TabPanel title="Tab2">Tab 2 Example</TabPanel>
                    <TabPanel title="Tab3">Tab 3 Example</TabPanel>
                    <TabPanel title="Tab4">Tab 4 Example</TabPanel>
                </Tab>
                <span className="example-reagent">Align Left Tab</span>
                <Tab vertical={true} align="left">
                    <TabPanel title="Tab1">Tab 1 Example</TabPanel>
                    <TabPanel title="Tab2">Tab 2 Example</TabPanel>
                    <TabPanel title="Tab3">Tab 3 Example</TabPanel>
                    <TabPanel title="Tab4">Tab 4 Example</TabPanel>
                </Tab>
                <span className="example-reagent">Align Right Tab</span>
                <Tab vertical={true} align="right">
                    <TabPanel title="Tab1">Tab 1 Example</TabPanel>
                    <TabPanel title="Tab2">Tab 2 Example</TabPanel>
                    <TabPanel title="Tab3">Tab 3 Example</TabPanel>
                    <TabPanel title="Tab4">Tab 4 Example</TabPanel>
                </Tab>
        </div>);
    }
}