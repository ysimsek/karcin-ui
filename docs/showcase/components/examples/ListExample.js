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
var karcin_ui_1 = require("karcin-ui");
var ListExample = /** @class */ (function (_super) {
    __extends(ListExample, _super);
    function ListExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListExample.prototype.render = function () {
        var data = [
            { id: 1, value: "Lorem Ipsum is simply dummy text", href: "", badge: "new" },
            { id: 2, value: "Of the printing and typesetting ", href: "" },
            { id: 3, value: "Industry. Lorem Ipsum has been", href: "", badge: "5" },
            { id: 4, value: "The industry's standard dummy ", href: "" },
            { id: 5, value: "Text ever since the 1500s", href: "", badge: "1299th" },
        ];
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple List" },
                    React.createElement(karcin_ui_1.List, { data: data, value: "value" }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "Action List" },
                    React.createElement(karcin_ui_1.List, { data: data, value: "value", action: true }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "Simple Child List" },
                    React.createElement(karcin_ui_1.List, null,
                        React.createElement(karcin_ui_1.ListItem, null, "Lorem"),
                        React.createElement(karcin_ui_1.ListItem, null, "Ipsum"),
                        React.createElement(karcin_ui_1.ListItem, null, "is simply"),
                        React.createElement("div", null, "Dummy Text"),
                        React.createElement("span", null, "Of the printing")))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "Link to Data (<a>)" },
                    React.createElement(karcin_ui_1.List, { data: data, value: "value", tag: "a", tagValue: "href" }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "Link to Data (<button>)" },
                    React.createElement(karcin_ui_1.List, { data: data, value: "value", tag: "button", tagValue: "href" }))),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.Panel, { title: "Active Link" },
                    React.createElement(karcin_ui_1.List, { data: data, value: "value", active: true, activeValue: "id", activeId: 4 }))));
    };
    return ListExample;
}(React.Component));
exports.default = ListExample;
//# sourceMappingURL=ListExample.js.map