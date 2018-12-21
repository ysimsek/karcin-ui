"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var BaseInput_1 = require("../../inputs/base/BaseInput");
var DateInput_1 = require("../../inputs/dateInput/DateInput");
var FaIcon_1 = require("../faicon/FaIcon");
var RadioInput_1 = require("../../inputs/RadioInput");
var GetInput = /** @class */ (function (_super) {
    __extends(GetInput, _super);
    function GetInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            listText: { value: "" },
            listItems: [],
            inputText: { value: _this.props.value },
            inputDownText: { value: "" },
        };
        return _this;
    }
    GetInput.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.state.inputText.value = props.value;
        this.forceUpdate();
    };
    GetInput.prototype.render = function () {
        return (React.createElement("div", { className: "karcin-get-input" }, this.getInput()));
    };
    GetInput.prototype.getInput = function () {
        var _this = this;
        var input;
        if (this.props.type === 'select') {
            input = React.createElement(SelectInput_1.default, { items: this.props.data, activeItem: this.state.inputText.value, onChange: function (e) {
                    _this.handleChange(e);
                } });
        }
        else if (this.props.type === 'date') {
            input = React.createElement(DateInput_1.default, { name: this.props.name, value: this.state.inputText.value, onChange: function (e) {
                    _this.handleChange(e);
                } });
        }
        else if (this.props.type === 'list') {
            input = React.createElement("div", { className: "listBox" }, React.createElement("div", { className: "listInput" }, React.createElement(BaseInput_1.default, { type: "text", name: this.props.name, value: this.state.listText.value, onChange: function (e) {
                    _this.state.listText.value = e.target.value;
                    _this.forceUpdate();
                }, onKeyDown: function (e) {
                    if (e.keyCode === 13) {
                        _this.listAddItem();
                    }
                } })), React.createElement("div", { className: "listButton" }, React.createElement(reactstrap_1.Button, { color: "primary", size: "sm", onClick: function () {
                    _this.listAddItem();
                } }, "Ekle")), React.createElement("div", { className: "selectedItems" }, this.listSelectedItems()));
        }
        else if (this.props.type === 'radio') {
            input = React.createElement("div", { className: "likeVal" }, React.createElement(RadioInput_1.default, { name: this.props.name, value: this.state.inputText.value, inline: true, items: this.props.data, idField: "id", textField: "value", onChange: function (e) {
                    _this.handleChange(e);
                } }), (this.state.inputText.value !== (null && "")) ?
                React.createElement(BaseInput_1.default, { type: "text", name: "likeValue", value: this.state.inputDownText.value, onChange: function (e) {
                        _this.state.inputDownText.value = e.target.value;
                        _this.forceUpdate();
                        _this.generalOnChange(e, e.target.value);
                    } })
                : '');
        }
        else {
            input = React.createElement(BaseInput_1.default, { type: this.props.type, name: this.props.name, value: this.state.inputText.value, onChange: function (e) {
                    _this.handleChange(e);
                } });
        }
        return input;
    };
    GetInput.prototype.handleChange = function (e) {
        this.state.inputText.value = e.target.value;
        this.forceUpdate();
        -this.generalOnChange(e, e.target.value);
    };
    GetInput.prototype.listAddItem = function () {
        if (this.state.listItems.indexOf(this.state.listText.value) === -1) {
            this.state.listItems.push(this.state.listText.value);
            this.state.listText.value = "";
            this.generalOnChange(undefined, this.state.listItems);
            this.forceUpdate();
        }
    };
    GetInput.prototype.listSelectedItems = function () {
        var _this = this;
        var items = [];
        if (this.state.listItems.length > 0) {
            this.state.listItems.forEach(function (value, index) {
                items.push(React.createElement("div", { className: "item" }, React.createElement("span", null, value), React.createElement("div", { className: "removeItem", onClick: function () {
                        _this.removeSelectedItems(index);
                    } }, React.createElement(FaIcon_1.default, { code: "fa-times" }))));
            });
        }
        return items;
    };
    GetInput.prototype.removeSelectedItems = function (id) {
        if (id !== undefined) {
            this.state.listItems.splice(id, 1);
            this.forceUpdate();
        }
    };
    GetInput.prototype.generalOnChange = function (e, data) {
        var value;
        if (this.props.type === "like") {
            if (parseInt(this.state.inputText.value) === 1) {
                value = "%" + this.state.inputDownText.value;
            }
            else if (parseInt(this.state.inputText.value) === 2) {
                value = this.state.inputDownText.value + "%";
            }
            else {
                value = "%" + this.state.inputDownText.value + "%";
            }
        }
        else if (this.props.type === "list") {
            value = this.state.listItems;
        }
        else {
            value = e.target.value;
        }
        this.props.onChange(value);
    };
    GetInput.defaultProps = {
        type: 'text',
        value: "",
        name: 'example'
    };
    return GetInput;
}(React.Component));
exports.default = GetInput;
//# sourceMappingURL=GetInput.js.map