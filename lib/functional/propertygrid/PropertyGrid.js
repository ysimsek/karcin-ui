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
var reactstrap_1 = require("reactstrap");
var LookUp_1 = require("../../functional/lookup/LookUp");
var Store_1 = require("../../store/Store");
var SelectInput_1 = require("../../inputs/selectInput/SelectInput");
var ColorInput_1 = require("../../inputs/ColorInput");
var TextInput_1 = require("../../inputs/TextInput");
var NumericInput_1 = require("../../inputs/NumericInput");
var PasswordInput_1 = require("../../inputs/PasswordInput");
var TextArea_1 = require("../../inputs/TextArea");
var RadioInput_1 = require("../../inputs/RadioInput");
var CheckInput_1 = require("../../inputs/CheckInput");
var DateInput_1 = require("../../inputs/dateInput/DateInput");
var Badge_1 = require("../../functional/badge/Badge");
var FaIcon_1 = require("../faicon/FaIcon");
var PropertyGrid = /** @class */ (function (_super) {
    __extends(PropertyGrid, _super);
    function PropertyGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showTitleIDs: []
        };
        return _this;
    }
    PropertyGrid.prototype.render = function () {
        return React.createElement("div", { className: "property-grid-sizing" }, this.returnElements(this.props.fields, this.props.values));
    };
    /**
     * Get the state values ref method
     * @returns {Readonly<any>}
     */
    PropertyGrid.prototype.getData = function () {
        var data = this.state;
        return data;
    };
    /**
     * Return roperty grid elements
     **/
    PropertyGrid.prototype.returnElements = function (fields, values) {
        var _this = this;
        var components = [];
        fields.map(function (field, idx) {
            if (field.divTitle != undefined) {
                components.push(React.createElement("div", { id: idx.toString(), className: "propertygrid-full", style: { width: "100%" } },
                    React.createElement(Badge_1.default, { id: idx.toString(), className: "propertygrid-full propertygrid-badge", color: _this.props.titleColor }, field.divTitle)));
                components.push(React.createElement("table", { key: idx, style: { width: "100%" } },
                    React.createElement("tbody", { id: idx.toString() }, _this.returnFields(field.fields, values))));
            }
        });
        return components;
    };
    PropertyGrid.prototype.returnFields = function (fields, values) {
        var _this = this;
        var componentFields = [], me = this;
        fields.map(function (field, idx) {
            var v = null;
            var comp = [];
            if (values[field.name] != undefined) {
                v = values[field.name];
            }
            comp = me.getComponentSelect(field, v);
            var display = { display: "none" };
            var display2 = {};
            if (comp.length > 0) {
                componentFields.push(React.createElement("tr", { className: "propertygrid-tr", key: idx },
                    React.createElement("td", { style: { width: "30%" }, className: "propertygrid-td-first" }, field.label),
                    React.createElement("td", { style: me.state.selectedProp == field.name ? display2 : display, className: "propertygrid-td-second" }, comp),
                    React.createElement("td", { style: me.state.selectedProp == field.name ? display : display2, id: field.name, onClick: function () { me.getLabelActiveToInput(idx, field); } }, _this.getLabelActiveToLabel(field))));
            }
        });
        return componentFields;
    };
    /**
     * Label ile gösterim
     * @param e
     */
    PropertyGrid.prototype.getLabelActiveToInput = function (e, field) {
        this.setState({ selectedProp: field.name, selectedId: e });
    };
    /**
     * Label separeting
     * @param field
     * @returns {any}
     */
    PropertyGrid.prototype.getLabelActiveToLabel = function (field) {
        try {
            if (typeof (this.state[field.name]) == "string") {
                if (field.type == "password") {
                    var pass = "";
                    for (var i = 0; i < this.state[field.name].length; i++) {
                        pass += "*";
                    }
                    return this.provideOfShowLabel(pass, {}, "fa-unlock");
                }
                if (field.type == "color") {
                    var color = { color: this.state[field.name] };
                    return this.provideOfShowLabel(this.state[field.name], color, "fa-square");
                }
                if (field.type == "string") {
                    return this.provideOfShowLabel(this.state[field.name], {}, "fa-text-width");
                }
                if (field.type == "textarea") {
                    return this.provideOfShowLabel(this.state[field.name], {}, "fa-text-width");
                }
                if (field.type == "date") {
                    return this.provideOfShowLabel(this.state[field.name], {}, "fa-calendar");
                }
                if (field.type == "int") {
                    return this.provideOfShowLabel(this.state[field.name], {}, "fa-sort-numeric-asc");
                }
                return this.state[field.name];
            }
            else if (typeof (this.state[field.name]) == "number") {
                return this.provideOfShowLabel(this.state[field.name], {}, "fa-sort-numeric-asc");
            }
            else if (typeof (this.state[field.name]) == "object") {
                if (field.type == "lookup") {
                    if ((this.state[field.name])[field.textField] != undefined) {
                        return this.provideOfShowLabel((this.state[field.name])[field.textField], {}, "fa-align-left");
                    }
                }
                if (field.type == "check") {
                    var arr = this.state[field.name];
                    var returnName_1 = "";
                    arr.length > 0 ? arr.map(function (res) {
                        returnName_1 += res[field.valueField] != null ? res[field.valueField] + "," : "";
                    }) : null;
                    return this.provideOfShowLabel(returnName_1, {}, "fa-list-ol");
                }
                if (field.type == "radio") {
                    if ((this.state[field.name])["value"] != undefined || (this.state[field.name])[field.valueField] != undefined) {
                        return this.provideOfShowLabel((this.state[field.name])["value"] != undefined ? (this.state[field.name])["value"] : (this.state[field.name])[field.valueField], {}, "fa-list-ul");
                    }
                }
                if ((this.state[field.name])["value"] != undefined || (this.state[field.name])[field.valueField] != undefined) {
                    return this.provideOfShowLabel((this.state[field.name])["value"] != undefined ? (this.state[field.name])["value"] : (this.state[field.name])[field.valueField], {}, "fa-align-justify");
                }
                return null;
            }
            else if (typeof (this.state[field.name]) == "undefined") {
                debugger;
            }
        }
        catch (e) {
        }
        return this.state[field.name];
    };
    PropertyGrid.prototype.provideOfShowLabel = function (field, color, code) {
        return React.createElement("span", null,
            React.createElement(FaIcon_1.default, { style: color, code: code }),
            React.createElement("span", { style: { marginLeft: 10 } }, field));
    };
    PropertyGrid.prototype.getComponentSelect = function (field, value) {
        var component = [];
        switch (field.type) {
            case "select":
                component.push(this.getSelectInput(field));
                break;
            case "color":
                component.push(this.getColorInput(field));
                break;
            case "string":
                component.push(this.getTextInput(field));
                break;
            case "int":
                component.push(this.getNumericInput(field));
                break;
            case "password":
                component.push(this.getPasswordInput(field));
                break;
            case "textarea":
                component.push(this.getTextArea(field));
                break;
            case "radio":
                component.push(this.getRadioInput(field));
                break;
            case "check":
                component.push(this.getCheckInput(field));
                break;
            case "date":
                component.push(this.getDateInput(field));
                break;
            case "lookup":
                component.push(this.getLookUp(field));
                break;
            case "alert":
                component.push(this.getAlert(field));
                break;
        }
        return component;
    };
    /**
     * Return the SelectInput component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getSelectInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        var input = null;
        return React.createElement(SelectInput_1.default, { className: "propertgrid-size-select propertygrid-select", margin: true, name: field[nameText], items: this.props.values[field[nameText]], id: field.idField, value: field.valueField, onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the ColorInput component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getColorInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(ColorInput_1.default, { name: field[nameText], className: "property-grid-input", value: this.state[field[nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the TextInput Component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getTextInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(TextInput_1.default, { name: field[nameText], className: "property-grid-input", value: this.state[field[nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the NumericInput component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getNumericInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(NumericInput_1.default, { name: field[nameText], className: "property-grid-input", value: this.state[field[nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the PasswordInput component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getPasswordInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(PasswordInput_1.default, { name: field[nameText], className: "property-grid-input", value: this.state[field[nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the TextArea component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getTextArea = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(TextArea_1.default, { name: field[nameText], className: "property-grid-input-area", value: this.state[field[nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the RadioInput component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getRadioInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(RadioInput_1.default, { name: field[nameText], value: this.state[field[nameText]], className: "property-grid-input", inline: true, formControl: true, items: this.props.values[field[nameText]], idField: field.idField, textField: field.valueField, onChange: this.handleChangeRadio.bind(this) });
    };
    /**
     * Return the CheckInput component
     * @param field
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getCheckInput = function (field) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(CheckInput_1.default, { name: field[nameText], 
            // item={this.items[0]}
            items: this.props.values[field[nameText]], id: field.idField, value: field.valueField, onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the DateInput component
     * @param value
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getDateInput = function (value) {
        var nameText = this.props.nameText != undefined ? this.props.nameText : "";
        return React.createElement(DateInput_1.default, { name: value[nameText], className: "property-grid-input", value: this.state[value[nameText]], onChange: this.handleChange.bind(this) });
    };
    /**
     * Return the LookUp component
     * @param value
     * @returns :JSX.Element
     */
    PropertyGrid.prototype.getLookUp = function (value) {
        var values = this.props.values;
        var store = null, fieldLookup = [];
        if (values[value.name] != undefined) {
            var inStore = values[value.name].store;
            fieldLookup = values[value.name].fields;
            store = new Store_1.default(inStore);
        }
        return React.createElement(LookUp_1.default, { field: fieldLookup, store: store, name: value.name, className: "property-grid-input", textField: value.textField, onChange: this.lookupOnChange.bind(this) });
    };
    /**
     * Return the get Alert component
     * @param value
     * @returns {any}
     */
    PropertyGrid.prototype.getAlert = function (value) {
        return React.createElement("div", null,
            value.title != undefined ? React.createElement("label", { className: "label-properties" }, value.title) : null,
            React.createElement(reactstrap_1.Alert, { color: value.color }, value.message));
    };
    /**
     * Change the State
     * @param e
     * @param f
     */
    PropertyGrid.prototype.lookupOnChange = function (e, f) {
        var state = {};
        state[f] = e;
        this.setState(state);
    };
    /**
     * Change the State
     * All input but radioinput not
     * @param e
     */
    PropertyGrid.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    /**
     * Change the State RadioInput
     * @param e
     */
    PropertyGrid.prototype.handleChangeRadio = function (e) {
        var name = e.target.name;
        var state = [];
        var fields = this.props.fields;
        var values = this.props.values;
        var ffRadio = e.target.classList.value;
        try {
            if (fields.length > 0) {
                fields.map(function (fieldX) {
                    fieldX.fields.map(function (field, id) {
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
                });
            }
        }
        catch (e) {
            console.log("Tanımlanamayan nesne kullanıldı.");
        }
        this.setState(state);
    };
    /**
     * Change the State
     * Control the object,array,string or number
     */
    PropertyGrid.prototype.getControl = function () {
        var state = {};
        var values = this.props.values;
        var me = this;
        try {
            me.props.fields.map(function (val, idx) {
                val.fields.map(function (fieldModel, idxModel) {
                    if (Array.isArray(values[fieldModel.name])) {
                        var model = values[fieldModel.name];
                        state[fieldModel.name] = model;
                    }
                    else if (typeof (values[fieldModel.name]) == "string") {
                        state[fieldModel.name] = values[fieldModel.name];
                    }
                    else if (typeof (values[fieldModel.name]) == "undefined") {
                        state[fieldModel.name] = null;
                        //passwordu burda kontrol et
                    }
                    else if (typeof (values[fieldModel.name]) == "number") {
                        state[fieldModel.name] = values[fieldModel.name];
                    }
                    else if (typeof (values[fieldModel.name]) == "object") {
                        state[fieldModel.name] = values[fieldModel.name];
                    }
                    else {
                        console.log("Tanımlanamayan nesne kullanıldı.");
                    }
                });
            });
        }
        catch (e) {
            e.message;
            console.log("Tanımlanamayan nesne kullanıldı.");
        }
        this.setState(state);
    };
    /**
     * Control
     * @constructor
     */
    PropertyGrid.prototype.UNSAFE_componentWillMount = function () {
        this.getControl();
    };
    PropertyGrid.defaultProps = {
        nameText: "name",
        labelText: "label",
        typeText: "type",
        titleColor: "primary"
    };
    return PropertyGrid;
}(React.Component));
exports.default = PropertyGrid;
//# sourceMappingURL=PropertyGrid.js.map