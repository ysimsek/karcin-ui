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
var __assign = (this && this.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BaseInput = /** @class */ (function (_super) {
    __extends(BaseInput, _super);
    function BaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseInput.prototype.render = function () {
        return React.createElement("input", __assign({ onChange: this.onChange.bind(this), className: "form-control" }, this.props, { value: this.props.value || '' }));
    };
    BaseInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    BaseInput.defaultProps = {
        type: "text",
        value: ""
    };
    return BaseInput;
}(React.Component));
exports.default = BaseInput;
//# sourceMappingURL=BaseInput.js.map