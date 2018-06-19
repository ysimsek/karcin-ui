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
var PopOverExample = /** @class */ (function (_super) {
    __extends(PopOverExample, _super);
    function PopOverExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
            show2: false
        };
        return _this;
    }
    PopOverExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.Button, { id: "pop1", onClick: this.toggle.bind(this) }, "Click to Me"),
            React.createElement(karcin_ui_1.PopOver, { id: "pop1", show: this.state.show, toggle: this.toggle.bind(this), title: "What is React?" },
                React.createElement("div", null, "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.")),
            React.createElement("hr", null),
            React.createElement("span", { id: "pop2", onClick: this.toggle2.bind(this) }, "Click to Me"),
            React.createElement(karcin_ui_1.PopOver, { id: "pop2", show: this.state.show2, toggle: this.toggle2.bind(this), title: "What is React?" },
                React.createElement("div", null, "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.")));
    };
    PopOverExample.prototype.toggle = function (e) {
        this.setState({ show: !this.state.show });
    };
    PopOverExample.prototype.toggle2 = function (e) {
        this.setState({ show2: !this.state.show2 });
    };
    return PopOverExample;
}(React.Component));
exports.default = PopOverExample;
//# sourceMappingURL=PopOverExample.js.map