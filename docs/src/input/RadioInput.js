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
var BaseInput_1 = require("./BaseInput");
var RadioInput = /** @class */ (function (_super) {
    __extends(RadioInput, _super);
    function RadioInput(props) {
        var _this = _super.call(this, props) || this;
        _this.type = "radio";
        _this.state = {};
        return _this;
    }
    RadioInput.prototype.render = function () {
        return React.createElement(BaseInput_1.default, { type: this.type, name: this.props.name, label: this.props.label, tag: this.props.tag, values: this.props.values, multiple: this.props.multi, id: this.props.id, checkId: this.props.checkId, inline: this.props.inline, onChange: this.onChange.bind(this) });
    };
    RadioInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    return RadioInput;
}(React.Component));
exports.default = RadioInput;
//# sourceMappingURL=RadioInput.js.map