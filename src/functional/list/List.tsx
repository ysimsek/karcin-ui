import * as React from "react";
import { ListGroup, ListGroupItem ,Badge} from 'reactstrap';

export interface ListProps extends React.HTMLAttributes<HTMLElement>{
    /**
     * Set the array data
     */
    data :Array<any>;
    /**
     * a or button tag
     */
    tag ?: string;
    /**
     * orientation url path
     */
    href ?: string;
    /**
     * Default value false
     */
    action ?: boolean;
    /**
     * primary, success, danger, secondary, warning, info
     */
    color ?: string;
    value ?: string;
    badge ?: string;
}

export default class List extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {

        }
    }
    render(){
        return <ListGroup>{this.childsReturn(this.props.data)}</ListGroup>
    }

    childsReturn(list:Array<any>):JSX.Element[]{
        let childs:Array<any> = [];
        let me:any = this;
        list.forEach(function (child:any,idx:number) {
            childs.push(<ListGroupItem color={me.props.color} tag={me.props.tag} href={me.props.href} action={me.props.action}>
                            {child[me.props.value] + (me.props.badge != undefined ? <Badge pill>{me.props.badge}</Badge> : "")}
                            </ListGroupItem>)
        });
        return childs;
    }
}