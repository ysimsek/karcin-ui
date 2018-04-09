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
require("bootstrap/dist/css/bootstrap.css");
require("../../css/sass/table.scss");
var TableBody_1 = require("./TableBody");
var TableHead_1 = require("./TableHead");
var Toolbar_1 = require("./Toolbar");
var DataGrid = /** @class */ (function (_super) {
    __extends(DataGrid, _super);
    function DataGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: _this.props.data,
            fields: _this.props.fields,
            dataGridId: Math.floor(Math.random() * 20)
        };
        return _this;
    }
    DataGrid.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            data: this.props.data,
            fields: this.props.fields
        });
    };
    DataGrid.prototype.render = function () {
        return React.createElement("div", { className: "karcin-data-grid", id: 'karcinDataGrid' + this.state.dataGridId },
            React.createElement(Toolbar_1.default, { data: this.props.toolbar }),
            React.createElement("div", { className: "data-grid-body" },
                React.createElement("table", { className: "table table-bordered dataGrid" },
                    React.createElement(TableHead_1.default, { fields: this.state.fields }),
                    React.createElement(TableBody_1.default, { onSelected: this.props.onSelected, data: this.state.data, fields: this.state.fields }))),
            React.createElement(Toolbar_1.default, { type: "footer" }));
    };
    return DataGrid;
}(React.Component));
exports.default = DataGrid;
//# sourceMappingURL=DataGrid.js.map