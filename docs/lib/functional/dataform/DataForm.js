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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DateInput_1 = require("../../datepicker/DateInput");
var NumericInput_1 = require("../../inputs/NumericInput");
var PasswordInput_1 = require("../../inputs/PasswordInput");
var SelectInput_1 = require("../../inputs/selectInput/SelectInput");
var ColorInput_1 = require("../../inputs/ColorInput");
var TextInput_1 = require("../../inputs/TextInput");
var TextArea_1 = require("../../inputs/TextArea");
var RadioInput_1 = require("../../inputs/RadioInput");
var CheckInput_1 = require("../../inputs/CheckInput");
var LookUp_1 = require("../../functional/lookup/LookUp");
var Store_1 = require("../../store/Store");
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
        return React.createElement("div", { className: "karcin-dataform" }, React.createElement(reactstrap_1.Row, null, this.returnElements(this.props.fields)));
    };
    DataForm.prototype.returnElements = function (fields) {
        var _this = this;
        var components = [];
        var me = this;
        this.fieldLength = fields.length;
        fields.map(function (val, idx) {
            if (val[_this.props.visibilityText] || val[_this.props.visibilityText] === undefined) {
                switch (val[_this.props.typeText]) {
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
                    case "lookup":
                        components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getLookUp(val)));
                        break;
                    case "alert":
                        components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getAlert(val)));
                        break;
                    case "color":
                        components.push(React.createElement(reactstrap_1.Col, { key: idx, md: 12 / me.props.col }, me.getColorInput(val)));
                        break;
                }
            }
        });
        return components;
    };
    DataForm.prototype.getTextInput = function (value) {
        return React.createElement(TextInput_1.default, { name: value[this.props.nameText], label: this.props.label != false ? value[this.props.labelText] : undefined, value: this.state[value[this.props.nameText]], onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getPasswordInput = function (value) {
        return React.createElement(PasswordInput_1.default, { name: value[this.props.nameText], label: this.props.label != false ? value[this.props.labelText] : undefined, value: this.state[value[this.props.nameText]], onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.getNumericInput = function (value) {
        return React.createElement(NumericInput_1.default, { name: value[this.props.nameText], value: this.state[value[this.props.nameText]], label: this.props.label != false ? value[this.props.labelText] : undefined, onChange: this.handleChange.bind(this) });
    };
    /**
     * SelectInput component
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getSelectInput = function (value) {
        return React.createElement(SelectInput_1.default, { name: value[this.props.nameText], items: this.props.values[value[this.props.nameText]], label: this.props.label != false ? value[this.props.labelText] : undefined, id: value.idField, value: value.valueField, onChange: this.handleChange.bind(this) });
    };
    /**
     * DateInput
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getDateInput = function (value) {
        return React.createElement(DateInput_1.default, { name: value[this.props.nameText], label: this.props.label != false ? value[this.props.labelText] : undefined, value: this.state[value[this.props.nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * TODO : RadioInput , SelectInput , CheckInput için sabit dataların olması sağlanacak
     * Dışardan data almaya müsait olacaktır.
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getRadioInput = function (value) {
        return React.createElement(RadioInput_1.default, { name: value[this.props.nameText], value: this.state[value[this.props.nameText]], label: this.props.label != false ? value[this.props.labelText] : undefined, inline: true, formControl: true, items: this.props.values[value[this.props.nameText]], idField: value.idField, textField: value.valueField, onChange: this.handleChangeRadio.bind(this) });
    };
    /**
     * CheckInput Component
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getCheckInput = function (value) {
        return React.createElement(CheckInput_1.default, { name: value[this.props.nameText],
            // item={this.items[0]}
            items: this.props.values[value[this.props.nameText]], label: this.props.label != false ? value[this.props.labelText] : undefined, id: value.idField, value: value.valueField, onChange: this.handleChange.bind(this) });
    };
    /**
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getTextArea = function (value) {
        return React.createElement(TextArea_1.default, { name: value[this.props.nameText], label: this.props.label != false ? value[this.props.labelText] : undefined, value: this.state[value[this.props.nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * LookUp component
     * @param value
     */
    DataForm.prototype.getLookUp = function (value) {
        var values = this.props.values;
        var store = null, fieldLookup = [], textField;
        if (values[value.name] != undefined) {
            var inStore = values[value.name].store;
            fieldLookup = values[value.name].fields;
            store = new Store_1.default(inStore);
        }
        return React.createElement(LookUp_1.default, { field: fieldLookup, store: store, label: this.props.label != false ? value.label : undefined, name: value.name, textField: value.textField, onChange: this.onChange.bind(this) });
    };
    /**
     * Alert component
     * @param value
     */
    DataForm.prototype.getAlert = function (value) {
        return React.createElement("div", null, this.props.label == false ? undefined : React.createElement("label", { className: "label-properties" }, value.title), React.createElement(reactstrap_1.Alert, { color: value.color }, value.message));
    };
    /**
     * ColorInput component
     * @param value
     * @returns {any}
     */
    DataForm.prototype.getColorInput = function (value) {
        return React.createElement(ColorInput_1.default, { name: value[this.props.nameText], label: this.props.label != false ? value[this.props.labelText] : undefined, value: this.state[value[this.props.nameText]], onChange: this.handleChange.bind(this) });
    };
    DataForm.prototype.onChange = function (e, f) {
        var state = {};
        state[f] = e;
        this.setState(state);
    };
    /**
     * TODO : POPOVER AND TOOLTIP EKLE
     */
    DataForm.prototype.getChangeData = function () {
        var data = this.state;
        //TODO ilk başta array tipinde items alanlar tüm değerleri state de seçili geliyor,
        //TODO CHECKİNPUT TA array şeklinde data return ediyor Kontrollerin yapılması lazım
        // for(let item in data){
        //     if(typeof(data[item]) == "object"){
        //         if(data[item].length != undefined) {
        //             if (data[item].length > 1) {
        //                 data[item] = null;
        //             }
        //         }
        //     }
        // }
        return data;
    };
    DataForm.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    DataForm.prototype.handleChangeRadio = function (e) {
        var name = e.target.name;
        var state = [];
        var fields = this.props.fields;
        var values = this.props.values;
        var ffRadio = e.target.classList.value;
        if (fields.length > 0) {
            fields.map(function (field) {
                if (field.type == "radio") {
                    if (values[field.name] != undefined) {
                        values[field.name].map(function (value) {
                            if (value.id == Number(e.target.value)) {
                                state[e.target.name] = value;
                            }
                        });
                    }
                }
            });
        }
        this.setState(state);
    };
    /**
     * TODO : OBJEMİ DEĞİL Mİ KONTROLÜ YAP
     * @constructor
     */
    DataForm.prototype.UNSAFE_componentWillMount = function () {
        var _this = this;
        var state = {};
        var values = this.props.values;
        this.props.fields.map(function (val, idx) {
            if (typeof values[val[_this.props.nameText]] == "string") {
                state[val[_this.props.nameText]] = values[val[_this.props.nameText]];
            }
            else if (val[_this.props.typeText] == "date") {
                //bir şey yapılmasın
            }
            else {
                state[val[_this.props.nameText]] = values[val[_this.props.nameText]] || null;
            }
        });
        this.setState(state);
    };
    DataForm.defaultProps = {
        col: 2,
        buttonName: "Kaydet",
        nameText: "name",
        labelText: "label",
        typeText: "type",
        visibilityText: "visibility"
    };
    return DataForm;
}(React.Component));
exports.default = DataForm;
//# sourceMappingURL=DataForm.js.map