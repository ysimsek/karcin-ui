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
require("bootstrap/dist/css/bootstrap.css");
var reactstrap_1 = require("reactstrap");
var FaIcon_1 = require("./../functional/faicon/FaIcon");
var Input_1 = require("./../inputs/Input");
var Thead = /** @class */ (function (_super) {
    __extends(Thead, _super);
    function Thead(props) {
        var _this = _super.call(this, props) || this;
        _this.itemRef = null;
        _this.resizeEvent = null;
        _this.resizeOption = {};
        _this._filterDelay = 0;
        _this.widthResult = function (event) {
            _this.state.fields[_this.resizeEvent['index']]['width'] = (event.pageX - _this.itemRef.offsetLeft);
            _this.props.fieldOptionReset(_this.state.fields);
            _this.forceUpdate();
        };
        _this.state = {
            store: props.store,
            fields: props.fields,
            dropDownMenu: {},
            orderIng: {},
            fieldShowing: props.fieldShowing,
            fieldOption: props.fieldOption,
            filterRemote: { interval: 500, timeout: 1000 },
            filterOption: { value: null, fieldName: null },
            filterShowing: {}
        };
        return _this;
    }
    Thead.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this._init(props);
    };
    Thead.prototype._init = function (props) {
        this.setState({
            store: props.store,
            fields: props.fields,
            fieldShowing: props.fieldShowing,
            fieldOption: props.fieldOption
        });
    };
    Thead.prototype.render = function () {
        return (React.createElement("div", { className: "datagrid-head" }, this.getItemControl()));
    };
    Thead.prototype.getItemControl = function () {
        var _this = this;
        var headItemGroup = [];
        var headItem = [];
        if (this.state.fields !== undefined) {
            var groupItems_1 = this.groupItems();
            var groupNameCheck_1 = [];
            this.state.fields.forEach(function (value, index) {
                if (value['visibility'] === undefined || value['visibility'] === true) {
                    if (value['groupName'] !== undefined && groupItems_1 !== null) {
                        if (groupNameCheck_1.indexOf(value['groupName']) === -1) {
                            groupNameCheck_1.push(value['groupName']);
                            headItem.push(_this.getItems(groupItems_1[value['groupName']], index));
                            if (groupItems_1 !== null) {
                                headItemGroup.push(_this.getGroupAdd(groupItems_1[value['groupName']], value['groupName'], index));
                            }
                        }
                    }
                    else {
                        headItem.push(_this.getItems(value, index));
                        if (groupItems_1 !== null) {
                            headItemGroup.push(_this.getGroupAdd(value, undefined, index));
                        }
                    }
                }
            });
        }
        return React.createElement("thead", null,
            (headItemGroup.length > 0 ? React.createElement("tr", null, headItemGroup) : ''),
            React.createElement("tr", null, headItem));
    };
    Thead.prototype.groupItems = function () {
        var groupItems = null;
        this.state.fields.forEach(function (value, index) {
            if (value['groupName'] !== undefined) {
                if (value['visibility'] === undefined || value['visibility'] === true) {
                    if (groupItems === null) {
                        groupItems = {};
                    }
                    if (groupItems[value['groupName']] === undefined) {
                        groupItems[value['groupName']] = [];
                    }
                    groupItems[value['groupName']].push(value);
                }
            }
        });
        return groupItems;
    };
    Thead.prototype.getItems = function (data, index) {
        var _this = this;
        var returnItem = [];
        if (data !== undefined) {
            var itemRef_1 = null;
            if (Array.isArray(data)) {
                data.forEach(function (value, indexes) {
                    var style = {};
                    if (value.width !== undefined) {
                        style['width'] = value.width + "px";
                    }
                    var activeClass = '';
                    if (value.name !== undefined && ((_this.state.orderIng.name !== (null || undefined) && value.name === _this.state.orderIng.name) || _this.state.filterShowing[value.name] !== undefined)) {
                        activeClass = 'active';
                    }
                    returnItem.push(React.createElement("th", { key: indexes, className: "" + activeClass, style: style, ref: function (e) { return itemRef_1 = e; } },
                        React.createElement("div", { className: "th-title" }, value.label),
                        React.createElement("div", { className: "right-option" },
                            (value.filter === undefined || value.filter ? _this.getFilter(value) : ''),
                            _this.orderIcon(value)),
                        _this.dropDownMenu(value),
                        React.createElement("span", { className: "resizing", onMouseDown: function (e) { _this.resizing(value, itemRef_1, index); }, onMouseUp: function (e) { _this.removeResizing(value, itemRef_1); } })));
                });
            }
            else {
                var style = {};
                if (data.width !== undefined) {
                    style['width'] = data.width + "px";
                }
                returnItem.push(React.createElement("th", { key: index, style: style, className: "" + (this.state.orderIng.name !== null && data.name === this.state.orderIng.name ? 'active' : ''), ref: function (e) { return itemRef_1 = e; } },
                    React.createElement("div", { className: "th-title" }, data.label),
                    React.createElement("div", { className: "right-option" },
                        (data.filter === undefined || data.filter ? this.getFilter(data) : ''),
                        this.orderIcon(data)),
                    this.dropDownMenu(data),
                    React.createElement("span", { className: "resizing", onMouseDown: function (e) { _this.resizing(data, itemRef_1, index); }, onMouseUp: function (e) { _this.removeResizing(data, itemRef_1); } })));
            }
        }
        return returnItem;
    };
    Thead.prototype.resizing = function (event, itemRef, index) {
        var _this = this;
        this.itemRef = itemRef;
        this.resizeEvent = { 'index': index, 'value': event };
        var body = document.querySelector('body');
        body.addEventListener('mousemove', this.widthResult, true);
        body.addEventListener('mouseup', function () {
            _this.removeResizing();
        });
    };
    Thead.prototype.removeResizing = function (e, itemRef) {
        var body = document.querySelector('body');
        body.removeEventListener('mousemove', this.widthResult, true);
    };
    Thead.prototype.getGroupAdd = function (data, groupName, index) {
        var returnItem = [];
        if (groupName !== undefined) {
            returnItem.push(React.createElement("th", { key: index, colSpan: data.length, className: "group" }, groupName));
        }
        else {
            var width = null;
            if (data.width !== undefined) {
                width = { 'width': data.width + "px" };
            }
            if (this.resizeOption[data.name] !== undefined) {
                width = { 'width': this.resizeOption[data.name] + "px" };
            }
            returnItem.push(React.createElement("th", { key: index, style: width, className: "empty " + (this.state.orderIng.name !== null && this.state.orderIng.name === data.name ? 'active' : '') }));
        }
        return returnItem;
    };
    Thead.prototype.dropDownMenu = function (value) {
        var _this = this;
        var fieldButtons = [];
        if (this.state.fieldShowing === undefined || this.state.fieldShowing) {
            fieldButtons.push(React.createElement(reactstrap_1.DropdownItem, { header: true }, "Field Showing"));
            this.state.fields.forEach(function (values, index) {
                fieldButtons.push(React.createElement(reactstrap_1.DropdownItem, { onClick: function () {
                        _this.fieldShowing(index);
                    } },
                    React.createElement(Input_1.default, { type: "checkbox", lineText: values.label, name: "checkbox-" + index, checked: (values['visibility'] !== undefined && !values['visibility'] ? false : true) })));
            });
        }
        return (this.state.fieldOption !== undefined && this.state.fieldOption ? React.createElement(reactstrap_1.ButtonDropdown, { isOpen: this.state.dropDownMenu[value.name], toggle: function () { _this.toggleDropdown(value.name); } },
            React.createElement(reactstrap_1.DropdownToggle, { caret: true }),
            React.createElement(reactstrap_1.DropdownMenu, { right: true },
                (value.order === undefined || value.order ? React.createElement(reactstrap_1.DropdownItem, { onClick: function () {
                        _this.orderIng(value, 'asc');
                    } },
                    React.createElement(FaIcon_1.default, { code: "fa-arrow-down" }),
                    " S\u0131rala") : ''),
                (value.order === undefined || value.order ? React.createElement(reactstrap_1.DropdownItem, { onClick: function () {
                        _this.orderIng(value, 'desc');
                    } },
                    React.createElement(FaIcon_1.default, { code: "fa-arrow-up" }),
                    " S\u0131rala") : ''),
                (value.order === undefined || value.order ? React.createElement(reactstrap_1.DropdownItem, { divider: true }) : ''),
                fieldButtons)) : '');
    };
    Thead.prototype.toggleDropdown = function (name) {
        this.state.dropDownMenu[name] = (this.state.dropDownMenu[name] !== undefined ? !this.state.dropDownMenu[name] : true);
        this.forceUpdate();
    };
    Thead.prototype.fieldShowing = function (index) {
        if (this.state.fields[index]['visibility'] !== undefined) {
            this.state.fields[index]['visibility'] = !this.state.fields[index]['visibility'];
        }
        else {
            this.state.fields[index]['visibility'] = false;
        }
        this.props.fieldOptionReset(this.state.fields);
        this.forceUpdate();
    };
    Thead.prototype.orderIng = function (value, type) {
        if (type === 'desc') {
            this.state.orderIng['name'] = value.name;
            this.state.orderIng['type'] = type;
            this.props.store.orderSort(value.name);
        }
        else if ('asc') {
            this.state.orderIng['name'] = value.name;
            this.state.orderIng['type'] = type;
            this.props.store.orderReverse(value.name);
        }
        else {
            this.state.orderIng['name'] = null;
            this.state.orderIng['type'] = null;
            this.props.store.oldDataSort(value.name);
        }
        this.forceUpdate();
    };
    Thead.prototype.orderIcon = function (value) {
        var returnIcon;
        if (this.state.orderIng.name !== null && value.name === this.state.orderIng.name) {
            if (this.state.orderIng.type === 'asc') {
                returnIcon = "fa-arrow-down";
            }
            else if (this.state.orderIng.type === 'desc') {
                returnIcon = "fa-arrow-up";
            }
            returnIcon = React.createElement("span", { className: 'order-icon' },
                React.createElement(FaIcon_1.default, { code: returnIcon }));
        }
        return returnIcon;
    };
    Thead.prototype.getFilter = function (data) {
        var _this = this;
        var filterContent;
        filterContent = React.createElement(reactstrap_1.ButtonDropdown, { isOpen: (this.state.filterShowing[data.name] !== undefined && this.state.filterShowing[data.name]) ? this.state.filterShowing[data.name] : false, toggle: function () { _this.filterToggle(data); } },
            React.createElement(reactstrap_1.DropdownToggle, null,
                React.createElement(FaIcon_1.default, { code: "fa-filter" })),
            React.createElement(reactstrap_1.DropdownMenu, null,
                React.createElement(Input_1.default, { type: data.type, value: (data.name === this.state.filterOption.fieldName ? this.state.filterOption.value : ''), onChange: function (e) {
                        var sendData = (data.mapping !== undefined ? data.mapping : data.name);
                        _this.filterData(sendData, e);
                    } })));
        return filterContent;
    };
    Thead.prototype.filterToggle = function (data) {
        this.state.filterShowing[data.name] = !this.state.filterShowing[data.name];
        this.forceUpdate();
    };
    Thead.prototype.filterData = function (fieldName, element) {
        var _this = this;
        var data;
        var value = element.target.value;
        this._filterDelay = 0;
        this.state.filterOption.value = value;
        this.state.filterOption.fieldName = fieldName;
        // local endpoint options
        if (this.props.store.props.endPoint.props.endPointName === 'localPoint') {
            var filterSend = { fieldName: fieldName, value: value };
            this.props.store.resetFilters();
            this.props.store.setFilters([filterSend]);
        }
        // remote endpoint options
        else {
            if (this._filterInterval !== undefined) {
                clearInterval(this._filterInterval);
            }
            this._filterInterval = setInterval(function () {
                _this._filterDelay += _this.state.filterRemote.interval;
                if (_this._filterDelay >= _this.state.filterRemote.timeout) {
                    var filtersSend = { fieldName: fieldName, value: '%' + value + '%', operator: 'LIKE' };
                    _this.props.store.resetFilters();
                    _this.props.store.setFilters([filtersSend]);
                    clearInterval(_this._filterInterval);
                }
            }, this.state.filterRemote.interval);
        }
        this.forceUpdate();
    };
    Thead.defaultProps = {
        fieldOption: true,
        fieldShowing: true
    };
    return Thead;
}(React.Component));
exports.default = Thead;
//# sourceMappingURL=Thead.js.map