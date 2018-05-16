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
var Store_1 = require("../../../store/Store");
var LocaleEndPoint_1 = require("../../../store/LocaleEndPoint");
var ButtonExample = /** @class */ (function (_super) {
    __extends(ButtonExample, _super);
    function ButtonExample(props) {
        var _this = _super.call(this, props) || this;
        _this.store = null;
        _this.store = new Store_1.default({
            idField: 'id',
            endPoint: new LocaleEndPoint_1.default({
                data: [{ id: 1, name: "John", surname: "Doe" }, { id: 2, name: "Jane", surname: "Roe" }]
            })
        });
        _this.store.create({ id: 5, name: "Deneme", surname: "asd" }, function (vl) { _this.onSuccess(vl); });
        return _this;
    }
    ButtonExample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.Button, { color: "light", onClick: function () { _this.onError(); } }, "light"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "dark", onClick: function () { _this.onError(); } }, "dark"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "primary", onClick: function () { _this.onError(); } }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "secondary", onClick: function () { _this.onError2(); } }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "danger" }, "danger"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "link" }, "link"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { outline: true, color: "light" }, "light"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "dark" }, "dark"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "primary" }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "secondary" }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { outline: true, color: "danger" }, "danger"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { color: "primary", size: "lg" }, "Large Button"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "secondary", size: "lg" }, "Large Button"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { color: "primary", size: "sm" }, "Small Button"),
            ' ',
            React.createElement(karcin_ui_1.Button, { color: "secondary", size: "sm" }, "Small Button"),
            React.createElement("hr", null),
            React.createElement(karcin_ui_1.Button, { color: "primary", size: "lg", block: true }, "Block level button"),
            React.createElement(karcin_ui_1.Button, { color: "secondary", size: "lg", block: true }, "Block level button")));
    };
    ButtonExample.prototype.onSuccess = function (res) {
        console.log(res);
    };
    ButtonExample.prototype.onError = function () {
        console.log(this.store.reset());
    };
    ButtonExample.prototype.onError2 = function () {
        var data = [{ id: 1, name: "Deniz", surname: "Dalkılıç" }, { id: 2, name: "name", surname: "surname" }];
        console.log(this.store.update(data));
    };
    return ButtonExample;
}(React.Component));
exports.default = ButtonExample;
//# sourceMappingURL=ButtonExample.js.map