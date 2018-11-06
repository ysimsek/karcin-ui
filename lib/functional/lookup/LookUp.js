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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var FaIcon_1 = require("../faicon/FaIcon");
var DataGrid_1 = require("../datagrid/DataGrid");
var LookUp = /** @class */ (function (_super) {
    __extends(LookUp, _super);
    function LookUp(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedResult = [];
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
        _this.state = {
            selected: null,
            save: false
        };
        return _this;
    }
    LookUp.prototype.render = function () {
        return (React.createElement("div", { className: "karcin-look-up " + this.props.className },
            this.props.label != undefined ? React.createElement("label", { className: "label-properties" }, this.props.label) : null,
            React.createElement("div", { onClick: this.toggle, className: "look-up-wrapper" },
                React.createElement("div", { className: "selected-value" },
                    React.createElement("div", { className: "input-val form-control" }, this.props.renderer !== undefined && this.selectedResult.length > 0 ?
                        this.props.renderer(this.selectedResult[0]) :
                        React.createElement("span", null, (this.selectedResult.length > 0 ?
                            this.selectedResult[0][this.props.textField]
                            : ''))),
                    React.createElement("div", { className: "show-button" },
                        React.createElement(reactstrap_1.Button, { outline: true, onClick: this.toggle },
                            React.createElement(FaIcon_1.default, { code: this.props.icon != undefined ? this.props.icon : "fa-search-plus" }))))),
            this.returnModal()));
    };
    LookUp.prototype.openPopup = function () { };
    LookUp.prototype.returnModal = function () {
        return (React.createElement(reactstrap_1.Modal, { size: 'lg', isOpen: this.state.modalShow, toggle: this.toggle },
            React.createElement(reactstrap_1.ModalHeader, { toggle: this.toggle }, "Se\u00E7im \u0130\u015Flemleri"),
            React.createElement(reactstrap_1.ModalBody, null,
                React.createElement(DataGrid_1.default, __assign({ fields: this.props.field, store: this.props.store, onDoubleClick: this.onDoubleClick.bind(this), onSelected: this.dataSelected }, this.props.dataGridOption))),
            React.createElement(reactstrap_1.ModalFooter, null,
                React.createElement(reactstrap_1.Button, { color: "success", onClick: this.selectedSave }, "Se\u00E7"),
                React.createElement(reactstrap_1.Button, { color: "error", onClick: this.toggle }, "Kapat"))));
    };
    LookUp.defaultProps = {
        icon: "fa-search-plus"
    };
    return LookUp;
}(React.Component));
exports.default = LookUp;
//# sourceMappingURL=LookUp.js.map