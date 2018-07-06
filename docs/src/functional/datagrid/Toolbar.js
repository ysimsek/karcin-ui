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
var FaIcon_1 = require("../faicon/FaIcon");
var Pagination_1 = require("../paging/Pagination");
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
        _this.state = {
            paginationSelected: []
        };
        return _this;
    }
    Toolbar.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.props = props;
        this.forceUpdate();
    };
    /**
     * return any
     */
    Toolbar.prototype.render = function () {
        var _this = this;
        // pagination control
        if (this.props.options.pagination !== undefined && this.props.options.pagination && this.props.store !== undefined && this.props.store.props.totalCount !== 0) {
            this.paginationControl = true;
        }
        else {
            this.paginationControl = false;
        }
        console.log(this.props.store.props.totalCount);
        if (this.props.type == "footer") {
            // footer Html Elements
            return React.createElement("div", { className: "data-grid-footer" },
                React.createElement(reactstrap_1.Row, null, (this.paginationControl) ?
                    React.createElement(reactstrap_1.Col, { xs: "4" },
                        React.createElement("div", { className: "pagination" },
                            React.createElement(Pagination_1.default, { pageCount: 5, type: "simple", typeShowLength: this.props.options.pageShow, data: this.props.store.props.totalCount, selectedValue: function (e) {
                                    _this.props.options.changePageFunc(e);
                                } })))
                    : ''));
        }
        else {
            // header Html Elements
            var data = this.props.data;
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
            return React.createElement("div", { className: "data-grid-header" },
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, { xs: { size: 4, offset: 6 }, className: "header-buttons" },
                        React.createElement(reactstrap_1.ButtonGroup, null, buttons))));
        }
    };
    /**
     * location url
     * @param url
     */
    Toolbar.prototype.urlDirectory = function (url) {
        window.location.href = url;
    };
    /**
     * Initial props value
     */
    Toolbar.defaultProps = {
        type: "header",
        options: {}
    };
    return Toolbar;
}(React.Component));
exports.default = Toolbar;
//# sourceMappingURL=Toolbar.js.map