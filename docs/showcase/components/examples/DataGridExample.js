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
        _this.show = true;
        _this.state = {
            fields: [
                {
                    "property": "int",
                    "value": "id",
                    "name": "ID"
                },
                {
                    "property": "string",
                    "value": "name",
                    "name": "isim"
                },
                {
                    "property": "string",
                    "value": "surname",
                    "name": "Soyisim",
                },
                {
                    "property": "string",
                    "value": "title",
                    "name": "Görevi",
                }
            ],
            store: new karcin_ui_1.Store({
                idField: 'id',
                data: [{
                        'id': '1',
                        'name': 'Deniz',
                        'surname': 'DALKILIÇ',
                        'title': 'Yazılım Uzmanı'
                    }, {
                        'id': '2',
                        'name': 'Yunus',
                        'surname': 'ŞİMŞEK',
                        'title': 'Yazılım Uzmanı'
                    }, {
                        'id': '3',
                        'name': 'Tayyip',
                        'surname': 'DEMİRCAN',
                        'title': 'Yazılım Uzmanı'
                    }, {
                        'id': '4',
                        'name': 'Mustafa',
                        'surname': 'GÜNGÖR',
                        'title': 'Yazılım Uzmanı'
                    }, {
                        'id': '5',
                        'name': 'Bora',
                        'surname': 'AVCI',
                        'title': 'Yazılım Uzmanı'
                    }]
            }),
            page: 1,
        };
        return _this;
    }
    DataGridExample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.DataGrid, { store: this.state.store, fields: this.state.fields, page: this.state.page, changePage: function (page) {
                    _this.pageChange(page);
                }, toolbar: [{
                        name: 'Ekle',
                        icon: 'fa-plus',
                        url: 'https://www.google.com',
                        disabled: this.show
                    }, {
                        name: 'Düzenle', icon: 'fa-minus', onClick: function () {
                            _this.clickEdit();
                        }
                    }], pagination: true, pageShow: 3 }),
            React.createElement(karcin_ui_1.Button, { color: "danger", onClick: function () { _this.deleteData(); } }, "Delete Deniz"),
            React.createElement(karcin_ui_1.Button, { color: "info", onClick: function () { _this.updateData(); } }, "Update Bora"),
            React.createElement(karcin_ui_1.Button, { color: "success", onClick: function () { _this.addData(); } }, "Insert Ay\u00E7a"),
            React.createElement(karcin_ui_1.Button, { color: "success", onClick: function () { _this.deneme(); } }, "Deneme")));
    };
    DataGridExample.prototype.clickEdit = function () {
    };
    DataGridExample.prototype.deleteData = function () {
        this.state.store.delete([{
                'id': '1',
                'name': 'Deniz',
                'surname': 'DALKILIÇ',
                'title': 'Yazılım Uzmanı'
            }], function (data) {
            console.log(data);
        });
    };
    DataGridExample.prototype.updateData = function () {
        this.state.store.update([{
                'id': '5',
                'name': 'Bora',
                'surname': 'AVCI',
                'title': 'Project Manager'
            }], function (data) {
            console.log(data);
        });
    };
    DataGridExample.prototype.addData = function () {
        this.state.store.create([{
                'id': '6',
                'name': 'Ayça',
                'surname': 'DEMİRBİLEK',
                'title': 'İnsan Kaynakları'
            }], function (data) {
            console.log(data);
        });
    };
    DataGridExample.prototype.deneme = function () {
        var _this = this;
        setTimeout(function () {
            _this.state.store.props.data = [{
                    'id': '6',
                    'name': 'Ayça',
                    'surname': 'DEMİRBİLEK',
                    'title': 'İnsan Kaynakları'
                }];
            _this.state.store.read();
        }, 3000);
    };
    DataGridExample.prototype.pageChange = function (pages) {
        var state = { page: pages };
        this.setState(state);
        ;
    };
    return DataGridExample;
}(React.Component));
exports.default = DataGridExample;
//# sourceMappingURL=DataGridExample.js.map