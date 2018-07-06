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
var fields = [
    {
        id: "id",
        type: "string",
        name: "name",
        label: "Name",
        isRequired: true
    },
    {
        id: "id",
        type: "string",
        name: "surname",
        label: "Surname",
        isRequired: true
    },
    {
        id: "id",
        type: "int",
        name: "age",
        label: "Age",
        isRequired: true
    },
    {
        id: "id",
        type: "string",
        name: "job",
        label: "Job",
        isRequired: true
    }, {
        id: "id",
        type: "select",
        name: "telephone",
        label: "Telephone",
        isRequired: true
    },
    {
        id: "id",
        type: "string",
        name: "location",
        label: "Location",
        isRequired: true
    }
];
var DataFormExample = /** @class */ (function (_super) {
    __extends(DataFormExample, _super);
    function DataFormExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            values: {
                telephone: [
                    { id: 1, value: "Apple", des: "D1" },
                    { id: 2, value: "Samsung", des: "D1" },
                    { id: 3, value: "Huawei", des: "D1" },
                    { id: 4, value: "Lg", des: "D1" },
                    { id: 5, value: "Lenovo", des: "D1" }
                ],
                location: "Ankara",
                job: "Engineer"
            }
        };
        return _this;
    }
    DataFormExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.DataForm, { values: this.state.values, fields: fields, ref: "dataform1", col: 3, returnData: this.returnData.bind(this) }));
    };
    DataFormExample.prototype.returnData = function (e) {
        //return all fields in state
        console.log(e);
    };
    return DataFormExample;
}(React.Component));
exports.default = DataFormExample;
//# sourceMappingURL=DataFormExample.js.map