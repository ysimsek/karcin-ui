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
var FaIcon_1 = require("../../../lib/functional/faicon/FaIcon");
var Menu2 = /** @class */ (function (_super) {
    __extends(Menu2, _super);
    function Menu2(props) {
        var _this = _super.call(this, props) || this;
        _this.menuChilds = [];
        _this.state = {
            menuData: _this.props.data,
            menuActive: []
        };
        _this.menuLoop(_this.state.menuData);
        return _this;
    }
    Menu2.prototype.render = function () {
        return React.createElement("div", null, this.menuChilds);
    };
    /**
     * get start menu loop
     * @param {any[]} getData
     */
    Menu2.prototype.menuLoop = function (getData) {
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
            var menuHtml = React.createElement("div", { key: i + 1, className: "item" },
                React.createElement("div", { className: "menu-head", onClick: function () { _this.toggleActiveMenu(i.toString()); } },
                    (value.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: value.icon }) : '',
                    React.createElement("span", null, value.title),
                    (this_1.props.type === 'dropDown' && value.items !== undefined) ? (activeIconControl ? React.createElement(FaIcon_1.default, { code: "fa-angle-up" }) : React.createElement(FaIcon_1.default, { code: "fa-angle-down" })) : ''),
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
    Menu2.prototype.menuChildLoop = function (getChild, id) {
        var _this = this;
        // child menu lists
        var childs = [];
        var _loop_2 = function (i) {
            var valueChild = getChild[i];
            var oldKey = id;
            var newKey = id + "-" + i;
            // active control
            var active = false;
            if (this_2.state.menuActive.indexOf(oldKey) !== -1) {
                active = true;
            }
            else {
                active = false;
            }
            // dropdown icon control
            var activeIconControl = false;
            if (this_2.state.menuActive.indexOf(newKey) !== -1) {
                activeIconControl = true;
            }
            else {
                activeIconControl = false;
            }
            childs.push(React.createElement(reactstrap_1.Collapse, { key: i, isOpen: active, id: oldKey },
                React.createElement("div", { className: "menu-head", onClick: function () { _this.toggleActiveMenu(newKey); } },
                    (valueChild.icon !== undefined) ? React.createElement(FaIcon_1.default, { code: valueChild.icon }) : '',
                    React.createElement("span", null, valueChild.title),
                    (this_2.props.type === 'dropDown' && valueChild.items !== undefined) ? (activeIconControl ? React.createElement(FaIcon_1.default, { code: "fa-angle-up" }) : React.createElement(FaIcon_1.default, { code: "fa-angle-down" })) : ''),
                (valueChild.items !== undefined && valueChild.items.length > 0) ? this_2.menuChildLoop(valueChild.items, newKey) : ''));
        };
        var this_2 = this;
        // child menu loop
        for (var i = 0; i < getChild.length; i++) {
            _loop_2(i);
        }
        return childs;
    };
    /**
     * toggle menu active
     * @param {string} id
     */
    Menu2.prototype.toggleActiveMenu = function (id) {
        if (this.state.menuActive.indexOf(id) !== -1) {
            this.state.menuActive.splice(this.state.menuActive.indexOf(id), 1);
        }
        else {
            this.state.menuActive.push(id);
        }
        this.forceUpdate();
        this.menuLoop(this.state.menuData);
    };
    Menu2.defaultProps = {
        type: 'dropDown'
    };
    return Menu2;
}(React.Component));
exports.default = Menu2;
//# sourceMappingURL=Menu2.js.map