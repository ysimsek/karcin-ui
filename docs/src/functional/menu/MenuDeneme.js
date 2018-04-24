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
var FaIcon_1 = require("../faicon/FaIcon");
require("../../css/sass/menu.scss");
var MenuDeneme = /** @class */ (function (_super) {
    __extends(MenuDeneme, _super);
    function MenuDeneme(props) {
        var _this = _super.call(this, props) || this;
        _this.menuChilds = null;
        _this.state = {
            menuData: _this.props.data,
            menuActive: [],
            type: _this.props.type,
            active: null,
            addActive: false
        };
        return _this;
    }
    MenuDeneme.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            menuData: props.data,
            type: props.type
        });
    };
    MenuDeneme.prototype.render = function () {
        this.menuChilds = this.menuLoop(this.props.data, undefined, 0, false);
        console.log(this.state.menuActive);
        return React.createElement(reactstrap_1.Nav, { key: "0", className: "karcin-menu " + ((this.state.type === 'hover') ? 'hover-menu' : '') }, this.menuChilds);
    };
    /**
     * get start menu loop
     * @param {any[]} getData
     */
    MenuDeneme.prototype.menuLoop = function (getData, key, level, collapse) {
        var _this = this;
        // reset list menu
        this.menuChilds = [];
        // loop main menu titles
        var listMenu = [];
        var self = this;
        getData.forEach(function (value, index) {
            // active control
            var activeIconControl = false;
            var keys = (key !== undefined) ? key + "-" + index : index;
            var params = { keys: keys, level: level, collapse: false };
            if (!self.state.addActive) {
                self.state.menuActive.push(params);
            }
            listMenu.push(React.createElement(reactstrap_1.NavItem, { key: index, className: (activeIconControl) ? 'active' : '', id: index },
                React.createElement("div", { className: "menu-head", onClick: function () { if (_this.state.type === 'dropDown') {
                        _this.toggleActiveMenu(params);
                    } } },
                    React.createElement(reactstrap_1.NavLink, { href: (value.href) ? value.href : "#" },
                        (value.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: value.icon, className: "menu-icon" }) : '',
                        value.title,
                        (value.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: value.badgeColor }, value.badge) : '',
                        (value.items !== undefined) ? (activeIconControl ? React.createElement(FaIcon_1.default, { code: "fa-angle-down", className: "open-icon" }) : React.createElement(FaIcon_1.default, { code: "fa-angle-right", className: "open-icon" })) : '')),
                (value.items !== undefined && value.items.length > 0) ? _this.menuLoop(value.items, keys, level + 1, true) : ''));
        });
        var active = false;
        this.state.menuActive.forEach(function (val) {
            if (val.keys === key) {
                active = val.collapse;
            }
        });
        return (collapse ? React.createElement(reactstrap_1.Collapse, { isOpen: active },
            React.createElement(reactstrap_1.Nav, null, listMenu)) : React.createElement(reactstrap_1.Nav, null, listMenu));
    };
    MenuDeneme.prototype.toggleActiveMenu = function (param) {
        var self = this;
        this.state.menuActive.map(function (val) {
            // let splitId = param.keys.split('-');
            if (self.props.accordion) {
                if (param.level === val.level) {
                    if (param.keys === val.keys) {
                        return val.collapse = true;
                    }
                    else {
                        return val.collapse = false;
                    }
                }
            }
        });
        this.setState({ addActive: true });
        this.forceUpdate();
    };
    MenuDeneme.prototype.activeFind = function () { };
    MenuDeneme.defaultProps = {
        type: 'dropDown',
        accordion: false
    };
    return MenuDeneme;
}(React.Component));
exports.default = MenuDeneme;
//# sourceMappingURL=MenuDeneme.js.map