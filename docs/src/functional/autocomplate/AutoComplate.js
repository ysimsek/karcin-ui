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
require("../../css/karcin-ui.css");
var AutoComplate = /** @class */ (function (_super) {
    __extends(AutoComplate, _super);
    function AutoComplate(props) {
        var _this = _super.call(this, props) || this;
        _this.selectInput = null;
        _this.state = {
            itemActive: { active: {} },
            selectedItem: { active: {} },
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
    AutoComplate.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.forceUpdate();
    };
    AutoComplate.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "karcin-select-input select-" + this.state.randomId, onClick: function () { if (_this.props.type !== "single") {
                _this.inputFocus();
            } } },
            React.createElement("div", { className: "form-group " + this.props.labelPosition },
                this.labelResult(),
                React.createElement("div", { className: "select-input-result" },
                    this.multiSelectResult(),
                    (this.state.showing.multiDrop && this.props.items.length > 0) ? this.getDropDownItems() : '')));
    };
    /**
     * label return methodu
     */
    AutoComplate.prototype.labelResult = function () {
        var returnLabel = null;
        if (this.props.label !== undefined) {
            returnLabel = React.createElement("label", { className: "label-properties" }, this.props.label);
        }
        return returnLabel;
    };
    /**
     * input focus method
     */
    AutoComplate.prototype.inputFocus = function () {
        this.selectInput.focus();
        this.state.showing.multiDrop = true;
        this.state.focusControl.control = true;
        this.forceUpdate();
    };
    /**
     * input out focus methodu
     */
    AutoComplate.prototype.inputFocusOut = function () {
        this.state.focusControl.control = false;
        this.state.showing.multiDrop = false;
        this.forceUpdate();
    };
    /**
     * multi input type result method
     */
    AutoComplate.prototype.multiSelectResult = function () {
        var _this = this;
        var returnHtml = React.createElement("div", { className: "multi-select-input " + ((this.state.focusControl.control) ? 'input-focus' : '') },
            React.createElement("input", { type: "text", placeholder: (this.state.selectedItem.length <= 0 ? this.props.placeholder !== false ? this.props.placeholder : '' : ''), value: this.state.inputText.value, onKeyDown: function (event) {
                    _this.inputKeyControl(event);
                }, className: "multi-input", ref: function (e) { _this.selectInput = e; }, onChange: function (e) { _this.multiHandleChangeInput(e); } }));
        return returnHtml;
    };
    /**
     * seçilen itemları silme methodu
     * @param id
     */
    AutoComplate.prototype.removeSelectItem = function (id) {
        this.state.selectedItem.splice(id, 1);
        this.forceUpdate();
        this.onChangeProps();
    };
    /**
     * multi select input da değişen value kontrol edip atama
     * @param event
     */
    AutoComplate.prototype.multiHandleChangeInput = function (event) {
        var value = event.target.value;
        this.state.inputText.value = value;
        this.forceUpdate();
        this.inputFocus();
    };
    /**
     * dropdown da gösterilecek itemları array return eden method
     */
    AutoComplate.prototype.getDropDownItems = function () {
        var _this = this;
        var itemsList = [];
        var newArray = [];
        var getPropsItems = this.props.items.slice(0);
        // selected item filter data
        if (this.state.selectedItem !== undefined && this.state.selectedItem.active[this.props.value] === this.state.inputText.value) {
            newArray.length = 0;
            getPropsItems.forEach(function (value) {
                var itemControl = false;
                if (value[_this.props.value] === _this.state.selectedItem.active[_this.props.value] && value[_this.props.id] === _this.state.selectedItem.active[_this.props.id]) {
                    itemControl = true;
                }
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
    AutoComplate.prototype.addSelectedItem = function (value) {
        this.state.selectedItem.active = value;
        this.state.itemActive.active = value;
        this.state.active.arrowActive = null;
        this.state.inputText.value = value[this.props.value];
        this.forceUpdate();
        this.onChangeProps();
    };
    /**
     * klavya tuş kontrol ana method
     * @param event
     */
    AutoComplate.prototype.inputKeyControl = function (event) {
        if (event.keyCode == 38) {
            this.arrowSelectFieldUp();
        }
        else if (event.keyCode == 40) {
            this.arrowSelectFieldDown();
        }
        else if (event.keyCode === 13) {
            this.enterSelectArrowItem();
        }
        else if (event.keyCode === 27) {
            this.inputFocusOut();
        }
    };
    /**
     * klavyeden üst yön tuşuna basınca dropdown item seçme methodu
     */
    AutoComplate.prototype.arrowSelectFieldUp = function () {
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
    AutoComplate.prototype.arrowSelectFieldDown = function () {
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
    AutoComplate.prototype.enterSelectArrowItem = function () {
        var value = this.state.dropDownItems.data[this.state.active.arrowActive];
        if (value !== undefined) {
            this.addSelectedItem(value);
        }
    };
    /**
     * props onChange methodu çalıştırma
     */
    AutoComplate.prototype.onChangeProps = function () {
        if (this.props.onChange !== undefined) {
            var target = {};
            var newArray = this.state.itemActive.active;
            target['id'] = newArray[this.props.id];
            target['name'] = this.props.name;
            target['value'] = newArray[this.props.value];
            target['parsedValue'] = newArray;
            this.props.onChange({ target: target });
        }
    };
    /**
     * props ' tan gelen active objesini atama
     */
    AutoComplate.prototype.itemActive = function () {
        if (this.props.activeItem !== undefined && this.props.activeItem !== "") {
            this.state.selectedItem.active = this.props.activeItem;
            this.forceUpdate();
        }
    };
    AutoComplate.defaultProps = {
        type: "single",
        id: "id",
        value: "value",
        labelPosition: "up",
        placeholder: "Lütfen Seçiniz"
    };
    return AutoComplate;
}(React.Component));
exports.default = AutoComplate;
//# sourceMappingURL=AutoComplate.js.map