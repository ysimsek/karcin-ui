import * as React from "react";
import {Progress as Prog} from "reactstrap";

export interface ProgressProps{
    /**
     * Default false
     */
    striped ?: boolean;
    /**
     * Default false
     */
    animated ?: boolean;
    /**
     * Default false
     */
    bar ?: boolean;
    /**
     * show the more than one progress
     */
    multi ?: boolean;
    /**
     * Primary,secondary, success, info, warning, danger
     */
    color ?: string;
    /**
     * Set the show value
     */
    value ?: string | any;
    /**
     * You can not use multi child elements
     */
    title ?: string | any;
    max ?: number | string;
}

export default class Progress extends React.Component<ProgressProps,any>{
    render(){
        let component:JSX.Element[] | any = [];
        /**
         * Multi ise içerisine child alacak demektir o yüzden ayırıyoruz
         */
        if(this.props.multi){
            component = <Prog key={"pm"+Math.floor(Math.random() * 10000)} {...this.props}>{this.props.children}</Prog>;
        }else{
            component =
                <Prog
                    key={"p"+Math.floor(Math.random() * 10000)}
                    striped={this.props.striped ? true : false}
                    animated ={this.props.animated ? true : false}
                    bar={this.props.bar ? true : false}
                    max={this.props.max}
                    color={this.props.color}
                    value={this.props.value}
                >
                    {this.props.children}
                </Prog>

        }
        return this.props.title ? <div>{this.reRender(component)}</div> :component;
    }

    reRender(data:any):JSX.Element[]{
        let arr : JSX.Element[] = [];
        arr.push( <div key={"pt"+Math.floor((Math.random() * 1000000))} className="text-center">{this.props.title}</div>)
        arr.push(data);
        return arr;
    }
}