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
var karcin_ui_1 = require("karcin-ui");
var LabelExample = /** @class */ (function (_super) {
    __extends(LabelExample, _super);
    function LabelExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Label, null, "Lorem Ipsum nedir?"),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, { size: 20 }, "Renkler ve \u00D6zellikleri"),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, { color: "red" }, "K\u0131rm\u0131z\u0131 \u00C7i\u00E7ekler"),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, { color: "#ab00ff" }, "Mor G\u00FCller"),
            React.createElement("br", null),
            React.createElement(karcin_ui_1.Label, { color: "rgb(0,205,102)" }, "Ye\u015Fil Orman ve G\u00FClleri"),
            React.createElement("br", null));
    };
    return LabelExample;
}(React.Component));
exports.default = LabelExample;
//# sourceMappingURL=LabelExample.js.map