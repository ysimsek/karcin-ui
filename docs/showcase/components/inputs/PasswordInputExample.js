"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var karcin_ui_1 = require("karcin-ui");
var PasswordInputExample = /** @class */ (function (_super) {
    __extends(PasswordInputExample, _super);
    function PasswordInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            passwordInput: ""
        };
        return _this;
    }
    PasswordInputExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.PasswordInput, { name: "passwordInput", label: "PasswordInput Example", value: this.state.passwordInput, onChange: this.handleChange.bind(this) }),
            React.createElement("span", null,
                React.createElement("i", null, this.state.passwordInput)));
    };
    PasswordInputExample.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return PasswordInputExample;
}(React.Component));
exports.default = PasswordInputExample;
//# sourceMappingURL=PasswordInputExample.js.map