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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BaseInput_1 = require("./base/BaseInput");
var reactstrap_1 = require("reactstrap");
/**
 * Varsayılan olarak * işareti var istenilen sembolle geri dönülsün.
 */
var PasswordInput = /** @class */ (function (_super) {
    __extends(PasswordInput, _super);
    /**
     * Initial value
     * @param props
     */
    function PasswordInput(props) {
        return _super.call(this, props) || this;
    }
    /**
     * @returns {any}
     */
    PasswordInput.prototype.render = function () {
        //todo :label için sağ sol üst seçenekleri konulsun, hatta button ile birlikte beraber kullanılabilir.
        var label = this.props.label != "" ? React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label) : null;
        return React.createElement("div", { className: "karcin-input" },
            label,
            React.createElement(BaseInput_1.default, __assign({}, this.props)));
    };
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    PasswordInput.defaultProps = {
        disabled: false,
        readOnly: false,
        hidden: false,
        label: "",
        type: "password"
    };
    return PasswordInput;
}(React.Component));
exports.default = PasswordInput;
//# sourceMappingURL=PasswordInput.js.map