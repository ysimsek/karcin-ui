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
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.type = "textarea";
        _this.state = {};
        return _this;
    }
    TextArea.prototype.render = function () {
        return React.createElement(BaseInput_1.default, { type: this.type, name: this.props.name, label: this.props.label, tag: this.props.tag, id: this.props.id, key: this.props.id, onChange: this.onChange.bind(this) });
    };
    TextArea.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    TextArea.propTypes = {
        name: "textareainput"
    };
    return TextArea;
}(React.Component));
exports.default = TextArea;
//# sourceMappingURL=TextArea.js.map