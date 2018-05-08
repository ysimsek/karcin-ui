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
var BaseInput = /** @class */ (function (_super) {
    __extends(BaseInput, _super);
    function BaseInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    BaseInput.prototype.render = function () {
        return React.createElement(reactstrap_1.FormGroup, { tag: this.props.tag },
            React.createElement(reactstrap_1.Label, { for: this.props.id },
                React.createElement("b", null, this.props.label)),
            this.returnInput());
    };
    /**
     * Select the Input types
     * @returns {()[]}
     */
    BaseInput.prototype.returnInput = function () {
        var component = [];
        //email,password,select,textarea,file,radio,checkbox,time,color,search,datetime
        //TODO toolTip ekle, valid özelliği
        switch (this.props.type) {
            case "text":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "number":
                //TODO: . VE , OLAYLARINI ÇÖZ
                //TODO Decimal(, den sonra kaç karakter olacağını ayarla)
                //TODO Money input yap (3 er haneli sayı dilimleri)
                //TODO Artırım tuşunu step step yap
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "email":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "password":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "select":
                component.push(this.returnSelectInput(this.props.type));
                break;
            case "textarea":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "file":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "radio":
                component.push(this.returnRadioInput(this.props.type));
                break;
            case "checkbox":
                component.push(this.returnCheckInput(this.props.type));
                break;
            case "time":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "datetime":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "color":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
            case "search":
                component.push(this.returnBaseNormalInput(this.props.type));
                break;
        }
        return component;
    };
    BaseInput.prototype.returnBaseNormalInput = function (type) {
        return React.createElement(reactstrap_1.Input, { className: 'type' + type, key: this.props.id, type: type, name: this.props.name, id: this.props.id, placeholder: this.props.placeholder, bsSize: this.props.bsSize, disabled: this.props.disabled, hidden: this.props.hidden, readOnly: this.props.readOnly, onChange: this.onChange.bind(this) });
    };
    /**
     * Returned SelectInput Properties
     */
    BaseInput.prototype.returnSelectInput = function (type) {
        //TODO valueField, idField ekle
        //TODO Lütfen Seçiniz seçili olmaması lazım
        //TODO multi özelliği
        var component = [];
        var values = this.props.values;
        var me = this;
        var multiple = me.props.multiple == true ? true : false;
        component.push(React.createElement("option", { key: "default", id: "default" }, "L\u00FCtfen Se\u00E7iniz"));
        values.forEach(function (v) {
            component.push(React.createElement("option", { key: v.id, id: v.id, value: v[me.props.value] }, v[me.props.valueField]));
        }.bind(me));
        return React.createElement(reactstrap_1.Input, { type: type, name: me.props.name, id: me.props.id, multiple: me.props.multiple, onChange: me.onChange.bind(me) }, component);
    };
    /**
     * Returned RadioInput Properties
     * @param type
     * @returns {JSX.Element}
     */
    BaseInput.prototype.returnRadioInput = function (type) {
        //TODO : RETURN OBJECT ELEMENTS
        //TODO valuefield, idField ekle
        var component = [];
        var values = this.props.values;
        var me = this;
        var className = this.props.inline || this.props.inline == true ? "radio-inline" : "";
        var isChecked = this.props.checkId;
        values.forEach(function (v) {
            if (isChecked == v.value) {
                isChecked = true;
            }
            else
                isChecked = false;
            component.push(React.createElement(reactstrap_1.FormGroup, { check: true, disabled: v.disabled, className: className },
                React.createElement(reactstrap_1.Label, { check: true },
                    React.createElement(reactstrap_1.Input, { key: v.id, type: type, name: me.props.name, value: v.id }),
                    ' ',
                    v.value)));
        });
        return React.createElement(reactstrap_1.FormGroup, { tag: "fieldset", onChange: me.onChange.bind(me) }, component);
    };
    /**
     * Returned RadioInput Properties
     * @param type
     * @returns {JSX.Element}
     */
    BaseInput.prototype.returnCheckInput = function (type) {
        var component = [];
        var values = this.props.values;
        var me = this;
        values.forEach(function (v) {
            component.push(React.createElement(reactstrap_1.Form, { onChange: me.onChange.bind(me) },
                React.createElement(reactstrap_1.FormGroup, { check: true },
                    React.createElement(reactstrap_1.Label, { check: true },
                        React.createElement(reactstrap_1.Input, { type: type, value: v.value }),
                        v.value))));
        });
        return component;
    };
    BaseInput.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    BaseInput.propTypes = {
        valueField: "valueField",
        value: "value"
    };
    return BaseInput;
}(React.Component));
exports.default = BaseInput;
//# sourceMappingURL=BaseInput.js.map