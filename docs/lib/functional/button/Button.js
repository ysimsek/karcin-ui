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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var FaIcon_1 = require("../faicon/FaIcon");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            asyncIcon: "fa-circle-o-notch",
            async: false,
            icon: props.icon
        };
        return _this;
    }
    /**
     * @returns {any}
     */
    Button.prototype.render = function () {
        var _a = this.props, iconAlign = _a.iconAlign, props = __rest(_a, ["iconAlign"]);
        var child = iconAlign == "left" ?
            React.createElement(reactstrap_1.Button, __assign({}, props, { onClick: this.onClick.bind(this) }), React.createElement(FaIcon_1.default, { className: "btn-i", spin: this.state.async, code: this.state.async ? this.state.asyncIcon : this.state.icon }), this.props.children) :
            React.createElement(reactstrap_1.Button, __assign({}, props, { onClick: this.onClick.bind(this) }), this.props.children, React.createElement(FaIcon_1.default, { spin: this.state.async, code: this.state.async ? this.state.asyncIcon : this.state.icon }));
        return child;
    };
    Button.prototype.onClick = function (e) {
        var async = this.props.async != undefined ? (this.props.async == true ? true : false) : false;
        async == true ? this.setState({ async: true }) : null;
        this.props.onClick != undefined ? (async == true ? this.props.onClick(e, this.done.bind(this)) : this.props.onClick(e)) : null;
    };
    Button.prototype.done = function () {
        this.setState({
            async: false
        });
    };
    return Button;
}(React.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map