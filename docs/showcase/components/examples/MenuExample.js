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
var reactstrap_1 = require("reactstrap");
var MenuExample = /** @class */ (function (_super) {
    __extends(MenuExample, _super);
    function MenuExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuExample.prototype.render = function () {
        var _this = this;
        var data = [
            {
                "id": 1,
                "name": "Languages",
                "title": "Languages",
                "icon": "fa-cubes",
                "collapse": true,
                "badge": "new",
                "badgeColor": "danger",
                "items": [
                    {
                        "id": 1,
                        "name": "Arial",
                        "title": "Arial",
                        "href": "#/Components/Menu"
                    },
                    {
                        "id": 2,
                        "name": "Calibri",
                        "title": "Calibri",
                        "href": "#/Components/Menu"
                    },
                    {
                        "id": 3,
                        "name": "ComicSans",
                        "title": "Comic Sans",
                        "href": "#/Components/Menu",
                        "badge": "v4",
                        "badgeColor": "warning",
                    },
                    {
                        "id": 4,
                        "name": "corsiva",
                        "title": "Corsiva"
                    },
                    {
                        "id": 5,
                        "name": "couriernew",
                        "title": "Courier New"
                    },
                    {
                        "id": 6,
                        "name": "georgia",
                        "title": "Georgia",
                        "badge": "v3",
                        "badgeColor": "warning",
                    },
                    {
                        "id": 7,
                        "name": "helvetica",
                        "title": "Helvetica Neue"
                    }
                ]
            }, {
                "id": 2,
                "name": "format",
                "title": "Format",
                "icon": "fa-terminal",
                "items": [
                    {
                        "id": 1,
                        "name": "bold",
                        "title": "Bold"
                    },
                    {
                        "id": 2,
                        "name": "italic",
                        "title": "Italic"
                    },
                    {
                        "id": 3,
                        "name": "LineSpecing",
                        "title": "Line Specing",
                        "badge": "2",
                        "badgeColor": "warning",
                        "items": [
                            {
                                "id": 1,
                                "name": "single",
                                "title": "Single"
                            },
                            {
                                "id": 2,
                                "name": "double",
                                "title": "Double"
                            }
                        ]
                    }
                ]
            }
        ];
        return (React.createElement("div", { className: "example-menu" },
            React.createElement(reactstrap_1.Row, { className: "basic-row" },
                React.createElement(reactstrap_1.Col, { sm: 6 },
                    React.createElement("span", { className: "example-reagent first" }, "Accordion Men\u00FC"),
                    React.createElement(karcin_ui_1.Menu, { data: data, accordion: true, onChange: function (val) { _this.handleChange(val); } })),
                React.createElement(reactstrap_1.Col, { sm: 6 },
                    React.createElement("span", { className: "example-reagent first" }, "Collapse Menu"),
                    React.createElement(karcin_ui_1.Menu, { data: data, onChange: function (val) { _this.handleChange(val); } })),
                React.createElement(reactstrap_1.Col, { sm: 6 },
                    React.createElement("span", { className: "example-reagent" }, "Hover Menu"),
                    React.createElement(karcin_ui_1.Menu, { data: data, hover: true, onChange: function (val) { _this.handleChange(val); } })))));
    };
    MenuExample.prototype.handleChange = function (val) {
    };
    return MenuExample;
}(React.Component));
exports.default = MenuExample;
//# sourceMappingURL=MenuExample.js.map