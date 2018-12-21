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
var AutoComplateExample = /** @class */ (function (_super) {
    __extends(AutoComplateExample, _super);
    function AutoComplateExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectInput: ""
        };
        return _this;
    }
    AutoComplateExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.AutoComplate, { name: "selectInput5", items: items, label: "AutoComplate", id: "id", value: "project", onChange: this.handleChange.bind(this) }));
    };
    AutoComplateExample.prototype.handleChange = function (e) {
        console.log(e);
    };
    return AutoComplateExample;
}(React.Component));
exports.default = AutoComplateExample;
//# sourceMappingURL=AutoComplateExample.js.map