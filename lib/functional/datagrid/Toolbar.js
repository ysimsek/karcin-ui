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
var reactstrap_1 = require("reactstrap");
var FaIcon_1 = require("../faicon/FaIcon");
var Pagination_1 = require("../paging/Pagination");
var DataForm_1 = require("../dataform/DataForm");
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    /**
     * Initial values
     */
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        /**
         * general variable
         */
        _this.paginationControl = true;
        _this.editValues = {};
        _this.openSave = function () {
            var data = _this.dataForm.getChangeData();
            _this.props.store.create(data, function () {
                _this.toggleModal();
            });
        };
        _this.openEdit = function () {
            var data = _this.dataForm.getChangeData();
            _this.props.store.update(data, function () {
                _this.toggleModal();
            });
        };
        _this.openRemove = function () {
            _this.props.store.delete(_this.state.selectedRow.selected[0].id);
        };
        _this.modalHtml = function () {
            console.log(_this.state.selectedRow.selected);
            if (_this.state.selectedRow.selected.length > 0) {
                _this.editValues = _this.state.selectedRow.selected[0];
            }
            var newField = [];
            if (_this.props['fields'] !== undefined) {
                _this.props['fields'].forEach(function (val) {
                    if (val['visibility'] === undefined || val['visibility'] === true) {
                        newField.push(val);
                    }
                });
            }
            var modalHtml = React.createElement(reactstrap_1.Modal, { isOpen: _this.state.isOpen, toggle: _this.toggleModal },
                React.createElement(reactstrap_1.ModalHeader, { toggle: _this.toggleModal }, "DataGrid \u0130\u015Flemleri"),
                React.createElement(reactstrap_1.ModalBody, null,
                    React.createElement("div", null,
                        React.createElement(DataForm_1.default, { nameText: _this.props.dataFormNameText, labelText: _this.props.dataFormLabelText, fields: newField, ref: function (e) {
                                _this.dataForm = e;
                            }, values: _this.editValues, col: 1 }))),
                React.createElement(reactstrap_1.ModalFooter, null,
                    (_this.state.buttonType === 'create') ? React.createElement(reactstrap_1.Button, { color: "primary", onClick: _this.openSave }, "Kaydet") : '',
                    (_this.state.buttonType === 'update') ? React.createElement(reactstrap_1.Button, { color: "success", onClick: _this.openEdit }, "D\u00FCzenle") : '',
                    React.createElement(reactstrap_1.Button, { color: "secondary", onClick: _this.toggleModal }, "Kapat")));
            return modalHtml;
        };
        _this.openModal = function (type) {
            _this.setState({
                isOpen: true,
                buttonType: type
            });
        };
        _this.toggleModal = function () {
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        _this.state = {
            isOpen: false,
            selectedRow: { selected: _this.props.selectedRow },
            buttonType: null
        };
        return _this;
    }
    Toolbar.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.state.selectedRow.selected = props.selectedRow;
        this.forceUpdate();
    };
    /**
     * return any
     */
    Toolbar.prototype.render = function () {
        var _this = this;
        var returnHtml;
        if (this.props.type === "header") {
            // header Html Elements
            var getGrudButtons = this.getGrudButtons();
            var data = getGrudButtons.concat(this.props.data);
            var buttons = [];
            var self_1 = this;
            if (data !== undefined) {
                var _loop_1 = function (i) {
                    var value = data[i];
                    buttons.push(React.createElement(reactstrap_1.Button, { key: i, color: "defaults", disabled: (value.disabled !== undefined ? value.disabled : false), onClick: function () {
                            if (value.url !== undefined) {
                                self_1.urlDirectory(value.url);
                            }
                            else {
                                if (value.onClick !== undefined) {
                                    value.onClick();
                                }
                            }
                        } },
                        (value.icon !== undefined ?
                            React.createElement(FaIcon_1.default, { code: value.icon }) : ""),
                        React.createElement("span", null, value.name)));
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            returnHtml = React.createElement("div", { className: "data-grid-header" },
                React.createElement(reactstrap_1.Row, null,
                    this.props.title !== undefined ? React.createElement(reactstrap_1.Col, { className: 'datagridTitle' }, this.props.title) : '',
                    React.createElement(reactstrap_1.Col, { xs: { size: 4, offset: 8 }, className: "header-buttons" },
                        React.createElement(reactstrap_1.ButtonGroup, null, buttons))),
                this.modalHtml());
        }
        else {
            // footer Html Elements
            returnHtml = React.createElement("div", { className: "data-grid-footer" },
                React.createElement(reactstrap_1.Row, null, (this.props['pageShow'] !== undefined && this.props.store !== undefined && this.props.store.props.totalCount > 0) ?
                    React.createElement(reactstrap_1.Col, { className: "pagination-main" },
                        React.createElement("div", { className: "pagination" },
                            React.createElement(Pagination_1.default, { pageCount: 5, type: "simple", typeShowLength: this.props['pageShow'], data: this.props.store.props.totalCount, selectedValue: function (e) {
                                    _this.props.changePage(e);
                                } })))
                    : ''));
        }
        return React.createElement("div", null, returnHtml);
    };
    /**
     * location url
     * @param url
     */
    Toolbar.prototype.urlDirectory = function (url) {
        window.location.href = url;
    };
    Toolbar.prototype.getGrudButtons = function () {
        var _this = this;
        var buttons = [];
        if (this.props['grud'] !== undefined) {
            // create buttons 
            if (this.props['grud'].indexOf('create') !== -1) {
                buttons.push({ name: "Ekle", icon: "fa-plus", disabled: false, onClick: function () {
                        _this.openModal('create');
                    } });
            }
            // update buttons
            if (this.props['grud'].indexOf('update') !== -1) {
                buttons.push({ name: "Düzenle", icon: "fa-pencil", disabled: (this.state.selectedRow.selected.length > 0 ? false : true), onClick: function () {
                        _this.openModal('update');
                    } });
            }
            // delete buttons
            if (this.props['grud'].indexOf('delete') !== -1) {
                buttons.push({ name: "Sil", icon: "fa-trash", disabled: (this.state.selectedRow.selected.length > 0 ? false : true), onClick: function () {
                        _this.openRemove();
                    } });
            }
        }
        return buttons;
    };
    /**
     * Initial props value
     */
    Toolbar.defaultProps = {
        type: "footer",
        data: [],
        dataFormLabelText: 'label',
        dataFormNameText: 'value'
    };
    return Toolbar;
}(React.Component));
exports.default = Toolbar;
//# sourceMappingURL=Toolbar.js.map