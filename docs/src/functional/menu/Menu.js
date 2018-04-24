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
            active: {},
            activeList: []
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var menu = this.getMenu(this.props.data, undefined);
        return (menu);
    };
    Menu.prototype.getMenu = function (arr, id) {
        var me = this;
        var menu = [];
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach(function (v, i) {
                var subMenu = null;
                var keys = (id !== undefined) ? id + "-" + i : i;
                if (v.items != undefined && Array.isArray(v.items) && v.items.length > 0) {
                    subMenu = me.getMenu(v.items, keys);
                    var childMenu = me.getChildItems(v, keys, subMenu);
                    menu.push(childMenu);
                    // menu.push(<CollapseMenu key={i} id={keys} item={v} collapse={v.collapse} type={me.props.type} active={this.state.active} accordion={this.props.accordion}>
                    //     {subMenu}
                    // </CollapseMenu>);
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
            React.createElement("div", { className: "menu-head", onClick: function () {
                    if (_this.props.type === 'dropDown') {
                        _this.setActiveItem(item);
                    }
                } },
                React.createElement(reactstrap_1.NavLink, { href: (item.href) ? item.href : "#" },
                    (item.icon !== undefined) ? React.createElement(index_1.FaIcon, { code: item.icon, className: "menu-icon" }) : '',
                    item.title,
                    (item.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: item.badgeColor }, item.badge) : '',
                    (item.items !== undefined) ? (this.props.type === "hover" ?
                        React.createElement(index_1.FaIcon, { code: "fa-angle-right", className: "open-icon" }) : activeClass ?
                        React.createElement(index_1.FaIcon, { code: "fa-angle-down", className: "open-icon" }) :
                        React.createElement(index_1.FaIcon, { code: "fa-angle-right", className: "open-icon" })) : '')));
    };
    Menu.prototype.setActiveItem = function (item) {
        this.setState({ active: item });
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    };
    Menu.prototype.getChildItems = function (getItems, getKey, getSubMenu) {
        var _this = this;
        var self = this;
        var collapse = false;
        return React.createElement(reactstrap_1.NavItem, { className: (collapse ? "opened" : "") },
            React.createElement("div", { className: "menu-head", onClick: function () {
                    if (_this.props.type === 'dropDown') {
                        self.toggle(getKey);
                    }
                } },
                (getItems.icon !== undefined) ? React.createElement(index_1.FaIcon, { code: getItems.icon, className: "menu-icon" }) : '',
                React.createElement(reactstrap_1.NavLink, { href: (getItems.href) ? getItems.href : '#' }, getItems.title),
                (getItems.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: getItems.badgeColor }, getItems.badge) : '',
                (getItems.items !== undefined) ? (this.props.type === "hover" ?
                    React.createElement(index_1.FaIcon, { code: "fa-angle-right", className: "open-icon" }) : collapse ?
                    React.createElement(index_1.FaIcon, { code: "fa-angle-down", className: "open-icon" }) :
                    React.createElement(index_1.FaIcon, { code: "fa-angle-right", className: "open-icon" })) : ''),
            React.createElement(reactstrap_1.Collapse, { isOpen: (self.state.activeList.indexOf(getKey) !== -1 ? true : false) }, getSubMenu));
    };
    Menu.prototype.toggle = function (key) {
        if (this.state.activeList.indexOf(key) === -1) {
            this.state.activeList.push(key);
            this.forceUpdate();
        }
    };
    Menu.defaultProps = {
        type: 'dropDown'
    };
    return Menu;
}(React.Component));
exports.default = Menu;
//# sourceMappingURL=Menu.js.map