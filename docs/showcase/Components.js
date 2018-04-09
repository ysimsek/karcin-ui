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
var karcin_ui_1 = require("karcin-ui");
var RenderComponent_1 = require("./RenderComponent");
var Components = /** @class */ (function (_super) {
    __extends(Components, _super);
    function Components(props) {
        var _this = _super.call(this, props) || this;
        var json = require('./ComponentList.json');
        _this.state = {
            data: json.data
        };
        return _this;
    }
    Components.prototype.render = function () {
        var item = this.getItem(window.location.hash, this.state.data);
        var detailCmp = null;
        if (item.length > 0) {
            detailCmp = (React.createElement(RenderComponent_1.default, { item: item[0] }));
        }
        else {
            detailCmp = React.createElement("span", null, "Component Bulunamad\u0131...");
        }
        return React.createElement("div", { className: "content-component" },
            React.createElement("div", { className: "side-menu" },
                React.createElement("div", { className: "side-menu-container" },
                    React.createElement(karcin_ui_1.Menu1, { data: this.state.data }))),
            React.createElement("div", { className: "container-component content-page" }, detailCmp));
    };
    Components.prototype.componentDidMount = function () {
        this.setActiveMenu();
    };
    Components.prototype.componentDidUpdate = function () {
        this.setActiveMenu();
    };
    Components.prototype.setActiveMenu = function () {
        // let item = this.getItem(window.location.hash, this.state.data);
        // if (window.location.hash.split("#/Components/")[1] == undefined){
        //     window.location.hash = "#Components/Button";
        // }
        // if (item.length > 0){
        //     this.menucmp.setActiveItem(item[0]);
        // }
    };
    Components.prototype.getItem = function (href, data, item) {
        var _this = this;
        if (item === void 0) { item = []; }
        if (data && this.state.data.length > 0) {
            data.forEach(function (v, i) {
                if (v.items && v.items.length > 0) {
                    _this.getItem(href, v.items, item);
                }
                else {
                    if (v.href == href) {
                        item.push(v);
                    }
                }
            });
        }
        return item;
    };
    return Components;
}(React.Component));
exports.default = Components;
//# sourceMappingURL=Components.js.map