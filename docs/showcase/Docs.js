"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var karcin_ui_1 = require("karcin-ui");
var RenderComponent_1 = require("./RenderComponent");
var model = require("./jsons/DocList.json");
var Docs = /** @class */ (function (_super) {
    __extends(Docs, _super);
    function Docs(props) {
        var _this = this;
        debugger;
        _this = _super.call(this, props) || this;
        _this.state = {
            data: model.data
        };
        return _this;
    }
    Docs.prototype.render = function () {
        return React.createElement(reactstrap_1.Container, null, this.getMenus());
    };
    Docs.prototype.getMenus = function () {
        var _this = this;
        var item = this.getItem(window.location.hash, this.state.data);
        var detailCmp = null;
        if (item.length > 0) {
            detailCmp = React.createElement(RenderComponent_1.default, { type: "docs", item: item[0] });
        }
        else {
            detailCmp = React.createElement("span", null, "Component Bulunamad\u0131...");
        }
        return (React.createElement("div", { className: "content-component" },
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { xs: 3 },
                    React.createElement("div", { className: "side-menu-container" },
                        React.createElement(karcin_ui_1.Menu, { data: this.state.data, accordion: true, active: this.setActiveMenu(), onChange: function (val) { _this.handleChange(val); } }))),
                React.createElement(reactstrap_1.Col, { xs: 9 },
                    React.createElement("div", { className: "container-component content-page" }, detailCmp)))));
    };
    Docs.prototype.setActiveMenu = function () {
        var item = this.getItem(window.location.hash, this.state.data);
        if (window.location.hash.split("#/Docs/")[1] == undefined) {
            window.location.hash = "#Docs/AjaxRequest";
        }
        return item;
    };
    Docs.prototype.getItem = function (href, data, item) {
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
    Docs.prototype.handleChange = function (val) {
        console.log(val);
    };
    return Docs;
}(React.Component));
exports.default = Docs;
//# sourceMappingURL=Docs.js.map