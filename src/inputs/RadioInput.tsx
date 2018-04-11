import * as React from "react";
import "./input.css"

export default class RadioInput extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    render(){
        return <form><div onClick={this.onChange.bind(this)} className={"form-control"}>{this.returnRadioElements(this)}</div></form>
    }

    private returnRadioElements(e:any):any{
        let value= [
            {id:1,value:"XxxX"},
            {id:2,value:"XyyX"},
            {id:3,value:"XzzX"},
            {id:4,value:"XaaX"},
            ];
        let component:Array<any> = [];
        value.forEach(function (v) {
            component.push(<div><input
                className={"radio"}
                type="radio"
                key={v.id}
                name="base"
                value={v.value} /><label>{v.value}</label></div>);
        });

        return component;
    }

    onChange(e:any){
        this.props.onChange(e);
    }
}