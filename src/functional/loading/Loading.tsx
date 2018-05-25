import * as React from 'react';
import {__extends} from "tslib";

export interface LoadingProps {
    show?:boolean | any;
    size?:string | any;
    className?:string | any
}

export default class Loading extends React.Component<LoadingProps, any>{

    static defaultProps : Partial<LoadingProps> = {
        show: true,
        size: "full"
    };

    constructor(props:LoadingProps){
        super(props);

        this.state = {
            show: this.props.show,
            size: this.props.size
        }
    }

    UNSAFE_componentWillReceiveProps(props:LoadingProps){
        this.setState(props);
    }


    render(){
        let styleClass = this.props.className === undefined ? "" : this.props.className;
        return(
            <div className={`pre-loading ${(this.props.show ? 'show' : '')} ${(this.props.size === 'inset' ? 'inset' : '')}`}>
                <span className={`glyphicon glyphicon-refresh spinning ${styleClass}`}/>
            </div>
        );
    }
}