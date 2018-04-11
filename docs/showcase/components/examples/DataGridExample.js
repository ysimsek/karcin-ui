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
var DataGridExample = /** @class */ (function (_super) {
    __extends(DataGridExample, _super);
    function DataGridExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fields: [
                {
                    "property": "int",
                    "value": "id",
                    "name": "ID",
                    "visibility": false
                },
                {
                    "property": "string",
                    "value": "name",
                    "name": "İsim"
                },
                {
                    "property": "string",
                    "value": "surname",
                    "name": "Soyisim"
                },
                {
                    "property": "string",
                    "value": "description",
                    "name": "Açıklama"
                }
            ],
            data: [{
                    'id': '1',
                    'name': 'Deniz',
                    'surname': 'Dalkılıç',
                    'description': 'Belirtilmedi'
                }, {
                    'id': '2',
                    'name': 'Cabbar',
                    'surname': 'Demir',
                    'description': 'Belirtilmedi'
                }, {
                    'id': '3',
                    'name': 'Asiye',
                    'surname': 'Koç',
                    'description': 'Belirtilmedi'
                }, {
                    'id': '4',
                    'name': 'Kazım',
                    'surname': 'Bekir',
                    'description': 'Belirtilmedi'
                }, {
                    'id': '5',
                    'name': 'Mehmet',
                    'surname': 'Ak',
                    'description': 'Belirtilmedi'
                }, {
                    'id': '6',
                    'name': 'Remziye',
                    'surname': 'Demir',
                    'description': 'Belirtilmedi'
                }]
        };
        _this.updateData();
        return _this;
    }
    DataGridExample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.DataGrid, { data: this.state.data, fields: this.state.fields, onSelected: function (e, b) {
                    _this.getSelectData(e, b);
                }, toolbar: [{
                        name: 'Ekle',
                        icon: 'fa-plus',
                        url: 'https://www.google.com',
                        disabled: true
                    }, {
                        name: 'Düzenle', icon: 'fa-minus', onClick: function () {
                            _this.clickEdit();
                        }
                    }] })));
    };
    DataGridExample.prototype.clickEdit = function () {
        debugger;
    };
    DataGridExample.prototype.getSelectData = function (e, b) {
        console.log(e, b);
    };
    DataGridExample.prototype.updateData = function () {
        var self = this;
        setTimeout(function () {
            self.state.data.splice(0, 1);
            self.forceUpdate();
        }, 2000);
    };
    return DataGridExample;
}(React.Component));
exports.default = DataGridExample;
//# sourceMappingURL=DataGridExample.js.map