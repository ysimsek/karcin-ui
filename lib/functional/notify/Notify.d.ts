import * as React from "react";
/**
 *
 */
export interface INotify {
    /**
     * Set the data {position, message, time} or string
     */
    data?: object | string;
}
declare class Notify extends React.Component<any, any> {
    /**
     * Default message
     * @type {string}
     */
    static message: string | JSX.Element;
    /**
     * Default time 5 second
     * @type {number}
     */
    static time: any | boolean;
    /**
     * Default position top-right
     * @type {string}
     */
    static position: any | string;
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * defaul toastcontainer
     * @returns {any}
     * @private
     */
    __returnAlerts(): any;
    /**
     * Data extraction
     * message: string or React,html element
     * position : chart.position.enums
     * time : number
     * @param {Object} data
     */
    static renderScreenData(data: any): void;
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
    static success: (data: any) => any;
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
    static error: (data: Object) => any;
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
    static warning: (data: object) => any;
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
    static info: (data: object) => any;
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
    static customNotify: (data: any) => any;
    /**
     * All alert position
     * top-right, top-center, top-left and bottom-right, bottom-center, bottom-left
     * @param {Object} data
     * @returns {any}
     */
    static notify: (data: Object) => any;
    static containerNode: any;
    static componentId: any;
    /**
     * Set the reactdom render
     * @returns {any}
     */
    static configuration(): any;
}
export default Notify;
