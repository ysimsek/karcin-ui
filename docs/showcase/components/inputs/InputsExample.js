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
var karcin_ui_1 = require("karcin-ui");
var InputExample = /** @class */ (function (_super) {
    __extends(InputExample, _super);
    function InputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            var state = {};
            state[e.target.name] = e.target.value;
            _this.setState(state);
        };
        _this.handleChangeCheck = function (e) {
            var state = {};
            state[e.target.name] = e.target.value;
            _this.setState(state);
        };
        _this.state = {
            valueText: "",
            checkInputs: [{
                    lineText: 'deniz',
                    checked: true,
                    name: 'denem1',
                    onChange: _this.handleChange
                }, {
                    lineText: 'deniz2',
                    checked: false,
                    name: 'denem12',
                    onChange: _this.handleChange
                }],
            radioInputs: [{
                    lineText: 'deniz',
                    checked: true,
                    name: 'denem1',
                    onChange: _this.handleChange
                }, {
                    lineText: 'deniz2',
                    checked: false,
                    name: 'denem1',
                    onChange: _this.handleChange
                }]
        };
        return _this;
    }
    InputExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Input, { type: "text", icon: "fa-check", id: "deneme", IconColor: 'primary', name: "valueText", label: "Example Text Input", value: this.state.valueText, placeholder: "Example Text Input", onChange: this.handleChange }),
            React.createElement(karcin_ui_1.Input, { type: "textarea", name: "valueTextarea", label: "Example Textarea", value: this.state.valueTextarea, placeholder: "Example Textarea", onChange: this.handleChange }),
            React.createElement(karcin_ui_1.Input, { type: "number", name: "valueNumber", label: "Example Number Input", value: this.state.valueNumber, placeholder: "Example Number Input", onChange: this.handleChange }),
            React.createElement(karcin_ui_1.Input, { type: "password", name: "valuePassword", label: "Example Password Input", value: this.state.valuePassword, placeholder: "Example Password Input", onChange: this.handleChange }),
            React.createElement(karcin_ui_1.Input, { type: "checkbox", name: "checkInputs", checkItems: this.state.checkInputs, label: "Example Checkboxs", onChange: this.handleChangeCheck }),
            React.createElement(karcin_ui_1.Input, { type: "checkbox", name: "checkInput", lineText: "Example Single", label: "Example Checkbox", value: this.state.checkInput, onChange: this.handleChangeCheck }),
            React.createElement(karcin_ui_1.Input, { type: "radio", name: "radioInputs", checkItems: this.state.radioInputs, label: "Example Radios", placeholder: "Example Radio", onChange: this.handleChangeCheck }),
            React.createElement(karcin_ui_1.Input, { type: "radio", name: "radioInput", lineText: "Example Single", label: "Example Radio", value: this.state.radioInput, onChange: this.handleChangeCheck }));
    };
    return InputExample;
}(React.Component));
exports.default = InputExample;
//# sourceMappingURL=InputsExample.js.map