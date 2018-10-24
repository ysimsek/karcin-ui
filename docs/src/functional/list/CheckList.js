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
var CheckList = /** @class */ (function (_super) {
    __extends(CheckList, _super);
    function CheckList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.isChecked = false;
        props.items.map(function (v, i) {
            _this.state[v[props.id]] = false;
        });
        return _this;
    }
    /**
     * isChecked false olana kadar seçili datalar ayıklanır ve
     * tüm datanın state durumu güncellenir,
     * id : true or false şeklinde tüm checkinputlar state te tutulur.
     * @returns {any}
     */
    CheckList.prototype.render = function () {
        var _this = this;
        var me = this;
        return React.createElement("div", { className: "list-group-item form-group" },
            me.props.items.map(function (value, i) { return (React.createElement("div", { key: i },
                React.createElement("label", { className: "check-container" },
                    _this.props.onRenderer != undefined ? _this.props.onRenderer(value) : value[me.props.value],
                    _this.childInputElements(value),
                    React.createElement("span", { className: "checkmark" })))); }),
            this.isChecked = true);
    };
    /**
     * CheckObjects varsa checked ile kontrol sağlanıyor,
     * Eğer ki yoksa inputun kendinden kontrol sağlanıyor
     * @param value
     * @returns {any}
     */
    CheckList.prototype.childInputElements = function (value) {
        var _this = this;
        var me = this;
        return this.props.checkObjects != undefined ?
            React.createElement("input", { className: "checkbox", onChange: function (e) { return _this.onChange(value[me.props.id], e.target.checked); }, type: 'checkbox', value: this.state[value[me.props.value]], checked: this.isChecked == false ?
                    this.returnTrueOrFalseChecked(value) :
                    this.isCheckedControl(value) }) :
            React.createElement("input", { className: "checkbox", onChange: function (e) { return _this.onChange(value[me.props.id], e.target.checked); }, type: 'checkbox', value: this.state[value[me.props.value]] });
    };
    /**
     * State kontrolü ile check olup omadığı kontrol edilir.
     * Daha önce onChange metodunda state ki kontrol direkt olarak değiştiği
     * için true ya da false değeri direkt return olunur.
     * @param val
     * @returns {boolean}
     */
    CheckList.prototype.isCheckedControl = function (val) {
        return this.state[val[this.props.id]];
    };
    /**
     * Props methoda array şeklinde return oluyor
     * @param key
     * @param value
     */
    CheckList.prototype.onChange = function (key, value) {
        var _this = this;
        var _a;
        this.setState((_a = {}, _a[key] = value, _a), function () {
            var state = [];
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
            _this.props.onChange(state);
        });
    };
    /**
     * Return the selectedData
     * @param idx
     * @returns {any}
     */
    CheckList.prototype.returnTrueData = function (idx) {
        var propsData = this.props.items;
        var data = null;
        var me = this;
        propsData.forEach(function (val, id) {
            if (val[me.props.id] == idx) {
                data = val;
            }
        });
        return data;
    };
    /**
     * İlk değer de hangi elemeanların checkeleneceğinin kontrolünü sağlar
     * @param val
     * @returns {boolean}
     */
    CheckList.prototype.returnTrueOrFalseChecked = function (value) {
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
    return CheckList;
}(React.Component));
exports.default = CheckList;
//# sourceMappingURL=CheckList.js.map