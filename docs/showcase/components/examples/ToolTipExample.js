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
var ToolTipExample = /** @class */ (function (_super) {
    __extends(ToolTipExample, _super);
    function ToolTipExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            direction: { left: false, right: false, top: false, bottom: false, links: false, button: false }
        };
        return _this;
    }
    //state değişiklşiği
    ToolTipExample.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement(reactstrap_1.Row, { className: "basic-row" },
                React.createElement("span", { className: "example-reagent" }, "Text Tooltip"),
                React.createElement(reactstrap_1.Col, { sm: 3 },
                    React.createElement("p", { id: "left" }, "Left Tooltip"),
                    React.createElement(karcin_ui_1.ToolTip, { position: "left", id: "left", show: this.state.direction.left, toggle: function () {
                            _this.toggle('left');
                        } }, "Hello First Tip")),
                React.createElement(reactstrap_1.Col, { sm: 3 },
                    React.createElement("p", { id: "right" }, "Right Tooltip"),
                    React.createElement(karcin_ui_1.ToolTip, { position: "right", id: "right", show: this.state.direction.right, toggle: function () {
                            _this.toggle('right');
                        } }, "Hello First Tip")),
                React.createElement(reactstrap_1.Col, { sm: 3 },
                    React.createElement("p", { id: "top" }, "Top Tooltip"),
                    React.createElement(karcin_ui_1.ToolTip, { position: "top", id: "top", show: this.state.direction.top, toggle: function () {
                            _this.toggle('top');
                        } }, "Hello First Tip")),
                React.createElement(reactstrap_1.Col, { sm: 3 },
                    React.createElement("p", { id: "bottom" }, "Bottom Tooltip"),
                    React.createElement(karcin_ui_1.ToolTip, { position: "bottom", id: "bottom", show: this.state.direction.bottom, toggle: function () {
                            _this.toggle('bottom');
                        } }, "Hello First Tip")),
                React.createElement("span", { className: "example-reagent" }, "Link Tooltip"),
                React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement("p", null,
                        "Link ",
                        React.createElement("a", { href: "#", id: "links" }, "Tooltip")),
                    React.createElement(karcin_ui_1.ToolTip, { position: "right", id: "links", show: this.state.direction.links, toggle: function () {
                            _this.toggle('links');
                        } }, "Hello First Tip")),
                React.createElement("span", { className: "example-reagent" }, "Button Tooltip"),
                React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement(karcin_ui_1.Button, { color: "primary", id: "buttons" }, "Buton"),
                    React.createElement(karcin_ui_1.ToolTip, { position: "right", id: "buttons", show: this.state.direction.buttons, toggle: function () {
                            _this.toggle('buttons');
                        } }, "Hello First Tip"))));
    };
    ToolTipExample.prototype.toggle = function (direction) {
        this.state.direction[direction] = !this.state.direction[direction];
        this.forceUpdate();
    };
    return ToolTipExample;
}(React.Component));
exports.default = ToolTipExample;
//# sourceMappingURL=ToolTipExample.js.map