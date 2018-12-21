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
                "label": "Id",
                "type": "number",
                "name": "id"
            },
            {
                "label": "Name",
                "type": "string",
                "name": "name"
            },
            {
                "label": "Surname",
                "type": "string",
                "name": "surname"
            },
            {
                "label": "E-Mail",
                "type": "string",
                "name": "email"
            },
            {
                "label": "Password",
                "type": "password",
                "name": "password"
            },
            {
                "label": "Birthdate",
                "type": "date",
                "name": "birthdate"
            },
            {
                "label": "Job Title",
                "type": "select",
                "name": "job",
                "items": [
                    {
                        name: "sd",
                        label: "Software Developer"
                    },
                    {
                        name: "sa",
                        label: "Software Architect"
                    }
                ]
            },
            {
                "label": "Gender",
                "type": "radio",
                "name": "gender",
                "item": [
                    {
                        name: "male",
                        label: "Male"
                    },
                    {
                        name: "female",
                        label: "Female"
                    }
                ]
            }
        ];
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.DataFilter, { field: field, label: "Data Filter Example", labelFieldName: "label", nameFieldName: "name", typeFieldName: "type", onChange: function (e) {
                    _this.getList(e);
                } }),
            React.createElement("div", { style: { marginTop: 20 } }, (this.state.writeCode.data.length > 0) ? React.createElement(Highlight, { className: 'json', innerHtml: true }, JSON.stringify(this.state.writeCode.data)) : ''));
    };
    DataFilterExample.prototype.getList = function (val) {
        var getList = [];
        val.forEach(function (value) {
            var itemVal = [];
            value.forEach(function (val) {
                itemVal.push(val.label);
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