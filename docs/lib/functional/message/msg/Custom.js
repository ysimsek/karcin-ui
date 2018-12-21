"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var index_1 = require("./../../../index");
var Custom = /** @class */ (function (_super) {
    __extends(Custom, _super);
    function Custom(props) {
        var _this = _super.call(this, props) || this;
        _this.componentWillReceiveProps(props);
        return _this;
    }
    Custom.prototype.componentWillReceiveProps = function (props) {
        this.state = {
            show: props.show
        };
    };
    Custom.prototype.render = function () {
        return this.getMessageElement();
    };
    Custom.prototype.getMessageElement = function () {
        return React.createElement("div", { className: "modal fade show-box " + (this.state.show == true ? "show" : ""), style: this.state.show == true ? { display: "block" } : { display: "none" }, id: "exampleModalCenter", tabIndex: -1, role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true" }, React.createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" }, React.createElement("div", { className: "modal-content" }, React.createElement("div", { className: "modal-body" }, (this.props.icon !== undefined) ? React.createElement("span", null, React.createElement(index_1.FaIcon, { color: this.props.iconColor, code: this.props.icon })) : null, (this.props.title !== undefined) ? React.createElement("h3", null, this.props.title) : null, (this.props.message !== undefined) ? React.createElement("p", null, this.props.message) : null), React.createElement("div", { className: "modal-footer" }, this.getButtonElement()))));
    };
    Custom.prototype.componentWillUnmount = function () {
        var mount = ReactDOM.findDOMNode(this);
        document.body.style.removeProperty('overflow');
        document.body.removeChild(mount.parentElement);
    };
    Custom.prototype.close = function (e) {
        this.setState({ show: false });
        var mount = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(mount.parentElement);
    };
    Custom.prototype.getButtonElement = function () {
        var _this = this;
        var btn = this.props.button;
        var cmp = [], me = this;
        btn.map(function (field, id) {
            cmp.push(React.createElement(index_1.Button, __assign({ key: id + "btn" }, field, { onClick: function (e) { _this.onClick(e, field.onClick(me)); } }), field.title));
        });
        return cmp;
    };
    Custom.prototype.onClick = function (e, f) {
        // this.setState({show:false})
    };
    Custom.defaultProps = {
        iconColor: "primary"
    };
    return Custom;
}(React.Component));
exports.default = Custom;
//# sourceMappingURL=Custom.js.map