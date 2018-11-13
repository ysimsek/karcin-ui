"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var index_1 = require("../../../index");
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm(props) {
        var _this = _super.call(this, props) || this;
        _this.colorArr = {
            primary: "faicon_primary",
            secondary: "faicon_secondary",
            success: "faicon_success",
            info: "faicon_info",
            warning: "faicon_warning",
            danger: "faicon_danger",
            dark: "faicon_dark",
            light: "faicon_light"
        };
        _this.componentWillReceiveProps(props);
        return _this;
    }
    Confirm.prototype.componentWillReceiveProps = function (props) {
        this.state = {
            show: props.show
        };
    };
    Confirm.prototype.render = function () {
        return this.getMessageElement();
    };
    Confirm.prototype.getMessageElement = function () {
        var color = this.props.color != undefined ? this.getColor(this.props.color) : "";
        return React.createElement("div", { className: "modal fade show-box left " + (this.state.show == true ? "show" : ""), style: this.state.show == true ? { display: "block" } : { display: "none" }, id: "exampleModalCenter", tabIndex: -1, role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true" },
            React.createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("div", { className: "alert-option " + this.props.color },
                            React.createElement(index_1.FaIcon, { code: this.props.icon })),
                        React.createElement("div", { className: "general-content" },
                            (this.props.title !== undefined) ? React.createElement("h3", null, this.props.title) : null,
                            (this.props.message !== undefined) ? React.createElement("p", null, this.props.message) : null,
                            React.createElement(index_1.Button, { onClick: this.tmm.bind(this), name: "OK", color: this.props.color, "data-dismiss": "modal" }, "Tamam"),
                            ' ',
                            React.createElement("button", { type: "button", onClick: this.ipt.bind(this), name: "CANCEL", className: "btn btn-outline-dark" }, "\u0130ptal"))))));
    };
    Confirm.prototype.getColor = function (color) {
        return this.colorArr[color] != undefined ? this.colorArr[color] : "";
    };
    Confirm.prototype.componentWillUnmount = function () {
        var mount = ReactDOM.findDOMNode(this);
        document.body.style.removeProperty('overflow');
        document.body.removeChild(mount.parentElement);
    };
    Confirm.prototype.tmm = function (e) {
        this.setState({ show: false });
        e.response = { name: e.target.name, value: true };
        this.props.callBack != undefined ? this.props.callBack(e) : null;
        var mount = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    };
    Confirm.prototype.ipt = function (e) {
        this.setState({ show: false });
        var mount = ReactDOM.findDOMNode(this);
        e.response = { name: e.target.name, value: false };
        this.props.callBack != undefined ? this.props.callBack(e) : null;
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    };
    Confirm.defaultProps = {
        iconColor: "primary",
        color: "primary",
        icon: ""
    };
    return Confirm;
}(React.Component));
exports.default = Confirm;
//# sourceMappingURL=Confirm.js.map