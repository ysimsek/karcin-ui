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
var ToolTipExample = /** @class */ (function (_super) {
    __extends(ToolTipExample, _super);
    function ToolTipExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showFirst: false,
            showSecond: false
        };
        return _this;
    }
    //state değişiklşiği
    ToolTipExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("p", null,
                "It opens when it  ",
                React.createElement("a", { id: "first", href: "#" }, "comes on")),
            React.createElement(karcin_ui_1.ToolTip, { position: "right", id: "first", show: this.state.showFirst, toggle: this.toggle.bind(this) }, "Hello First Tip"),
            React.createElement("hr", null),
            React.createElement("span", { id: "second" }, "Come on over"),
            React.createElement(karcin_ui_1.ToolTip, { position: "bottom", id: "second", show: this.state.showSecond, toggle: this.toggleSecond.bind(this) }, "Congratulations"));
    };
    ToolTipExample.prototype.toggle = function () {
        this.setState({ showFirst: !this.state.showFirst });
    };
    ToolTipExample.prototype.toggleSecond = function () {
        this.setState({ showSecond: !this.state.showSecond });
    };
    return ToolTipExample;
}(React.Component));
exports.default = ToolTipExample;
//# sourceMappingURL=ToolTipExample.js.map