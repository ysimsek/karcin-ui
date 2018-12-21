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
var FaIcon_1 = require("../faicon/FaIcon");
var DataFilter = /** @class */ (function (_super) {
    __extends(DataFilter, _super);
    /**
     * Initial values
     * @param {DataFilterProps} props
     */
    function DataFilter(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = _super.call(this, props) || this;
        /**
         * @type {null}
         */
        _this.inputText = null;
        /**
         * @type {string}
         */
        _this.inputType = "text";
        /**
         * @type {{label: string; name: string}[]}
         */
        _this.operators = [
            (_a = {}, _a[_this.props.labelFieldName] = '=', _a[_this.props.nameFieldName] = 'equal', _a),
            (_b = {}, _b[_this.props.labelFieldName] = '!=', _b[_this.props.nameFieldName] = 'not equal', _b),
            (_c = {}, _c[_this.props.labelFieldName] = '<', _c[_this.props.nameFieldName] = 'less', _c),
            (_d = {}, _d[_this.props.labelFieldName] = '<=', _d[_this.props.nameFieldName] = 'less or equal', _d),
            (_e = {}, _e[_this.props.labelFieldName] = '>', _e[_this.props.nameFieldName] = 'greater', _e),
            (_f = {}, _f[_this.props.labelFieldName] = '>=', _f[_this.props.nameFieldName] = 'greater or equal', _f),
            (_g = {}, _g[_this.props.labelFieldName] = '~=', _g[_this.props.nameFieldName] = 'like', _g),
            (_h = {}, _h[_this.props.labelFieldName] = '|=', _h[_this.props.nameFieldName] = 'in(use | to separate)', _h)
        ];
        _this.state = {
            inputText: { value: "" },
            showing: { filterName: false, operator: false, value: false, dropValue: false },
            selectedItem: [],
            selectText: [],
            getListResult: { data: [] },
            active: { arrowActive: null },
            focusControl: { control: false }
        };
        // boş alana tıklanıldığını kontol eden method
        window.addEventListener('click', function (event) {
            if (_this.state.focusControl.control !== false) {
                var control_1 = false;
                event.path.forEach(function (value) {
                    if (value.className !== undefined && value.className !== "" && value.className.indexOf("karcin-data-filter") !== -1) {
                        control_1 = true;
                    }
                });
                if (!control_1) {
                    _this.inputOutFocus();
                }
            }
        });
        return _this;
    }
    /**
     * @returns {any}
     */
    DataFilter.prototype.render = function () {
        var _this = this;
        var getFilterItem = this.getSelectFieldItem();
        return (React.createElement("div", { className: "karcin-data-filter " + this.props.labelPosition, onClick: function () {
                _this.focusInput();
            } }, this.labelResult(), React.createElement("div", { className: "filter-content " + ((this.state.focusControl.control) ? 'input-focus' : '') }, (this.state.selectedItem.length > 0) ?
            React.createElement("div", { className: "selected-items" }, this.getSelectedItem())
            : '', React.createElement("div", { className: "half-select" }, this.getSelectText()), React.createElement("div", { className: "text-input" }, React.createElement("input", { value: this.state.inputText.value, className: "form-control", type: this.inputType, name: "inputText", onKeyDown: function (e) {
                _this.inputKeyControl(e);
            }, id: "inputText", onChange: function (e) {
                _this.handleChange(e);
            }, ref: function (e) {
                _this.inputText = e;
            } }), (this.state.showing.filterName || this.state.showing.operator || this.state.showing.value) ?
            (getFilterItem.length > 0) ? React.createElement("div", { className: "selected-field", key: 0 }, getFilterItem) : ""
            : ''))));
    };
    /**
     * input value control methodu
     * @param e
     */
    DataFilter.prototype.handleChange = function (e) {
        this.state.inputText.value = e.target.value;
        this.forceUpdate();
        this.fieldShowingControl();
    };
    /**
     * label return methodu
     */
    DataFilter.prototype.labelResult = function () {
        var returnLabel = null;
        if (this.props.label !== undefined) {
            returnLabel = React.createElement("label", { className: "karcin-label" }, this.props.label);
        }
        return returnLabel;
    };
    /**
     * input ' a focus olduğunda çalışan method
     */
    DataFilter.prototype.focusInput = function () {
        this.setState({
            focusControl: { control: true }
        });
        this.inputText.focus();
        this.fieldShowingControl();
        this.forceUpdate();
    };
    /**
     * dropdown ' u ve itemlarını aktifliğini sıfırlayan methos
     */
    DataFilter.prototype.inputOutFocus = function () {
        this.setState({
            showing: { filterName: false, operator: false, value: false, dropValue: false },
            active: { arrowActive: null },
            focusControl: { control: false }
        });
    };
    /**
     * input ' yazılan verileri ve inputu sıfırlayan method
     */
    DataFilter.prototype.inputReset = function () {
        this.setState({
            selectText: [],
            inputText: { value: "" }
        });
        this.inputType = "text";
    };
    /**
     * dropdown ' a basılacak itemları return eden method
     * @returns {JSX.Element[]}
     */
    DataFilter.prototype.getSelectFieldItem = function () {
        var _this = this;
        var getLists = [];
        var getListResultData = [];
        var getArray = [];
        if (this.props.field !== undefined) {
            if (this.state.showing.filterName) {
                getArray = [];
                // dropdown items
                this.props.field.forEach(function (value, index) {
                    if (_this.state.inputText.value !== "") {
                        if (!_this.props.labelCase) {
                            if (value[_this.props.labelFieldName].search(_this.state.inputText.value) !== -1) {
                                getArray.push(value);
                            }
                        }
                        else {
                            if (value[_this.props.labelFieldName].toLowerCase().search(_this.state.inputText.value.toLowerCase()) !== -1) {
                                getArray.push(value);
                            }
                        }
                    }
                    else {
                        getArray.push(value);
                    }
                });
                getArray.forEach(function (value, index) {
                    var returnHtml = React.createElement("div", { key: index, className: "item " + ((_this.state.active.arrowActive === index) ? 'active' : ''), onClick: function () {
                            _this.setName(value);
                        } }, React.createElement("span", null, value[_this.props.labelFieldName]));
                    getLists.push(returnHtml);
                    getListResultData.push(value);
                });
            }
            else if (this.state.showing.operator) {
                getArray = [];
                // dropdown items
                this.operators.forEach(function (value, index) {
                    if (_this.state.inputText.value !== "") {
                        if (!_this.props.labelCase) {
                            if (value[_this.props.labelFieldName].search(_this.state.inputText.value) !== -1) {
                                getArray.push(value);
                            }
                        }
                        else {
                            if (value[_this.props.labelFieldName].search(_this.state.inputText.value.toLowerCase()) !== -1) {
                                getArray.push(value);
                            }
                        }
                    }
                    else {
                        getArray.push(value);
                    }
                });
                getArray.forEach(function (value, index) {
                    var returnHtml = React.createElement("div", { key: index, className: "item " + ((_this.state.active.arrowActive === index) ? 'active' : ''), onClick: function () {
                            _this.setOperator(value);
                        } }, React.createElement("span", null, value[_this.props.labelFieldName] + " " + value[_this.props.nameFieldName]));
                    getLists.push(returnHtml);
                    getListResultData.push(value);
                });
            }
            else if (this.state.showing.value) {
                var getItems = this.fieldValueShowing();
                getArray = [];
                this.state.showing.dropValue = false;
                if (getItems.length > 0) {
                    this.state.showing.dropValue = true;
                    // dropdown items
                    getItems.forEach(function (value, index) {
                        if (_this.state.inputText.value !== "") {
                            if (!_this.props.labelCase) {
                                if (value[_this.props.labelFieldName].toLowerCase().search(_this.state.inputText.value) !== -1) {
                                    getArray.push(value);
                                }
                            }
                            else {
                                if (value[_this.props.labelFieldName].toLowerCase().search(_this.state.inputText.value.toLowerCase()) !== -1) {
                                    getArray.push(value);
                                }
                            }
                        }
                        else {
                            getArray.push(value);
                        }
                    });
                    getArray.forEach(function (value, index) {
                        var returnHtml = React.createElement("div", { key: index, className: "item " + ((_this.state.active.arrowActive === index) ? 'active' : ''), onClick: function () {
                                _this.setValue(value);
                            } }, React.createElement("span", null, value[_this.props.labelFieldName]));
                        getLists.push(returnHtml);
                        getListResultData.push(value);
                    });
                }
            }
        }
        this.state.getListResult.data.length = 0;
        this.state.getListResult.data = getListResultData;
        return getLists;
    };
    /**
     * input typenı belirleyen method
     * @returns {JSX.Element[]}
     */
    DataFilter.prototype.fieldValueShowing = function () {
        var _this = this;
        var getLists = [];
        var inputType = "text";
        this.props.field.forEach(function (value, index) {
            if (_this.state.selectText.length > 0 && _this.state.selectText[0][_this.props.nameFieldName] === value[_this.props.nameFieldName]) {
                if (value[_this.props.typeFieldName] === "password") {
                    getLists = [];
                    inputType = "password";
                }
                else if (value[_this.props.typeFieldName] === "number") {
                    getLists = [];
                    inputType = "number";
                }
                else if (value[_this.props.typeFieldName] === "select" || value[_this.props.typeFieldName] === "radio") {
                    if (value[_this.props.itemsFieldName] !== undefined) {
                        getLists = value[_this.props.itemsFieldName];
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
    /**
     * filtername seçildikten sonra setlemek için kullanılan method
     * @param val
     */
    DataFilter.prototype.setName = function (val) {
        val['openType'] = "filterName";
        this.state.selectText.push(val);
        this.state.showing.filterName = false;
        this.state.showing.operator = true;
        this.state.inputText.value = "";
        this.state.active.arrowActive = null;
        this.forceUpdate();
    };
    /**
     * operator seçildikten sonra setlemek için kullanılan method
     * @param val
     */
    DataFilter.prototype.setOperator = function (val) {
        val['openType'] = "operator";
        this.state.selectText.push(val);
        this.state.showing.operator = false;
        this.state.showing.value = true;
        this.state.inputText.value = "";
        this.state.active.arrowActive = null;
        this.forceUpdate();
    };
    /**
     * value seçildikten sonra setlemek için kullanılan method
     * @param val
     */
    DataFilter.prototype.setValue = function (val) {
        val['openType'] = "value";
        this.state.selectText.push(val);
        this.state.showing.value = false;
        this.state.inputText.value = "";
        this.forceUpdate();
        this.textConvertItem();
    };
    /**
     * selected yaptıktan sonra seçili değişkenine atayan method
     * @returns {JSX.Element[]}
     */
    DataFilter.prototype.getSelectedItem = function () {
        var _this = this;
        var getList = [];
        this.state.selectedItem.forEach(function (value, index) {
            // items value print
            var itemsName = [];
            value.forEach(function (val, id) {
                itemsName.push(val[_this.props.labelFieldName]);
            });
            getList.push(React.createElement("div", { className: "item", key: index }, React.createElement("span", null, itemsName.join(' ')), React.createElement("span", { className: "close-button", onClick: function () {
                    _this.removeSelectItem(index);
                } }, React.createElement(FaIcon_1.default, { code: "fa-times" }))));
        });
        return getList;
    };
    /**
     * seçili itemları silen method
     * @param {number} id
     */
    DataFilter.prototype.removeSelectItem = function (id) {
        this.state.selectedItem.splice(id, 1);
        this.state.active.arrowActive = null;
        if (this.props.onChange !== undefined) {
            this.props.onChange(this.state.selectedItem);
        }
        this.forceUpdate();
    };
    /**
     * filter namelerin dropdown u açan method
     */
    DataFilter.prototype.fieldShowingControl = function () {
        if (this.state.selectText.length <= 0) {
            this.state.showing.filterName = true;
            this.forceUpdate();
        }
    };
    /**
     * input da seçtikten sonra selectText ' e atayan method
     * @returns {JSX.Element[]}
     */
    DataFilter.prototype.getSelectText = function () {
        var _this = this;
        var getLists = [];
        if (this.state.selectText.length > 0) {
            this.state.selectText.forEach(function (val, index) {
                getLists.push(React.createElement("span", { key: index }, val[_this.props.labelFieldName]));
            });
        }
        return getLists;
    };
    /**
     * selectText' i selectItem' a atayan method
     */
    DataFilter.prototype.textConvertItem = function () {
        if (this.state.selectText.length >= 3) {
            var text_1 = [];
            this.state.selectText.forEach(function (value, index) {
                text_1.push(value);
            });
            this.state.selectedItem.push(text_1);
            this.inputReset();
            this.props.onChange(this.state.selectedItem);
        }
    };
    /**
     * input focusken key controlu yapan ona göre metodları çalıştıran method
     * @param event
     */
    DataFilter.prototype.inputKeyControl = function (event) {
        var _a;
        // "enter" key code
        if (event.keyCode === 13) {
            // value select item 
            if (this.state.getListResult.data.length <= 0 && this.state.selectText.length >= 2 && this.state.inputText.value !== "" && !this.state.showing.dropValue) {
                this.setValue((_a = {}, _a[this.props.labelFieldName] = this.state.inputText.value, _a));
            }
            if (this.state.active.arrowActive !== null) {
                this.enterSelectArrowItem();
            }
        }
        else if (event.keyCode === 8 && this.state.inputText.value === "" && (this.state.selectedItem.length > 0 || this.state.selectText.length > 0)) {
            this.backSpaceRemoveItem();
        }
        else if (event.keyCode == 38) {
            this.arrowSelectFieldUp();
        }
        else if (event.keyCode == 40) {
            this.arrowSelectFieldDown();
        }
    };
    /**
     * backspace bastığımızda itemları ve karakterleri silen method
     */
    DataFilter.prototype.backSpaceRemoveItem = function () {
        var _this = this;
        var lastItem = [];
        var inItemLast = {};
        if (this.state.selectText.length > 0) {
            inItemLast = this.state.selectText[this.state.selectText.length - 1];
            lastItem = this.state.selectText.slice(this.state.selectText.length - 1);
            this.state.selectText.splice(this.state.selectText.length - 1, 1);
            this.inputType = "text";
            for (var item in this.state.showing) {
                if (item === lastItem[0].openType) {
                    this.state.showing[item] = true;
                }
                else {
                    this.state.showing[item] = false;
                }
            }
        }
        else {
            lastItem = this.state.selectedItem.slice(this.state.selectedItem.length - 1);
            this.state.selectedItem.splice(this.state.selectedItem.length - 1, 1);
            lastItem[0].forEach(function (value, index) {
                var numbers = index + 1;
                if (lastItem[0].length > numbers) {
                    _this.state.selectText.push(value);
                }
                else {
                    inItemLast = value;
                    // fieldShowingControl
                    for (var item in _this.state.showing) {
                        if (item === value.openType) {
                            _this.state.showing[item] = true;
                        }
                        else {
                            _this.state.showing[item] = false;
                        }
                    }
                }
            });
        }
        this.state.active.arrowActive = null;
        this.state.inputText.value = inItemLast[this.props.labelFieldName];
        this.forceUpdate();
    };
    /**
     * arrow up ' a bastığımız zaman dropdowndaki itemları seçmek için kullanılan method
     */
    DataFilter.prototype.arrowSelectFieldUp = function () {
        this.dropdownShowing();
        if (this.state.active.arrowActive > 0) {
            var active = this.state.active.arrowActive;
            this.state.active.arrowActive = active - 1;
            this.forceUpdate();
        }
    };
    /**
     * arrow down ' a bastığımız zaman dropdowndaki itemları seçmek için kullanılan method
     */
    DataFilter.prototype.arrowSelectFieldDown = function () {
        this.dropdownShowing();
        if (this.state.getListResult.data.length >= 0) {
            var active = 0;
            if (this.state.active.arrowActive !== null) {
                active = this.state.active.arrowActive;
                if (active < this.state.getListResult.data.length - 1) {
                    this.state.active.arrowActive = active + 1;
                }
            }
            else {
                this.state.active.arrowActive = active;
            }
            this.forceUpdate();
        }
    };
    /**
     * arrow tuşlarıyla seçtikten sonra enter tuşuna basarak seçmemizi sağlayan method
     */
    DataFilter.prototype.enterSelectArrowItem = function () {
        var value = this.state.getListResult.data[this.state.active.arrowActive];
        if (value !== undefined) {
            if (this.state.showing.filterName) {
                this.setName(value);
            }
            else if (this.state.showing.operator) {
                this.setOperator(value);
            }
            else if (this.state.showing.value) {
                this.setValue(value);
            }
        }
    };
    /**
     * dropdown content controlling of the showing
     */
    DataFilter.prototype.dropdownShowing = function () {
        if (this.state.selectText.length === 2) {
            this.state.showing.value = true;
        }
        else if (this.state.selectText.length === 1) {
            this.state.showing.operator = true;
        }
        else {
            this.state.showing.filterName = true;
        }
        this.forceUpdate();
    };
    /**
     * Default props
     * @type {{labelPosition: string}}
     */
    DataFilter.defaultProps = {
        labelPosition: 'up',
        labelCase: true,
        nameFieldName: 'name',
        typeFieldName: 'type',
        labelFieldName: 'label',
        itemsFieldName: 'items'
    };
    return DataFilter;
}(React.Component));
exports.default = DataFilter;
//# sourceMappingURL=DataFilter.js.map