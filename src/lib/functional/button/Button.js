"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("reactstrap/lib/Button");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return React.createElement(Button_1.default, tslib_1.__assign({}, this.props), this.props.children);
    };
    return Button;
}(React.Component));
exports.Button = Button;
//# sourceMappingURL=Button.js.map