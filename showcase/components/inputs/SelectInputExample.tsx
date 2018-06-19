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
            selectInput : ""
        }
    }
    render(){
        return <div>
                <span className="example-reagent first">Single Select</span>
                <SelectInput
                    name={"selectInput"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange.bind(this)}
                />
                <span className="example-reagent">Multi Select</span>
                <SelectInput
                    name={"selectInput"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={(e)=>{this.handleChange(e)}}
                    type={"multi"}
                />
                <span className="example-reagent">Multi Select Renderer</span>
                <SelectInput
                    name={"selectInput"}
                    items={items}
                    id={"id"}
                    value={"project"}
                    onChange={this.handleChange2.bind(this)}
                    type={"multi"}
                    renderer={this.rendererDropDown}
                />
                <span className="example-reagent">Multi Select SelectRenderer</span>
                <SelectInput
                    name={"selectInput"}
                    items={items}
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
        let news = e.target.object.slice();
        news.map(function(val:any){
            return val.project = 'deniz';
        });

        console.log(news);
    }

    handleChange2(){
        console.log(arguments);
    }

    rendererDropDown(value:any){
        return <div><div className="img"><img src={value["img"]}/></div><span>{value["project"]}</span></div>;
    }

    selectRenderer(value:any){
        return <div><div className="img"><img src={value["img"]}/></div><span>{value["project"]}</span></div>;
    }
}