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
var json = require("./../models/Examples.json");
var TabsExample = /** @class */ (function (_super) {
    __extends(TabsExample, _super);
    function TabsExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            model: json.fields.tabs
        };
        return _this;
    }
    TabsExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "example-reagent first" }, "Normal Tab"),
            React.createElement(karcin_ui_1.Tab, null,
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[0].name }, this.state.model[0].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[1].name }, this.state.model[1].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[2].name }, this.state.model[2].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[3].name }, this.state.model[3].text)),
            React.createElement("span", { className: "example-reagent" }, "Align Left Tab"),
            React.createElement(karcin_ui_1.Tab, { vertical: true, align: "left" },
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[0].name }, this.state.model[0].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[1].name }, this.state.model[1].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[2].name }, this.state.model[2].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[3].name }, this.state.model[3].text)),
            React.createElement("span", { className: "example-reagent" }, "Align Right Tab"),
            React.createElement(karcin_ui_1.Tab, { vertical: true, align: "right" },
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[0].name }, this.state.model[0].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[1].name }, this.state.model[1].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[2].name }, this.state.model[2].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[3].name }, this.state.model[3].text)),
            React.createElement("span", { className: "example-reagent" }, "Custom Tab"),
            React.createElement(karcin_ui_1.Tab, null,
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[0].name }, this.state.model[0].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[1].name }, this.state.model[1].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[2].name }, this.state.model[2].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[3].name }, this.state.model[3].text),
                React.createElement(karcin_ui_1.TabPanel, { title: "Çıkış", action: { title: "close", icon: "fa fa-times", renderer: this.renderer.bind(this) } }, "\u00C7\u0131k\u0131\u015F Yap\u0131n\u0131z")),
            React.createElement("span", { className: "example-reagent" }, "Color Tab"),
            React.createElement(karcin_ui_1.Tab, { color: "primary" },
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[0].name }, this.state.model[0].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[1].name }, this.state.model[1].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[2].name }, this.state.model[2].text),
                React.createElement(karcin_ui_1.TabPanel, { title: this.state.model[3].name }, this.state.model[3].text))));
    };
    TabsExample.prototype.renderer = function (e) {
        // debugger
    };
    return TabsExample;
}(React.Component));
exports.default = TabsExample;
//# sourceMappingURL=TabsExample.js.map