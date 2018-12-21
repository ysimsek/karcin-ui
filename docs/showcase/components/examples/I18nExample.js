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
var langConfig = {
    tr: {
        name: "tr",
        message: {
            "panel": "Uluslararasılaştırma anlamınada gelir. Uluslararasılaştırma, kültür, bölge veya dilde farklılık gösteren hedef kitle için kolay lokalizasyonu sağlayan bir ürün, uygulama veya belge içeriği tasarlamak ve geliştirmektir. Bulunulan gölgeye göre dil değiştirme sistemidir.",
            "title": "i18 Nedir?"
        }
    },
    en: {
        name: "en",
        message: {
            "panel": "A product, application or document that provides easy localization for a target audience that differs in internationalization, culture, region or design and develop. It is a language changing system according to the shadow that is found.",
            "title": "What i18n?"
        }
    }
};
var I18nExample = /** @class */ (function (_super) {
    __extends(I18nExample, _super);
    function I18nExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            language: "en"
        };
        return _this;
    }
    I18nExample.prototype.render = function () {
        karcin_ui_1.I18n.addLanguageData(langConfig[this.state.language]);
        return React.createElement("div", null,
            React.createElement(karcin_ui_1.SelectInput, { name: "language", label: "Dilinizi Seçiniz", value: "value", id: "id", items: [
                    { id: 1, value: "tr" },
                    { id: 2, value: "en" }
                ], onChange: this.selectOnChange.bind(this) }),
            React.createElement(karcin_ui_1.Panel, { title: karcin_ui_1.I18n.message("title") }, karcin_ui_1.I18n.message("panel")));
    };
    I18nExample.prototype.selectOnChange = function (e) {
        var name = e.target.name;
        var state = [];
        state[e.target.name] = e.target.parsedValue.value;
        this.setState(state);
    };
    return I18nExample;
}(React.Component));
exports.default = I18nExample;
//# sourceMappingURL=I18nExample.js.map