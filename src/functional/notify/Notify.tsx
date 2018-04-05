import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import {css} from "glamor";
import * as ReactDOM from "react-dom";
import Enums from "../../../lib/inputs/enums/Enums";
import {type} from "os";


/**
 *
 */
export interface INotify{
    position ?: string;
    time ?: number;
    onClick ?: React.MouseEventHandler<any>;
    title ?: string;
    message ?: string;
}

class Notify extends React.Component<any,any>{

    static defaultProps:Partial<INotify>={
        position : "top-center",
        time : 5 ,
        message : "Notify Message"
    }
    static message:string | JSX.Element = "Notify Message";
    static time:any | boolean = 5 ;
    static position:any | string = "top-center";

    constructor(props:any){
        super(props);
        this.state = {}
    }

    render(){
        return this.__returnAlerts();
    }

    __returnAlerts(){
        return <ToastContainer autoClose={8000}/>

    }

    /**
     * Data extraction
     * message: string or React,html element
     * position : chart.position.enums
     * time : number
     * @param {Object} data
     */
    static renderScreenData(data:any){
        Notify.message = data["message"] != undefined ? data["message"] :Notify.message;
        Notify.position = data["position"] != undefined ? data["position"] : Notify.position;
        Notify.time = data["time"] != undefined ? data["time"] : Notify.time;
    }

    /**
     *
     * @param {string} message
     * * * * Set the show message
     * @param {number} time
     * * * * Set the time second
     * @param {string} position
     * * * * top-left ,top-right,top-center
     * * * * bottom-left,bottom-right,bottom-center
     * @returns {any}
     */
    static success = (data:any ) =>{
        Notify.renderScreenData(data);
        let autoClose = Notify.time == false ? false : Notify.time*1000;
        // let position =
        toast.success(Notify.message, {
            position: Notify.position,
            autoClose: autoClose
        });
    }

    /**
     *
     * @param {string} message
     * * * * Set the show message
     * @param {number} time
     * * * * Set the time second
     * @param {string} position
     * * * * top-left ,top-right,top-center
     * * * * bottom-left,bottom-right,bottom-center
     * @returns {any}
     */
    static error = (data:Object):any =>{
        Notify.renderScreenData(data);
        toast.error(Notify.message, {
            position : Notify.position,
            autoClose: Notify.time * 1000
        });
    }

    /**
     *
     * @param {string} message
     * * * * Set the show message
     * @param {number} time
     * * * * Set the time second
     * @param {string} position
     * * * * top-left ,top-right,top-center
     * * * * bottom-left,bottom-right,bottom-center
     * @returns {any}
     */
    static warning = (data:object):any =>{
        Notify.renderScreenData(data);
        toast.warn(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000
        });
    }

    /**
     *
     * @param {string} message
     * * * * Set the show message
     * @param {number} time
     * * * * Set the time second
     * @param {string} position
     * * * * top-left ,top-right,top-center
     * * * * bottom-left,bottom-right,bottom-center
     * @returns {any}
     */
    static info = (data:object):any =>{
        Notify.renderScreenData(data);
        toast.info(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000
        });
    }

    /**
     *
     * @param {string} message
     * * * * Set the show message
     * @param {number} time
     * * * * Set the time second
     * @param {string} position
     * * * * top-left ,top-right,top-center
     * * * * bottom-left,bottom-right,bottom-center
     * @param (object) css properties
     * @returns {any}
     */
    static customNotify= (data:any):any =>{
        Notify.renderScreenData(data);
        toast(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000,
            className: css({
                background: data["background"],
                transform: "rotateY(360deg)",
                transition: "transform 0.6s"
            })
        });
    }
    /**
     * Todo :
     */
    static notify = (data:Object) => {
        Notify.renderScreenData(data);
        toast("Default Notification !");
        toast.success(Notify.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose : Notify.time * 1000
        });
        toast.error(Notify.message, {
            position: toast.POSITION.TOP_LEFT,
            autoClose : Notify.time * 1000
        });
        toast.warn(Notify.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose : Notify.time * 1000
        });
        toast.info(Notify.message, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose : Notify.time * 1000
        });
        toast(Notify.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose : Notify.time * 1000,
            className: css({
                background: "black"
            })
        });
    };


    static containerNode:any;
    static componentId:any;
    static configuration(){
        ReactDOM.render(<ToastContainer
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
        />, this.containerNode);
    }

}

let element = document.createElement("div");
let xCount = Math.floor((Math.random() * 10000) + 1) as any;
element.setAttribute("id", xCount);
document.body.appendChild(element);
Notify.containerNode = document.getElementById(xCount);
Notify.configuration();
export default Notify;