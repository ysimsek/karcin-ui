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
        id: 1, name: "Mustafa", userName: "MustafaGungorMG", project: "KARÇİN-Uİ"
    },
    {
        id: 2, name: "Mustafa", userName: "MustafaGungorMG", project: "KARÇİN-BACKEND"
    },
    {
        id: 3, name: "Mustafa", userName: "MustafaGungorMG", project: "KARÇİN-SKELETON"
    },
    {
        id: 4, name: "Mustafa", userName: "MustafaGungorMG", project: "APACHE KARAF"
    },
];
var SelectInputExample = /** @class */ (function (_super) {
    __extends(SelectInputExample, _super);
    function SelectInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectInput: ""
        };
        return _this;
    }
    SelectInputExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.SelectInput, { name: "selectInput", label: "SelectInput Example", items: items, id: "id", value: "project", item: this.state.selectInput, onChange: this.handleChange.bind(this) }));
    };
    SelectInputExample.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return SelectInputExample;
}(React.Component));
exports.default = SelectInputExample;
//# sourceMappingURL=SelectInputExample.js.map