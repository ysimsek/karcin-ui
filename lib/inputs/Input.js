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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Label_1 = require("../functional/label/Label");
var FaIcon_1 = require("../functional/faicon/FaIcon");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, id) {
            var newTarget = { 'target': {} };
            newTarget.target['name'] = e.target.name;
            newTarget.target['value'] = e.target.value;
            if (_this.props.type === 'radio') {
                if (_this.props.checkItems && _this.props.checkItems.length > 0) {
                    newTarget.target['value'] = [];
                    _this.props.checkItems.forEach(function (value, index) {
                        if (index === id) {
                            value['checked'] = e.target.checked;
                        }
                        else {
                            value['checked'] = false;
                        }
                        newTarget.target['value'].push(value);
                    });
                }
                else {
                    newTarget.target['value'] = e.target.checked;
                }
            }
            else if (_this.props.type === 'checkbox') {
                if (_this.props.checkItems && _this.props.checkItems.length > 0) {
                    newTarget.target['value'] = [];
                    _this.props.checkItems.forEach(function (value, index) {
                        if (index === id) {
                            value['checked'] = e.target.checked;
                        }
                        newTarget.target['value'].push(value);
                    });
                }
                else {
                    newTarget.target['value'] = e.target.checked;
                }
            }
            if (_this.props.checkItems && _this.props.checkItems.length > 0) {
                newTarget.target['index'] = id;
            }
            if (_this.props.onChange) {
                _this.props.onChange(newTarget);
            }
        };
        _this.state = {
            value: _this.props.value,
        };
        return _this;
    }
    Input.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            value: props.value
        });
    };
    Input.prototype.render = function () {
        var labelPositionClass = '';
        if (this.props.label) {
            labelPositionClass = this.props.labelPosition;
        }
        var labelOption = this.getFilterProps(['id']);
        return (React.createElement("div", __assign({}, labelOption, { className: "karcin-input " + this.props.type + "-input " + this.props.className + ' ' + labelPositionClass + (this.props.icon ? ' left-icon' : '') }),
            (this.props.label ? React.createElement(Label_1.default, { requireText: (this.props.requireText ? this.props.requireText : '') }, this.props.label) : ''),
            React.createElement("div", { className: "form-input-col" },
                this.props.icon ? React.createElement(FaIcon_1.default, { color: this.props.IconColor, code: this.props.icon, className: 'input-icon' }) : '',
                this.getInput())));
    };
    Input.prototype.getFilterProps = function (filter) {
        var _this = this;
        var newFilter = {};
        filter.forEach(function (value) {
            for (var item in _this.props) {
                if (value === item) {
                    newFilter[item] = _this.props[item];
                }
            }
        });
        return newFilter;
    };
    Input.prototype.getInput = function () {
        var _this = this;
        var returnInput, inputClass = 'input-form ' + (this.props.inputClass ? this.props.inputClass : '');
        var _a = this.props, labelPosition = _a.labelPosition, requireText = _a.requireText, icon = _a.icon, IconColor = _a.IconColor, label = _a.label, className = _a.className, style = _a.style, id = _a.id, valid = _a.valid, generalProps = __rest(_a, ["labelPosition", "requireText", "icon", "IconColor", "label", "className", "style", "id", "valid"]);
        var lineText = generalProps.lineText, checkIconColor = generalProps.checkIconColor, checkIcon = generalProps.checkIcon, checkItems = generalProps.checkItems, generalInput = __rest(generalProps, ["lineText", "checkIconColor", "checkIcon", "checkItems"]);
        switch (this.props.type) {
            case 'textarea':
                if (this.props.valid && !this.state.value) {
                    inputClass += ' valid';
                }
                returnInput = React.createElement("textarea", __assign({}, generalInput, { value: this.state.value, className: inputClass }));
                break;
            case 'checkbox':
            case 'radio':
                if (this.props.checkItems.length === 0) {
                    returnInput = this.getCheck(inputClass, generalInput);
                }
                else {
                    returnInput = [];
                    this.props.checkItems.forEach(function (value, index) {
                        var sendCheckProps = __rest(__assign({}, value, generalInput), []);
                        inputClass += " " + value.className;
                        returnInput.push(_this.getCheck(inputClass, sendCheckProps, index));
                    });
                }
                break;
            default:
                if (this.props.valid && !this.state.value) {
                    inputClass += ' valid';
                }
                returnInput = React.createElement("input", __assign({}, generalInput, { value: this.state.value, onChange: this.handleChange, className: inputClass }));
                break;
        }
        return returnInput;
    };
    Input.prototype.getCheck = function (inputClass, inputProps, index) {
        var _this = this;
        return React.createElement("label", { className: inputClass + " " + this.props.type + "-item" },
            React.createElement("input", __assign({}, inputProps, { checked: inputProps.checked, onChange: function (e) { _this.handleChange(e, index); } })),
            React.createElement("span", { className: "check-content" },
                React.createElement(FaIcon_1.default, { color: this.props.checkIconColor, code: this.props.checkIcon })),
            (index !== undefined) ? inputProps.lineText : this.props.lineText);
    };
    Input.defaultProps = {
        type: 'text',
        className: '',
        labelPosition: 'left',
        checkIcon: 'fa-check',
        checkItems: []
    };
    return Input;
}(React.Component));
exports.default = Input;
//# sourceMappingURL=Input.js.map