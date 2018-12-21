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
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    /**
     * Initial values
     * @param props
     */
    function Label(props) {
        return _super.call(this, props) || this;
    }
    /**
     * @returns {any}
     */
    Label.prototype.render = function () {
        // remove props className, size, color 
        var _a = this.props, style = _a.style, className = _a.className, size = _a.size, color = _a.color, labelObject = __rest(_a, ["style", "className", "size", "color"]);
        var styles = {};
        if (this.props.style) {
            styles = this.props.style;
        }
        if (this.props.color) {
            styles['color'] = this.props.color;
        }
        if (this.props.size) {
            styles['font-size'] = this.props.size;
        }
        return React.createElement("label", __assign({ className: 'karcin-label' + (this.props.className ? this.props.className : '') }, labelObject, { style: styles }),
            this.props.children,
            " ",
            (this.props.requireText) ? React.createElement("span", { className: "require-text" }, this.props.requireText) : '');
    };
    return Label;
}(React.Component));
exports.default = Label;
//# sourceMappingURL=Label.js.map