import * as React from "react";
import {Label} from "karcin-ui";


export default class LabelExample extends React.Component<any,any>{
    render(){
        return <div>
            <Label color={"success"} text={"LabelText Size 26"} textSize={26}/><br/><hr/>
            <Label color={"info"} text={"LabelText Size 24"} textSize={24}/><br/><hr/>
            <Label color={"danger"} text={"LabelText Size 22"} textSize={22}/><br/><hr/>
            <Label color={"warning"} text={"LabelText Size 20"} textSize={20}/><br/><hr/>
            <Label color={"secondary"} text={"LabelText Size 18"} textSize={18}/><br/><hr/>
            <Label color={"primary"} text={"LabelText Size 16"} textSize={16}/><br/><hr/>
            <Label color={"dark"} text={"LabelText Size 14"} textSize={14}/><br/><hr/>
            <Label color={"light"} text={"LabelText Size 12"} textSize={12}/><br/><hr/>
            <Label color={"link"} text={"LabelText default text size 14"}/>
        </div>
    }
}