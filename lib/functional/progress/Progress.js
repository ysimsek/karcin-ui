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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var component = [];
        /**
         * Multi ise içerisine child alacak demektir o yüzden ayırıyoruz
         */
        if (this.props.multi) {
            component = React.createElement(reactstrap_1.Progress, __assign({ key: "pm" + Math.floor(Math.random() * 10000) }, this.props), this.props.children);
        }
        else {
            component =
                React.createElement(reactstrap_1.Progress, { key: "p" + Math.floor(Math.random() * 10000), striped: this.props.striped ? true : false, animated: this.props.animated ? true : false, bar: this.props.bar ? true : false, max: this.props.max, color: this.props.color, value: this.props.value }, this.props.children);
        }
        return this.props.title ? React.createElement("div", null, this.reRender(component)) : component;
    };
    Progress.prototype.reRender = function (data) {
        var arr = [];
        arr.push(React.createElement("div", { key: "pt" + Math.floor((Math.random() * 1000000)), className: "text-center" }, this.props.title));
        arr.push(data);
        return arr;
    };
    return Progress;
}(React.Component));
exports.default = Progress;
//# sourceMappingURL=Progress.js.map