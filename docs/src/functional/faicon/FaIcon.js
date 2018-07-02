"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var FaIcon = /** @class */ (function (_super) {
    __extends(FaIcon, _super);
    function FaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaIcon.prototype.render = function () {
        var classNameProps = this.props.className === undefined ? "" : this.props.className;
        var className = "fa " + (this.props.fixed ? "fa-fw" : "") + " " + this.props.code + " " + this.props.size + " " + classNameProps;
        var _a = this.props, fixed = _a.fixed, code = _a.code, size = _a.size, props = __rest(_a, ["fixed", "code", "size"]);
        return React.createElement("i", __assign({}, props, { className: className, "aria-hidden": "true" }));
    };
    FaIcon.defaultProps = {
        size: "fa-sm",
        fixed: true
    };
    return FaIcon;
}(React.Component));
exports.default = FaIcon;
//# sourceMappingURL=FaIcon.js.map