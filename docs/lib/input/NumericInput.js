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
var BaseInput_1 = require("./BaseInput");
/**
 * Number components
 */
var NumericInput = /** @class */ (function (_super) {
    __extends(NumericInput, _super);
    function NumericInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    /**
     * Return render views
     * @returns {any}
     */
    NumericInput.prototype.render = function () {
        //{disabled,hidden,readOnly,placeHolder}
        var properties = this.props.properties;
        return React.createElement(BaseInput_1.default, __assign({ type: NumericInput.type, name: this.props.name, label: this.props.label, tag: this.props.tag, id: this.props.id, key: this.props.id }, properties, { onChange: this.onChange.bind(this) }));
    };
    /**
     * Return the props coming onChange function
     * @param e
     */
    NumericInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    //Static type is number function
    NumericInput.type = "number";
    /**
     * initial values are set for properties
     * @type {{name: string}}
     */
    NumericInput.propTypes = {
        name: "numericinput"
    };
    return NumericInput;
}(React.Component));
exports.default = NumericInput;
//# sourceMappingURL=NumericInput.js.map