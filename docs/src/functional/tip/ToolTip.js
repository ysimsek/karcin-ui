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
var reactstrap_1 = require("reactstrap");
var ToolTip = /** @class */ (function (_super) {
    __extends(ToolTip, _super);
    function ToolTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolTip.prototype.render = function () {
        return React.createElement(reactstrap_1.Tooltip, { placement: this.props.position, target: this.props.id, isOpen: this.props.show, toggle: this.toggle.bind(this) }, this.props.children);
    };
    ToolTip.prototype.toggle = function (e) {
        if (this.props.toggle) {
            this.props.toggle(e);
        }
    };
    ToolTip.defaultProps = {
        show: false,
        position: "right"
    };
    return ToolTip;
}(React.Component));
exports.default = ToolTip;
//# sourceMappingURL=ToolTip.js.map