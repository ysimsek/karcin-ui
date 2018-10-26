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
var BaseInput_1 = require("./base/BaseInput");
var ColorInput = /** @class */ (function (_super) {
    __extends(ColorInput, _super);
    function ColorInput(props) {
        var _this = _super.call(this, props) || this;
        _this.errorState = "form-control";
        _this.color = false;
        return _this;
    }
    ColorInput.prototype.render = function () {
        var validColor = this.props.valid != undefined ? (this.props.valid != false ? (this.isValid() == false ? "red" : "") : "") : "";
        //label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        var label = this.props.label != undefined ? React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label) : null;
        return React.createElement("div", { className: "karcin-input" },
            label,
            React.createElement(BaseInput_1.default, __assign({}, this.props, { onChange: this.___onChange.bind(this), style: { borderColor: validColor } })));
    };
    ColorInput.prototype.isValid = function () {
        //Kontrol true ise boş değil , false ise boş veya null
        var control = true;
        if (this.props.value == "" || this.props.value == null) {
            control = false;
        }
        return control;
    };
    ColorInput.prototype.___onChange = function (e) {
        var value = e.target.value;
        var state = {};
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.props.onChange(e);
    };
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    ColorInput.defaultProps = {
        disabled: false,
        readOnly: false,
        hidden: false,
        type: "color",
        value: "#ffffff"
    };
    return ColorInput;
}(React.Component));
exports.default = ColorInput;
//# sourceMappingURL=ColorInput.js.map