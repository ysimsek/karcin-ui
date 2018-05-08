import * as React from "react";
import {SelectInput, Panel} from "karcin-ui";


const items = [
    {
        id:1,name:"Anthony",userName:"AnthonyClair",project:"KARÇİN-Uİ", img:"https://img.wikinut.com/img/anxidmiwlv2yy1ar/jpeg/36x36/Author-profile-image.jpeg"
    },
    {
        id:2,name:"Eliza",userName:"Eliza_Horse",project:"KARÇİN-BACKEND", img: "https://d3ui957tjb5bqd.cloudfront.net/images/users/18/185/185868/avatar-50-50.jpg?1524845263"
    },
    {
        id:3,name:"Melek",userName:"MelekYıldız",project:"KARÇİN-SKELETON", img: "http://worldonline.media.clients.ellingtoncms.com/img/profiles/2010/Feb/19/lee-head-avatar-small_r48x48.jpg?5dda7ebe3a0a47b731bc018fa5259827222aab62"
    },
    {
        id:4,name:"Sevgi",userName:"Sevgi_123",project:"APACHE KARAF", img: "https://img.wikinut.com/img/anxidmiwlv2yy1ar/jpeg/36x36/Author-profile-image.jpeg"
    }

];

export default class SelectInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            selectInput : ""
        }
    }
    render(){
        return <div>
            <Panel title="Single Select" collapse={true} collapsible={true}>
                <SelectInput
                    name={"selectInput"}
                    label={"SelectInput Example"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange.bind(this)}
                />
            </Panel>
            <Panel title="Multi Select" collapse={true} collapsible={true}>
                <SelectInput
                    name={"selectInput"}
                    label={"SelectInput Example"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange.bind(this)}
                    type={"multi"}
                />
            </Panel>
            <Panel title="Multi Select Renderer" collapse={true} collapsible={true}>
                <SelectInput
                    name={"selectInput"}
                    label={"SelectInput Example"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange.bind(this)}
                    type={"multi"}
                    renderer={this.rendererDropDown}
                />
            </Panel>

            <Panel title="Multi Select Renderer & Selected Renderer" collapse={true} collapsible={true}>
                <SelectInput
                    name={"selectInput"}
                    label={"SelectInput Example"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange.bind(this)}
                    type={"multi"}
                    renderer={this.rendererDropDown}
                    selectedRenderer={this.selectRenderer}
                />
            </Panel>
            
        </div>
    }
    handleChange(e){
        
    }

    rendererDropDown(value:any){
        return <div><div className="img"><img src={value["img"]}/></div><span>{value["project"]}</span></div>;
    }

    selectRenderer(value:any){
        return <div><div className="img"><img src={value["img"]}/></div><span>{value["project"]}</span></div>;
    }
}