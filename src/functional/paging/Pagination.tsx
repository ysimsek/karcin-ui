import * as React from "react";
import { Pagination as Page, PaginationItem, PaginationLink } from 'reactstrap';

export interface PaginationProps{
    data : Array<any>;
    hrefValue ?: string;
    selectedValue ?: void;
}

export default class Pagination extends React.Component<any,any>{

    id :any;

    constructor(props:any){
        super(props);
        this.state = {
            selectedId : this.id
        }
    }

    render():any{
        return <Page onClick={this.handleChange.bind(this)}>
                    {this.renderPageFunctions(this.props.data)}    
               </Page>
    }

    renderPageFunctions(data:Array<any>):JSX.Element[]{
        let component:JSX.Element[] = [];
        let me:any = this;
        let i = 0;
        component.push(<PaginationItem key={i}>
            <PaginationLink previous href="#" />
        </PaginationItem>)
        data.forEach(function (val : any, idx: number) {
            i++;
            component.push(<PaginationItem key={i++}>
                <PaginationLink href={val[me.props.hrefValue]}>
                    {idx+1}
                </PaginationLink>
            </PaginationItem>)
        })

        component.push(<PaginationItem key={i++}>
            <PaginationLink next href="#"/>
        </PaginationItem>)

        return component;
    }

    handleChange(e:any){
        if(this.props.selectedValue != undefined){
            this.props.selectedValue({page : e.target.text, href : e.target.href});
        }
    }
}