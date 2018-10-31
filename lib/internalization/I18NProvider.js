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
var trLocalData = require("react-intl/locale-data/tr");
var enLocalData = require("react-intl/locale-data/en");
react_intl_1.addLocaleData(trLocalData.concat(enLocalData));
var I18NProvider = /** @class */ (function (_super) {
    __extends(I18NProvider, _super);
    function I18NProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    I18NProvider.prototype.render = function () {
        if (this.props.language.name == undefined) {
            console.log("Model içerisinde language bulunamıyor");
            return;
        }
        if (this.props.language.message == undefined) {
            console.log("Model içerisinde message bulunamıyor");
            return;
        }
        return (React.createElement(react_intl_1.IntlProvider, { locale: this.props.language.name, messages: this.props.language.message }, this.props.children));
    };
    return I18NProvider;
}(React.Component));
exports.default = I18NProvider;
//# sourceMappingURL=I18NProvider.js.map