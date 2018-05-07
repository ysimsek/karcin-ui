import * as React from "react";
import {Label} from "karcin-ui";

export default class LabelExample extends React.Component<any,any>{
    render(){
        return <div>
            <Label>Normal Label</Label><br/><hr/>
            <Label size={20}>20 size Label</Label><br/><hr/>
            <Label color={"red"}>Change Color Label</Label><br/><hr/>
            <Label color={"#ab00ff"}>Change Color Label</Label><br/><hr/>
            <Label color={"rgb(0,205,102)"}>Change Color Label</Label><br/><hr/>
        </div>
    }
}
