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
var TypeFormating_1 = require("../../applications/TypeFormating");
var TableBody = /** @class */ (function (_super) {
    __extends(TableBody, _super);
    /**
     * Initial values
     * @param {TableBodyProps} props
     */
    function TableBody(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            store: _this.props.store,
            fields: _this.props.fields,
            clickActive: [],
            clickActiveRow: [],
            showingPageData: props.showingPageData
        };
        return _this;
    }
    /**
     * Rerender props values
     * @param props
     */
    TableBody.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.props = props;
        this.setState({
            store: props.store,
            fields: props.fields,
            showingPageData: props.showingPageData
        });
    };
    /**
     * @returns {any}
     */
    TableBody.prototype.render = function () {
        var showingControl = true;
        if (this.props.showingPageData.pagination) {
            if (this.props.store.props.pageData.start !== undefined) {
                showingControl = true;
            }
            else {
                showingControl = false;
            }
        }
        return React.createElement("tbody", null, (showingControl ? this.getItems() : ""));
    };
    /**
     * get renderer items
     * @returns {any[]}
     */
    TableBody.prototype.getItems = function () {
        var _this = this;
        var Rows = [];
        var self = this;
        var data = this.props.store.props.data;
        if (data !== undefined) {
            var _loop_1 = function (i) {
                var value = data[i];
                var getId = i;
                if (value.id !== undefined) {
                    getId = parseInt(value.id);
                }
                var Cell = [];
                var _loop_2 = function (j) {
                    var valueField = this_1.state.fields[j];
                    var fieldValData = '';
                    if (valueField.mapping !== undefined) {
                        fieldValData = this_1.mappingDataFind(value, valueField.mapping);
                    }
                    else {
                        fieldValData = value[valueField.value];
                    }
                    new TypeFormating_1.default({
                        data: fieldValData,
                        type: (valueField.type !== undefined ? valueField.type : valueField.property)
                    }, function (data) {
                        fieldValData = data;
                    });
                    // style
                    var style = {};
                    if (valueField.visibility !== undefined && !valueField.visibility) {
                        style['display'] = 'none';
                    }
                    if (this_1.props.fieldOption !== undefined) {
                        style['width'] = this_1.props.fieldOption[valueField.value] + "px";
                    }
                    Cell.push(React.createElement("td", { key: j, style: style }, (self.props.cellRenderer !== undefined) ? self.props.cellRenderer(value, valueField) !== undefined ? self.props.cellRenderer(value, valueField) : fieldValData : fieldValData));
                };
                for (var j = 0; j < this_1.state.fields.length; j++) {
                    _loop_2(j);
                }
                Rows.push(React.createElement("tr", { key: i, className: (self.state.clickActive.indexOf(getId) !== -1) ? 'active' : '', onClick: function (e) {
                        if (_this.props.onSelected !== false) {
                            _this.onClickRow(e, getId, data[i]);
                        }
                    }, onDoubleClick: this_1.props.onDoubleClick }, (self.props.rowRenderer !== undefined) ? self.props.rowRenderer(value, this_1.props.fields) !== undefined ? self.props.rowRenderer(value, this_1.props.fields) : Cell : Cell));
            };
            var this_1 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        }
        if (!this.props.showingPageData.pagination || this.props.store.__endPoint === 'remoteEndPoint') {
            return Rows;
        }
        else {
            var pageData = [];
            var pages = this.props.store.props.pageData;
            for (var i = 0; i < Rows.length; i++) {
                if (i >= pages.start && i < (pages.start + pages.limit)) {
                    pageData.push(Rows[i]);
                }
            }
            return pageData;
        }
    };
    /**
     * @param e
     * @param active
     * @param data
     */
    TableBody.prototype.onClickRow = function (e, active, data) {
        if (e.metaKey || e.ctrlKey && this.props.multiSelect) {
            if (this.state.clickActive.indexOf(active) !== -1) {
                // change rows id remove
                this.state.clickActive.splice(this.state.clickActive.indexOf(active), 1);
                // change rows json remove
                for (var i = 0; i < this.state.clickActiveRow.length; i++) {
                    if (this.state.clickActiveRow[i].id === active) {
                        this.state.clickActiveRow.splice(i, 1);
                    }
                }
            }
            else {
                //add row id
                this.state.clickActive.push(active);
                // add row json data
                this.state.clickActiveRow.push(data);
            }
        }
        else {
            // id first remove after add new id
            if (this.state.clickActive[0] !== active) {
                this.state.clickActive.splice(0, this.state.clickActive.length);
                this.state.clickActive.push(active);
                // json first remove after add new rows json data
                this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
                this.state.clickActiveRow.push(data);
            }
            else {
                this.state.clickActive.splice(0, this.state.clickActive.length);
                this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
            }
        }
        this.forceUpdate();
        // selectedProps
        if (this.props.onSelected !== undefined) {
            this.props.onSelected(this.state.clickActiveRow, this.state.clickActive);
        }
    };
    TableBody.prototype.resetSelected = function () {
        this.setState({
            clickActive: [],
            clickActiveRow: []
        });
    };
    TableBody.prototype.mappingDataFind = function (response, mapping) {
        if (response !== undefined && mapping !== undefined) {
            return this.findResponseData(response, mapping.split('.'));
        }
    };
    TableBody.prototype.findResponseData = function (response, mapping) {
        if (response !== undefined && response !== null && mapping !== undefined && mapping.length > 0 && response[mapping[0]] !== undefined) {
            return mapping.length > 0 ? this.findResponseData(response[mapping[0]], mapping.slice(1)) : response;
        }
        else {
            return response;
        }
    };
    return TableBody;
}(React.Component));
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map