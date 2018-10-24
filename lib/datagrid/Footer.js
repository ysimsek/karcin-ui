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
var Pagination_1 = require("../functional/paging/Pagination");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    /**
     * Initial values
     */
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        /**
         * general variable
         */
        _this.paginationControl = true;
        _this.editValues = {};
        _this.state = {
            isOpen: false,
            selectedRow: { selected: _this.props.selectedRow },
            buttonType: null
        };
        return _this;
    }
    Footer.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.state.selectedRow.selected = props.selectedRow;
        this.forceUpdate();
    };
    /**
     * return any
     */
    Footer.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("div", { className: "toolbar footer" }, (this.props['pageShow'] !== undefined && this.props.store !== undefined && this.props.store.props.totalCount > 0) ?
                React.createElement("div", { className: "pagination-main" },
                    React.createElement("div", { className: "pagination" },
                        React.createElement(Pagination_1.default, { pageCount: 5, type: "simple", typeShowLength: this.props['pageShow'], data: this.props.store.props.totalCount, selectedValue: function (e) {
                                _this.pageChange(e);
                            } })))
                : ''));
    };
    Footer.prototype.pageChange = function (event) {
        if (event !== undefined) {
            this.props.store.pagination(this.props.pageShow, event.page);
        }
    };
    /**
     * Initial props value
     */
    Footer.defaultProps = {};
    return Footer;
}(React.Component));
exports.default = Footer;
//# sourceMappingURL=Footer.js.map