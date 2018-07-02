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
var FaIcon_1 = require("../../functional/faicon/FaIcon");
require("../../css/karcin-ui.css");
var SelectInput = /** @class */ (function (_super) {
    __extends(SelectInput, _super);
    function SelectInput(props) {
        var _this = _super.call(this, props) || this;
        _this.selectInput = null;
        _this.state = {
            itemActive: [],
            selectedItem: [],
            inputText: { value: "" },
            showing: { multiDrop: false },
            dropDownItems: { data: [] },
            active: { arrowActive: null },
            focusControl: { control: false },
            randomId: Math.floor(Math.random() * 10)
        };
        // boş alana tıklanıldığını kontol eden method
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
        _this.itemActive();
        return _this;
    }
    SelectInput.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.props = props;
        this.forceUpdate();
    };
    SelectInput.prototype.render = function () {
        var _this = this;
        var selectInputType = null;
        if (this.props.type === "multi") {
            selectInputType = this.multiSelectResult();
        }
        else {
            selectInputType = this.singleSelectResult();
        }
        return React.createElement("div", { className: "karcin-select-input select-" + this.state.randomId, onClick: function () { if (_this.props.type !== "single") {
                _this.inputFocus();
            } } },
            React.createElement("div", { className: "form-group " + this.props.labelPosition },
                this.labelResult(),
                React.createElement("div", { className: "select-input-result" },
                    selectInputType,
                    (this.state.showing.multiDrop && this.props.items.length !== this.state.selectedItem.length) ? this.getDropDownItems() : '')));
    };
    /**
     * single select type result method
     */
    SelectInput.prototype.singleSelectResult = function () {
        var _this = this;
        var returnHtml = [];
        var activeId = '';
        if (this.state.selectedItem !== undefined && this.state.selectedItem.length > 0 && this.state.itemActive.length <= 0) {
            activeId = this.state.selectedItem[0][this.props.id];
        }
        else {
            if (this.state.itemActive.length > 0) {
                activeId = this.state.itemActive[0][this.props.id];
            }
            else {
                activeId = '';
            }
        }
        if (this.props.placeholder !== false) {
            returnHtml.push(React.createElement("option", { key: -1, value: 0 }, this.props.placeholder));
        }
        this.props.items.forEach(function (value, index) {
            var id = value[_this.props.id];
            var val = value[_this.props.value];
            if (id !== undefined && val !== undefined) {
                returnHtml.push(React.createElement("option", { key: index, value: id }, val));
            }
        });
        return React.createElement("select", { className: "form-control karcin-select " + this.props.className, value: activeId, name: this.props.name, onChange: function (e) { _this.singleHandleChange(e); } }, returnHtml);
    };
    /**
     * single select input ' un değiştiğinde value atama
     * @param event
     */
    SelectInput.prototype.singleHandleChange = function (event) {
        var _this = this;
        this.props.items.forEach(function (value, index) {
            if (value[_this.props.id].toString() === event.target.value) {
                _this.state.itemActive.length = 0;
                _this.state.itemActive.push(value);
                _this.forceUpdate();
                _this.onChangeProps();
            }
        });
    };
    /**
     * label return methodu
     */
    SelectInput.prototype.labelResult = function () {
        var returnLabel = null;
        if (this.props.label !== undefined) {
            returnLabel = React.createElement("label", { className: "label-properties" }, this.props.label);
        }
        return returnLabel;
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
            React.createElement("input", { type: "text", placeholder: (this.state.selectedItem.length <= 0 ? this.props.placeholder !== false ? this.props.placeholder : '' : ''), value: this.state.inputText.value, onKeyDown: function (event) {
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
        if (this.state.selectedItem.length > 0) {
            this.state.selectedItem.forEach(function (value, index) {
                getSelectItem.push(React.createElement("div", { className: "select-item", key: index },
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
        this.state.selectedItem.splice(id, 1);
        this.forceUpdate();
        this.onChangeProps();
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
        if (this.state.selectedItem.length > 0) {
            newArray.length = 0;
            getPropsItems.forEach(function (value) {
                var itemControl = false;
                _this.state.selectedItem.forEach(function (val) {
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
            itemsList.push(React.createElement("div", { className: "item " + ((_this.state.active.arrowActive === index) ? 'active' : ''), key: index + 1, onClick: function () { _this.addSelectedItem(value); } }, (_this.props.renderer !== undefined) ? _this.props.renderer(value) : value[_this.props.value]));
        });
        this.state.dropDownItems.data = getPropsItems.slice(0);
        return React.createElement("div", { className: "select-dropdown" }, itemsList);
    };
    /**
     * seçilen item ' ı ekleme
     * @param value
     */
    SelectInput.prototype.addSelectedItem = function (value) {
        this.state.selectedItem.push(value);
        this.state.itemActive.push(value);
        this.state.inputText.value = "";
        this.state.active.arrowActive = null;
        this.forceUpdate();
        this.onChangeProps();
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
            var active_1 = this.state.active.arrowActive;
            this.state.active.arrowActive = active_1 - 1;
            this.forceUpdate();
        }
    };
    /**
     * klavyeden alt yön tuşuna basınca dropdown item seçme methodu
     */
    SelectInput.prototype.arrowSelectFieldDown = function () {
        this.inputFocus();
        if (this.state.dropDownItems.data.length >= 0) {
            var active_2 = 0;
            if (this.state.active.arrowActive !== null) {
                active_2 = this.state.active.arrowActive;
                if (active_2 < this.state.dropDownItems.data.length - 1) {
                    this.state.active.arrowActive = active_2 + 1;
                }
            }
            else {
                this.state.active.arrowActive = active_2;
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
        this.removeSelectItem(this.state.selectedItem.length - 1);
    };
    /**
     * props onChange methodu çalıştırma
     */
    SelectInput.prototype.onChangeProps = function () {
        var _this = this;
        if (this.props.onChange !== undefined) {
            var target_1 = {};
            if (this.props.type === "multi") {
                var newArray = this.state.itemActive;
                target_1['id'] = [];
                target_1['name'] = this.props.name;
                target_1['value'] = [];
                target_1['parsedValue'] = newArray;
                newArray.forEach(function (val) {
                    target_1['id'].push(val[_this.props.id]);
                    target_1['parsedValue'].push(val[_this.props.value]);
                });
            }
            else {
                var newArray = this.state.itemActive[0];
                target_1['id'] = newArray[this.props.id];
                target_1['name'] = this.props.name;
                target_1['value'] = newArray[this.props.value];
                target_1['parsedValue'] = newArray;
            }
            this.props.onChange({ target: target_1 });
        }
    };
    /**
     * props ' tan gelen active objesini atama
     */
    SelectInput.prototype.itemActive = function () {
        var _this = this;
        if (this.props.activeItem !== undefined && this.props.activeItem !== "") {
            if (Array.isArray(this.props.activeItem)) {
                this.props.activeItem.forEach(function (value, index) {
                    _this.state.selectedItem.push(value);
                });
            }
            else {
                this.state.selectedItem.push(this.props.activeItem);
            }
            this.render();
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