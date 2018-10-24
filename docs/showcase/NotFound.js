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
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return React.createElement(reactstrap_1.Container, { className: "content-page" },
            React.createElement("div", { style: { textAlign: "center" } },
                React.createElement("img", { src: "./img/404.jpg" })),
            React.createElement("h1", { className: "text-center" }, "404 Not Found"));
    };
    return NotFound;
}(React.Component));
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map