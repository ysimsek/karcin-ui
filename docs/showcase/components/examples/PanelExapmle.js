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
var PanelExapmle = /** @class */ (function (_super) {
    __extends(PanelExapmle, _super);
    function PanelExapmle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelExapmle.prototype.render = function () {
        return (React.createElement(karcin_ui_1.Panel, { title: "Bu bir denemedir" }, "Deniz"));
    };
    return PanelExapmle;
}(React.Component));
exports.default = PanelExapmle;
//# sourceMappingURL=PanelExapmle.js.map