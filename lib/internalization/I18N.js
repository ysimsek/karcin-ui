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
var react_intl_1 = require("react-intl");
var I18N = /** @class */ (function (_super) {
    __extends(I18N, _super);
    function I18N() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    I18N.prototype.render = function () {
        return React.createElement(react_intl_1.FormattedMessage, { id: this.props.id, values: this.props.setValues });
    };
    return I18N;
}(React.Component));
exports.default = I18N;
//# sourceMappingURL=I18N.js.map