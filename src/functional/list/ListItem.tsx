import * as React from "react";


export default class ListItem extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render():any{
        return <div>{this.props.children}</div>
    }
}