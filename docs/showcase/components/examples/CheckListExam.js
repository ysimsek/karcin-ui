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
var CheckListExam = /** @class */ (function (_super) {
    __extends(CheckListExam, _super);
    function CheckListExam(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [{ id: 1, name: "Mustafa", job: "Computer Engineer", age: 26 },
            { id: 2, name: "Zeynep", job: "Business Manager", age: 24 },
            { id: 3, name: "Meral", job: "Software Specialist", age: 29 },
            { id: 4, name: "Selim", job: "Elektronics Science", age: 30 },
            { id: 5, name: "Melisa", job: "Computer Teacher", age: 45 }
        ];
        _this.state = {
            data: [],
            data2: [],
            data3: [1, 2, 3, 4]
        };
        return _this;
    }
    CheckListExam.prototype.render = function () {
        var _this = this;
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.CheckList, { items: this.data, id: "id", value: "name", onChange: function (values) { return _this.onChange('data', values); } })),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.CheckList, { items: this.data, id: "id", value: "name", onRenderer: this.onShowValueRenderer.bind(this), onChange: function (values) { return _this.onChange('data2', values); } })),
            React.createElement(reactstrap_1.Col, { md: 4 },
                React.createElement(karcin_ui_1.CheckList, { items: this.data, id: "id", value: "name", checkIds: this.state.data3, onChange: function (values) { return _this.onChange('data3', values); } }))));
    };
    CheckListExam.prototype.onChange = function (key, values) {
        this.setState((_a = {}, _a[key] = values, _a));
        var _a;
    };
    CheckListExam.prototype.onShowValueRenderer = function (value) {
        return value.name + " - " + value.job;
    };
    return CheckListExam;
}(React.Component));
exports.default = CheckListExam;
//# sourceMappingURL=CheckListExam.js.map