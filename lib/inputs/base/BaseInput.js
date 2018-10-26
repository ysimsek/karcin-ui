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
var BaseInput = /** @class */ (function (_super) {
    __extends(BaseInput, _super);
    function BaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseInput.prototype.render = function () {
        return React.createElement("input", __assign({ className: "form-control" }, this.props, { onChange: this.onChange.bind(this), value: this.props.value || '' }));
    };
    BaseInput.prototype.isValid = function () {
        //Kontrol true ise boş değil , false ise boş veya null
        var control = true;
        if (this.props.value == "" || this.props.value == null) {
            control = false;
        }
        return control;
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