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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        _this.loadingShow = { show: false };
        _this._selectedRow = [];
        _this.init(props);
        _this.props.store.__callback = function () {
            _this.resetData();
            _this.columnStyle();
            _this.resetSelected();
        };
        return _this;
    }
    DataGrid.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.init(props);
        this.forceUpdate();
    };
    /**
     * set the first values
     */
    DataGrid.prototype.init = function (props) {
        this.state = {
            store: props.store,
            fields: props.fields,
            eventDataGrid: null,
            pageShowData: { page: this.props.page, pageShow: this.props.pageShow, pagination: this.props.pagination },
        };
    };
    DataGrid.prototype.storeRun = function () {
        this.props.store.pagination(this.props.page, this.props.pageShow);
        this.props.store.storeRead();
    };
    /**
     *
     */
    DataGrid.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "karcin-data-grid", id: 'karcinDataGrid' + this.dataGridId, ref: function (e) {
                _this.eventDataGrid = e;
            } }, this.dataGridLoadComponent());
    };
    DataGrid.prototype.dataGridLoadComponent = function () {
        var _this = this;
        // loading control
        if (this.props.store.props.endPoint !== undefined && this.props.store.props.endPoint.props.endPointName === 'remoteEndPoint' && this.loadingShow.response === undefined) {
            this.loadingShow.show = true;
        }
        else {
            this.loadingShow.show = false;
        }
        this.returnComponent = React.createElement("div", null,
            React.createElement(Toolbar_1.default, __assign({ data: this.props.toolbar, store: this.props.store, type: "header", selectedRow: this._selectedRow, dataFormLabelText: this.props.dataFormLabelText, dataFormNameText: this.props.dataFormNameText }, this.props)),
            React.createElement("div", { className: "data-grid-body" },
                React.createElement("table", { className: "table table-bordered dataGrid" },
                    React.createElement(TableHead_1.default, __assign({ fields: this.state.fields, fieldOption: this.fieldOption, store: this.props.store, resetData: function () {
                            _this.resetData();
                        } }, this.props)),
                    React.createElement(TableBody_1.default, { ref: function (ref) { _this.tbodyRef = ref; }, onSelected: (this.props.onSelected !== false ? function (data, select) {
                            _this._selectedRow = data;
                            if (_this.props.onSelected !== undefined) {
                                _this.props.onSelected(data, select);
                            }
                        } : this.props.onSelected), onDoubleClick: this.onDoubleClick.bind(this), fieldOption: this.fieldOption, store: this.props.store, cellRenderer: this.props.cellRenderer, rowRenderer: this.props.rowRenderer, fields: this.state.fields, showingPageData: this.state.pageShowData, multiSelect: this.props.multiSelect }))),
            React.createElement(Toolbar_1.default, __assign({ store: this.props.store }, this.props, { changePage: function (e) {
                    _this.pageChange(e);
                } })));
        return this.returnComponent;
    };
    DataGrid.prototype.onDoubleClick = function (e) {
        this.props.onDoubleClick != undefined ? this.props.onDoubleClick(e) : null;
    };
    DataGrid.prototype.componentDidMount = function () {
        var _this = this;
        this.storeRun();
        setTimeout(function () {
            _this.columnStyle();
            _this.dataGridLoadComponent();
        }, 200);
        window.addEventListener('load', function () {
            _this.columnStyle();
            _this.dataGridLoadComponent();
        });
        window.addEventListener('resize', function () {
            _this.columnStyle();
            _this.dataGridLoadComponent();
        });
    };
    DataGrid.prototype.resetData = function () {
        this.loadingShow.show = false;
        this.loadingShow['response'] = true;
        this.forceUpdate();
    };
    DataGrid.prototype.resetSelected = function () {
        if (this.tbodyRef !== null) {
            this.tbodyRef.resetSelected();
        }
    };
    DataGrid.prototype.columnStyle = function () {
        if (this.eventDataGrid !== null) {
            this.fieldOption = {};
            // field width
            var fieldWidth_1 = {};
            var dataGridWidth = this.eventDataGrid.offsetWidth;
            var dataGridHeight = this.eventDataGrid.offsetHeight;
            var tableBodyHeight = this.eventDataGrid.querySelector('tbody') !== null ? this.eventDataGrid.querySelector('tbody').offsetHeight : 0;
            var totalWidth_1 = 0;
            var emptyFieldCount_1 = 0;
            var newField_1 = [];
            var scrollSize = 0;
            if (tableBodyHeight <= 0 && tableBodyHeight > dataGridHeight) {
                scrollSize = 8;
            }
            this.state.fields.forEach(function (value) {
                if (value.visibility === undefined || value.visibility) {
                    newField_1.push(value);
                    fieldWidth_1[value.value] = (value.width > 0 ? value.width : 0);
                    totalWidth_1 += (value.width > 0) ? value.width : 0;
                    emptyFieldCount_1 += (value.width <= 0 || value.width === undefined ? 0 : 1);
                }
            });
            if (dataGridWidth >= totalWidth_1) {
                var newCount = (newField_1.length - emptyFieldCount_1);
                var newWid = ((dataGridWidth - 2) - totalWidth_1) - scrollSize;
                for (var item in fieldWidth_1) {
                    if (fieldWidth_1[item] === 0) {
                        fieldWidth_1[item] = ((newWid - 1) / newCount);
                    }
                }
            }
            this.fieldOption = fieldWidth_1;
            this.eventDataGrid = null;
            this.forceUpdate();
        }
    };
    DataGrid.prototype.pageChange = function (event) {
        if (event !== undefined) {
            this.props.store.pagination(event.page, this.props.pageShow);
        }
    };
    DataGrid.defaultProps = {
        pagination: false,
        page: 1,
        multiSelect: false
    };
    return DataGrid;
}(React.Component));
exports.default = DataGrid;
//# sourceMappingURL=DataGrid.js.map