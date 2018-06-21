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
                    "name": "ID"
                },
                {
                    "property": "string",
                    "value": "title",
                    "name": "isim"
                },
                {
                    "property": "string",
                    "value": "body",
                    "name": "açıklama",
                },
                {
                    "property": "string",
                    "value": "url",
                    "name": "image",
                }
            ],
            store: new karcin_ui_1.Store({
                idField: 'id',
                data: [],
                //url: 'https://jsonplaceholder.typicode.com/photos',
                responseData: 'data'
            })
        };
        _this.dataUpdate();
        return _this;
    }
    DataGridExample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.DataGrid, { store: this.state.store, fields: this.state.fields, onSelected: function (e, b) {
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
                    }], pagination: true, pageShow: 3 })));
    };
    DataGridExample.prototype.dataUpdate = function () {
        var _this = this;
        setTimeout(function () {
            _this.state.store.props.data = [{ id: 1, title: 'deniz', body: 'denememe', url: 'dededede' }, { id: 1, title: 'deniz2', body: 'denememe', url: 'dededede' }, { id: 1, title: 'deniz3', body: 'denememe', url: 'dededede' }, { id: 1, title: 'deniz4', body: 'denememe', url: 'dededede' }, { id: 1, title: 'deniz5', body: 'denememe', url: 'dededede' }];
            _this.state.store.read();
        }, 1000);
    };
    DataGridExample.prototype.clickEdit = function () {
    };
    DataGridExample.prototype.getSelectData = function (e, b) {
    };
    return DataGridExample;
}(React.Component));
exports.default = DataGridExample;
//# sourceMappingURL=DataGridExample.js.map