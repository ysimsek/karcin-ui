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
require("../../css/karcin-ui.css");
var TableBody_1 = require("./TableBody");
var TableHead_1 = require("./TableHead");
var Toolbar_1 = require("./Toolbar");
var DataGrid = /** @class */ (function (_super) {
    __extends(DataGrid, _super);
    /**
     * Initial values
     */
    function DataGrid(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @type {number}
         */
        _this.dataGridId = Math.floor(Math.random() * 20);
        _this.init(props);
        _this.props.store.__callback = function () {
            _this.resetData();
            _this.columnStyle();
        };
        return _this;
    }
    DataGrid.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.init(props);
    };
    /**
     * set the first values
     */
    DataGrid.prototype.init = function (props) {
        this.state = {
            store: props.store,
            fields: props.fields,
            eventDataGrid: null,
            pageShowData: { 'start': 0, 'finis': this.props.pageShow, pagination: this.props.pagination }
        };
    };
    /**
     *
     */
    DataGrid.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "karcin-data-grid", id: 'karcinDataGrid' + this.dataGridId, ref: function (e) {
                _this.eventDataGrid = e;
            } }, this.returnComponent);
    };
    DataGrid.prototype.dataGridLoadComponent = function () {
        var _this = this;
        var self = this;
        this.returnComponent = React.createElement("div", null,
            React.createElement(Toolbar_1.default, { data: this.props.toolbar, store: this.props.store }),
            React.createElement("div", { className: "data-grid-body" },
                React.createElement("table", { className: "table table-bordered dataGrid" },
                    React.createElement(TableHead_1.default, { fields: this.state.fields, fieldOption: this.fieldOption, store: this.props.store, resetData: function () {
                            _this.resetData();
                        } }),
                    React.createElement(TableBody_1.default, { onSelected: this.props.onSelected, fieldOption: this.fieldOption, store: this.props.store, cellRenderer: this.props.cellRenderer, rowRenderer: this.props.rowRenderer, fields: this.state.fields, showingPageData: this.state.pageShowData }))),
            React.createElement(Toolbar_1.default, { type: "footer", store: this.props.store, options: {
                    'pagination': this.props.pagination,
                    'pageShow': this.props.pageShow,
                    'changePageFunc': function (e) {
                        self.pageChange(e);
                    }
                } }));
        this.forceUpdate();
    };
    DataGrid.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            _this.columnStyle();
        }, 200);
        window.addEventListener('load', function () {
            _this.columnStyle();
        });
    };
    DataGrid.prototype.resetData = function () {
        this.forceUpdate();
    };
    DataGrid.prototype.columnStyle = function () {
        if (this.eventDataGrid !== null) {
            //debugger;
            // field width
            var fieldWidth_1 = {};
            var dataGridWidth = this.eventDataGrid.clientWidth;
            var totalWidth_1 = 0;
            var emptyFieldCount_1 = 0;
            var newField_1 = [];
            this.state.fields.forEach(function (value) {
                if (value.visibility === undefined || value.visibility) {
                    newField_1.push(value);
                    fieldWidth_1[value.value] = (value.width > 0 ? value.width : 0);
                    totalWidth_1 += (value.width > 0) ? value.width : 0;
                    emptyFieldCount_1 += (value.width <= 0 || value.width === undefined ? 0 : 1);
                }
            });
            if (dataGridWidth >= totalWidth_1 && newField_1.length <= 3) {
                var newCount = (newField_1.length - emptyFieldCount_1);
                var newWid = ((dataGridWidth - 2) - totalWidth_1) - 8;
                for (var item in fieldWidth_1) {
                    if (fieldWidth_1[item] === 0) {
                        fieldWidth_1[item] = (newWid / newCount);
                    }
                }
            }
            this.fieldOption = fieldWidth_1;
            this.dataGridLoadComponent();
        }
    };
    DataGrid.prototype.pageChange = function (event) {
        if (event !== undefined) {
            var start = (event.page * this.props.pageShow) - this.props.pageShow;
            var finis = event.page * this.props.pageShow;
            this.state.pageShowData.start = start;
            this.state.pageShowData.finis = finis;
        }
        this.dataGridLoadComponent();
    };
    DataGrid.defaultProps = {
        pagination: false
    };
    return DataGrid;
}(React.Component));
exports.default = DataGrid;
//# sourceMappingURL=DataGrid.js.map