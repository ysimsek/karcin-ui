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
var Pagination_1 = require("../../../src/functional/paging/Pagination");
var PaginationExample = /** @class */ (function (_super) {
    __extends(PaginationExample, _super);
    function PaginationExample(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [
            { id: 100, name: "Button", link: "#/Components/Pagination" },
            { id: 101, name: "Badge", link: "#/Components/Pagination" },
            { id: 102, name: "Label", link: "#/Components/Pagination" },
            { id: 103, name: "Menu", link: "#/Components/Pagination" },
        ];
        _this.state = {
            selectedPage: ""
        };
        return _this;
    }
    PaginationExample.prototype.render = function () {
        return React.createElement("div", null,
            "Selected Page: ",
            this.state.selectedPage,
            React.createElement("br", null),
            React.createElement(Pagination_1.default, { data: this.data, hrefValue: "link", selectedValue: this.getClick.bind(this) }));
    };
    PaginationExample.prototype.getClick = function (e) {
        this.setState({ selectedPage: e.page });
    };
    return PaginationExample;
}(React.Component));
exports.default = PaginationExample;
//# sourceMappingURL=PaginationExample.js.map