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
var CheckInput = /** @class */ (function (_super) {
    __extends(CheckInput, _super);
    function CheckInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.isChecked = false;
        props.items != undefined ?
            props.items.map(function (v, i) {
                _this.state[v[props.id]] = false;
            })
            : _this.state[props.item.id] = false;
        return _this;
    }
    /**
     * isChecked false olana kadar seçili datalar ayıklanır ve
     * tüm datanın state durumu güncellenir,
     * id : true or false şeklinde tüm checkinputlar state te tutulur.
     * @returns {any}
     */
    CheckInput.prototype.render = function () {
        var me = this;
        var validColor = this.props.valid != undefined ? (this.props.valid != false ? (this.isValid() == false ? "red" : "") : "") : "";
        return React.createElement("div", { className: "karcin-input" },
            this.props.label != undefined ? React.createElement("b", null, this.props.label) : "",
            React.createElement("div", { className: "list-group-item form-group", style: { borderColor: validColor } },
                me.props.items != undefined ? this.returnItems() : this.returnItem(),
                this.isChecked = true));
    };
    CheckInput.prototype.returnItems = function () {
        var _this = this;
        var me = this;
        return me.props.items.length > 0 ?
            me.props.items.map(function (value, i) { return (React.createElement("div", { key: i },
                React.createElement("label", { className: "check-container" },
                    _this.props.onRenderer != undefined ? _this.props.onRenderer(value) : value[me.props.value],
                    _this.childInputElements(value),
                    React.createElement("span", { className: "checkmark" })))); }) : React.createElement("div", { key: -1 },
            React.createElement("label", { className: "check-container" },
                this.childInputElements(null),
                React.createElement("span", { className: "checkmark" })));
    };
    CheckInput.prototype.returnItem = function () {
        var me = this;
        return React.createElement("div", { key: this.props.key },
            React.createElement("label", { className: "check-container" },
                me.props.onRenderer != undefined ? me.props.onRenderer(me.props.item) : me.props.item[me.props.value],
                this.childInputElements(me.props.item),
                React.createElement("span", { className: "checkmark" })));
    };
    /**
     * CheckObjects varsa checked ile kontrol sağlanıyor,
     * Eğer ki yoksa inputun kendinden kontrol sağlanıyor
     * @param value
     * @returns {any}
     */
    CheckInput.prototype.childInputElements = function (value) {
        var _this = this;
        var me = this;
        return value != null ? (this.props.checkObjects != undefined ?
            React.createElement("input", { className: "checkbox", onChange: function (e) { return _this.onChange(value[me.props.id], e.target.checked); }, type: 'checkbox', value: this.state[value[me.props.value]], checked: this.isChecked == false ?
                    this.returnTrueOrFalseChecked(value) :
                    this.isCheckedControl(value) }) :
            React.createElement("input", { className: "checkbox", onChange: function (e) { return _this.onChange(value[me.props.id], e.target.checked); }, type: 'checkbox', value: this.state[value[me.props.value]] })) : "item undefined";
    };
    /**
     * State kontrolü ile check olup omadığı kontrol edilir.
     * Daha önce onChange metodunda state ki kontrol direkt olarak değiştiği
     * için true ya da false değeri direkt return olunur.
     * @param val
     * @returns {boolean}
     */
    CheckInput.prototype.isCheckedControl = function (val) {
        return this.state[val[this.props.id]];
    };
    /**
     * Props methoda array şeklinde return oluyor
     * @param key
     * @param value
     */
    CheckInput.prototype.onChange = function (key, value) {
        var _this = this;
        var _a;
        this.setState((_a = {}, _a[key] = value, _a), function () {
            var state = [];
            var name = _this.props.name;
            for (var i in _this.state) {
                if (_this.state.hasOwnProperty(i)) {
                    var idx = parseInt(i);
                    var data = _this.returnTrueData(idx);
                    var value_1 = _this.state[i];
                    if (value_1 != false) {
                        state.push(data);
                    }
                }
            }
            var returnValue = {
                target: {
                    name: _this.props.name,
                    value: state
                }
            };
            _this.props.onChange(returnValue);
        });
    };
    CheckInput.prototype.isValid = function () {
        //Kontrol true ise boş değil , false ise boş veya null
        var control = true;
        for (var item in this.state) {
            if (this.state[item] == false) {
                control = false;
            }
            else if (this.state[item] == true) {
                control = true;
                break;
            }
        }
        return control;
    };
    /**
     * Return the selectedData
     * @param idx
     * @returns {any}
     */
    CheckInput.prototype.returnTrueData = function (idx) {
        var propsData = this.props.items;
        var data = null;
        var me = this;
        propsData != undefined ?
            propsData.forEach(function (val, id) {
                if (val[me.props.id] == idx) {
                    data = val;
                }
            })
            : data = me.props.item;
        return data;
    };
    /**
     * İlk değer de hangi elemeanların checkeleneceğinin kontrolünü sağlar
     * @param val
     * @returns {boolean}
     */
    CheckInput.prototype.returnTrueOrFalseChecked = function (value) {
        var me = this;
        var bool = false;
        me.props.checkObjects != undefined ?
            me.props.checkObjects.forEach(function (val, idx) {
                if (val[me.props.id] == value[me.props.id]) {
                    bool = true;
                    me.state[value[me.props.id]] = true;
                }
            }) : null;
        return bool;
    };
    return CheckInput;
}(React.Component));
exports.default = CheckInput;
//# sourceMappingURL=CheckInput.js.map