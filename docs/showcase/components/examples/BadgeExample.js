"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
            React.createElement("span", { className: "example-reagent" }, "Badge"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Matematik ",
                    React.createElement(karcin_ui_1.Badge, { color: "dark" }, "51")),
                React.createElement("li", null,
                    "T\u00FCrk\u00E7e ",
                    React.createElement(karcin_ui_1.Badge, { color: "primary" }, "78")),
                React.createElement("li", null,
                    "Edebiyat ",
                    React.createElement(karcin_ui_1.Badge, { color: "secondary" }, "88")),
                React.createElement("li", null,
                    "Tarih ",
                    React.createElement(karcin_ui_1.Badge, { color: "danger" }, "68"))),
            React.createElement("span", { className: "example-reagent" }, "Badge Size"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Dolar ",
                    React.createElement(karcin_ui_1.Badge, { color: "success", size: 14 }, "5.4730")),
                React.createElement("li", null,
                    "Euro ",
                    React.createElement(karcin_ui_1.Badge, { color: "warning", size: 14 }, "6.2672")),
                React.createElement("li", null,
                    "Yuan ",
                    React.createElement(karcin_ui_1.Badge, { color: "danger", size: 14 }, "0,80")),
                React.createElement("li", null,
                    "Tarih ",
                    React.createElement(karcin_ui_1.Badge, { color: "info", size: 14 }, "0,083"))));
    };
    return BadgeExample;
}(React.Component));
exports.default = BadgeExample;
//# sourceMappingURL=BadgeExample.js.map