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
var ButtonExample = /** @class */ (function (_super) {
    __extends(ButtonExample, _super);
    function ButtonExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(karcin_ui_1.Tab, null,
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab1" }, "Tab 1 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab2" }, "Tab 2 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab3" }, "Tab 3 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab4" }, "Tab 4 Example"))),
            React.createElement("div", { style: { marginTop: 20 } },
                React.createElement(karcin_ui_1.Tab, { vertical: true, align: "left" },
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab1" }, "Tab 1 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab2" }, "Tab 2 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab3" }, "Tab 3 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab4" }, "Tab 4 Example"))),
            React.createElement("div", { style: { marginTop: 20 } },
                React.createElement(karcin_ui_1.Tab, { vertical: true, align: "right" },
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab1" }, "Tab 1 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab2" }, "Tab 2 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab3" }, "Tab 3 Example"),
                    React.createElement(karcin_ui_1.TabPanel, { title: "Tab4" }, "Tab 4 Example")))));
    };
    return ButtonExample;
}(React.Component));
exports.default = ButtonExample;
//# sourceMappingURL=TabsExample.js.map