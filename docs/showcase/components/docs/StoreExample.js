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
var Highlight = require("react-highlight");
var AjaxRequestExample = /** @class */ (function (_super) {
    __extends(AjaxRequestExample, _super);
    function AjaxRequestExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     idField: "oid",
     data: [],
     param: [],
     originUrl: null,
     endPoint: null,
     responseData: null,
     pageTotalData:null,
     processor: null,
     type: 'POST',
     method: null,
     totalCount:0,
     pageData: {},
     * @returns {any}
     */
    AjaxRequestExample.prototype.render = function () {
        return React.createElement("div", null, this.getStore());
    };
    AjaxRequestExample.prototype.getStore = function () {
        return React.createElement("div", null,
            this.getProperties(),
            this.getRead(),
            this.getUpdate(),
            this.getDelete(),
            this.getReset(),
            this.getGeneralUsing());
    };
    AjaxRequestExample.prototype.getProperties = function () {
        return React.createElement("div", null,
            "Store kaynaklar\u0131 y\u00F6netmek i\u00E7in kolayl\u0131k sa\u011Flar. Store i\u00E7in \u00F6zellik y\u00F6netimi;",
            React.createElement("br", null),
            "* ",
            React.createElement("b", null, "idField"),
            " varsay\u0131lan de\u011Feri \"id\" ve \u00E7a\u011F\u0131raca\u011F\u0131n\u0131z kayna\u011F\u0131n id sine g\u00F6re de\u011Fi\u015Ftirebilirsiniz.",
            React.createElement("br", null),
            React.createElement(Highlight, { className: 'javascript' }, 'idField: \'dataId\''),
            "*",
            React.createElement("b", null, "data"),
            " ile istersek kaynaklar\u0131m\u0131z\u0131 sabit veri ile y\u00F6netebiliriz.",
            React.createElement("br", null),
            React.createElement(Highlight, { className: 'javascript' }, 'data : [\n' +
                '    {id:1,value:"Apple",des:"D1"},\n' +
                '    {id:2,value:"Samsung",des:"D1"},\n' +
                '    {id:3,value:"Huawei",des:"D1"},\n' +
                '    {id:4,value:"Lg",des:"D1"},\n' +
                '    {id:5,value:"Lenovo",des:"D1"}\n' +
                '  ]'),
            "* Store i\u00E7in ",
            React.createElement("b", null, "data"),
            " ya da ",
            React.createElement("b", null, "url"),
            " zorunludur.",
            React.createElement("br", null),
            React.createElement(Highlight, { className: 'javascript' }, 'let store = new Store({\n' +
                '   url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '});'),
            "* Store i\u00E7in ",
            React.createElement("b", null, "responseData"),
            " sunucudan d\u00F6nen verinin mapping yap\u0131lmas\u0131n\u0131 sa\u011Flar.",
            React.createElement("br", null),
            React.createElement(Highlight, { className: 'javascript' }, 'responseData:"response.data.map'),
            "* Store i\u00E7in ",
            React.createElement("b", null, "processor"),
            " ve ",
            React.createElement("b", null, "method"),
            " Karcin.io i\u00E7in yap\u0131lan processor ve ilgili method ismini \u00E7a\u011F\u0131r\u0131r.",
            React.createElement("br", null),
            React.createElement(Highlight, { className: 'javascript' }, 'processor:\'user\',method:\'add\''),
            "* Store i\u00E7in ",
            React.createElement("b", null, "type"),
            " belirlenebilir. Varsay\u0131lan ",
            React.createElement("b", null, "post"),
            " methodudur.",
            React.createElement("br", null),
            React.createElement(Highlight, { className: 'javascript' }, 'type:\'get\''));
    };
    AjaxRequestExample.prototype.getRead = function () {
        return React.createElement("div", null,
            "* Read fonksiyonu ilk okuma ve tekrardan okuma \u00E7ekmek i\u00E7in kullan\u0131l\u0131r.",
            React.createElement(Highlight, { className: 'javascript' }, 'let store = new Store({\n' +
                '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '});\n' +
                'store.read()'));
    };
    AjaxRequestExample.prototype.getUpdate = function () {
        return React.createElement("div", null,
            "* Update fonksiyonu kontrol amac\u0131yla genel bir update sonras\u0131 i\u015Flemi kontrol eder.",
            React.createElement(Highlight, { className: 'javascript' }, 'let store = new Store({\n' +
                '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '});\n' +
                'store.update()'));
    };
    AjaxRequestExample.prototype.getDelete = function () {
        return React.createElement("div", null,
            "* Delete fonksiyonu silme i\u015Flemlerini kontrol etmek i\u00E7in kullan\u0131l\u0131r.",
            React.createElement(Highlight, { className: 'javascript' }, 'let store = new Store({\n' +
                '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '});\n' +
                'store.delete()'));
    };
    AjaxRequestExample.prototype.getReset = function () {
        return React.createElement("div", null,
            "* Reset fonksiyonu data veya url de\u011Fi\u015Fti\u011Finde reset kontrollerini ifade eder.",
            React.createElement(Highlight, { className: 'javascript' }, 'let store = new Store({\n' +
                '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '});\n' +
                'store.reset()'));
    };
    AjaxRequestExample.prototype.getGeneralUsing = function () {
        return React.createElement("div", null,
            "* Genel path bazl\u0131 kullan\u0131m a\u015Fa\u011F\u0131daki gibi olabilir.",
            React.createElement(Highlight, { className: 'javascript' }, 'let store = new Store({\n' +
                '  url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '  idField :\'id\'\n' +
                '  responseData : \'res.data\'\n' +
                '  processor : \'userProcessor\'\n' +
                '  method : \'generalFilter\'\n' +
                '  type :\'post\'\n' +
                '});\n' +
                'store.reset()'));
    };
    return AjaxRequestExample;
}(React.Component));
exports.default = AjaxRequestExample;
//# sourceMappingURL=StoreExample.js.map