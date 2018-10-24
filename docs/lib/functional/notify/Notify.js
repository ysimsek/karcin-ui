"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_toastify_1 = require("react-toastify");
var glamor_1 = require("glamor");
var ReactDOM = require("react-dom");
var Notify = /** @class */ (function (_super) {
    __extends(Notify, _super);
    function Notify(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    /**
     * @returns {any}
     */
    Notify.prototype.render = function () {
        return this.__returnAlerts();
    };
    /**
     * defaul toastcontainer
     * @returns {any}
     * @private
     */
    Notify.prototype.__returnAlerts = function () {
        return React.createElement(react_toastify_1.ToastContainer, { autoClose: 8000 });
    };
    /**
     * Data extraction
     * message: string or React,html element
     * position : chart.position.enums
     * time : number
     * @param {Object} data
     */
    Notify.renderScreenData = function (data) {
        Notify.message = data["message"] != undefined ? data["message"] : Notify.message;
        Notify.position = data["position"] != undefined ? data["position"] : Notify.position;
        Notify.time = data["time"] != undefined ? data["time"] : Notify.time;
    };
    /**
     * Set the reactdom render
     * @returns {any}
     */
    Notify.configuration = function () {
        ReactDOM.render(React.createElement(react_toastify_1.ToastContainer, { autoClose: 5000, hideProgressBar: false, newestOnTop: true }), this.containerNode);
    };
    Notify.defaultProps = {
        position: "top-center",
        time: 5,
        message: "Notify Message"
    };
    /**
     * Default message
     * @type {string}
     */
    Notify.message = "Notify Message";
    /**
     * Default time 5 second
     * @type {number}
     */
    Notify.time = 5;
    /**
     * Default position top-right
     * @type {string}
     */
    Notify.position = "top-right";
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
    Notify.success = function (data) {
        Notify.renderScreenData(data);
        var autoClose = Notify.time == false ? false : Notify.time * 1000;
        // let position =
        react_toastify_1.toast.success(Notify.message, {
            position: Notify.position,
            autoClose: autoClose
        });
    };
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
    Notify.error = function (data) {
        Notify.renderScreenData(data);
        react_toastify_1.toast.error(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000
        });
    };
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
    Notify.warning = function (data) {
        Notify.renderScreenData(data);
        react_toastify_1.toast.warn(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000
        });
    };
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
    Notify.info = function (data) {
        Notify.renderScreenData(data);
        react_toastify_1.toast.info(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000
        });
    };
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
    Notify.customNotify = function (data) {
        Notify.renderScreenData(data);
        react_toastify_1.toast(Notify.message, {
            position: Notify.position,
            autoClose: Notify.time * 1000,
            className: glamor_1.css({
                background: data["background"],
                transform: "rotateY(360deg)",
                transition: "transform 0.6s"
            })
        });
    };
    /**
     * All alert position
     * top-right, top-center, top-left and bottom-right, bottom-center, bottom-left
     * @param {Object} data
     * @returns {any}
     */
    Notify.notify = function (data) {
        Notify.renderScreenData(data);
        react_toastify_1.toast("Default Notification!");
        react_toastify_1.toast.success(Notify.message, {
            position: react_toastify_1.toast.POSITION.TOP_CENTER,
            autoClose: Notify.time * 1000
        });
        react_toastify_1.toast.error(Notify.message, {
            position: react_toastify_1.toast.POSITION.TOP_LEFT,
            autoClose: Notify.time * 1000
        });
        react_toastify_1.toast.warn(Notify.message, {
            position: react_toastify_1.toast.POSITION.BOTTOM_LEFT,
            autoClose: Notify.time * 1000
        });
        react_toastify_1.toast.info(Notify.message, {
            position: react_toastify_1.toast.POSITION.BOTTOM_CENTER,
            autoClose: Notify.time * 1000
        });
        react_toastify_1.toast(Notify.message, {
            position: react_toastify_1.toast.POSITION.BOTTOM_RIGHT,
            autoClose: Notify.time * 1000,
            className: glamor_1.css({
                background: "black"
            })
        });
    };
    return Notify;
}(React.Component));
var element = document.createElement("div");
var xCount = Math.floor((Math.random() * 10000) + 1);
element.setAttribute("id", xCount);
document.body.appendChild(element);
Notify.containerNode = document.getElementById(xCount);
Notify.configuration();
exports.default = Notify;
//# sourceMappingURL=Notify.js.map