import * as React from "react";
import * as Highlight from 'react-highlight';
import {Tab,TabPanel, FaIcon} from "karcin-ui";
import {Table} from "reactstrap";
import {debug} from "util";

export default class RenderComponent extends React.Component<any, any> {
    private element;
    constructor(props){
        super(props);
        this.state = {
            activeTab:0
        }
    }

    componentWillReceiveProps(){
        this.setState({activeTab:0});
    }

    render() {
        let properties = null;
        if (this.getProperties() != null){
            properties = (
                <TabPanel title="Properties">
                    {this.getProperties()}
                </TabPanel>
            );
        }
        return (<div>
            <h2>{'<'}{this.props.item.name}{' />'}</h2>
            <p className="description">{this.props.item.description}</p>
            <div style={{marginTop:20}}>
                <Tab activeTab={this.state.activeTab} className="component-props">
                    <TabPanel title="Example">
                        {this.getReactElement()}
                    </TabPanel>
                    {properties}
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

    getProperties(){
        try{
            let cmpFile = require('!raw-loader!../src/'+this.props.item.library+'.tsx') as string;
            let cmpProps = this.getInterfaceToJson(cmpFile);
            let propsArr = [];
            cmpProps.forEach((v,i)=>{
                let name = v.name.split("?");
                let nameCmp = [<span key={1}>{name[0]}</span>];
                if (name[1] != undefined){
                    nameCmp.push(<span key={2} className={"opt"}>(optional)</span>);
                }
                propsArr.push(
                    <tr key={i}>
                        <td style={{width:"25%"}} key={1}>{nameCmp}</td>
                        <td style={{width:"35%"}} key={2}>{v.value}</td>
                        <td key={3}>{v.description}</td>
                    </tr>
                );
            });
            return (
                <Table className={"prop-table"}>
                    <thead>
                    <tr>
                        <th>Properties</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {propsArr}
                    </tbody>
                </Table>
            );
        } catch (e){
            return null;
        }
    }

    getInterfaceToJson(text:string){
        let arr = [];
        text.split("export interface")[1].split("{")[1].split("}")[0].trim();
        if (text.split("export interface")[1]){
            if (text.split("export interface")[1].split("{")[1]){
                if (text.split("export interface")[1].split("{")[1].split("}")){
                    text = text.split("export interface")[1].split("{")[1].split("}")[0].trim();
                    if (text.split(";").length > 0){
                        text.split(";").forEach((v,i)=>{
                            if (v != ""){
                                if(v.split('/*')[1] != undefined ){
                                    let value = v.split('*/')[1].split(':')[1].trim();
                                    arr.push({name:v.split('*/')[1].split(':')[0].trim(),value:value,description:v.split('/**')[1].split('*/')[0].trim()});
                                }else{
                                    let value = v.replace(v.split(":")[0].trim()+":","");
                                    arr.push({name:v.split(":")[0].trim(),value:value});
                                }

                            }
                        });
                    }
                }
            }
        }
        return arr;
    }

}
