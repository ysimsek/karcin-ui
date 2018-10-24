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
var model = [
    {
        divTitle: "Behavioral",
        fields: [
            {
                id: "id",
                type: "select",
                name: "behavioralName",
                label: "Behavioral Name",
                idField: "id",
                valueField: "value"
            },
            {
                id: "id",
                type: "color",
                name: "colorName",
                label: "Select the Color"
            },
            {
                id: "id",
                type: "string",
                name: "textName",
                label: "İsim Giriniz"
            },
            {
                id: "id",
                type: "int",
                name: "age",
                label: "Yaş Giriniz"
            },
            {
                id: "id",
                type: "password",
                name: "password",
                label: "Şifre Giriniz"
            },
            {
                id: "id",
                type: "textarea",
                name: "textarea",
                label: "Açıklama Giriniz"
            },
            {
                id: "id",
                type: "check",
                name: "checkJob",
                label: "İş Seç",
                idField: "id",
                valueField: "job"
            }
        ]
    },
    {
        divTitle: "Structural",
        fields: [
            {
                id: "id",
                type: "select",
                name: "structuralName",
                label: "StructuralName",
                idField: "id",
                valueField: "value"
            }
        ]
    },
    {
        divTitle: "Creational",
        fields: [
            {
                id: "id",
                type: "select",
                name: "creationalName",
                label: "Creational Name"
            },
            {
                id: "id",
                type: "date",
                name: "startDate",
                label: "Başlangıç Zamanı"
            }
        ]
    },
    {
        divTitle: "Other",
        fields: [
            {
                id: "id",
                type: "select",
                name: "otherName",
                label: "Other Name"
            },
            {
                id: "id",
                type: "lookup",
                name: "lookUpData",
                label: "Dil Seçiniz",
                textField: "body"
            },
            {
                id: "id",
                type: "radio",
                name: "radio",
                label: "Thema Seçiniz"
            }
        ]
    },
];
var PropertyGridExample = /** @class */ (function (_super) {
    __extends(PropertyGridExample, _super);
    function PropertyGridExample(props) {
        var _this = _super.call(this, props) || this;
        _this.dataFormRef = null;
        _this.state = {
            values: {
                behavioralName: [
                    { id: 1, value: "Apple", des: "D1" },
                    { id: 2, value: "Samsung", des: "D2" },
                    { id: 3, value: "Huawei", des: "D3" },
                    { id: 4, value: "Lg", des: "D4" },
                    { id: 5, value: "Lenovo", des: "D5" }
                ],
                structuralName: [
                    { id: 1, value: "Wolswagen", des: "D1" },
                    { id: 2, value: "BMW", des: "D1" }
                ],
                creationalName: [
                    { id: 1, value: ".com", des: "D1" },
                    { id: 2, value: ".tr", des: "D1" },
                    { id: 2, value: ".ru", des: "D1" }
                ],
                otherName: [
                    { id: 1, value: "Seviye A", des: "D1" },
                    { id: 2, value: "Seviye B", des: "D1" }
                ],
                radio: [
                    { id: 1, value: "Blue" },
                    { id: 2, value: "Dark" }
                ],
                textarea: "TextArea",
                age: 5,
                checkJob: [{ id: 1, name: "Mustafa", job: "Computer Engineer", age: 26 },
                    { id: 2, name: "Zeynep", job: "Business Manager", age: 24 },
                    { id: 3, name: "Meral", job: "Software Specialist", age: 29 }],
                lookUpData: {
                    fields: [{ "property": "int", "value": "id", "label": "ID" },
                        { "property": "string", "value": "body", "label": "Başlık" }],
                    store: {
                        data: [
                            { id: 1, name: "Java", body: "Java neredeyse her türdeki ağ uygulamalarının temelini oluşturarak gömülü ve mobil uygulamalar, oyunlar, Web tabanlı içerik ve kurumsal yazılım geliştirme ve dağıtımı için küresel standarttır.  " },
                            { id: 2, name: "React", body: "React Virtual Dom , sayfa bütünlüğü ve yönetimini elinde tutarak kolaylık sağlıyor" }
                        ]
                    }
                }
            }
        };
        return _this;
    }
    PropertyGridExample.prototype.render = function () {
        var _this = this;
        return React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 7 },
                React.createElement(karcin_ui_1.PropertyGrid, { fields: model, values: this.state.values, ref: function (e) {
                        _this.dataFormRef = e;
                    } })),
            React.createElement(reactstrap_1.Col, { md: 1 },
                React.createElement(karcin_ui_1.Button, { onClick: function () { _this.returnData(); }, color: "primary" }, "Verileri \u00C7ek")),
            React.createElement(reactstrap_1.Col, { md: 4 }));
    };
    PropertyGridExample.prototype.returnData = function () {
        console.log(this.dataFormRef.getData());
    };
    return PropertyGridExample;
}(React.Component));
exports.default = PropertyGridExample;
//# sourceMappingURL=PropertyGridExample.js.map