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
var Highlight = require("react-highlight");
var DataFilterExample = /** @class */ (function (_super) {
    __extends(DataFilterExample, _super);
    function DataFilterExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            writeCode: { data: [] }
        };
        return _this;
    }
    DataFilterExample.prototype.render = function () {
        var _this = this;
        var field = [
            {
                "labels": "Id",
                "types": "number",
                "names": "id"
            },
            {
                "labels": "Name",
                "types": "string",
                "names": "name"
            },
            {
                "labels": "Surname",
                "types": "string",
                "names": "surname"
            },
            {
                "labels": "E-Mail",
                "types": "string",
                "names": "email"
            },
            {
                "labels": "Password",
                "types": "password",
                "names": "password"
            },
            {
                "labels": "Birthdate",
                "types": "date",
                "names": "birthdate"
            },
            {
                "labels": "Job Title",
                "types": "select",
                "names": "job",
                "items": [
                    {
                        names: "sd",
                        labels: "Software Developer"
                    },
                    {
                        names: "sa",
                        labels: "Software Architect"
                    }
                ]
            },
            {
                "labels": "Gender",
                "types": "radio",
                "names": "gender",
                "items": [
                    {
                        names: "male",
                        labels: "Male"
                    },
                    {
                        names: "female",
                        labels: "Female"
                    }
                ]
            }
        ];
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.DataFilter, { field: field, label: "Data Filter Example", labelFieldName: "labels", nameFieldName: "names", typeFieldName: "types", onChange: function (e) {
                    _this.getList(e);
                } }),
            React.createElement("div", { style: { marginTop: 20 } }, (this.state.writeCode.data.length > 0) ? React.createElement(Highlight, { className: 'json', innerHtml: true }, JSON.stringify(this.state.writeCode.data)) : ''));
    };
    DataFilterExample.prototype.getList = function (val) {
        var getList = [];
        val.forEach(function (value) {
            var itemVal = [];
            value.forEach(function (val) {
                itemVal.push(val.labels);
            });
            getList.push(itemVal);
        });
        this.state.writeCode.data = getList;
        this.forceUpdate();
    };
    return DataFilterExample;
}(React.Component));
exports.default = DataFilterExample;
//# sourceMappingURL=DataFilterExample.js.map