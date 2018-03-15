import * as React from "react";
import * as Highlight from "react-highlight";
import {Tab,TabPanel, FaIcon} from "karcin-ui";

export default class RenderComponent extends React.Component<any, any> {
    private element;
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            <h2>{'<'}{this.props.item.name}{' />'}</h2>
            <p className="description">{this.props.item.description}</p>
            <div style={{marginTop:20}}>
                <Tab>
                    <TabPanel title="Example">
                        {this.getReactElement()}
                    </TabPanel>
                    <TabPanel title="Properties">

                    </TabPanel>
                    <TabPanel className="source" title={<span><FaIcon code="fa-code"/> Source</span>}>
                        {this.getReactTxt()}
                    </TabPanel>
                </Tab>
            </div>
        </div>);
    }

    getReactElement(){
        try{
            let Elm = require("./"+this.props.item.samples);
            return <Elm.default ref={(e)=>{this.element = e;}} />
        } catch (e){
            return <span>{this.props.item.name}</span>;
        }
    }

    getReactTxt(){
        try{
            let txt = require('!raw-loader!./'+this.props.item.samples+'.tsx') as string;
            return <Highlight className='javascript'>{txt}</Highlight>
        } catch (e){
            return <span></span>
        }
    }

    componentDidMount(){
        this.setProperties();
    }

    componentDidUpdate(){
        this.setProperties();
    }

    setProperties(){
        let Library = require("karcin-ui");

    }

}