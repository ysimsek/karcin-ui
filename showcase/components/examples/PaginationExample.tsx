import * as React from "react";
import Pagination from "../../../src/functional/paging/Pagination";

export default class PaginationExample extends React.Component<any,any> {

    data = [
        {id:100, name:"Button", link:"#/Components/Pagination"},
        {id:101, name:"Badge", link:"#/Components/Pagination"},
        {id:102, name:"Label", link:"#/Components/Pagination"},
        {id:103, name:"Menu", link:"#/Components/Pagination"},
    ]

    constructor(props:any){
        super(props);
        this.state = {
            selectedPage : ""
        }
    }

    render(){
        return <div>
                Selected Page: {this.state.selectedPage}<br/>
                <Pagination data={this.data} hrefValue={"link"} selectedValue={this.getClick.bind(this)}/>
        </div>
    }

    getClick(e){
        this.setState({selectedPage:e.page})
    }
}