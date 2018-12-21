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
var reactstrap_1 = require("reactstrap");
var ButtonExample = /** @class */ (function (_super) {
    __extends(ButtonExample, _super);
    function ButtonExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonExample.prototype.render = function () {
        var data = [
            { title: 'Create', icon: 'fa-plus', callback: this.callbacks },
            { title: 'Edit', icon: 'fa-edit', callback: this.callbacks },
            { title: 'Edit', icon: 'fa-edit', items: [
                    { title: 'Reactstrap', link: 'https://reactstrap.github.io' }
                ] },
        ];
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 6 },
                    React.createElement("span", { className: "example-reagent first" }, "Button Example"),
                    React.createElement(karcin_ui_1.Button, { id: "buttonContext" }, "Example"),
                    React.createElement(karcin_ui_1.ContextMenu, { id: "buttonContext", data: data })),
                React.createElement(reactstrap_1.Col, { sm: 6 },
                    React.createElement("span", { className: "example-reagent first" }, "Text Example"),
                    React.createElement("span", { id: "textContext" }, "Example Text"),
                    React.createElement(karcin_ui_1.ContextMenu, { id: "textContext", data: data })))));
    };
    ButtonExample.prototype.callbacks = function (val) {
        console.log(val);
    };
    return ButtonExample;
}(React.Component));
exports.default = ButtonExample;
//# sourceMappingURL=ContextMenuExample.js.map