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
    },
    {
        id: "id",
        type: "check",
        name: "checkJob",
        label: "İş Seç",
        idField: "id",
        valueField: "job"
    },
    {
        id: "id",
        type: "radio",
        name: "opened",
        label: "Yapıldı mı?"
    },
    {
        id: "id",
        type: "date",
        name: "startDate",
        label: "Başlangıç Zamanı"
    },
    {
        id: "id",
        type: "lookup",
        name: "lookUpData",
        label: "Dil Seç",
        textField: "body"
    },
    {
        id: "id",
        type: "alert",
        title: "Lütfen Okuyunuz!",
        message: "Verilerini Konsol'da kontrol ediniz :)",
        color: "warning"
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
                opened: [{ id: 1, value: "Açık" }, { id: 2, value: "Kapalı" }],
                location: "Ankara",
                job: "Engineer",
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
    DataFormExample.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.DataForm, { values: this.state.values, fields: fields, ref: function (e) {
                    _this.dataFormRef = e;
                }, col: 3 }),
            React.createElement(karcin_ui_1.Button, { onClick: function () { _this.returnData(); } }, "Console"));
    };
    DataFormExample.prototype.returnData = function () {
        //return all fields in state
        console.log(this.dataFormRef.getChangeData());
    };
    return DataFormExample;
}(React.Component));
exports.default = DataFormExample;
//# sourceMappingURL=DataFormExample.js.map