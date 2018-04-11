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
var Highlight = require("react-highlight");
var karcin_ui_1 = require("karcin-ui");
var reactstrap_1 = require("reactstrap");
var RenderComponent = /** @class */ (function (_super) {
    __extends(RenderComponent, _super);
    function RenderComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTab: 0
        };
        return _this;
    }
    RenderComponent.prototype.componentWillReceiveProps = function () {
        this.setState({ activeTab: 0 });
    };
    RenderComponent.prototype.render = function () {
        var properties = null;
        if (this.getProperties() != null) {
            properties = (React.createElement(karcin_ui_1.TabPanel, { title: "Properties" }, this.getProperties()));
        }
        return (React.createElement("div", null,
            React.createElement("h2", null,
                '<',
                this.props.item.name,
                ' />'),
            React.createElement("p", { className: "description" }, this.props.item.description),
            React.createElement("div", { style: { marginTop: 20 } },
                React.createElement(karcin_ui_1.Tab, { activeTab: this.state.activeTab },
                    React.createElement(karcin_ui_1.TabPanel, { title: "Example" }, this.getReactElement()),
                    properties,
                    React.createElement(karcin_ui_1.TabPanel, { className: "source", title: React.createElement("span", null,
                            React.createElement(karcin_ui_1.FaIcon, { code: "fa-code" }),
                            " Source") }, this.getReactTxt())))));
    };
    RenderComponent.prototype.getReactElement = function () {
        var _this = this;
        try {
            var Elm = require("./" + this.props.item.samples);
            return React.createElement(Elm.default, { ref: function (e) { _this.element = e; } });
        }
        catch (e) {
            return React.createElement("span", null, this.props.item.name);
        }
    };
    RenderComponent.prototype.getReactTxt = function () {
        try {
            var txt = require('!raw-loader!./' + this.props.item.samples + '.tsx');
            return React.createElement(Highlight, { className: 'javascript' }, txt);
        }
        catch (e) {
            return React.createElement("span", null);
        }
    };
    RenderComponent.prototype.getProperties = function () {
        try {
            var cmpFile = require('!raw-loader!../src/' + this.props.item.library + '.tsx');
            var cmpProps = this.getInterfaceToJson(cmpFile);
            var propsArr_1 = [];
            cmpProps.forEach(function (v, i) {
                var name = v.name.split("?");
                var nameCmp = [React.createElement("span", { key: 1 }, name[0])];
                if (name[1] != undefined) {
                    nameCmp.push(React.createElement("span", { key: 2, className: "opt" }, "(optional)"));
                }
                propsArr_1.push(React.createElement("tr", { key: i },
                    React.createElement("td", { key: 1 }, nameCmp),
                    React.createElement("td", { key: 2 }, v.value)));
            });
            return (React.createElement(reactstrap_1.Table, { className: "prop-table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Properties"),
                        React.createElement("th", null, "Type"))),
                React.createElement("tbody", null, propsArr_1)));
        }
        catch (e) {
            return null;
        }
    };
    RenderComponent.prototype.getInterfaceToJson = function (text) {
        var arr = [];
        text.split("export interface")[1].split("{")[1].split("}")[0].trim();
        if (text.split("export interface")[1]) {
            if (text.split("export interface")[1].split("{")[1]) {
                if (text.split("export interface")[1].split("{")[1].split("}")) {
                    text = text.split("export interface")[1].split("{")[1].split("}")[0].trim();
                    if (text.split(";").length > 0) {
                        text.split(";").forEach(function (v, i) {
                            if (v != "") {
                                var value = v.replace(v.split(":")[0].trim() + ":", "");
                                arr.push({ name: v.split(":")[0].trim(), value: value });
                            }
                        });
                    }
                }
            }
        }
        return arr;
    };
    return RenderComponent;
}(React.Component));
exports.default = RenderComponent;
//# sourceMappingURL=RenderComponent.js.map