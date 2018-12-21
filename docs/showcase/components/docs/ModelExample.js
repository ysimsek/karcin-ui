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
var Highlight = require("react-highlight");
var ModelExample = /** @class */ (function (_super) {
    __extends(ModelExample, _super);
    function ModelExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.types = [
            { type: "string", component: "TextInput" },
            { type: "int", component: "NumericInput" },
            { type: "password", component: "PasswordInput" },
            { type: "select", component: "SelectInput" },
            { type: "date", component: "DateInput" },
            { type: "radio", component: "RadioInput" },
            { type: "check", component: "CheckInput" },
            { type: "textarea", component: "TextArea" },
            { type: "lookup", component: "LookUp" }
        ];
        return _this;
    }
    ModelExample.prototype.render = function () {
        return React.createElement("div", null,
            this.getModelling(),
            this.getHighLight());
    };
    ModelExample.prototype.getHighLight = function () {
        return React.createElement("div", null,
            "\u00D6rnek model kullan\u0131m\u0131 a\u015Fa\u011F\u0131daki gibidir. DataForm, DataGrid ve LookUp componentleri modeli bu \u015Fekilde istemektedir.",
            React.createElement(Highlight, { className: 'javascript' }, 'const data = [\n' +
                '    {\n' +
                '        id : "id",\n' +
                '        type : "string",\n' +
                '        name : "name",\n' +
                '        label :"Name",\n' +
                '    },\n' +
                '    {\n' +
                '        id : "id",\n' +
                '        type : "string",\n' +
                '        name : "surname",\n' +
                '        label :"Surname",\n' +
                '    },\n' +
                '    {\n' +
                '        id : "id",\n' +
                '        type : "int",\n' +
                '        name : "age",\n' +
                '        label :"Age",\n' +
                '    },\n' +
                '    {\n' +
                '        id : "id",\n' +
                '        type : "string",\n' +
                '        name : "job",\n' +
                '        label :"Job",\n' +
                '    },{\n' +
                '        id : "id",\n' +
                '        type : "select",\n' +
                '        name : "telephone",\n' +
                '        label :"Telephone",\n' +
                '    },\n' +
                '    {\n' +
                '        id : "id",\n' +
                '        type : "string",\n' +
                '        name : "location",\n' +
                '        label :"Location",\n' +
                '    },\n' +
                '    {\n' +
                '        id:"id",\n' +
                '        type:"check",\n' +
                '        name : "checkJob",\n' +
                '        label : "İş Seç",\n' +
                '        idField : "id",\n' +
                '        valueField : "job"\n' +
                '    },\n' +
                '    {\n' +
                '        id: "id",\n' +
                '        type : "radio",\n' +
                '        name : "opened",\n' +
                '        label : "Yapıldı mı?"\n' +
                '    },\n' +
                '    {\n' +
                '        id:"id",\n' +
                '        type:"date",\n' +
                '        name : "startDate",\n' +
                '        label : "Başlangıç Zamanı"\n' +
                '    },\n' +
                '    {\n' +
                '        id:"id",\n' +
                '        type:"lookup",\n' +
                '        name:"lookUpData",\n' +
                '        label: "Dil Seç",\n' +
                '        textField : "body"\n' +
                '    },\n' +
                '    {\n' +
                '        id:"id",\n' +
                '        type: "alert",\n' +
                '        title:"Lütfen Okuyunuz!",\n' +
                '        message:"Verilerini Konsol\'da kontrol ediniz :)",\n' +
                '        color:"warning"\n' +
                '    }\n' +
                '\n' +
                ']'));
    };
    ModelExample.prototype.getModelling = function () {
        return React.createElement("div", null,
            "Model tan\u0131mlamas\u0131ndaki tipler ve hangi omponentle ba\u011Flant\u0131l\u0131 oldu\u011Fu a\u015Fa\u011F\u0131daki tabloda verilmi\u015Ftir.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", { className: "thead-dark" },
                    React.createElement("tr", null,
                        React.createElement("th", null, "Type"),
                        React.createElement("th", null, "Component"))),
                React.createElement("tbody", null, this.getTyping())));
    };
    ModelExample.prototype.getTyping = function () {
        var arr = [];
        this.types.map(function (res) {
            arr.push(React.createElement("tr", null,
                React.createElement("td", null, res.type),
                React.createElement("td", null, res.component)));
        });
        return arr;
    };
    return ModelExample;
}(React.Component));
exports.default = ModelExample;
//# sourceMappingURL=ModelExample.js.map