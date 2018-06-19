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
            clickActiveRow: []
        };
        return _this;
    }
    /**
     * Rerender props values
     * @param props
     */
    TableBody.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            store: this.props.store,
            fields: this.props.fields
        });
    };
    /**
     * @returns {any}
     */
    TableBody.prototype.render = function () {
        return React.createElement("tbody", null, this.getItems());
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
                for (var j = 0; j < this_1.state.fields.length; j++) {
                    var valueField = this_1.state.fields[j];
                    var scrolWid = 0;
                    // style
                    var style = {};
                    if (valueField.visibility !== undefined && !valueField.visibility) {
                        style['display'] = 'none';
                    }
                    if (this_1.props.fieldOption !== undefined) {
                        style['width'] = this_1.props.fieldOption[valueField.value] + "px";
                    }
                    Cell.push(React.createElement("td", { key: j, style: style }, (self.props.cellRenderer !== undefined) ? self.props.cellRenderer(value, valueField) : value[valueField.value]));
                }
                Rows.push(React.createElement("tr", { key: i, className: (self.state.clickActive.indexOf(getId) !== -1) ? 'active' : '', onClick: function (e) {
                        _this.onClickRow(e, getId, data[i]);
                    } }, (self.props.rowRenderer !== undefined) ? self.props.rowRenderer(value, this_1.props.fields) : Cell));
            };
            var this_1 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        }
        return Rows;
    };
    /**
     * @param e
     * @param active
     * @param data
     */
    TableBody.prototype.onClickRow = function (e, active, data) {
        if (e.metaKey || e.ctrlKey) {
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
    return TableBody;
}(React.Component));
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map