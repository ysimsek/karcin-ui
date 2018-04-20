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
        return menu;
    };
    Menu.prototype.getMenu = function (arr) {
        var me = this;
        var menu = [];
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach(function (v, i) {
                var subMenu = null;
                if (v.items != undefined && Array.isArray(v.items) && v.items.length > 0) {
                    subMenu = me.getMenu(v.items);
                    menu.push(React.createElement(CollapseMenu, { key: i, item: v, collapse: v.collapse }, subMenu));
                }
                else {
                    menu.push(me.getMenuItem(v, i));
                }
            });
        }
        return React.createElement(reactstrap_1.Nav, { vertical: true, className: "karcin-menu" }, menu);
    };
    Menu.prototype.getMenuItem = function (item, key) {
        var _this = this;
        var activeClass = (item.id == this.state.active.id && item.name == this.state.active.name) ? "active" : "";
        return React.createElement(reactstrap_1.NavItem, { key: key },
            React.createElement(reactstrap_1.NavLink, { className: activeClass, onClick: function () {
                    _this.setActiveItem(item);
                }, href: (item.href) ? item.href : "#" },
                (item.icon) ? React.createElement(index_1.FaIcon, { code: item.icon }) : "",
                item.title));
    };
    Menu.prototype.setActiveItem = function (item) {
        this.setState({ active: item });
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    };
    return Menu;
}(React.Component));
exports.default = Menu;
var CollapseMenu = /** @class */ (function (_super) {
    __extends(CollapseMenu, _super);
    function CollapseMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = { collapse: props.collapse || false };
        return _this;
    }
    CollapseMenu.prototype.render = function () {
        var item = this.props.item;
        return React.createElement(reactstrap_1.NavItem, { className: (this.state.collapse ? "opened" : "") },
            React.createElement(reactstrap_1.NavLink, { href: "#", onClick: this.toggle },
                (item.icon) ? React.createElement(index_1.FaIcon, { code: item.icon }) : "",
                "  ",
                React.createElement("span", null, item.title),
                " ",
                React.createElement(index_1.FaIcon, { className: "collapse-icon", code: (this.state.collapse) ? "fa-angle-down" : "fa-angle-right" })),
            React.createElement(reactstrap_1.Collapse, { isOpen: this.state.collapse }, this.props.children));
    };
    CollapseMenu.prototype.toggle = function () {
        this.setState({ collapse: !this.state.collapse });
    };
    return CollapseMenu;
}(React.Component));
exports.CollapseMenu = CollapseMenu;
//# sourceMappingURL=Menu2.js.map