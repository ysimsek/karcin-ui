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
        _this.menuChilds = [];
        _this.state = {
            menuData: _this.props.data,
            menuActive: [],
            type: _this.props.type
        };
        _this.menuLoop(_this.state.menuData);
        return _this;
    }
    MenuDeneme.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            menuData: props.data,
            type: props.type
        });
    };
    MenuDeneme.prototype.render = function () {
        return React.createElement(reactstrap_1.Nav, { className: "karcin-menu " + ((this.state.type === 'hover') ? 'hover-menu' : '') }, this.menuChilds);
    };
    /**
     * get start menu loop
     * @param {any[]} getData
     */
    MenuDeneme.prototype.menuLoop = function (getData) {
        var _this = this;
        // reset list menu
        this.menuChilds = [];
        var _loop_1 = function (i) {
            var value = getData[i];
            // active control
            var activeIconControl = false;
            if (this_1.state.menuActive.indexOf(i.toString()) !== -1) {
                activeIconControl = true;
            }
            else {
                activeIconControl = false;
            }
            var menuHtml = React.createElement(reactstrap_1.NavItem, { key: i.toString(), className: (activeIconControl) ? 'active' : '' },
                React.createElement("div", { className: "menu-head", onClick: function () { if (_this.state.type === 'dropDown') {
                        _this.toggleActiveMenu(i.toString());
                    } } },
                    React.createElement(reactstrap_1.NavLink, { href: (value.href) ? value.href : "#" },
                        (value.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: value.icon, className: "menu-icon" }) : '',
                        value.title,
                        (value.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: value.badgeColor }, value.badge) : '',
                        (value.items !== undefined) ? (activeIconControl ? React.createElement(FaIcon_1.default, { code: "fa-angle-down", className: "open-icon" }) : React.createElement(FaIcon_1.default, { code: "fa-angle-right", className: "open-icon" })) : '')),
                (value.items !== undefined && value.items.length > 0) ? this_1.menuChildLoop(value.items, i.toString()) : '');
            this_1.menuChilds.push(menuHtml);
        };
        var this_1 = this;
        // loop main menu titles
        for (var i = 0; i < getData.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * get child menus
     * @param {any[]} getChild
     * @param {string} id
     * @returns {Array<any>}
     */
    MenuDeneme.prototype.menuChildLoop = function (getChild, id) {
        var _this = this;
        // child menu lists
        var childs = [];
        var self = this;
        //active control
        var active = false;
        if (self.state.menuActive.indexOf(id) !== -1) {
            active = true;
        }
        else {
            active = false;
        }
        childs.push(React.createElement(reactstrap_1.Nav, null,
            React.createElement(reactstrap_1.Collapse, { key: id, isOpen: active, id: id }, getChild.map(function (val, i) {
                var oldKey = id;
                var newKey = id + "-" + i;
                // dropdown icon control
                var activeIconControl = false;
                if (self.state.menuActive.indexOf(newKey) !== -1) {
                    activeIconControl = true;
                }
                else {
                    activeIconControl = false;
                }
                return React.createElement(reactstrap_1.NavItem, { key: i + id },
                    React.createElement("div", { className: "menu-head", onClick: function () { if (_this.state.type === 'dropDown') {
                            _this.toggleActiveMenu(newKey);
                        } } },
                        (val.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: val.icon, className: "menu-icon" }) : '',
                        React.createElement(reactstrap_1.NavLink, { href: (val.href) ? val.href : '#' }, val.title),
                        (val.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: val.badgeColor }, val.badge) : '',
                        (val.items !== undefined) ? (activeIconControl ? React.createElement(FaIcon_1.default, { code: "fa-angle-down", className: "open-icon" }) : React.createElement(FaIcon_1.default, { code: "fa-angle-right", className: "open-icon" })) : ''),
                    (val.items !== undefined && val.items.length > 0) ? self.menuChildLoop(val.items, newKey) : '');
            }))));
        return childs;
    };
    /**
     * toggle menu active
     * @param {string} id
     */
    MenuDeneme.prototype.toggleActiveMenu = function (id) {
        if (this.state.menuActive.indexOf(id) !== -1) {
            this.state.menuActive.splice(this.state.menuActive.indexOf(id), 1);
        }
        else {
            this.state.menuActive.push(id);
        }
        this.forceUpdate();
        this.menuLoop(this.state.menuData);
    };
    MenuDeneme.defaultProps = {
        type: 'dropDown'
    };
    return MenuDeneme;
}(React.Component));
exports.default = MenuDeneme;
//# sourceMappingURL=menuDeneme.js.map