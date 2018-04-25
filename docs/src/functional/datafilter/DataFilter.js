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
var DataFilter = /** @class */ (function (_super) {
    __extends(DataFilter, _super);
    function DataFilter(props) {
        return _super.call(this, props) || this;
    }
    DataFilter.prototype.render = function () {
        return (React.createElement("div", { className: "karcin-datafilter" }));
    };
    return DataFilter;
}(React.Component));
exports.default = DataFilter;
//# sourceMappingURL=DataFilter.js.map