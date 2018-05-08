import * as React from 'react';
import {ToggleButton} from 'karcin-ui';

export default class ToggleButtonExample extends React.Component<{}, {}> {

    constructor(props:any){
        super(props);
    }

    render(){
        return (<div><ToggleButton onChange={(event:any)=> {this.handleChange(event)}}/></div>);
    }

    handleChange(event:any){

    }

}