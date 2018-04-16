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
var index_1 = require("../../index");
require("../../css/sass/menu.scss");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: {}
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var menu = this.getMenu(this.props.data);
        return (menu);
    };
    Menu.prototype.getMenu = function (arr) {
        var me = this;
        var menu = [];
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach(function (v, i) {
                var subMenu = null;
                if (v.items != undefined && Array.isArray(v.items) && v.items.length > 0) {
                    subMenu = me.getMenu(v.items);
                    menu.push(React.createElement(CollapseMenu, { key: i, item: v, collapse: v.collapse, type: me.props.type }, subMenu));
                }
                else {
                    menu.push(me.getMenuItem(v, i));
                }
            });
        }
        return React.createElement(reactstrap_1.Nav, { vertical: true, className: "karcin-menu " + ((this.props.type === 'hover') ? 'hover-menu' : '') }, menu);
    };
    Menu.prototype.getMenuItem = function (item, key) {
        var _this = this;
        var activeClass = (item.id == this.state.active.id && item.name == this.state.active.name) ? "active" : "";
        return React.createElement(reactstrap_1.NavItem, { key: key, className: activeClass },
            React.createElement("div", { className: "menu-head", onClick: function () { if (_this.props.type === 'dropDown') {
                    _this.setActiveItem(item);
                } } },
                React.createElement(reactstrap_1.NavLink, { href: (item.href) ? item.href : "#" },
                    (item.icon !== undefined) ? React.createElement(index_1.FaIcon, { code: item.icon, className: "menu-icon" }) : '',
                    item.title,
                    (item.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: item.badgeColor }, item.badge) : '',
                    (item.items !== undefined) ? (activeClass === "active" ? React.createElement(index_1.FaIcon, { code: "fa-angle-down", className: "open-icon" }) : React.createElement(index_1.FaIcon, { code: "fa-angle-right", className: "open-icon" })) : '')));
    };
    Menu.prototype.setActiveItem = function (item) {
        this.setState({ active: item });
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    };
    Menu.defaultProps = {
        type: 'dropDown'
    };
    return Menu;
}(React.Component));
exports.default = Menu;
var CollapseMenu = /** @class */ (function (_super) {
    __extends(CollapseMenu, _super);
    function CollapseMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { collapse: props.collapse || false };
        return _this;
    }
    CollapseMenu.prototype.render = function () {
        var item = this.props.item;
        var self = this;
        return React.createElement(reactstrap_1.NavItem, { className: (this.state.collapse ? "opened" : "") },
            React.createElement("div", { className: "menu-head", onClick: function () {
                    if (self.props.type === 'dropDown') {
                        self.toggle();
                    }
                } },
                (item.icon !== undefined) ? React.createElement(index_1.FaIcon, { code: item.icon, className: "menu-icon" }) : '',
                React.createElement(reactstrap_1.NavLink, { href: (item.href) ? item.href : '#' }, item.title),
                (item.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: item.badgeColor }, item.badge) : '',
                (item.items !== undefined) ? (this.state.collapse ? React.createElement(index_1.FaIcon, { code: "fa-angle-down", className: "open-icon" }) : React.createElement(index_1.FaIcon, { code: "fa-angle-right", className: "open-icon" })) : ''),
            React.createElement(reactstrap_1.Collapse, { isOpen: this.state.collapse }, this.props.children));
    };
    CollapseMenu.prototype.toggle = function () {
        this.setState({ collapse: !this.state.collapse });
    };
    return CollapseMenu;
}(React.Component));
exports.CollapseMenu = CollapseMenu;
//# sourceMappingURL=Menu.js.map