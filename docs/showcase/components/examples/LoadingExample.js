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
var reactstrap_1 = require("reactstrap");
var LoadingExample = /** @class */ (function (_super) {
    __extends(LoadingExample, _super);
    function LoadingExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loadingShowing: true
        };
        return _this;
    }
    LoadingExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "example-reagent" }, "Row example inset loading"),
            React.createElement(reactstrap_1.Row, { id: "inRow", style: { border: "2px solid gray", padding: 5 } },
                React.createElement("p", null, "Lorem Ipsum, dizgi ve bask\u0131 end\u00FCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir."),
                React.createElement("p", null, "Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \u00FCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\u00FCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r."),
                React.createElement("p", null, "Be\u015Fy\u00FCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\u00FCrd\u00FCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\u00E7ram\u0131\u015Ft\u0131r."),
                React.createElement("p", null, "1960'larda Lorem Ipsum pasajlar\u0131 da i\u00E7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\u00FCr\u00FCmleri i\u00E7eren masa\u00FCst\u00FC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\u00FCler olmu\u015Ftur.")),
            React.createElement("p", null,
                React.createElement("span", { className: "example-reagent" }, "Loading Inset"),
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this) }, "default"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "primary" }, "primary"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "success" }, "success"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "warning" }, "warning"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "danger" }, "danger"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "info" }, "info"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "secondary" }, "secondary"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "dark" }, "dark"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpen.bind(this), color: "light" }, "light"),
                ' ',
                React.createElement("span", { className: "example-reagent" }, "Loading Full"),
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this) }, "default"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "primary" }, "primary"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "success" }, "success"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "warning" }, "warning"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "danger" }, "danger"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "info" }, "info"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "secondary" }, "secondary"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "dark" }, "dark"),
                ' ',
                React.createElement(karcin_ui_1.Button, { onClick: this.loadingOpenBody.bind(this), color: "light" }, "light"),
                ' ')));
    };
    LoadingExample.prototype.loadingClose = function (id) {
        var self = this;
        setTimeout(function () {
            id != undefined ? karcin_ui_1.Loading.remove({ id: id }) : karcin_ui_1.Loading.remove();
        }, 3000);
    };
    LoadingExample.prototype.loadingOpen = function (e) {
        karcin_ui_1.Loading.add({ id: "inRow", label: "Loading...", color: e.target.textContent != "default" ? e.target.textContent : undefined });
        this.loadingClose("inRow");
    };
    LoadingExample.prototype.loadingOpenBody = function (e) {
        karcin_ui_1.Loading.add({ color: e.target.textContent != "default" ? e.target.textContent : undefined });
        this.loadingClose();
    };
    return LoadingExample;
}(React.Component));
exports.default = LoadingExample;
//# sourceMappingURL=LoadingExample.js.map