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
    function TableHead(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fields: _this.props.fields,
            clickActive: [],
            popover: []
        };
        return _this;
    }
    TableHead.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            fields: this.props.fields
        });
    };
    TableHead.prototype.render = function () {
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
            if (!value.visibility) {
                style['display'] = 'none';
            }
            Cell.push(React.createElement("th", { key: i, style: style },
                React.createElement("span", null, value.name),
                React.createElement("div", { className: "title-option" },
                    React.createElement("span", { className: "filter", id: 'Popover' + i, onClick: function () {
                            self.popoverOpen(i);
                        } },
                        React.createElement(FaIcon_1.default, { code: "fa-filter" })),
                    React.createElement("span", { className: "order" },
                        React.createElement(FaIcon_1.default, { code: "fa-sort" })),
                    React.createElement(reactstrap_1.Popover, { placement: "bottom", isOpen: self.state.popover[i], target: "Popover" + i, toggle: function () {
                            self.popoverOpen(i);
                        }, className: "popup-over-search" },
                        React.createElement(reactstrap_1.PopoverHeader, null, "Ad\u0131"),
                        React.createElement(reactstrap_1.PopoverBody, null,
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement(reactstrap_1.Input, { placeholder: "Arama" }),
                                React.createElement(reactstrap_1.InputGroupAddon, { addonType: "append" },
                                    React.createElement(reactstrap_1.Button, null,
                                        React.createElement(FaIcon_1.default, { code: "fa-search" })))))))));
        };
        var this_1 = this;
        for (var i = 0; i < this.state.fields.length; i++) {
            _loop_1(i);
        }
        return React.createElement("thead", null,
            React.createElement("tr", null, Cell));
    };
    TableHead.prototype.popoverOpen = function (param) {
        this.state.popover[param] = !this.state.popover[param];
        this.forceUpdate();
    };
    return TableHead;
}(React.Component));
exports.default = TableHead;
//# sourceMappingURL=TableHead.js.map