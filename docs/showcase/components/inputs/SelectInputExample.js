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
var items = [
    {
        id: 1, name: "karcin-ui", userName: "karcin-ui", project: "KARÇİN-Uİ", img: "https://img.wikinut.com/img/anxidmiwlv2yy1ar/jpeg/36x36/Author-profile-image.jpeg"
    },
    {
        id: 2, name: "karcin-backend", userName: "karcin-backend", project: "KARÇİN-BACKEND", img: "https://d3ui957tjb5bqd.cloudfront.net/images/users/18/185/185868/avatar-50-50.jpg?1524845263"
    },
    {
        id: 3, name: "karcin-skeleton", userName: "karcin-skeleton", project: "KARÇİN-SKELETON", img: "http://worldonline.media.clients.ellingtoncms.com/img/profiles/2010/Feb/19/lee-head-avatar-small_r48x48.jpg?5dda7ebe3a0a47b731bc018fa5259827222aab62"
    },
    {
        id: 4, name: "apache-karaf", userName: "apache-karaf", project: "APACHE KARAF", img: "https://img.wikinut.com/img/anxidmiwlv2yy1ar/jpeg/36x36/Author-profile-image.jpeg"
    }
];
var SelectInputExample = /** @class */ (function (_super) {
    __extends(SelectInputExample, _super);
    function SelectInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectInput: "",
            singleActive: 3
        };
        return _this;
    }
    SelectInputExample.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.SelectInput, { name: "selectInput", items: items, label: "Single Select", id: "id", value: "project", onChange: this.handleChange2.bind(this), activeItem: this.state.singleActive }),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.SelectInput, { name: "selectInput2", items: items, label: "Multi Select", id: "id", value: "project", onChange: function (e) { _this.handleChange(e); }, type: "multi", activeItem: this.state.selectInput2 }),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.SelectInput, { name: "selectInput3", items: items, id: "id", label: "Multi Select Renderer", value: "project", onChange: this.handleChange.bind(this), type: "multi", renderer: this.rendererDropDown, activeItem: this.state.selectInput3 }),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.SelectInput, { name: "selectInput4", items: items, label: "Multi Select SelectRenderer", id: "id", value: "project", onChange: this.handleChange.bind(this), type: "multi", renderer: this.rendererDropDown, selectedRenderer: this.selectRenderer, activeItem: this.state.selectInput4 }));
    };
    SelectInputExample.prototype.handleChange = function (e) {
        var state = [];
        state[e.target.name] = e.target.value;
        this.setState(state);
        this.forceUpdate();
    };
    SelectInputExample.prototype.handleChange2 = function (e) {
        this.setState({
            singleActive: e.target.value
        });
    };
    SelectInputExample.prototype.rendererDropDown = function (value) {
        return React.createElement("div", null,
            React.createElement("div", { className: "img" },
                React.createElement("img", { src: value["img"] })),
            React.createElement("span", null, value["project"]));
    };
    SelectInputExample.prototype.selectRenderer = function (value) {
        return React.createElement("div", null,
            React.createElement("div", { className: "img" },
                React.createElement("img", { src: value["img"] })),
            React.createElement("span", null, value["project"]));
    };
    return SelectInputExample;
}(React.Component));
exports.default = SelectInputExample;
//# sourceMappingURL=SelectInputExample.js.map