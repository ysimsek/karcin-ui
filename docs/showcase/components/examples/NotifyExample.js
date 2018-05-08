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
var karcin_ui_1 = require("karcin-ui");
var items = [
    { id: 1, value: "Bottom Right", position: "bottom-right" },
    { id: 2, value: "Bottom Left", position: "bottom-left" },
    { id: 3, value: "Bottom Center", position: "bottom-center" },
    { id: 4, value: "Top Right", position: "top-right" },
    { id: 5, value: "Top Left", position: "top-left" },
    { id: 6, value: "Top Center", position: "top-center" }
];
var NotifyExample = /** @class */ (function (_super) {
    __extends(NotifyExample, _super);
    function NotifyExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            position: "",
            message: "Default message",
            second: null
        };
        return _this;
    }
    NotifyExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: 4 },
                    React.createElement(karcin_ui_1.SelectInput, { name: "position", label: "Notify pozisyonunun seçiniz", item: this.state.position, value: "value", id: "position", items: items, onChange: this.onChange.bind(this) })),
                React.createElement(reactstrap_1.Col, { md: 4 },
                    React.createElement(karcin_ui_1.TextInput, { name: "message", label: "Mesaj Yazınız", value: this.state.message, onChange: this.onChange.bind(this) })),
                React.createElement(reactstrap_1.Col, { md: 4 },
                    React.createElement(karcin_ui_1.NumericInput, { name: "second", value: this.state.second, label: "Notify Süresini(sn) Yazınız", onChange: this.onChange.bind(this) }))),
            React.createElement("hr", null),
            React.createElement("div", null,
                React.createElement("div", { className: "form" },
                    React.createElement(karcin_ui_1.Button, { name: "success", color: "success", outline: true, onClick: this.success.bind(this) }, "Success"),
                    ' ',
                    React.createElement(karcin_ui_1.Button, { name: "warning", color: "warning", outline: true, onClick: this.warning.bind(this) }, "Warning"),
                    ' ',
                    React.createElement(karcin_ui_1.Button, { name: "error", color: "danger", outline: true, onClick: this.error.bind(this) }, "Error"),
                    ' ',
                    React.createElement(karcin_ui_1.Button, { name: "info", color: "info", outline: true, onClick: this.info.bind(this) }, "Info"),
                    ' ',
                    React.createElement(karcin_ui_1.Button, { name: "custom", color: "secondary", outline: true, onClick: this.custom.bind(this) }, "Custom modified"),
                    ' ',
                    React.createElement(karcin_ui_1.Button, { name: "all", color: "success", outline: true, onClick: this.all.bind(this) }, "All notify"))),
            React.createElement("hr", null));
    };
    NotifyExample.prototype.success = function (e) {
        karcin_ui_1.Notify.success({ message: this.state.message, position: this.state.position, time: this.state.second });
    };
    NotifyExample.prototype.error = function (e) {
        karcin_ui_1.Notify.error({ message: this.state.message, position: this.state.position, time: this.state.second });
    };
    NotifyExample.prototype.warning = function (e) {
        karcin_ui_1.Notify.warning({ message: this.state.message, position: this.state.position, time: this.state.second });
    };
    NotifyExample.prototype.info = function (e) {
        karcin_ui_1.Notify.info({ message: this.state.message, position: this.state.position, time: this.state.second });
    };
    NotifyExample.prototype.custom = function (e) {
        karcin_ui_1.Notify.customNotify({ message: this.state.message, position: this.state.position, time: this.state.second });
    };
    NotifyExample.prototype.all = function (e) {
        karcin_ui_1.Notify.notify({ message: this.state.message, position: this.state.position, time: this.state.second });
    };
    NotifyExample.prototype.onChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return NotifyExample;
}(React.Component));
exports.default = NotifyExample;
//# sourceMappingURL=NotifyExample.js.map