"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("bootstrap/dist/css/bootstrap.css");
require("../css/karcin-ui.css");
var Tbody_1 = require("./Tbody");
var Thead_1 = require("./Thead");
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
var DataGrid = /** @class */ (function (_super) {
    __extends(DataGrid, _super);
    function DataGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.tbodyRef = null;
        _this._init(props);
        _this.props.store.__callback = function () {
            _this.resetSelected();
            _this.resetData();
        };
        return _this;
    }
    DataGrid.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this._init(props);
    };
    DataGrid.prototype._init = function (props) {
        this.state = {
            store: props.store,
            fields: props.fields
        };
    };
    DataGrid.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "karcin-datagrid" }, React.createElement("div", { className: "datagrid-table table" }, (this.props.title !== undefined && this.props.toolbars !== undefined ? React.createElement(Header_1.default, __assign({ store: this.props.store, fields: this.props.fields }, this.props)) : ''), React.createElement(Thead_1.default, __assign({ store: this.state.store, fields: this.state.fields, fieldOptionReset: this.fieldOptionReset.bind(this), ref: function (e) { return _this.tbodyRef = e; } }, this.props)), React.createElement(Tbody_1.default, __assign({ store: this.state.store, fields: this.state.fields, ref: function (e) { return _this.tbodyRef = e; } }, this.props)), (this.props.pagination !== undefined && !this.props.pagination ? React.createElement(Footer_1.default, __assign({ store: this.props.store, fields: this.props.fields }, this.props)) : ''))));
    };
    DataGrid.prototype.componentDidMount = function () {
        this.props.store.pagination(this.props.pageShow);
        this.props.store.storeRead();
    };
    DataGrid.prototype.resetData = function () {
        this.forceUpdate();
    };
    DataGrid.prototype.resetSelected = function () {
        if (this.tbodyRef !== null) {
            this.tbodyRef.resetSelected();
        }
    };
    DataGrid.prototype.storeRun = function () {
        this.props.store.storeRead();
    };
    DataGrid.prototype.fieldOptionReset = function (fields) {
        if (fields !== undefined) {
            this.setState({
                fields: fields
            });
        }
    };
    DataGrid.defaultPorps = {};
    return DataGrid;
}(React.Component));
exports.default = DataGrid;
//# sourceMappingURL=DataGrid.js.map