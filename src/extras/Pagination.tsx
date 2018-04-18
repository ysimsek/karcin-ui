import * as React from "react";
import {Pagination as PaginationCX, PaginationItem, PaginationLink } from "reactstrap";


export default class Pagination extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render() {
        return this.renderElements(this.props.pageSize);
    }
    renderElements(size:number):JSX.Element{
        let component:any = [];
        component.push(<PaginationItem>
            <PaginationLink previous href={this.props.href}/>
        </PaginationItem>);
        for(let i =0; i<size; i++){
            component.push(
            <PaginationItem>
                <PaginationLink href={this.props.href}>{i}</PaginationLink>
            </PaginationItem>
            );
        }
        component.push(<PaginationItem>
            <PaginationLink next href={this.props.href}/>
        </PaginationItem>);
        return <PaginationCX>{component}</PaginationCX>;
    }

}
