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
require("../../css/karcin-ui.css");
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showContext: { control: false },
            eventDirection: { x: 0, y: 0 }
        };
        _this.clickControl();
        return _this;
    }
    ContextMenu.prototype.render = function () {
        return React.createElement("div", { className: "karcin-context-menu " + ((this.state.showContext.control) ? 'active' : ''), style: { top: this.state.eventDirection.y, left: this.state.eventDirection.x } },
            React.createElement(reactstrap_1.Dropdown, { toggle: function () {
                } },
                React.createElement(reactstrap_1.DropdownMenu, null, this.menuLoop(this.props.data))));
    };
    /**
     * get props data loop to menu
     * @param getData
     * @returns {any[]}
     */
    ContextMenu.prototype.menuLoop = function (getData) {
        var _this = this;
        var listMenu = [];
        if (this.props.data !== undefined) {
            getData.forEach(function (value, index) {
                listMenu.push(React.createElement("div", { className: "dropdown-item", key: index, onClick: function () {
                        if (value.callback !== undefined) {
                            value.callback(value);
                        }
                    } },
                    React.createElement("div", { className: "menu-head" },
                        React.createElement(reactstrap_1.NavLink, { href: value.link, target: "_blank" },
                            value.icon !== undefined ? React.createElement(FaIcon_1.default, { code: value.icon, className: "basic-icon" }) : '',
                            React.createElement("span", null, value.title),
                            (value.items) ? React.createElement(FaIcon_1.default, { code: "fa-angle-right dropdown-icon" }) : '')),
                    value.items !== undefined && value.items.length > 0 ?
                        React.createElement(reactstrap_1.DropdownMenu, null, _this.menuLoop(value.items)) : ''));
            });
        }
        return listMenu;
    };
    /**
     * mouse right click control
     */
    ContextMenu.prototype.clickControl = function () {
        var _this = this;
        var getElement = (this.props.id !== undefined) ? 'id' : 'className';
        var getItemName = (this.props.id !== undefined) ? this.props.id : this.props.class;
        window.addEventListener('contextmenu', function (event) {
            if (event.target[getElement] !== undefined && event.target[getElement].indexOf(getItemName) !== -1) {
                _this.state.eventDirection.x = event.layerX;
                _this.state.eventDirection.y = event.layerY;
                _this.state.showContext.control = true;
                _this.forceUpdate();
                event.preventDefault();
            }
            else {
                _this.pathControl(event);
            }
        }, false);
        window.addEventListener('click', function (event) {
            _this.pathControl(event);
        });
    };
    /**
     * splace click control
     * @param event
     */
    ContextMenu.prototype.pathControl = function (event) {
        var control = false;
        event.path.forEach(function (val) {
            if (val.className !== undefined && val.className !== "" && val.className.indexOf('karcin-context-menu') !== -1) {
                control = true;
            }
        });
        if (!control) {
            this.state.showContext.control = false;
            this.forceUpdate();
        }
    };
    ContextMenu.defaultProps = {
        class: 'content-page'
    };
    return ContextMenu;
}(React.Component));
exports.default = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map