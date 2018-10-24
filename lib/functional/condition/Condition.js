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
var reactstrap_1 = require("reactstrap");
var SelectInput_1 = require("../../inputs/selectInput/SelectInput");
require("../../css/condition.css");
var FaIcon_1 = require("../../functional/faicon/FaIcon");
var GetInput_1 = require("../../functional/getInput/GetInput");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [];
        _this.field = [];
        _this.likeOperator = [
            { id: 1, value: 'Başlangıç' },
            { id: 2, value: 'Bitiş' },
            { id: 3, value: 'İçeirir' }
        ];
        _this.operators = [
            { 'id': 1, 'label': '=', 'name': 'equal', 'type': 'string' },
            { 'id': 2, 'label': '!=', 'name': 'not equal', 'type': 'string' },
            { 'id': 3, 'label': '<', 'name': 'less', 'type': 'string' },
            { 'id': 4, 'label': '<=', 'name': 'less or equal', 'type': 'string' },
            { 'id': 5, 'label': '>', 'name': 'greater', 'type': 'string' },
            { 'id': 6, 'label': '>=', 'name': 'greater or equal', 'type': 'string' },
            { 'id': 7, 'label': 'IN', 'name': 'in', 'type': 'list' },
            { 'id': 8, 'label': 'NOT IN', 'name': 'not in', 'type': 'list' },
            { 'id': 9, 'label': 'LIKE', 'name': 'like', 'type': 'radio' },
            { 'id': 10, 'label': 'IS NOT NULL', 'name': 'is not null', 'type': null },
            { 'id': 11, 'label': 'IS NULL', 'name': 'is null', 'type': null },
            { 'id': 12, 'label': 'BETWEEN', 'name': 'between', 'type': 4 },
        ];
        _this.newData = [];
        _this.whereData = [];
        _this.state = {
            startWhere: 0
        };
        _this.init(props);
        return _this;
    }
    Condition.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.init(props);
    };
    Condition.prototype.init = function (props) {
        this.data = props.data;
        this.field = props.field;
    };
    /**
     * @returns {any}
     */
    Condition.prototype.render = function () {
        var _this = this;
        var getData = this.dataParseLoop(this.data);
        return (React.createElement("div", { className: "condition" },
            React.createElement("div", { className: "box-group" },
                React.createElement("div", { className: "box-head" },
                    React.createElement("div", { className: "where-buttons" },
                        React.createElement(reactstrap_1.ButtonGroup, null,
                            React.createElement(reactstrap_1.Button, { size: "sm", color: "primary " + ((this.state.startWhere === 0) ? 'active' : ''), onClick: function () {
                                    _this.setState({
                                        startWhere: 0
                                    });
                                } }, "AND"),
                            React.createElement(reactstrap_1.Button, { size: "sm", color: "primary " + ((this.state.startWhere === 1) ? 'active' : ''), onClick: function () {
                                    _this.setState({
                                        startWhere: 1
                                    });
                                } }, "OR"))),
                    React.createElement("div", { className: "costom-buttons" },
                        React.createElement(reactstrap_1.ButtonGroup, null,
                            React.createElement(reactstrap_1.Button, { size: "sm", color: "success", onClick: function () {
                                    _this.addItems(_this.data, 'box');
                                } },
                                React.createElement(FaIcon_1.default, { code: "fa-plus" }),
                                React.createElement("span", null, "Add Rule")),
                            React.createElement(reactstrap_1.Button, { size: "sm", color: "success", onClick: function () {
                                    _this.addItems(_this.data, 'group');
                                } },
                                React.createElement(FaIcon_1.default, { code: "fa-plus" }),
                                React.createElement("span", null, "Add Group"))))),
                React.createElement("div", { className: "box-content" }, getData))));
    };
    Condition.prototype.dataParseLoop = function (data, key, returns) {
        var _this = this;
        var datas = [];
        data.forEach(function (value, index) {
            var keys = key !== undefined ? key + "-" + index : index.toString();
            value['key'] = keys;
            if (value.box === 'group') {
                datas.push(React.createElement("div", { className: "box-group", key: keys },
                    React.createElement("span", { className: "line" }),
                    React.createElement("div", { className: "box-head" },
                        React.createElement("div", { className: "where-buttons" },
                            React.createElement(reactstrap_1.ButtonGroup, null,
                                React.createElement(reactstrap_1.Button, { size: "sm", color: "primary " + ((value.where === 0) ? 'active' : ''), onClick: function () {
                                        value.where = 0;
                                        _this.forceUpdate();
                                    } }, "AND"),
                                React.createElement(reactstrap_1.Button, { size: "sm", color: "primary " + ((value.where === 1) ? 'active' : ''), onClick: function () {
                                        value.where = 1;
                                        _this.forceUpdate();
                                    } }, "OR"))),
                        React.createElement("div", { className: "costom-buttons" },
                            React.createElement(reactstrap_1.ButtonGroup, null,
                                React.createElement(reactstrap_1.Button, { size: "sm", color: "success", onClick: function () {
                                        _this.addItems(value, 'box');
                                    } },
                                    React.createElement(FaIcon_1.default, { code: "fa-plus" }),
                                    React.createElement("span", null, "Add Rule")),
                                React.createElement(reactstrap_1.Button, { size: "sm", color: "success", onClick: function () {
                                        _this.addItems(value, 'group');
                                    } },
                                    React.createElement(FaIcon_1.default, { code: "fa-plus" }),
                                    React.createElement("span", null, "Add Group")),
                                React.createElement(reactstrap_1.Button, { size: "sm", color: "danger", onClick: function () {
                                        _this.deleteItem(value, key, data, index);
                                    } },
                                    React.createElement(FaIcon_1.default, { code: "fa-trash" }),
                                    React.createElement("span", null, "Remove Group"))))),
                    React.createElement("div", { className: "box-content" }, (value.children !== undefined && value.children.length > 0 ? _this.dataParseLoop(value.children, keys, true) : ''))));
            }
            else {
                datas.push(_this.getSingleModel(value, keys, data, index));
            }
        });
        return datas;
    };
    Condition.prototype.getSingleModel = function (value, keys, data, index) {
        var _this = this;
        var boxHtml = React.createElement("div", { className: "box", key: keys },
            React.createElement("span", { className: "line" }),
            React.createElement("div", { className: "box-field" },
                React.createElement(SelectInput_1.default, { type: "single", name: "fieldSelect", items: this.field, activeItem: value.field, value: "fieldFullName", id: "id", onChange: function (e) {
                        value.field = e.target.value;
                        _this.forceUpdate();
                    } })),
            React.createElement("div", { className: "box-field" },
                React.createElement(SelectInput_1.default, { type: "single", name: "fieldSelect", items: this.operators, activeItem: value.operator, value: "label", id: "id", onChange: function (e) {
                        value.operator = e.target.value;
                        _this.forceUpdate();
                    } })),
            React.createElement("div", { className: "box-field" }, this.getValueComponent(value)),
            React.createElement("div", { className: "box-delete" },
                React.createElement(reactstrap_1.Button, { size: "sm", color: "danger", onClick: function () {
                        _this.deleteItem(value, keys, data, index);
                    } },
                    React.createElement(FaIcon_1.default, { code: "fa-times" }),
                    React.createElement("span", null, "Delete"))));
        return boxHtml;
    };
    Condition.prototype.addItems = function (val, type) {
        var item;
        var key = (val.children !== undefined) ? val.key + "-" + val.children.length : val.length;
        if (type === 'group') {
            item = { id: null, where: 0, key: key, box: 'group', children: [] };
        }
        else {
            item = { id: null, field: null, key: key, operator: null, value: null, box: 'box' };
        }
        if (val.children !== undefined) {
            val.children.push(item);
        }
        else {
            val.push(item);
        }
        this.forceUpdate();
    };
    Condition.prototype.deleteItem = function (value, keys, data, index) {
        if (data.length > 0 && index !== undefined) {
            data.splice(index, 1);
            this.forceUpdate();
        }
    };
    Condition.prototype.getValueComponent = function (value) {
        // find Operator
        var operator;
        var component;
        if (value.operator !== null) {
            this.operators.forEach(function (val) {
                if (value.operator === val.id) {
                    operator = val;
                }
            });
            if (operator.type === 'radio') {
                component = React.createElement(GetInput_1.default, { type: operator.type, name: "valueProp", value: value.value, data: this.likeOperator, onChange: function (val) {
                        value.value = val;
                    } });
            }
            else if (operator.type !== null) {
                component = React.createElement(GetInput_1.default, { type: operator.type, value: value.value, name: "valueProp", onChange: function (val) {
                        value.value = val;
                    } });
            }
        }
        return component;
    };
    Condition.prototype.getWhereTemplate = function () {
        return { data: this.data.slice(0), where: this.state.startWhere };
    };
    Condition.prototype.getDataWhere = function (data) {
        var _this = this;
        data.forEach(function (value) {
            if (value.children !== undefined && value.children.length > 0) {
                _this.getDataWhere(value.children);
            }
            else {
                _this.whereData.push(value);
            }
        });
    };
    ;
    Condition.prototype.getWhere = function () {
        this.whereData = [];
        this.getDataWhere(this.data);
        return this.whereData;
    };
    return Condition;
}(React.Component));
exports.default = Condition;
//# sourceMappingURL=Condition.js.map