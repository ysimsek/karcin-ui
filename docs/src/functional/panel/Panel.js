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
var Button_1 = require("../button/Button");
var FaIcon_1 = require("../faicon/FaIcon");
require("../../css/sass/Panel.scss");
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.init(props);
        return _this;
    }
    Panel.prototype.componentWillReceiveProps = function (props) {
        this.init(props);
    };
    Panel.prototype.init = function (props) {
        this.state = {
            contentStyle: {},
            icon: "fa-plus",
            collapse: props.collapsible ? props.collapse : true,
            accordionClickId: null,
            accordion: props.accordion,
        };
    };
    Panel.prototype.render = function () {
        var _this = this;
        var childHtmlElement = this.props.children;
        var panelTitle = null;
        var openButton = null;
        var openedIcon = null;
        if (this.state.collapse !== undefined && this.props.collapsible) {
            openedIcon = React.createElement(FaIcon_1.default, { code: (this.state.collapse) ? "fa-angle-up" : "fa-angle-down" });
            openButton = React.createElement("div", { className: "panel-head-button" },
                React.createElement(Button_1.default, { onClick: function () { if (_this.props.onClick) {
                        _this.props.onClick();
                    }
                    else {
                        _this.openPanel();
                    } } }, openedIcon));
        }
        if (this.state.accordion) {
            panelTitle = React.createElement("div", { className: "accordion-title " + (this.state.collapse ? 'active' : '') },
                React.createElement(Button_1.default, { onClick: this.props.onClick },
                    React.createElement("span", null, this.props.title),
                    openedIcon));
        }
        else {
            panelTitle = React.createElement("div", { className: "panel-title" },
                React.createElement("span", null, this.props.title),
                openButton);
        }
        return (React.createElement("div", { className: "panel-main " + this.props.color },
            panelTitle,
            React.createElement(reactstrap_1.Collapse, { isOpen: this.state.collapse, onOpened: this.onOpened, onClosed: this.onClosed },
                React.createElement("div", { className: "panel-content" }, childHtmlElement))));
    };
    Panel.prototype.onOpened = function () {
        if (this.props.onOpened !== undefined) {
            this.props.onOpened(event);
        }
    };
    Panel.prototype.onClosed = function () {
        if (this.props.onClosed !== undefined) {
            this.props.onClosed(event);
        }
    };
    Panel.prototype.openPanel = function () {
        if (this.props.collapsible) {
            if (this.state.collapse) {
                this.setState({
                    collapse: false
                });
            }
            else {
                this.setState({
                    collapse: true
                });
            }
        }
    };
    Panel.defaultProps = {
        title: "",
        color: "default",
        collapsible: false,
        collapse: true,
        accordion: false
    };
    return Panel;
}(React.Component));
exports.default = Panel;
//# sourceMappingURL=Panel.js.map