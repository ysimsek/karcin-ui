import * as React from "react";
import {Label,Pagination} from "karcin-ui";

export default class PaginationExample extends React.Component<any,any> {

    data = [
        {id:100, name:"Button", link:"#/Components/Pagination"},
        {id:101, name:"Badge", link:"#/Components/Pagination"},
        {id:102, name:"Label", link:"#/Components/Pagination"},
        {id:103, name:"Menu", link:"#/Components/Pagination"},
        {id:104, name:"Font Awesome Icon", link:"#/Components/Pagination"},
        {id:105, name:"Tabs", link:"#/Components/Pagination"},
        {id:106, name:"Notify", link:"#/Components/Pagination"},
        {id:107, name:"Panel", link:"#/Components/Pagination"},
        {id:108, name:"DataFilter", link:"#/Components/Pagination"},
        {id:109, name:"List", link:"#/Components/Pagination"},
        {id:110, name:"ToolTip", link:"#/Components/Pagination"},
        {id:111, name:"PopOver", link:"#/Components/Pagination"},
        {id:112, name:"Pagination", link:"#/Components/Pagination"},
    ]

    constructor(props:any){
        super(props);
        this.state = {
            selectedPage : 1,
            selectedPage2 : 1,
            selectedPage3 : 1,
            selectedPage4 : 1
        }
    }

    render(){
        return <div>
                    <Label>Selected Page: {this.state.selectedPage}</Label>
                    <Pagination data={this.data} hrefValue={"link"} selectedValue={this.getClick.bind(this)}/>

                    <br/>

                    <Label>sm Size ,Selected Page: {this.state.selectedPage2}</Label>
                    <Pagination data={this.data} hrefValue={"link"} size={"sm"} pageCount={4} selectedValue={this.getClick2.bind(this)}/>

                    <br/>

                    <Label>lg Size , Selected Page: {this.state.selectedPage3}</Label>
                    <Pagination data={this.data} hrefValue={"link"} size={"lg"} pageCount={13} selectedValue={this.getClick3.bind(this)}/>



                </div>
    }

    getClick(e){
        this.setState({selectedPage:e.page})
    }

    getClick2(e){
        this.setState({selectedPage2:e.page})
    }

    getClick3(e) {
        this.setState({selectedPage3: e.page})
    }


}