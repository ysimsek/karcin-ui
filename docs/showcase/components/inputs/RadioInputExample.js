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
var RadioInput_1 = require("../../../src/inputs/RadioInput");
var RadioInputExample = /** @class */ (function (_super) {
    __extends(RadioInputExample, _super);
    function RadioInputExample(props) {
        return _super.call(this, props) || this;
    }
    RadioInputExample.prototype.render = function () {
        return React.createElement(RadioInput_1.default, { onClick: this.handleChange.bind(this) });
    };
    RadioInputExample.prototype.handleChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    };
    return RadioInputExample;
}(React.Component));
exports.default = RadioInputExample;
//# sourceMappingURL=RadioInputExample.js.map