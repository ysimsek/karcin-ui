import * as React from "react";


export default class ListItem extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    colorArr:any = {
        primary : "list_primary",
        secondary : "list_secondary",
        success : "list_success",
        info : "list_info",
        warning : "list_warning",
        danger : "list_danger",
        dark : "list_dark",
        light : "list_light"
    };
    render():any{
        let color:string = this.props.color!= undefined ? this.getColor(this.props.color) : "";
        return <div className={color}>{this.props.children}</div>
    }

    getColor(color:string):string{
        return this.colorArr[color] != undefined ?this.colorArr[color] : null;
    }
}
