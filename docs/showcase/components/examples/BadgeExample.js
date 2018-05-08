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
var BadgeExample = /** @class */ (function (_super) {
    __extends(BadgeExample, _super);
    function BadgeExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Badge, { color: "success", size: 26 }, "BadgeText Size 26"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "info", size: 24 }, "BadgeText Size 24"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "danger", size: 22 }, "BadgeText Size 22"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "warning", size: 20 }, "BadgeText Size 20"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "secondary", size: 18 }, "BadgeText Size 18"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "primary", size: 16 }, "BadgeText Size 16"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "dark", size: 14 }, "BadgeText Size 14"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "light", size: 12 }, "BadgeText Size 12"),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "link" }, "BadgeText default text size 14"));
    };
    return BadgeExample;
}(React.Component));
exports.default = BadgeExample;
//# sourceMappingURL=BadgeExample.js.map