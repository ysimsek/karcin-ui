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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("font-awesome/css/font-awesome.min.css");
require("@fortawesome/fontawesome-free/css/fontawesome.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Icons = require("@fortawesome/free-solid-svg-icons");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var FaIcon = /** @class */ (function (_super) {
    __extends(FaIcon, _super);
    function FaIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        return _this;
    }
    /**
     * @returns {any}
     */
    FaIcon.prototype.render = function () {
        var classNameProps = this.props.className === undefined ? "" : this.props.className;
        var className = "fa " + (this.props.fixed ? "fa-fw" : "") + " " + this.props.code + " " + this.props.size + " " + classNameProps + " " + (this.props.spin == true ? " fa-spin" : "");
        var color = this.props.color != undefined ? this.getColor(this.props.color) : "";
        var _a = this.props, fixed = _a.fixed, code = _a.code, size = _a.size, props = __rest(_a, ["fixed", "code", "size"]);
        var iconS = Icons;
        return this.props.code != undefined ? (this.props.code.split("-").length >= 2 ?
            React.createElement("i", __assign({}, (props.spin != undefined ? delete props.spin : props), { id: this.props.id, className: className + " " + color, "aria-hidden": "true", onClick: this.onClick.bind(this) }))
            : React.createElement("span", { onClick: this.onClick.bind(this) },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, __assign({ className: color }, props, { size: this.getSizeProp(this.props.size), spin: this.props.spin, icon: iconS[this.props.code] })))) : null;
    };
    FaIcon.prototype.getColor = function (color) {
        return this.colorArr[color] != undefined ? this.colorArr[color] : "";
    };
    FaIcon.prototype.getSizeProp = function (size) {
        var dimension = size.substr(3);
        ;
        return dimension;
    };
    FaIcon.prototype.onClick = function (e) {
        e.name = this.props.code;
        this.props.onClick != undefined ? this.props.onClick(e) : null;
    };
    /**
     * Initial props value
     * @type {{size: string; fixed: boolean}}
     */
    FaIcon.defaultProps = {
        size: "fa-sm",
        fixed: true,
        spin: false
    };
    return FaIcon;
}(React.Component));
exports.default = FaIcon;
//# sourceMappingURL=FaIcon.js.map