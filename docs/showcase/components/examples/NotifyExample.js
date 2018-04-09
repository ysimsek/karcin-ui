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
var items = [
    { id: 1, value: "Bottom Right", position: "BOTTOM_RIGHT" },
    { id: 2, value: "Bottom Left", position: "BOTTOM_LEFT" },
    { id: 3, value: "Bottom Center", position: "BOTTOM_CENTER" },
    { id: 4, value: "Top Right", position: "TOP_RIGHT" },
    { id: 5, value: "Top Left", position: "TOP_LEFT" },
    { id: 6, value: "Top Center", position: "TOP_CENTER" }
];
var NotifyExample = /** @class */ (function (_super) {
    __extends(NotifyExample, _super);
    function NotifyExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectPosition: "",
            message: "Default message"
        };
        return _this;
    }
    NotifyExample.prototype.render = function () {
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.SelectInput, { name: "selectPosition", label: "Notify pozisyonunun seçiniz", item: this.state.selectPosition, value: "value", id: "id", items: items, onChange: this.__onSelect.bind(this) })),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.TextInput, { name: "message", label: "Mesaj Yazınız", value: this.state.message, onChange: this.__onSelect.bind(this) })));
    };
    NotifyExample.prototype.onClick = function (e) {
        debugger;
    };
    NotifyExample.prototype.__onSelect = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return NotifyExample;
}(React.Component));
exports.default = NotifyExample;
//# sourceMappingURL=NotifyExample.js.map