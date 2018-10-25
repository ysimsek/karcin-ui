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
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    /**
     * Initial props
     * @param props
     */
    function Badge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    /**
     * @returns {any}
     */
    Badge.prototype.render = function () {
        return React.createElement(reactstrap_1.Badge, __assign({}, this.props), this.props.children);
    };
    /**
     * Initial props value
     * @type {{color: string; size: number}}
     */
    Badge.defaultProps = {
        color: "light",
        size: 14
    };
    return Badge;
}(React.Component));
exports.default = Badge;
//# sourceMappingURL=Badge.js.map