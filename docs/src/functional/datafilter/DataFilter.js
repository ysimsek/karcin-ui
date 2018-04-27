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
var FaIcon_1 = require("../faicon/FaIcon");
var DataFilter = /** @class */ (function (_super) {
    __extends(DataFilter, _super);
    function DataFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.inputText = null;
        _this.operators = [
            { label: '=', name: 'equal' },
            { label: '!=', name: 'not equal' },
            { label: '<', name: 'less' },
            { label: '<=', name: 'less or equal' },
            { label: '>', name: 'greater' },
            { label: '>=', name: 'greater or equal' },
            { label: '~=', name: 'like' },
            { label: '|=', name: 'in(use | to separate)' }
        ];
        _this.state = {
            inputText: "",
            showing: { filterName: false, operator: false, value: false },
            selectedItem: [],
            selectText: [],
        };
        return _this;
    }
    DataFilter.prototype.render = function () {
        var _this = this;
        var getFilterItem = this.getSelectFieldItem();
        return (React.createElement("div", { className: "karcin-data-filter", onClick: function () {
                _this.focusInput();
            } },
            React.createElement("div", { className: "filter-content" },
                (this.state.selectedItem.length > 0) ?
                    React.createElement("div", { className: "selected-items" }, this.getSelectedItem())
                    : '',
                React.createElement("div", { className: "half-select" }, this.getSelectText()),
                React.createElement("div", { className: "text-input" },
                    React.createElement("input", { value: this.state.inputText, className: "form-control", type: this.inputType, name: "inputText", onKeyDown: function (e) { _this.inputKeyControl(e); }, id: "inputText", onChange: function (e) {
                            _this.handleChange(e);
                        }, ref: function (e) {
                            _this.inputText = e;
                        } }),
                    (this.state.showing.filterName || this.state.showing.operator || this.state.showing.value) ?
                        (getFilterItem.length > 0) ? React.createElement("div", { className: "selected-field" }, getFilterItem) : ""
                        : ''))));
    };
    DataFilter.prototype.handleChange = function (e) {
        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    };
    DataFilter.prototype.focusInput = function () {
        this.inputText.focus();
        this.fieldShowingControl();
    };
    DataFilter.prototype.inputOutFocus = function () {
        console.log(this.state.showing['filterName']);
    };
    DataFilter.prototype.getSelectFieldItem = function () {
        var _this = this;
        var getLists = [];
        if (this.props.field !== undefined) {
            if (this.state.showing.filterName) {
                this.props.field.forEach(function (value, index) {
                    getLists.push(React.createElement("div", { className: "item", onClick: function () {
                            _this.setName(value, index);
                        } },
                        React.createElement("span", null, value.label)));
                });
            }
            else if (this.state.showing.operator) {
                this.operators.forEach(function (value, index) {
                    getLists.push(React.createElement("div", { className: "item", onClick: function () {
                            _this.setOperator(value, index);
                        } },
                        React.createElement("span", null, value.label + " " + value.name)));
                });
            }
            else if (this.state.showing.value) {
                var getItems = this.fieldValueShowing();
                if (getItems.length > 0) {
                    getItems.forEach(function (value, index) {
                        getLists.push(React.createElement("div", { className: "item", onClick: function () {
                                _this.setValue(value, index);
                            } },
                            React.createElement("span", null, value.label)));
                    });
                }
            }
        }
        return getLists;
    };
    DataFilter.prototype.fieldValueShowing = function () {
        var _this = this;
        var getLists = [];
        var inputType = "text";
        this.props.field.forEach(function (value, index) {
            if (_this.state.selectText[0].name === value.name) {
                if (value.type === "password") {
                    getLists = [];
                    inputType = "password";
                }
                else if (value.type === "number") {
                    getLists = [];
                    inputType = "number";
                }
                else if (value.type === "select" || value.type === "radio") {
                    if (value.items !== undefined) {
                        getLists = value.items;
                    }
                    inputType = "text";
                }
                else {
                    getLists = [];
                    inputType = "text";
                }
            }
        });
        this.inputType = inputType;
        return getLists;
    };
    DataFilter.prototype.setName = function (val, id) {
        this.state.selectText.push(val);
        this.state.showing.filterName = false;
        this.state.showing.operator = true;
        this.forceUpdate();
        this.inputOutFocus();
    };
    DataFilter.prototype.setOperator = function (val, id) {
        this.state.selectText.push(val);
        this.state.showing.operator = false;
        this.state.showing.value = true;
        this.forceUpdate();
        this.inputOutFocus();
    };
    DataFilter.prototype.setValue = function (val, id) {
        this.state.selectText.push(val);
        this.state.showing.value = false;
        this.forceUpdate();
        this.textConvertItem();
    };
    DataFilter.prototype.getSelectedItem = function () {
        var _this = this;
        var getList = [];
        this.state.selectedItem.forEach(function (value, index) {
            // items value print
            var itemsName = [];
            value.forEach(function (val, id) {
                itemsName.push(val.label);
            });
            getList.push(React.createElement("div", { className: "item" },
                React.createElement("span", null, itemsName.join(' ')),
                React.createElement("span", { className: "close-button", onClick: function () {
                        _this.removeSelectItem(index);
                    } },
                    React.createElement(FaIcon_1.default, { code: "fa-times" }))));
        });
        return getList;
    };
    DataFilter.prototype.removeSelectItem = function (id) {
        this.state.selectedItem.splice(id, 1);
        this.forceUpdate();
    };
    DataFilter.prototype.fieldShowingControl = function () {
        if (this.state.selectText.length <= 0) {
            this.state.showing.filterName = true;
            this.forceUpdate();
        }
    };
    DataFilter.prototype.getSelectText = function () {
        var getLists = [];
        if (this.state.selectText.length > 0) {
            this.state.selectText.forEach(function (val) {
                getLists.push(React.createElement("span", null, val.label));
            });
        }
        return getLists;
    };
    DataFilter.prototype.textConvertItem = function () {
        if (this.state.selectText.length >= 3) {
            var text_1 = [];
            this.state.selectText.forEach(function (value, index) {
                text_1.push(value);
            });
            this.state.selectedItem.push(text_1);
            this.inputReset();
        }
    };
    DataFilter.prototype.inputReset = function () {
        this.setState({
            selectText: [],
            inputText: ""
        });
        this.inputType = "text";
    };
    DataFilter.prototype.inputKeyControl = function (event) {
        // "enter" key code
        if (event.keyCode === 13 && this.state.selectText.length >= 2) {
            this.setValue({ label: this.state.inputText }, 0);
        }
    };
    return DataFilter;
}(React.Component));
exports.default = DataFilter;
//# sourceMappingURL=DataFilter.js.map