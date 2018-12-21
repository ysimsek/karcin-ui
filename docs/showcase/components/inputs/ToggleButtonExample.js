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
var ToggleButtonExample = /** @class */ (function (_super) {
    __extends(ToggleButtonExample, _super);
    function ToggleButtonExample(props) {
        return _super.call(this, props) || this;
    }
    ToggleButtonExample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.ToggleButton, { onChange: function (event) { _this.handleChange(event); } })));
    };
    ToggleButtonExample.prototype.handleChange = function (event) {
    };
    return ToggleButtonExample;
}(React.Component));
exports.default = ToggleButtonExample;
//# sourceMappingURL=ToggleButtonExample.js.map