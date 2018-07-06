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
var Button_1 = require("../../functional/button/Button");
var DateInput_1 = require("../../datepicker/DateInput");
var NumericInput_1 = require("../../inputs/NumericInput");
var PasswordInput_1 = require("../../inputs/PasswordInput");
var SelectInput_1 = require("../../inputs/selectInput/SelectInput");
var TextInput_1 = require("../../inputs/TextInput");
var TextArea_1 = require("../../inputs/TextArea");
var RadioInput_1 = require("../../inputs/RadioInput");
var CheckInput_1 = require("../../inputs/CheckInput");
var reactstrap_1 = require("reactstrap");
var DataForm = /** @class */ (function (_super) {
    __extends(DataForm, _super);
    function DataForm(props) {
        var _this = _super.call(this, props) || this;
        _this.fieldLength = 0;
        _this.state = {};
        return _this;
    }
    DataForm.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(reactstrap_1.Row, null, this.returnElements(this.props.fields)),
            React.createElement("div", { style: { textAlign: "right", paddingTop: 10 } },
                React.createElement(Button_1.default, { name: "", onClick: this.getReturnStateObject.bind(this) }, this.props.buttonName)));
    };
    DataForm.prototype.returnElements = function (fields) {
        var components = [];
        var me = this;
        this.fieldLength = fields.length;
        fields.map(function (val, idx) {
            switch (val.type) {
                case "string":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getTextInput(val)));
                    break;
                case "password":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getPasswordInput(val)));
                    break;
                case "int":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getNumericInput(val)));
                    break;
                case "select":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getSelectInput(val)));
                    break;
                case "date":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getDateInput(val)));
                    break;
                case "radio":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getRadioInput(val)));
                    break;
                case "check":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getCheckInput(val)));
                    break;
                case "textarea":
                    components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getTextArea(val)));
                    break;
            }
        });
        return components;
    };
    DataForm.prototype.getTextInput = function (value) {
        return React.createElement(TextInput_1.default, { name: value.name, label: value.label, value: this.state[value.name], onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getPasswordInput = function (value) {
        return React.createElement(PasswordInput_1.default, { name: value.name, label: value.label, value: this.state[value.name], onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getNumericInput = function (value) {
        return React.createElement(NumericInput_1.default, { name: value.name, value: this.state[value.name], label: value.label, onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getSelectInput = function (value) {
        return React.createElement(SelectInput_1.default, { name: value.name, items: this.props.values[value.name], label: value.label, id: value.idField, value: value.valueField, onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getDateInput = function (value) {
        return React.createElement(DateInput_1.default, { name: value.name, label: value.label, value: this.state[value.name], handleChange: this.handleChange.bind(this) });
    };
    /**
     * TODO : RadioInput , SelectInput , CheckInput için sabit dataların olması sağlanacak
     * Dışardan data almaya müsait olacaktır.
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getRadioInput = function (value) {
        return React.createElement(RadioInput_1.default, { name: value.name, value: this.state[value.name], label: value.label, inline: true, items: this.props.values[value.name], idField: value.idField, textField: value.valueField, onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getCheckInput = function (value) {
        return React.createElement(CheckInput_1.default, { name: value.name, 
            // item={this.items[0]}
            items: this.props.values[value.name], label: value.label, id: value.idField, value: value.valueField, onChange: this.handleChange.bind(this) });
    };
    /**
     * TODO : TEXTAREA LABEL PROPSUNU YAP
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getTextArea = function (value) {
        return React.createElement(TextArea_1.default, { name: value.name, label: value.label, value: this.state[value.name], onChange: this.handleChange.bind(this) });
    };
    /**
     * TODO : POPOVER AND TOOLTIP EKLE
     * @param e
     */
    DataForm.prototype.getReturnStateObject = function (e) {
        var a = this.state;
        this.props.fields.map(function (val, idx) {
            console.log(a);
            debugger;
        });
        this.props.returnData(this.state);
    };
    DataForm.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    /**
     * TODO : OBJEMİ DEĞİL Mİ KONTROLÜ YAP
     * @constructor
     */
    DataForm.prototype.UNSAFE_componentWillMount = function () {
        var state = {};
        var values = this.props.values;
        this.props.fields.map(function (val, idx) {
            debugger;
            if (typeof values[val.name] == "string") {
                state[val.name] = values[val.name];
            }
            else if (val.type == "date") {
                //bir şey yapılmasın
            }
            else {
                state[val.name] = null;
            }
        });
        this.setState(state);
    };
    DataForm.defaultProps = {
        col: 2,
        buttonName: "Kaydet"
    };
    return DataForm;
}(React.Component));
exports.default = DataForm;
//# sourceMappingURL=DataForm.js.map