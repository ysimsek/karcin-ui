import * as React from "react";
import {SelectInput, Panel} from "karcin-ui";


const items = [
    {
        id:1,name:"karcin-ui",userName:"karcin-ui",project:"KARÇİN-Uİ", img:"https://img.wikinut.com/img/anxidmiwlv2yy1ar/jpeg/36x36/Author-profile-image.jpeg"
    },
    {
        id:2,name:"karcin-backend",userName:"karcin-backend",project:"KARÇİN-BACKEND", img: "https://d3ui957tjb5bqd.cloudfront.net/images/users/18/185/185868/avatar-50-50.jpg?1524845263"
    },
    {
        id:3,name:"karcin-skeleton",userName:"karcin-skeleton",project:"KARÇİN-SKELETON", img: "http://worldonline.media.clients.ellingtoncms.com/img/profiles/2010/Feb/19/lee-head-avatar-small_r48x48.jpg?5dda7ebe3a0a47b731bc018fa5259827222aab62"
    },
    {
        id:4,name:"apache-karaf",userName:"apache-karaf",project:"APACHE KARAF", img: "https://img.wikinut.com/img/anxidmiwlv2yy1ar/jpeg/36x36/Author-profile-image.jpeg"
    }

];

export default class SelectInputExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            selectInput : "",
            singleActive: 3
        }
    }
    render(){
        return <div>
                <SelectInput
                    name={"selectInput"}
                    items={items}
                    label={"Single Select"}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange2.bind(this)}
                    activeItem={this.state.singleActive}
                />
                <br/>
                <SelectInput
                    name={"selectInput2"}
                    items={items}
                    label={"Multi Select"}
                    id={"id"}
                    value={"project"}
                    onChange={(e)=>{this.handleChange(e)}}
                    type={"multi"}
                />
                <br/>
                <SelectInput
                    name={"selectInput3"}
                    items={items}
                    id={"id"}
                    label={"Multi Select Renderer"}
                    value={"project"}
                    onChange={this.handleChange2.bind(this)}
                    type={"multi"}
                    renderer={this.rendererDropDown}
                />
                <br/>
                <SelectInput
                    name={"selectInput4"}
                    items={items}
                    label={"Multi Select SelectRenderer"}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange.bind(this)}
                    type={"multi"}
                    renderer={this.rendererDropDown}
                    selectedRenderer={this.selectRenderer}
                />
            </div>;
    }
    handleChange(e){
        debugger;
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    }

    handleChange2(e:any){
        this.setState({
            singleActive: e.target.value
        })
    }

    rendererDropDown(value:any){
        return <div><div className="img"><img src={value["img"]}/></div><span>{value["project"]}</span></div>;
    }

    selectRenderer(value:any){
        return <div><div className="img"><img src={value["img"]}/></div><span>{value["project"]}</span></div>;
    }
}