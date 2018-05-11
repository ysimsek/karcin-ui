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
var reactstrap_1 = require("reactstrap");
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedId: _this.id
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        return React.createElement(reactstrap_1.Pagination, { onClick: this.handleChange.bind(this) }, this.renderPageFunctions(this.props.data));
    };
    Pagination.prototype.renderPageFunctions = function (data) {
        var component = [];
        var me = this;
        var i = 0;
        component.push(React.createElement(reactstrap_1.PaginationItem, { key: i },
            React.createElement(reactstrap_1.PaginationLink, { previous: true, href: "#" })));
        data.forEach(function (val, idx) {
            i++;
            component.push(React.createElement(reactstrap_1.PaginationItem, { key: i++ },
                React.createElement(reactstrap_1.PaginationLink, { href: val[me.props.hrefValue] }, idx + 1)));
        });
        component.push(React.createElement(reactstrap_1.PaginationItem, { key: i++ },
            React.createElement(reactstrap_1.PaginationLink, { next: true, href: "#" })));
        return component;
    };
    Pagination.prototype.handleChange = function (e) {
        if (this.props.selectedValue != undefined) {
            this.props.selectedValue({ page: e.target.text, href: e.target.href });
        }
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map