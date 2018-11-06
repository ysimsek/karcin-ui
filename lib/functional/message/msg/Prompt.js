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
var index_1 = require("./../../../index");
var ReactDOM = require("react-dom");
var Prompt = /** @class */ (function (_super) {
    __extends(Prompt, _super);
    function Prompt(props) {
        var _this = _super.call(this, props) || this;
        _this.componentWillReceiveProps(props);
        return _this;
    }
    Prompt.prototype.componentWillReceiveProps = function (props) {
        this.state = {
            show: props.show,
            textInput: ""
        };
    };
    Prompt.prototype.render = function () {
        return this.getMessageElement();
    };
    Prompt.prototype.getMessageElement = function () {
        var _a = this.props, show = _a.show, willUnmount = _a.willUnmount;
        return React.createElement("div", { className: "modal fade show-box left " + (show == true ? "show" : ""), style: this.state.show == true ? { display: "block" } : { display: "none" }, id: "exampleModalCenter", tabIndex: -1, role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true" },
            React.createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-body" },
                        (this.props.icon !== undefined) ? React.createElement("span", null,
                            React.createElement(index_1.FaIcon, { color: this.props.iconColor, code: this.props.icon })) : null,
                        (this.props.title !== undefined) ? React.createElement("h3", null, this.props.title) : null,
                        React.createElement(index_1.TextInput, { ref: "text", name: "textInput", label: this.props.label, placeholder: this.props.placeholder, value: this.state.textInput, onChange: this.handleChange.bind(this) })),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement(index_1.Button, { name: "OK", onClick: this.tmm.bind(this), color: "primary" }, "Tamam"),
                        React.createElement(index_1.Button, { name: "CANCEL", outline: true, onClick: this.ipt.bind(this), color: "dark" }, "\u0130ptal")))));
    };
    Prompt.prototype.componentWillUnmount = function () {
        var mount = ReactDOM.findDOMNode(this);
        document.body.style.removeProperty('overflow');
        document.body.removeChild(mount.parentElement);
    };
    Prompt.prototype.tmm = function (e) {
        this.setState({ show: false });
        e.response = { name: e.target.name, value: true, inputValue: this.state.textInput };
        this.props.callBack != undefined ? this.props.callBack(e) : null;
        var mount = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    };
    Prompt.prototype.ipt = function (e) {
        this.setState({ show: false });
        e.response = { name: e.target.name, value: false, inputValue: this.state.textInput };
        this.props.callBack != undefined ? this.props.callBack(e) : null;
        var mount = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    };
    Prompt.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    Prompt.defaultProps = {
        iconColor: "primary"
    };
    return Prompt;
}(React.Component));
exports.default = Prompt;
//# sourceMappingURL=Prompt.js.map