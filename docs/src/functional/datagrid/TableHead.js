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
require("bootstrap/dist/css/bootstrap.css");
var reactstrap_1 = require("reactstrap");
var FaIcon_1 = require("../faicon/FaIcon");
var TableHead = /** @class */ (function (_super) {
    __extends(TableHead, _super);
    /**
     * Initial values
     * @param {TableHeadProps} props
     */
    function TableHead(props) {
        var _this = _super.call(this, props) || this;
        _this._filterDelay = 0;
        _this.state = {
            fields: _this.props.fields,
            clickActive: [],
            popover: [],
            orders: ["", "asc", "desc"],
            filterRemoteTimeOut: 3000,
            filterRemoteInterval: 1000,
            orderActive: { active: 0, value: '' }
        };
        return _this;
    }
    /**
     * rerender state
     * @param props
     */
    TableHead.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            fields: this.props.fields
        });
    };
    /**
     * @returns {any}
     */
    TableHead.prototype.render = function () {
        return React.createElement("thead", null,
            React.createElement("tr", null, this.returnItems()));
    };
    TableHead.prototype.returnItems = function () {
        var _this = this;
        var Cell = [];
        var self = this;
        var _loop_1 = function (i) {
            var value = this_1.state.fields[i];
            // popup over control
            if (self.state.popover[i] === undefined) {
                self.state.popover[i] = false;
            }
            // style
            var style = {};
            if (value.visibility !== undefined && !value.visibility) {
                style['display'] = 'none';
            }
            if (this_1.props.fieldOption !== undefined) {
                style['width'] = this_1.props.fieldOption[value.value] + "px";
            }
            Cell.push(React.createElement("th", { key: i, className: (this_1.state.orders[this_1.state.orderActive.active] !== "" && this_1.state.orderActive.value === value.value) ? 'order-active' : '', style: style },
                React.createElement("span", { onClick: function () {
                        _this.orderData(value.value);
                    } }, value.name),
                React.createElement("div", { className: "title-option" },
                    React.createElement("span", { className: "filter", id: 'Popover' + i, onClick: function () {
                            self.popoverOpen(i);
                        } },
                        React.createElement(FaIcon_1.default, { code: "fa-filter" })),
                    React.createElement("span", { className: 'order', onClick: function () {
                            _this.orderData(value.value);
                        } },
                        React.createElement(FaIcon_1.default, { code: "fa-sort" + ((this_1.state.orders[this_1.state.orderActive.active] !== "" && this_1.state.orderActive.value === value.value) ? '-' + this_1.state.orders[this_1.state.orderActive.active] : '') })),
                    React.createElement(reactstrap_1.Popover, { placement: "bottom", isOpen: self.state.popover[i], target: "Popover" + i, toggle: function () {
                            self.popoverOpen(i);
                        }, className: "popup-over-search" },
                        React.createElement(reactstrap_1.PopoverHeader, null, "Ad\u0131"),
                        React.createElement(reactstrap_1.PopoverBody, null,
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement(reactstrap_1.Input, { placeholder: "Arama", onKeyUp: function (e) {
                                        _this.filterData(value.value, e);
                                    } }),
                                React.createElement(reactstrap_1.InputGroupAddon, { addonType: "append" },
                                    React.createElement(reactstrap_1.Button, null,
                                        React.createElement(FaIcon_1.default, { code: "fa-search" })))))))));
        };
        var this_1 = this;
        for (var i = 0; i < this.state.fields.length; i++) {
            _loop_1(i);
        }
        return Cell;
    };
    /**
     * @param {number} param
     */
    TableHead.prototype.popoverOpen = function (param) {
        this.state.popover[param] = !this.state.popover[param];
        this.forceUpdate();
    };
    TableHead.prototype.orderData = function (fieldName) {
        // active size limit control
        if (this.state.orderActive.active >= (this.state.orders.length - 1)) {
            this.state.orderActive.active = 0;
        }
        else {
            this.state.orderActive.active += 1;
        }
        // change column control
        if (this.state.orderActive.value !== '' && this.state.orderActive.value !== fieldName) {
            this.state.orderActive.active = 1;
        }
        this.state.orderActive.value = fieldName;
        // orders control
        if (this.state.orders[this.state.orderActive.active] === 'asc') {
            this.props.store.orderSort(fieldName);
        }
        else if (this.state.orders[this.state.orderActive.active] === 'desc') {
            this.props.store.orderReverse(fieldName);
        }
        else {
            this.props.store.oldDataSort(fieldName);
        }
        this.forceUpdate();
    };
    TableHead.prototype.orderCallback = function () {
        this.forceUpdate();
    };
    TableHead.prototype.filterData = function (fieldName, element) {
        var _this = this;
        var data = [];
        var value = element.target.value;
        this._filterDelay = 0;
        // local endpoint options
        if (this.props.store.props.endPoint.props.endPoint === 'localEndPoint') {
            this.props.store.filter(fieldName, value, function (response) {
                data = response;
            });
        }
        // remote endpoint options
        else {
            if (this._filterInterval !== undefined) {
                clearInterval(this._filterInterval);
            }
            this._filterInterval = setInterval(function () {
                _this._filterDelay += _this.state.filterRemoteInterval;
                if (_this._filterDelay >= _this.state.filterRemoteTimeOut) {
                    _this.props.store.filter(fieldName, value, function (response) {
                        data = response;
                    });
                    clearInterval(_this._filterInterval);
                }
            }, this.state.filterRemoteInterval);
        }
        // datagrid force render method
        if (this.props.resetData !== undefined) {
            this.props.resetData(data);
        }
    };
    return TableHead;
}(React.Component));
exports.default = TableHead;
//# sourceMappingURL=TableHead.js.map