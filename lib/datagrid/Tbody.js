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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("bootstrap/dist/css/bootstrap.css");
var TypeFormating_1 = require("../applications/TypeFormating");
var Scrollbars = require('react-custom-scrollbars').Scrollbars;
var BaseClass_1 = require("../applications/BaseClass");
var Tbody = /** @class */ (function (_super) {
    __extends(Tbody, _super);
    function Tbody(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            store: props.store,
            fields: props.fields,
            clickActive: [],
            clickActiveRow: []
        };
        return _this;
    }
    Tbody.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.setState({
            store: props.store,
            fields: props.fields
        });
    };
    Tbody.prototype.render = function () {
        return (React.createElement("div", { className: "datagrid-body" },
            React.createElement(Scrollbars, null,
                React.createElement("tbody", null, this.getData()))));
    };
    Tbody.prototype.getData = function () {
        var _this = this;
        var data = this.props.store.props.data;
        var Rows = [];
        if (data !== undefined && data.length > 0) {
            data.forEach(function (value, index) {
                var getId = index;
                if (value.id !== undefined) {
                    getId = parseInt(value.id);
                }
                var Cell = [];
                _this.state.fields.forEach(function (values, indexes) {
                    var fieldValData = '';
                    if (values.mapping !== undefined) {
                        fieldValData = BaseClass_1.default.mappingDataFind(value, values.mapping);
                    }
                    else {
                        fieldValData = value[values.name];
                    }
                    new TypeFormating_1.default({
                        data: fieldValData,
                        type: (values.type !== undefined ? values.type : values.property)
                    }, function (data) {
                        fieldValData = data;
                    });
                    // style
                    var style = {};
                    if (values.visibility !== undefined && !values.visibility) {
                        style['display'] = 'none';
                    }
                    if (values.width !== undefined) {
                        style['width'] = values.width + "px";
                    }
                    Cell.push(React.createElement("td", { key: indexes, style: style }, (values.renderer !== undefined) ? values.renderer(value, values) !== undefined ? value.renderer(value, values) : fieldValData : fieldValData));
                });
                Rows.push(React.createElement("tr", { key: index, className: (_this.state.clickActive.indexOf(getId) !== -1) ? 'active' : '', onClick: function (e) {
                        if (_this.props.select) {
                            _this.onClickRow(e, getId, data[index]);
                        }
                    }, onDoubleClick: function () {
                        if (_this.props.onDoubleSelected !== undefined) {
                            _this.props.onDoubleSelected(data[index]);
                        }
                    } }, Cell));
            });
            return Rows;
        }
    };
    /**
     * @param e
     * @param active
     * @param data
     */
    Tbody.prototype.onClickRow = function (e, active, data) {
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
    Tbody.prototype.resetSelected = function () {
        this.setState({
            clickActive: [],
            clickActiveRow: []
        });
    };
    Tbody.defaultProps = {
        select: true
    };
    return Tbody;
}(React.Component));
exports.default = Tbody;
//# sourceMappingURL=Tbody.js.map