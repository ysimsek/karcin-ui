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
var Deneme = /** @class */ (function (_super) {
    __extends(Deneme, _super);
    function Deneme(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Deneme.prototype.render = function () {
        return React.createElement(BaseInput_1.default, { type: this.props.type, name: this.props.name, label: this.props.label, tag: this.props.tag, values: this.props.values, multiple: this.props.multi, id: this.props.id, checkId: this.props.checkId, inline: this.props.inline, onChange: this.onChange.bind(this) });
    };
    Deneme.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    return Deneme;
}(React.Component));
exports.default = Deneme;
//# sourceMappingURL=Deneme.js.map