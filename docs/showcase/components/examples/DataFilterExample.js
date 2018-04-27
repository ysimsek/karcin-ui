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
var DataFilterExample = /** @class */ (function (_super) {
    __extends(DataFilterExample, _super);
    function DataFilterExample(props) {
        return _super.call(this, props) || this;
    }
    DataFilterExample.prototype.render = function () {
        var field = [
            {
                "label": "Id",
                "type": "number",
                "name": "id",
                "filter": true
            },
            {
                "label": "Name",
                "type": "string",
                "name": "name",
                "filter": true
            },
            {
                "label": "Surname",
                "type": "string",
                "name": "surname",
                "filter": true
            },
            {
                "label": "E-Mail",
                "type": "string",
                "name": "email",
                "filter": true
            },
            {
                "label": "Password",
                "type": "password",
                "name": "password",
                "filter": false
            },
            {
                "label": "Birthdate",
                "type": "date",
                "name": "birthdate",
                "filter": true
            },
            {
                "label": "Job Title",
                "type": "select",
                "name": "job",
                "filter": true,
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
                "filter": true,
                "items": [
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
            React.createElement(karcin_ui_1.DataFilter, { field: field }));
    };
    return DataFilterExample;
}(React.Component));
exports.default = DataFilterExample;
//# sourceMappingURL=DataFilterExample.js.map