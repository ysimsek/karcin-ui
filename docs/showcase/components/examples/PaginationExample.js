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
var karcin_ui_1 = require("karcin-ui");
var PaginationExample = /** @class */ (function (_super) {
    __extends(PaginationExample, _super);
    function PaginationExample(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [
            { id: 100, name: "Button", link: "#/Components/Pagination" },
            { id: 101, name: "Badge", link: "#/Components/Pagination" },
            { id: 102, name: "Label", link: "#/Components/Pagination" },
            { id: 103, name: "Menu", link: "#/Components/Pagination" },
            { id: 104, name: "Font Awesome Icon", link: "#/Components/Pagination" },
            { id: 105, name: "Tabs", link: "#/Components/Pagination" },
            { id: 106, name: "Notify", link: "#/Components/Pagination" },
            { id: 107, name: "Panel", link: "#/Components/Pagination" },
            { id: 108, name: "DataFilter", link: "#/Components/Pagination" },
            { id: 109, name: "List", link: "#/Components/Pagination" },
            { id: 110, name: "ToolTip", link: "#/Components/Pagination" },
            { id: 111, name: "PopOver", link: "#/Components/Pagination" },
            { id: 112, name: "Pagination", link: "#/Components/Pagination" },
        ];
        _this.state = {
            selectedPage: 1,
            selectedPage2: 1,
            selectedPage3: 1,
            selectedPage4: 1
        };
        return _this;
    }
    PaginationExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Label, null,
                "Selected Page: ",
                this.state.selectedPage),
            React.createElement(karcin_ui_1.Pagination, { data: this.data, hrefValue: "link", selectedValue: this.getClick.bind(this) }),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, null,
                "sm Size ,Selected Page: ",
                this.state.selectedPage2),
            React.createElement(karcin_ui_1.Pagination, { data: this.data, hrefValue: "link", size: "sm", pageCount: 4, selectedValue: this.getClick2.bind(this) }),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, null,
                "lg Size , Selected Page: ",
                this.state.selectedPage3),
            React.createElement(karcin_ui_1.Pagination, { data: this.data, hrefValue: "link", size: "lg", pageCount: 5, selectedValue: this.getClick3.bind(this) }),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, null,
                "Total Data and Show Count lg Size, Selected page: ",
                this.state.selectedPage4,
                " "),
            React.createElement(karcin_ui_1.Pagination, { data: 400, type: "simple", typeShowLength: 22, size: "lg", pageCount: 5, selectedValue: this.getClick4.bind(this) }));
    };
    PaginationExample.prototype.getClick = function (e) {
        this.setState({ selectedPage: e.page });
    };
    PaginationExample.prototype.getClick2 = function (e) {
        this.setState({ selectedPage2: e.page });
    };
    PaginationExample.prototype.getClick3 = function (e) {
        this.setState({ selectedPage3: e.page });
    };
    PaginationExample.prototype.getClick4 = function (e) {
        console.log(e.page);
        this.setState({ selectedPage4: e.page });
    };
    return PaginationExample;
}(React.Component));
exports.default = PaginationExample;
//# sourceMappingURL=PaginationExample.js.map