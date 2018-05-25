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
var FileInput = /** @class */ (function (_super) {
    __extends(FileInput, _super);
    function FileInput(props) {
        var _this = _super.call(this, props) || this;
        _this.type = "file";
        _this.state = {};
        return _this;
    }
    FileInput.prototype.render = function () {
        return React.createElement(BaseInput_1.default, { type: this.type, name: this.props.name, label: this.props.label, tag: this.props.tag, id: this.props.id, key: this.props.id, onChange: this.onChange.bind(this) });
    };
    FileInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    FileInput.propTypes = {
        name: "fileinput"
    };
    return FileInput;
}(React.Component));
exports.default = FileInput;
//# sourceMappingURL=FileInput.js.map