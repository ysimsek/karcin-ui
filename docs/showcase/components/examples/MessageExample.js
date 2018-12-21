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
var MessageExample = /** @class */ (function (_super) {
    __extends(MessageExample, _super);
    function MessageExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
            message: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. " +
                "Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere " +
                "bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."
        };
        return _this;
    }
    MessageExample.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("span", { className: "example-reagent" }, "MessageBox Alert"),
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "primary" }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "danger" }, "danger"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "secondary" }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "dark" }, "dark"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.alertClick.bind(this), color: "light" }, "light"),
            ' ',
            React.createElement("span", { className: "example-reagent" }, "MessageBox Confirm"),
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "primary" }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "danger" }, "danger"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "secondary" }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "dark" }, "dark"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.confirmClick.bind(this), color: "light" }, "light"),
            ' ',
            React.createElement("span", { className: "example-reagent" }, "MessageBox Prompt"),
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "primary" }, "primary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "success" }, "success"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "warning" }, "warning"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "danger" }, "danger"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "info" }, "info"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "secondary" }, "secondary"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "dark" }, "dark"),
            ' ',
            React.createElement(karcin_ui_1.Button, { onClick: this.promptClick.bind(this), color: "light" }, "light"),
            ' ',
            React.createElement("span", { className: "example-reagent" }, "MessageBox Custom"),
            React.createElement(karcin_ui_1.Button, { onClick: this.customClick.bind(this), color: "primary" }, "Custom"));
    };
    /**
     * Alert message
     */
    MessageExample.prototype.alertClick = function (e) {
        debugger;
        karcin_ui_1.Message.alert({ message: "İşlemi Onaylıyor musunuz?", color: e.target.textContent, title: React.createElement("div", null, "Rapor i\u015Flemi"), callBack: function (call) {
                console.log(call.response);
            } });
    };
    /**
     * Confirm message
     */
    MessageExample.prototype.confirmClick = function (e) {
        karcin_ui_1.Message.confirm({ message: this.state.message, color: e.target.textContent, title: "Confirm", icon: "fa-envelope", callBack: function (call) {
                console.log(call.response);
            } });
    };
    /**
     * Prompt message
     */
    MessageExample.prototype.promptClick = function (e) {
        karcin_ui_1.Message.prompt({ label: "Kullanıcı Adını Giriniz", title: "Prompt", color: e.target.textContent, placeholder: "...", callBack: function (call) {
                console.log(call.response);
            } });
    };
    /**
     * Custom message
     */
    MessageExample.prototype.customClick = function () {
        karcin_ui_1.Message.custom({
            message: this.state.message,
            icon: "fa-envelope",
            title: "Custom",
            button: [
                { color: "primary", title: "Disabled", outline: true, disabled: true, icon: "fa-html5", iconAlign: "right", style: { color: "red" }, className: "deneme", onClick: function (msg) {
                        msg.close();
                    }
                },
                { color: "success", title: "Save", onClick: function (msg) {
                        msg.close();
                    }
                },
                { color: "warning", title: "Warning", onClick: function (msg) {
                        // msg.close();
                    }
                },
            ]
        });
    };
    return MessageExample;
}(React.Component));
exports.default = MessageExample;
//# sourceMappingURL=MessageExample.js.map