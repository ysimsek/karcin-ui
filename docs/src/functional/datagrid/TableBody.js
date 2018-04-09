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
    function TableBody(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: _this.props.data,
            fields: _this.props.fields,
            clickActive: [],
            clickActiveRow: []
        };
        return _this;
    }
    TableBody.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            data: this.props.data,
            fields: this.props.fields
        });
    };
    TableBody.prototype.render = function () {
        var _this = this;
        var Rows = [];
        var self = this;
        var _loop_1 = function (i) {
            var value = this_1.props.data[i];
            var getId = i;
            if (value.id !== undefined) {
                getId = parseInt(value.id);
            }
            var Cell = [];
            for (var j = 0; j < this_1.state.fields.length; j++) {
                var valueField = this_1.state.fields[j];
                // style
                var style = {};
                if (valueField.visibility !== undefined && !valueField.visibility) {
                    style['display'] = 'none';
                }
                Cell.push(React.createElement("td", { key: j, style: style }, value[valueField.value]));
            }
            Rows.push(React.createElement("tr", { key: i, className: (self.state.clickActive.indexOf(getId) !== -1) ? 'active' : '', onClick: function (e) {
                    _this.onClickRow(e, getId, _this.props.data[i]);
                } }, Cell));
        };
        var this_1 = this;
        for (var i = 0; i < this.props.data.length; i++) {
            _loop_1(i);
        }
        return React.createElement("tbody", null, Rows);
    };
    TableBody.prototype.onClickRow = function (e, active, data) {
        if (e.metaKey) {
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
            this.state.clickActive.splice(0, this.state.clickActive.length);
            this.state.clickActive.push(active);
            // json first remove after add new rows json data
            this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
            this.state.clickActiveRow.push(data);
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