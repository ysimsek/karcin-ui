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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RadioInput = /** @class */ (function (_super) {
    __extends(RadioInput, _super);
    /**
     * Initial values
     * @param props
     */
    function RadioInput(props) {
        return _super.call(this, props) || this;
    }
    /**
     * @returns {any}
     */
    RadioInput.prototype.render = function () {
        return React.createElement("form", { className: "karcin-input" },
            this.props.label != undefined ? React.createElement("div", null,
                React.createElement("b", null, this.props.label)) : null,
            React.createElement("div", { onChange: this.onChange.bind(this), className: "form-control radio-properties " + this.props.className }, this.returnRadioElements(this, this.props.items)));
    };
    /**
     * @param e
     * @param {Array<any>} value
     * @returns {any}
     */
    RadioInput.prototype.returnRadioElements = function (e, value) {
        var component = [];
        var inline = false;
        var control = this.props.formControl;
        if (this.props.inline || this.props.inline == true) {
            inline = true;
        }
        var checkValue = e.props.value;
        value.forEach(function (v) {
            var isChecked = v.id == checkValue ? true : false;
            if (inline == true) {
                component.push(React.createElement("label", { key: v.id + 'lbl', style: { paddingLeft: "2px" } },
                    React.createElement("label", null,
                        React.createElement("input", { className: "radio", type: "radio", defaultChecked: isChecked, key: v.id + 'inl', name: e.props.name, value: v.id }),
                        v.value)));
            }
            else {
                component.push(React.createElement("div", { key: v.id + "hrz" },
                    React.createElement("label", null,
                        React.createElement("input", { className: "radio", type: "radio", defaultChecked: isChecked, key: v.id, name: e.props.name, value: v.id }),
                        v.value)));
            }
        }.bind(e));
        return component;
    };
    /**
     * Return props function
     * @param e
     */
    RadioInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    return RadioInput;
}(React.Component));
exports.default = RadioInput;
//# sourceMappingURL=RadioInput.js.map