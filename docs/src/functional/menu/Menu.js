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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.menuChilds = null;
        _this.state = {
            menuData: [],
            menuActive: [],
            type: _this.props.type,
            active: null,
            addActive: false,
            activeControl: false
        };
        return _this;
    }
    Menu.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            menuData: props.data,
            type: props.type
        });
        this.activeFind(this.props.active);
    };
    Menu.prototype.componentDidMount = function () {
        this.activeFind(this.props.active);
    };
    Menu.prototype.render = function () {
        this.menuChilds = this.menuLoop(this.props.data, undefined, 0, false);
        return React.createElement(reactstrap_1.Nav, { key: "0", className: "karcin-menu " + ((this.state.type === 'hover') ? 'hover-menu' : '') }, this.menuChilds);
    };
    /**
     * get start menu loop
     * @param {any[]} getData
     */
    Menu.prototype.menuLoop = function (getData, key, level, collapse) {
        var _this = this;
        // reset list menu
        this.menuChilds = [];
        // loop main menu titles
        var listMenu = [];
        var self = this;
        getData.forEach(function (value, index) {
            // active control
            var keys = (key !== undefined) ? key + "-" + index : index.toString();
            var params = { keys: keys, level: level, collapse: false };
            var activeControlBool = false;
            self.state.menuActive.forEach(function (val) {
                if (val.keys === keys) {
                    activeControlBool = true;
                }
            });
            if (!activeControlBool) {
                self.state.menuActive.push(params);
                value['keys'] = keys;
                value['level'] = level;
                self.state.menuData.push(value);
            }
            var actives = _this.menuItemActive(keys);
            listMenu.push(React.createElement(reactstrap_1.NavItem, { key: index, className: (actives) ? 'active' : '' },
                React.createElement("div", { className: "menu-head", onClick: function () { if (_this.state.type === 'dropDown') {
                        _this.toggleActiveMenu(params);
                    } } },
                    React.createElement(reactstrap_1.NavLink, { href: (value.href) ? value.href : "#" },
                        (value.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: value.icon, className: "menu-icon" }) : '',
                        React.createElement("strong", null,
                            value.title,
                            (value.badge !== undefined) ? React.createElement(reactstrap_1.Badge, { color: value.badgeColor }, value.badge) : ''),
                        (value.items !== undefined) ? (actives ? React.createElement(FaIcon_1.default, { code: "fa-angle-down", className: "open-icon" }) : React.createElement(FaIcon_1.default, { code: "fa-angle-right", className: "open-icon" })) : '')),
                (value.items !== undefined && value.items.length > 0) ? _this.menuLoop(value.items, keys, level + 1, true) : ''));
        });
        var active = this.menuItemActive(key);
        return (collapse ? React.createElement(reactstrap_1.Collapse, { isOpen: active },
            React.createElement(reactstrap_1.Nav, null, listMenu)) : React.createElement(reactstrap_1.Nav, null, listMenu));
    };
    /**
     * click dropdown menu toggle
     * @param param
     */
    Menu.prototype.toggleActiveMenu = function (param) {
        var self = this;
        this.state.menuActive.map(function (val, index) {
            if (self.props.accordion) {
                if (param.level === val.level) {
                    if (param.keys === val.keys) {
                        val.collapse = true;
                    }
                    else {
                        val.collapse = false;
                    }
                }
            }
            else {
                if (param.keys === val.keys && param.level === val.level) {
                    val.collapse = !val.collapse;
                }
            }
            return val;
        });
        var state = {};
        state['addActive'] = true;
        this.setState(state);
    };
    /**
     * active find func
     * @param getActive
     */
    Menu.prototype.activeFind = function (getActive) {
        var _this = this;
        if (this.state.menuData.length > 0 && getActive !== undefined && getActive !== null && getActive.length > 0 && !this.state.activeControl) {
            getActive = getActive[0];
            this.state.menuData.forEach(function (val) {
                if (val.href === getActive.href && val.name === getActive.name) {
                    var _loop_1 = function (i) {
                        var splitKey = val.keys.split('-');
                        _this.state.menuActive.map(function (vals) {
                            var id = splitKey.slice(0, i + 1).join('-');
                            if (_this.props.accordion) {
                                if (vals.level === i && id === vals.keys) {
                                    vals.collapse = true;
                                }
                                else if (vals.level === i) {
                                    vals.collapse = false;
                                }
                            }
                            else {
                                if (vals.level === i && vals.keys === id) {
                                    vals.collapse = !vals.collapse;
                                }
                            }
                            return vals;
                        });
                    };
                    for (var i = val.level; i >= 0; i--) {
                        _loop_1(i);
                    }
                }
            });
            this.forceUpdate();
        }
    };
    /**
     * active control func
     * @param id
     * @returns {boolean}
     */
    Menu.prototype.menuItemActive = function (id) {
        var active = false;
        this.state.menuActive.forEach(function (val) {
            var keys = (id !== undefined) ? id : "0";
            if (val.keys === keys) {
                active = val.collapse;
            }
        });
        return active;
    };
    Menu.defaultProps = {
        type: 'dropDown',
        accordion: false,
        active: [],
    };
    return Menu;
}(React.Component));
exports.default = Menu;
//# sourceMappingURL=Menu.js.map