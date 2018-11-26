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
var BaseInput_1 = require("./base/BaseInput");
var reactstrap_1 = require("reactstrap");
var NumericInput = /** @class */ (function (_super) {
    __extends(NumericInput, _super);
    /**
     * Initial value
     * @param props
     */
    function NumericInput(props) {
        return _super.call(this, props) || this;
    }
    /**
     * @returns {any}
     */
    NumericInput.prototype.render = function () {
        var newProps = __rest(this.props, []);
        var validColor = this.props.valid != undefined ? (this.props.valid != false ? (this.isValid() == false ? " is-invalid" : "") : "") : "";
        //todo: label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        //selectinput için yapıldı
        var label = this.props.label != null ? React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label) : "";
        return React.createElement("div", { className: "karcin-input" },
            label,
            React.createElement(BaseInput_1.default, __assign({}, newProps, { className: validColor, onChange: this.__onChange.bind(this) })));
    };
    NumericInput.prototype.isValid = function () {
        //Kontrol true ise boş değil , false ise boş veya null
        var control = true;
        if (this.props.value == "" || this.props.value == null) {
            control = false;
        }
        return control;
    };
    /**
     * number control
     * @param e
     * @returns {boolean}
     * @private
     */
    NumericInput.prototype.__onChange = function (e) {
        var result = true;
        var value = e.target.value;
        this.props.onChange(e);
        // //boşluk karakteri ve diğerlerine bak
        // if (value && isNaN(value)) {
        //     result = false;
        // } else if (this.props.onChange) {
        //     let parsedVal = parseInt(value, 10);
        //     e.target.parsedValue = isNaN(parsedVal) ? undefined : parsedVal;
        //     result = e.target.parsedValue != undefined ? this.props.onChange(e) : false;
        // }
        // if (!result) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        // return result;
    };
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; type: string}}
     */
    NumericInput.defaultProps = {
        disabled: false,
        readOnly: false,
        hidden: false,
        type: "number"
    };
    return NumericInput;
}(React.Component));
exports.default = NumericInput;
//# sourceMappingURL=NumericInput.js.map