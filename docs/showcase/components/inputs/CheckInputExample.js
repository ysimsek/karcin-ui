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
var CheckInputExample = /** @class */ (function (_super) {
    __extends(CheckInputExample, _super);
    function CheckInputExample(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [{ id: 1, name: "Mustafa", job: "Computer Engineer", age: 26 },
            { id: 2, name: "Zeynep", job: "Business Manager", age: 24 },
            { id: 3, name: "Meral", job: "Software Specialist", age: 29 },
            { id: 4, name: "Selim", job: "Elektronics Science", age: 30 },
            { id: 5, name: "Melisa", job: "Computer Teacher", age: 45 }
        ];
        _this.state = {
            textArea: "",
            data: [{ id: 1, name: "Mustafa", job: "Computer Engineer", age: 26 },
                { id: 2, name: "Zeynep", job: "Business Manager", age: 24 },
                { id: 3, name: "Meral", job: "Software Specialist", age: 29 }],
            dataSelect: [{ id: 1, name: "Mustafa", job: "Computer Engineer", age: 26 }]
        };
        return _this;
    }
    CheckInputExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.CheckInput, { items: this.data, label: "Simple CheckInput Example", name: "data", id: "id", value: "name", 
                // onChange={(values) => this.onChange('data', values)}
                onChange: this.handleChange.bind(this) }),
            React.createElement(karcin_ui_1.CheckInput, { item: this.data[0], label: "Simple CheckInput Example2", name: "data2", id: "id", value: "name", onChange: this.handleChange.bind(this) }),
            React.createElement(karcin_ui_1.CheckInput, { items: this.data, label: "Simple CheckInput Example3", id: "id", value: "name", name: "data3", checkObjects: this.state.data, onChange: this.handleChange.bind(this) }),
            React.createElement(karcin_ui_1.CheckInput, { item: this.data[0], label: "Simple CheckInput Example4", id: "id", name: "data4", value: "name", checkObjects: this.state.dataSelect, onChange: this.handleChange.bind(this) }));
    };
    CheckInputExample.prototype.handleChange = function (e) {
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    };
    return CheckInputExample;
}(React.Component));
exports.default = CheckInputExample;
//# sourceMappingURL=CheckInputExample.js.map