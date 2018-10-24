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
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.colorArr = {
            primary: "list_primary",
            secondary: "list_secondary",
            success: "list_success",
            info: "list_info",
            warning: "list_warning",
            danger: "list_danger",
            dark: "list_dark",
            light: "list_light"
        };
        return _this;
    }
    ListItem.prototype.render = function () {
        var color = this.props.color != undefined ? this.getColor(this.props.color) : "";
        return React.createElement("div", { className: color }, this.props.children);
    };
    ListItem.prototype.getColor = function (color) {
        return this.colorArr[color] != undefined ? this.colorArr[color] : null;
    };
    return ListItem;
}(React.Component));
exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map