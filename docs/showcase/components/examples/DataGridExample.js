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
        var data = [];
        _this.state = {
            fields: [
                {
                    "type": "int",
                    "name": "id",
                    "label": "ID",
                    "visibility": false,
                },
                {
                    "type": "string",
                    "name": "title",
                    "label": "Başlık",
                    "width": 600,
                    "filter": false,
                    "order": false
                },
                {
                    "type": "textarea",
                    "name": "body",
                    "label": "Deneme"
                },
                {
                    "type": "textarea",
                    "name": "govde",
                    "label": "Gövde"
                },
                {
                    "type": "textarea",
                    "name": "aciklama",
                    "label": "Açıklama"
                }
            ],
            store: new karcin_ui_1.Store({
                idField: 'id',
                data: [
                    { id: 1, title: 'Button', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 2, title: 'Button2', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 3, title: 'Button3', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 4, title: 'Button4', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 5, title: 'Button5', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 6, title: 'Button6', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 7, title: 'Button7', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 8, title: 'Button8', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 9, title: 'Button9', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 10, title: 'Button10', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 11, title: 'Button11', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 12, title: 'Button12', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 13, title: 'Button13', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 14, title: 'Button14', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 15, title: 'Button15', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 16, title: 'Button16', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 17, title: 'Button17', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' },
                    { id: 18, title: 'Button18', body: 'Karçin Button', govde: 'Karçin Button', aciklama: 'deneme' }
                ]
            })
        };
        return _this;
    }
    DataGridExample.prototype.render = function () {
        return (React.createElement(karcin_ui_1.DataGrid, { store: this.state.store, fields: this.state.fields, pagination: true, pageShow: 5, title: "Example DataGrid" }));
    };
    return DataGridExample;
}(React.Component));
exports.default = DataGridExample;
//# sourceMappingURL=DataGridExample.js.map