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
var PopOver = /** @class */ (function (_super) {
    __extends(PopOver, _super);
    function PopOver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopOver.prototype.render = function () {
        return React.createElement(reactstrap_1.Popover, { placement: this.props.position, isOpen: this.props.show, target: this.props.id, toggle: this.toggle.bind(this) },
            React.createElement(reactstrap_1.PopoverHeader, null, this.props.title),
            React.createElement(reactstrap_1.PopoverBody, null, this.props.children));
    };
    PopOver.prototype.toggle = function (e) {
        if (this.props.toggle) {
            this.props.toggle(e);
        }
    };
    PopOver.defaultProps = {
        position: "right",
        show: false,
        title: ""
    };
    return PopOver;
}(React.Component));
exports.default = PopOver;
//# sourceMappingURL=PopOver.js.map