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
var FaIcon_1 = require("../../functional/faicon/FaIcon");
var Label_1 = require("../../functional/label/Label");
require("../../css/karcin-ui.css");
var Scrollbars = require('react-custom-scrollbars').Scrollbars;
var SelectInput = /** @class */ (function (_super) {
    __extends(SelectInput, _super);
    function SelectInput(props) {
        var _this = _super.call(this, props) || this;
        _this.selectInput = null;
        _this.state = {
            itemActive: _this.props.activeItem,
            selectedItem: { val: [], ids: [] },
            inputText: { value: "" },
            showing: { multiDrop: false },
            dropDownItems: { data: [] },
            active: { arrowActive: null },
            focusControl: { control: false },
            randomId: Math.floor(Math.random() * 10)
        };
        // boş alana tıklanıldığını kontol eden method
        if (_this.props.type === 'multi') {
            window.addEventListener('click', function (event) {
                var control = false;
                event.path.forEach(function (value) {
                    if (value.className !== undefined && value.className !== "" && value.className.indexOf("karcin-select-input") !== -1 && value.className.indexOf('select-' + _this.state.randomId) !== -1) {
                        control = true;
                    }
                });
                if (!control) {
                    _this.inputFocusOut();
                }
            });
        }
        return _this;
    }
    SelectInput.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.setState({
            itemActive: props.activeItem
        });
    };
    SelectInput.prototype.render = function () {
        var _this = this;
        var selectInputType = null;
        if (this.props.type === "multi") {
            this.setSelectedItem();
            selectInputType = this.multiSelectResult();
        }
        else {
            selectInputType = this.singleSelectResult();
        }
        return React.createElement("div", { className: "karcin-select-input select-" + this.state.randomId + " karcin-input", onClick: function () { if (_this.props.type !== "single") {
                _this.inputFocus();
            } } },
            React.createElement("div", { className: this.props.margin == true ? "propertygrid-select" : "form-group " + this.props.labelPosition },
                this.props.label ? React.createElement(Label_1.default, null, this.props.label) : '',
                React.createElement("div", { className: "select-input-result" },
                    selectInputType,
                    (this.state.showing.multiDrop && this.props.items.length !== this.state.selectedItem.ids.length) ? this.getDropDownItems() : '')));
    };
    SelectInput.prototype.setSelectedItem = function () {
        var _this = this;
        this.state.selectedItem.val = [];
        this.state.selectedItem.ids = [];
        if (this.props.items !== undefined && this.state.itemActive !== undefined) {
            this.props.items.forEach(function (value) {
                _this.state.itemActive.forEach(function (val) {
                    if (value[_this.props.id] === val) {
                        _this.state.selectedItem.val.push(value);
                        _this.state.selectedItem.ids.push(val);
                    }
                });
            });
        }
    };
    /**
     * single select type result method
     */
    SelectInput.prototype.singleSelectResult = function () {
        var _this = this;
        var returnHtml = [];
        var activeId = '';
        if (this.props.activeItem !== (undefined || null)) {
            activeId = this.props.activeItem;
        }
        else {
            activeId = '';
        }
        if (this.props.placeholder !== false) {
            returnHtml.push(React.createElement("option", { key: -1, value: 0 }, this.props.placeholder));
        }
        this.props.items.forEach(function (value, index) {
            var id = value[_this.props.id];
            var val = value[_this.props.value];
            if (id !== undefined && val !== undefined) {
                returnHtml.push(React.createElement("option", { key: _this.state.randomId + "-" + index, value: id }, _this.props.renderer !== undefined ? _this.props.renderer(val) : val));
            }
        });
        return React.createElement("select", { className: "form-control karcin-select " + this.props.className, value: activeId, name: this.props.name, onChange: function (e) {
                _this.singleHandleChange(e);
            } }, returnHtml);
    };
    /**
     * single select input ' un değiştiğinde value atama
     * @param event
     */
    SelectInput.prototype.singleHandleChange = function (event) {
        var _this = this;
        this.props.items.forEach(function (value, index) {
            if (value[_this.props.id].toString() === event.target.value) {
                _this.onChangeProps(value);
            }
        });
    };
    /**
     * input focus method
     */
    SelectInput.prototype.inputFocus = function () {
        this.selectInput.focus();
        this.state.showing.multiDrop = true;
        this.state.focusControl.control = true;
        this.forceUpdate();
    };
    /**
     * input out focus methodu
     */
    SelectInput.prototype.inputFocusOut = function () {
        this.state.focusControl.control = false;
        this.state.showing.multiDrop = false;
        this.forceUpdate();
    };
    /**
     * multi input type result method
     */
    SelectInput.prototype.multiSelectResult = function () {
        var _this = this;
        var returnHtml = React.createElement("div", { className: "multi-select-input " + ((this.state.focusControl.control) ? 'input-focus' : '') },
            this.getMultiSelectItem(),
            React.createElement("input", { type: "text", placeholder: (this.state.selectedItem.val.length <= 0 ? this.props.placeholder !== false ? this.props.placeholder : '' : ''), value: this.state.inputText.value, onKeyDown: function (event) {
                    _this.inputKeyControl(event);
                }, className: "multi-input", ref: function (e) { _this.selectInput = e; }, onChange: function (e) { _this.multiHandleChangeInput(e); } }));
        return returnHtml;
    };
    /**
     * seçili itemları listeleme methodu
     */
    SelectInput.prototype.getMultiSelectItem = function () {
        var _this = this;
        var getSelectItem = [];
        if (this.state.selectedItem.val !== undefined && this.state.selectedItem.val.length > 0) {
            this.state.selectedItem.val.forEach(function (value, index) {
                getSelectItem.push(React.createElement("div", { className: "select-item", key: _this.state.randomId + "-" + index },
                    React.createElement("span", null, (_this.props.selectedRenderer !== undefined) ? _this.props.selectedRenderer(value) : value[_this.props.value]),
                    React.createElement("i", { className: "close-button", onClick: function () { _this.removeSelectItem(index); } },
                        React.createElement(FaIcon_1.default, { code: "fa-times" }))));
            });
        }
        return getSelectItem;
    };
    /**
     * seçilen itemları silme methodu
     * @param id
     */
    SelectInput.prototype.removeSelectItem = function (id) {
        var items = this.state.selectedItem.val.slice(0);
        items.splice(id, 1);
        this.forceUpdate();
        this.onChangeProps(items);
    };
    /**
     * multi select input da değişen value kontrol edip atama
     * @param event
     */
    SelectInput.prototype.multiHandleChangeInput = function (event) {
        var value = event.target.value;
        this.state.inputText.value = value;
        this.forceUpdate();
        this.inputFocus();
    };
    /**
     * dropdown da gösterilecek itemları array return eden method
     */
    SelectInput.prototype.getDropDownItems = function () {
        var _this = this;
        var itemsList = [];
        var newArray = [];
        var getPropsItems = this.props.items.slice(0);
        // selected item filter data
        if (this.state.selectedItem.val.length > 0) {
            getPropsItems.forEach(function (value) {
                var itemControl = false;
                _this.state.selectedItem.val.forEach(function (val) {
                    if (value[_this.props.id] === val[_this.props.id] && value[_this.props.value] === val[_this.props.value]) {
                        itemControl = true;
                    }
                });
                if (!itemControl) {
                    newArray.push(value);
                }
            });
            getPropsItems.length = 0;
            getPropsItems = newArray.slice(0);
        }
        // input text filter data
        if (this.state.inputText.value !== "") {
            newArray.length = 0;
            getPropsItems.forEach(function (value) {
                if (value[_this.props.value].search(_this.state.inputText.value) !== -1 || value[_this.props.value].toLowerCase().search(_this.state.inputText.value) !== -1) {
                    newArray.push(value);
                }
            });
            getPropsItems.length = 0;
            getPropsItems = newArray.slice(0);
        }
        getPropsItems.forEach(function (value, index) {
            itemsList.push(React.createElement("div", { className: "item " + ((_this.state.active.arrowActive === index) ? 'active' : ''), key: _this.state.randomId + "-" + index, onClick: function () { _this.addSelectedItem(value); } }, (_this.props.renderer !== undefined) ? _this.props.renderer(value) : value[_this.props.value]));
        });
        this.state.dropDownItems.data = getPropsItems.slice(0);
        return React.createElement("div", { className: "select-dropdown" },
            React.createElement(Scrollbars, { style: { width: '100%', height: '100%' } }, itemsList));
    };
    /**
     * seçilen item ' ı ekleme
     * @param value
     */
    SelectInput.prototype.addSelectedItem = function (value) {
        var items = this.state.selectedItem.val.slice(0);
        items.push(value);
        this.state.inputText.value = "";
        this.state.active.arrowActive = null;
        this.forceUpdate();
        this.onChangeProps(items);
    };
    /**
     * klavya tuş kontrol ana method
     * @param event
     */
    SelectInput.prototype.inputKeyControl = function (event) {
        if (event.keyCode == 38) {
            this.arrowSelectFieldUp();
        }
        else if (event.keyCode == 40) {
            this.arrowSelectFieldDown();
        }
        else if (event.keyCode === 13) {
            this.enterSelectArrowItem();
        }
        else if (event.keyCode === 8 && this.state.inputText.value.length <= 0) {
            this.backSpaceRemove();
        }
        else if (event.keyCode === 27) {
            this.inputFocusOut();
        }
    };
    /**
     * klavyeden üst yön tuşuna basınca dropdown item seçme methodu
     */
    SelectInput.prototype.arrowSelectFieldUp = function () {
        this.inputFocus();
        if (this.state.active.arrowActive > 0 && this.state.active.arrowActive !== null) {
            var active = this.state.active.arrowActive;
            this.state.active.arrowActive = active - 1;
            this.forceUpdate();
        }
    };
    /**
     * klavyeden alt yön tuşuna basınca dropdown item seçme methodu
     */
    SelectInput.prototype.arrowSelectFieldDown = function () {
        this.inputFocus();
        if (this.state.dropDownItems.data.length >= 0) {
            var active = 0;
            if (this.state.active.arrowActive !== null) {
                active = this.state.active.arrowActive;
                if (active < this.state.dropDownItems.data.length - 1) {
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
     * klavyeden enter ' a basınca çalışacak method
     */
    SelectInput.prototype.enterSelectArrowItem = function () {
        var value = this.state.dropDownItems.data[this.state.active.arrowActive];
        if (value !== undefined) {
            this.addSelectedItem(value);
        }
    };
    /**
     * kalvyeden back space' e basınca çalışacak method
     */
    SelectInput.prototype.backSpaceRemove = function () {
        this.removeSelectItem(this.state.itemActive.length - 1);
    };
    /**
     * props onChange methodu çalıştırma
     */
    SelectInput.prototype.onChangeProps = function (items) {
        var _this = this;
        if (this.props.onChange !== undefined) {
            var target_1 = {};
            if (this.props.type === "multi") {
                target_1['name'] = this.props.name;
                target_1['value'] = [];
                target_1['parsedValue'] = items;
                items.forEach(function (val) {
                    target_1['value'].push(val[_this.props.id]);
                });
            }
            else {
                target_1['name'] = this.props.name;
                target_1['value'] = items[this.props.id];
                target_1['parsedValue'] = items;
            }
            this.props.onChange({ target: target_1 });
        }
    };
    SelectInput.defaultProps = {
        type: "single",
        id: "id",
        value: "value",
        labelPosition: "up",
        placeholder: "Lütfen Seçiniz"
    };
    return SelectInput;
}(React.Component));
exports.default = SelectInput;
//# sourceMappingURL=SelectInput.js.map