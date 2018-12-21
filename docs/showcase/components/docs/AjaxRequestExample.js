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
var Highlight = require("react-highlight");
var AjaxRequestExample = /** @class */ (function (_super) {
    __extends(AjaxRequestExample, _super);
    function AjaxRequestExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AjaxRequestExample.prototype.render = function () {
        return React.createElement("div", null,
            this.getAjaxRequest(),
            this.postAjaxRequest(),
            this.updateAjaxRequest(),
            this.deleteAjaxRequest(),
            this.callBackAjaxRequest());
    };
    AjaxRequestExample.prototype.getAjaxRequest = function () {
        return React.createElement("div", null,
            "\u2003Ka\u00E7in-ui AjaxRequest ile sunucu bilgi al\u0131\u015Fveri\u015Fi , ui sayfas\u0131n\u0131n kontrollerinin tutulmas\u0131 ve dinamik olarak sayfa yap\u0131labilmesi,",
            React.createElement("br", null),
            "sunucu ile olan veri trafi\u011Finin kontrol edilebilmesi sa\u011Flan\u0131r.",
            React.createElement("br", null),
            "\u2003AjaxRequest componenti kullanabilmek i\u00E7in ",
            React.createElement("b", null, "url"),
            " girilmesi gerekiyor ve sunucu'da y\u00F6nelmesi istenilen path \u00F6zellik olarak g\u00F6nderilir.",
            React.createElement(Highlight, { className: 'javascript' }, 'url: \'http:localhost:5567/karcin-rest/getList'),
            "\u2003AjaxRequest componenti ",
            React.createElement("b", null, "type"),
            " belirtmek istenirse ilgili \u00F6zellik AjaxRequest'e parametre olarak verilir. Varsay\u0131lan type post methodudur.",
            React.createElement(Highlight, { className: 'javascript' }, 'type: \'get\''),
            "\u2003AjaxRequest componenti ",
            React.createElement("b", null, "method"),
            " ve ",
            React.createElement("b", null, "processor"),
            " \u00F6zellikleri karcin-io i\u00E7in \u00F6zel olarak yap\u0131lm\u0131\u015Ft\u0131r ve sunucu'da bulunan processor i\u00E7erisinde yaz\u0131lan methodun \u00E7a\u011F\u0131rd\u0131\u011F\u0131 response'u d\u00F6ner. Varsay\u0131lan method findAll methodudur. Processor'\u00FCn tan\u0131mlanmas\u0131 gerekmektedir.",
            React.createElement(Highlight, { className: 'javascript' }, 'processor: \'UserProcessor\',method: \'findById\''),
            "\u2003AjaxRequest ile sunucumuza g\u00F6nderdi\u011Fimiz istekte ",
            React.createElement("b", null, "header"),
            " bilgisinide ek olarak g\u00F6nderebiliriz ve sunucumuza \u00F6zel methodlar yazmam\u0131z sa\u011Flanabilir. Token kontrol\u00FC, \u00F6zel \u015Fifre kontrol\u00FC vb. yap\u0131lar kullan\u0131larak request sadece uygulamaya \u00F6zel bir hale getirilebilir.",
            React.createElement("b", null, "header"),
            " nesne \u015Feklinde de\u011Fi\u015Fkenler alarak kullan\u0131l\u0131r.",
            React.createElement(Highlight, { className: 'javascript' }, 'header:{token:\'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad\',filter:[\'id\'=\'5\',name:\'hale\']}'),
            "\u2003AjaxRequest ile sunucumuza ",
            React.createElement("b", null, "data"),
            " sayesinde sunucunun cevap verece\u011Fi formatta veri g\u00F6nderebiliriz. \u00D6rne\u011Fin; deleteById methodumuz olsun. Hangi datay\u0131 silenece\u011Fini belirtmemiz gerekebilir. Bunun i\u00E7in ;",
            React.createElement(Highlight, { className: 'javascript' }, 'data : [\'id\':1]'),
            "\u2003Sunucumuza g\u00F6nderdi\u011Fimiz ",
            React.createElement("b", null, "get"),
            " methodunun sonucu a\u015Fa\u011F\u0131daki gibi bir kod kullanarak \u00E7ekilebilir. Sunucudan gelen sonu\u00E7 callBack yazan yerde response yazan de\u011Fi\u015Fkenin i\u00E7erisine e\u015Fitlenir.",
            React.createElement(Highlight, { className: 'javascript' }, 'let getAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
                '   //callBack\n' +
                '});\n' +
                'getAjax.call();'));
    };
    AjaxRequestExample.prototype.postAjaxRequest = function () {
        return React.createElement("div", null,
            "Sunucumuza g\u00F6nderdi\u011Fimiz ",
            React.createElement("b", null, "post"),
            " methodunun sonucu a\u015Fa\u011F\u0131daki gibi bir kod kullanarak \u00E7ekilebilir. Sunucudan gelen sonu\u00E7 callBack yazan yerde response yazan de\u011Fi\u015Fkenin i\u00E7erisine e\u015Fitlenir.",
            React.createElement(Highlight, { className: 'javascript' }, 'let postAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
                '   //callBack\n' +
                '});\n' +
                'postAjax.call();'));
    };
    AjaxRequestExample.prototype.updateAjaxRequest = function () {
        return React.createElement("div", null,
            "Sunucumuza g\u00F6nderdi\u011Fimiz ",
            React.createElement("b", null, "update"),
            " methodunun sonucu a\u015Fa\u011F\u0131daki gibi bir kod kullanarak \u00E7ekilebilir. Sunucudan gelen sonu\u00E7 callBack yazan yerde response yazan de\u011Fi\u015Fkenin i\u00E7erisine e\u015Fitlenir.",
            React.createElement(Highlight, { className: 'javascript' }, 'let updateAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
                '   //callBack\n' +
                '});\n' +
                'updateAjax.call();'));
    };
    AjaxRequestExample.prototype.deleteAjaxRequest = function () {
        return React.createElement("div", null,
            "Sunucumuza g\u00F6nderdi\u011Fimiz ",
            React.createElement("b", null, "delete"),
            " methodunun sonucu a\u015Fa\u011F\u0131daki gibi bir kod kullanarak \u00E7ekilebilir. Sunucudan gelen sonu\u00E7 callBack yazan yerde response yazan de\u011Fi\u015Fkenin i\u00E7erisine e\u015Fitlenir.",
            React.createElement(Highlight, { className: 'javascript' }, 'let deleteAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
                '   //callBack\n' +
                '});\n' +
                'deleteAjax.call();'));
    };
    AjaxRequestExample.prototype.callBackAjaxRequest = function () {
        return React.createElement("div", null,
            "Tam veri kullan\u0131m\u0131 a\u015Fa\u011F\u0131daki gibidir.",
            React.createElement(Highlight, { className: 'javascript' }, 'let postAjax = new AjaxRequest({url: \'denemeUrl\',\n' +
                '  type: \'post\',\n' +
                '  processor: \'userProcessor\',\n' +
                '  method: \'add\',\n' +
                '  header: {\n' +
                '  token : \'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad\'\n' +
                ' },\n' +
                ' data :[\n' +
                '  {\n' +
                '   name:"Mustafa",\n' +
                '   surname : "Güngör",\n' +
                '   age : 26,\n' +
                '   job : "Mühendis"\n' +
                '   }\n' +
                '  ]},\n' +
                '(response)=>{\n' +
                '  callBack\n' +
                '})'));
    };
    return AjaxRequestExample;
}(React.Component));
exports.default = AjaxRequestExample;
//# sourceMappingURL=AjaxRequestExample.js.map