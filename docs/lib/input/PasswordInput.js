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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BaseInput_1 = require("./BaseInput");
var PasswordInput = /** @class */ (function (_super) {
    __extends(PasswordInput, _super);
    function PasswordInput(props) {
        var _this = _super.call(this, props) || this;
        _this.type = "password";
        _this.state = {};
        return _this;
    }
    PasswordInput.prototype.render = function () {
        return React.createElement(BaseInput_1.default, { type: this.type, name: this.props.name, label: this.props.label, tag: this.props.tag, id: this.props.id, key: this.props.id, onChange: this.onChange.bind(this) });
    };
    PasswordInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    PasswordInput.propTypes = {
        name: "passwordinput"
    };
    return PasswordInput;
}(React.Component));
exports.default = PasswordInput;
//# sourceMappingURL=PasswordInput.js.map