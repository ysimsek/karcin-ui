"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
require("../../css/karcin-ui.css");
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    /**
     * Intial values
     * @param {PanelProps} props
     */
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.init(props);
        return _this;
    }
    /**
     * Set the first state
     * @param {PanelProps} props
     */
    Panel.prototype.init = function (props) {
        this.state = {
            contentStyle: {},
            icon: "fa-plus",
            collapse: props.collapsible ? props.collapse : true,
            accordionClickId: null,
            accordion: props.accordion,
        };
    };
    /**
     * @returns {Object}
     */
    Panel.prototype.render = function () {
        var _this = this;
        var childHtmlElement = this.props.children;
        var panelTitle = null;
        var openButton = null;
        var openedIcon = null;
        if (this.state.collapse !== undefined && this.props.collapsible) {
            openedIcon = React.createElement(FaIcon_1.default, { code: (this.state.collapse) ? "fa-angle-up" : "fa-angle-down" });
            openButton = React.createElement("div", { className: "panel-head-button" }, React.createElement(Button_1.default, { onClick: function () {
                    if (_this.props.onClick) {
                        _this.props.onClick();
                    }
                    else {
                        _this.openPanel();
                    }
                } }, openedIcon));
            if (this.state.collapse) {
                if (this.props.onOpened !== undefined) {
                    this.props.onOpened();
                }
            }
            else {
                if (this.props.onClosed !== undefined) {
                    this.props.onClosed();
                }
            }
        }
        if (this.state.accordion) {
            panelTitle = React.createElement("div", { className: "accordion-title " + (this.state.collapse ? 'active' : '') }, React.createElement(Button_1.default, { onClick: this.props.onClick }, React.createElement("span", null, this.props.title), openedIcon));
        }
        else {
            if (this.props.title !== undefined && this.props.title !== "") {
                panelTitle = React.createElement("div", { className: "panel-title", onClick: function () {
                        if (_this.props.onClick) {
                            _this.props.onClick();
                        }
                        else {
                            _this.openPanel();
                        }
                    } }, (this.props.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: this.props.icon }) : '', " ", React.createElement("span", null, this.props.title), openButton);
            }
            else if (this.props.titleRenderer !== undefined) {
                panelTitle = React.createElement("div", { className: "panel-title" }, this.props.titleRenderer());
            }
        }
        return (React.createElement("div", { className: "panel-main " + this.props.color }, panelTitle, React.createElement(reactstrap_1.Collapse, { isOpen: this.state.collapse }, React.createElement("div", { className: "panel-content" }, childHtmlElement))));
    };
    /**
     * Props function returned
     */
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
    /**
     * Initial props value
     * @type {{title: string; color: string; collapsible: boolean; collapse: boolean; accordion: boolean}}
     */
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