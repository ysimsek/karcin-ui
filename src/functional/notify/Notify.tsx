import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import {css} from "glamor";
import * as ReactDOM from "react-dom";


/**
 *
 */
export interface INotify{
    /**
     * Set the data {position, message, time} or string
     */
    data ?: object | string;
}

class Notify extends React.Component<any,any>{

    /**
     * Default message
     * @type {string}
     */
    static message:string | JSX.Element = "Notify Message";
    /**
     * Default time 5 second
     * @type {number}
     */
    static time:any | boolean = 5 ;
    /**
     * Default position top-right
     * @type {string}
     */
    static position:any | string = "top-right";

    constructor(props:any){
        super(props);
        this.state = {}
    }

    /**
     * @returns {any}
     */
    render():any{
        return this.__returnAlerts();
    }

    /**
     * defaul toastcontainer
     * @returns {any}
     * @private
     */
    __returnAlerts():any{
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
    static success = (data:any):any =>{
        if(typeof data == "object"){
            Notify.renderScreenData(data);
        }else if(typeof data == "string"){
            Notify.message = data;
        }
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
        if(typeof data == "object"){
            Notify.renderScreenData(data);
        }else if(typeof data == "string"){
            Notify.message = data;
        }
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
        if(typeof data == "object"){
            Notify.renderScreenData(data);
        }else if(typeof data == "string"){
            Notify.message = data;
        }
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
        if(typeof data == "object"){
            Notify.renderScreenData(data);
        }else if(typeof data == "string"){
            Notify.message = data;
        }
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
        if(typeof data == "object"){
            Notify.renderScreenData(data);
        }else if(typeof data == "string"){
            Notify.message = data;
        }
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
     * All alert position
     * top-right, top-center, top-left and bottom-right, bottom-center, bottom-left
     * @param {Object} data
     * @returns {any}
     */
    static notify = (data:Object):any => {
        if(typeof data == "object"){
            Notify.renderScreenData(data);
        }else if(typeof data == "string"){
            Notify.message = data;
        }
        toast("Default Notification!");
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

    /**
     * Set the reactdom render
     * @returns {any}
     */
    static configuration():any{
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
