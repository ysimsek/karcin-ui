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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var FaIcon_1 = require("../faicon/FaIcon");
var DataGrid_1 = require("../../datagrid/DataGrid");
var Message_1 = require("../message/Message");
var LookUp = /** @class */ (function (_super) {
    __extends(LookUp, _super);
    function LookUp(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedResult = [];
        _this.returnModal = function () {
            return (React.createElement(reactstrap_1.Modal, { size: 'lg', isOpen: _this.state.modalShow, toggle: _this.toggle }, React.createElement(reactstrap_1.ModalHeader, { toggle: _this.toggle }, "Se\u00E7im \u0130\u015Flemleri"), React.createElement(reactstrap_1.ModalBody, null, React.createElement(DataGrid_1.default, __assign({ fields: _this.props.field, store: _this.props.store, onDoubleSelected: _this.onDoubleClick.bind(_this), onSelected: _this.dataSelected }, _this.props.dataGridOption))), React.createElement(reactstrap_1.ModalFooter, null, _this.modalFooterButtons())));
        };
        _this.dataSelected = function (val, index) {
            var state = {};
            var values = val.length > 0 ? JSON.parse(JSON.stringify(val[0])) : _this.state.doubleSelected;
            state['selected'] = val;
            state['doubleSelected'] = values;
            _this.setState(state);
        };
        _this.toggle = function () {
            _this.setState({
                modalShow: !_this.state.modalShow
            });
        };
        _this.onDoubleClick = function (e) {
            _this.selectedResult = [_this.state.doubleSelected];
            _this.setState({
                modalShow: false
            });
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(_this.state.doubleSelected, _this.props.name);
            }
        };
        _this.selectedSave = function () {
            _this.selectedResult = _this.state.selected;
            _this.setState({
                modalShow: false
            });
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(_this.state.selected[0], _this.props.name);
            }
        };
        _this.modalFooterButtons = function () {
            var returnButtons = [];
            if (_this.props.modalButtons !== undefined) {
                _this.props.modalButtons.forEach(function (value, index) {
                    returnButtons.push(value);
                });
            }
            else {
                returnButtons.push(React.createElement(reactstrap_1.Button, { color: _this.props.modalSelectButtonColor, onClick: _this.selectedSave, disabled: (_this.state.selected.length > 0) ? false : true }, _this.props.modalSelectText));
                returnButtons.push(React.createElement(reactstrap_1.Button, { color: _this.props.modalCancelButtonColor, onClick: _this.toggle }, _this.props.modalCancelText));
            }
            return returnButtons;
        };
        _this.removeSelect = function () {
            Message_1.default.confirm({ message: 'Silmek istediğinize emin misiniz ?', color: 'danger', title: "Silme İşlemi", icon: "fa-trash", callBack: function (call) {
                    if (call.response.name === 'OK') {
                        _this.selectedResult.length = 0;
                        _this.setState({
                            selected: []
                        });
                    }
                } });
        };
        _this.state = {
            selected: [],
            save: false
        };
        return _this;
    }
    LookUp.prototype.render = function () {
        return (React.createElement("div", { className: "karcin-look-up " + this.props.className }, this.props.label != undefined ? React.createElement("label", { className: "label-properties" }, this.props.label) : null, React.createElement("div", { className: "look-up-wrapper" }, React.createElement("div", { className: "selected-value" }, React.createElement("div", { className: "input-val form-control", onClick: this.toggle }, this.renderVal()), React.createElement("div", { className: "show-button" }, React.createElement(reactstrap_1.ButtonGroup, null, React.createElement(reactstrap_1.Button, { color: this.props.zommButtonColor, onClick: this.toggle }, React.createElement(FaIcon_1.default, { code: this.props.zommButtonIcon })), React.createElement(reactstrap_1.Button, { color: this.props.removeButtonColor, onClick: this.removeSelect, disabled: (this.selectedResult.length > 0) ? false : true }, React.createElement(FaIcon_1.default, { code: this.props.removeButtonIcon })))))), this.returnModal()));
    };
    LookUp.prototype.renderVal = function () {
        var _this = this;
        var returnVal = '';
        if (this.selectedResult.length > 0) {
            if (this.props.renderer !== undefined) {
                returnVal = this.props.renderer(this.selectedResult);
            }
            else {
                var dataImploadOjb_1 = [];
                this.selectedResult.forEach(function (value) {
                    dataImploadOjb_1.push(value[_this.props.textField]);
                });
                returnVal = dataImploadOjb_1.join(',');
            }
        }
        return returnVal;
    };
    LookUp.defaultProps = {
        modalSelectText: "Seç",
        modalCancelText: "Kapat",
        modalCancelButtonColor: "default",
        modalSelectButtonColor: "success",
        zommButtonIcon: "fa-search-plus",
        removeButtonIcon: "fa-trash",
        zommButtonColor: "primary",
        removeButtonColor: "danger"
    };
    return LookUp;
}(React.Component));
exports.default = LookUp;
//# sourceMappingURL=LookUp.js.map