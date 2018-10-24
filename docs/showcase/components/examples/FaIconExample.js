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
var reactstrap_1 = require("reactstrap");
var iconList = require("./../models/FaIconModel.json");
var FaIconExample = /** @class */ (function (_super) {
    __extends(FaIconExample, _super);
    function FaIconExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            icon: "fa-html5"
        };
        return _this;
    }
    FaIconExample.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 8, className: 'fa-icons' }, this.getFaIconList(iconList)),
            React.createElement(reactstrap_1.Col, { md: 4, className: "showing-icon" }, this.getFaIcon()));
    };
    FaIconExample.prototype.getFaIconList = function (iconList) {
        var _this = this;
        var component = [];
        iconList.fields.map(function (icon, idx) {
            component.push(React.createElement(karcin_ui_1.FaIcon, { code: icon, key: icon, onClick: _this.onClick.bind(_this) }));
        });
        component.push(React.createElement("hr", null));
        iconList.fields2.map(function (icon, idx) {
            component.push(React.createElement(karcin_ui_1.FaIcon, { id: icon, code: icon, key: icon, onClick: _this.onClick.bind(_this) }));
        });
        return component;
    };
    FaIconExample.prototype.getFaIcon = function () {
        return React.createElement("div", null,
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Badge, { color: "primary" }, "<FaIcon code='" + this.state.icon + "'/>"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon, size: "fa-2x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon, size: "fa-4x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon, size: "fa-5x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon, size: "fa-6x" }),
            ' ',
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.FaIcon, { color: "primary", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "secondary", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "success", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "info", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "warning", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "danger", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "dark", code: this.state.icon, size: "fa-3x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { code: this.state.icon, size: "fa-3x" }),
            React.createElement(karcin_ui_1.FaIcon, { code: "fas fa-accessible-icon" }),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.FaIcon, { color: "primary", code: this.state.icon, spin: true, size: "fa-6x" }),
            ' ',
            React.createElement(karcin_ui_1.FaIcon, { color: "success", code: this.state.icon, spin: true, size: "fa-6x" }),
            ' ');
    };
    FaIconExample.prototype.onClick = function (e) {
        this.setState({ icon: e.name });
    };
    return FaIconExample;
}(React.Component));
exports.default = FaIconExample;
//# sourceMappingURL=FaIconExample.js.map