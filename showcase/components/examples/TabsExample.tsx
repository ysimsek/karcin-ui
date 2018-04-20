import * as React from "react";
import {Tab, TabPanel} from 'karcin-ui';

export default class ButtonExample extends React.Component<any, any> {
    render() {
        return <Tab>
            <TabPanel title="Tab1">Tab 1 Example</TabPanel>
            <TabPanel title="Tab2">Tab 2 Example</TabPanel>
            <TabPanel title="Tab3">Tab 3 Example</TabPanel>
            <TabPanel title="Tab4">Tab 4 Example</TabPanel>
        </Tab>;
    }
}