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
var MenuExample = /** @class */ (function (_super) {
    __extends(MenuExample, _super);
    function MenuExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuExample.prototype.render = function () {
        var data = [
            {
                "id": 1,
                "name": "functional",
                "title": "Functional",
                "icon": "fa-cubes",
                "collapse": true,
                "badge": "12",
                "badgeColor": "primary",
                "items": [
                    {
                        "id": 1,
                        "name": "Button",
                        "title": "Button",
                        "href": "#/Components/Button"
                    },
                    {
                        "id": 2,
                        "name": "Menu",
                        "title": "Menü",
                        "href": "#/Components/Menu"
                    },
                    {
                        "id": 3,
                        "name": "FaIcon",
                        "title": "Font Awesome Icon",
                        "href": "#/Components/FaIcon"
                    },
                    {
                        "id": 4,
                        "name": "Tab",
                        "title": "Tabs",
                        "href": "#/Components/Tabs",
                        "samples": "components/examples/TabsExample",
                    }
                ]
            }, {
                "id": 2,
                "name": "input",
                "title": "Input",
                "icon": "fa-terminal",
                "items": [
                    {
                        "id": 1,
                        "name": "textInput",
                        "title": "Text Input"
                    },
                    {
                        "id": 2,
                        "name": "NumericInput",
                        "title": "NumericInput"
                    },
                    {
                        "id": 3,
                        "name": "textArea",
                        "title": "Textarea"
                    }
                ]
            }
        ];
        var deneme = [{ "id": 1, "name": "Button", "title": "Button", "href": "#/Components/Button" }];
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Menu, { data: data, active: deneme }));
    };
    return MenuExample;
}(React.Component));
exports.default = MenuExample;
//# sourceMappingURL=MenuExample.js.map