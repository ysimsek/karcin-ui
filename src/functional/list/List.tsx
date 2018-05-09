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
    tagValue ?: string;
    /**
     * Default value false
     */
    action ?: boolean;
    /**
     * primary, success, danger, secondary, warning, info
     */
    color ?: string;
    /**
     * Show the field
     */
    value ?: string;
    /**
     * Show the badge field true or false
     * badgeValue is required
     */
    badge ?: boolean;
    /**
     * Show the badgeValue
     */
    badgeValue ?: string;
    /**
     * Active is true or false
     * activeValue and activeId is required
     */
    active ?: boolean;
    /**
     * Show the active field
     */
    activeValue ?: string;
    /**
     * Set the activeId
     */
    activeId ?: number;
}

export default class List extends React.Component<ListProps,any>{
    /**
     * Initial values
     * @param props
     */
    constructor(props:any){
        super(props);
        this.state = {

        }
    }

    /**
     * @returns {any}
     */
    render():any{
        return <ListGroup>{this.childsReturn(this.props.data)}</ListGroup>
    }

    /**
     * Childs elements in list
     * @param {Array<any>} list
     * @returns {JSX.Element[]}
     */
    childsReturn(list:Array<any>):JSX.Element[]{
        let childs:Array<any> = [];
        let me:any = this;
        list.forEach(function (child:any,idx:number) {
            childs.push(<ListGroupItem
                            active={me.props.active == true && (child[me.props.activeValue] == me.props.activeId) ? true : false}
                            color={me.props.color}
                            tag={me.props.tag}
                            href={child[me.props.tagValue]}
                            action={me.props.action}
                        >

                            {child[me.props.value]+' '} {me.props.badge == true ? <Badge pill>{child[me.props.badgeValue]}</Badge> : ""}

                        </ListGroupItem>)
        });
        return childs;
    }
}