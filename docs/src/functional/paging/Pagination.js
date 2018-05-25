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
var reactstrap_1 = require("reactstrap");
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    /**
     * Initial States
     * @param props
     */
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Hangi sayfa seçili tutmak için
         * @type {number}
         */
        _this.selectPage = 1;
        /**
         * Dizinin son sayfası kaçıncı sayfa
         * @type {number}
         */
        _this.lastPage = 0;
        /**
         * Son indexi tutuyor
         * @type {number}
         */
        _this.lastIndex = 0;
        /**
         * Dizinin ilk sayfası kaçıncı sayfa
         * @type {number}
         */
        _this.firstPage = 0;
        /**
         *  Tüm component ler bir array de tutuluyor
         *  @type {any[]}
         */
        _this.components = [];
        /**
         * Show page adedi gösterilecek data
         * Mesela props tan gelen pageCount 4 olsun o zaman showPage ilklenecek ve
         * [1, 2, 3, 4] şeklinde show edilecek datayı gösterecektir.
         * @type {any[]}
         */
        _this.showPage = [];
        _this.state = {
            selectedId: _this.id
        };
        return _this;
    }
    /**
     * @returns {any}
     */
    Pagination.prototype.render = function () {
        var cmp = React.createElement("span", null);
        if (this.props.pageCount != undefined) {
            cmp = React.createElement(reactstrap_1.Pagination, { onClick: this.handleChange.bind(this), size: this.props.size }, this.renderPageFunctions(this.props.data));
        }
        return cmp;
    };
    /**
     *
     * @param {Array<any>} data
     * @returns {JSX.Element[]}
     */
    Pagination.prototype.renderPageFunctions = function (data) {
        var numb = this.props.pageCount;
        if (this.showPage.length <= 0) {
            for (var i_1 = 1; i_1 < numb + 1; i_1++) {
                this.showPage.push(i_1);
            }
        }
        var component = [];
        var me = this;
        var i = 0;
        var firstPage = this.decreaseElement(i);
        var goToTheBegin = this.firstPageElement();
        /**
         * Array içerisinde data ayıklanıyor
         */
        data.forEach(function (val, idx) {
            i++;
            component.push(React.createElement(reactstrap_1.PaginationItem, { active: parseInt(me.selectPage) == idx + 1 ? true : false, key: i },
                React.createElement(reactstrap_1.PaginationLink, { id: i, href: val[me.props.hrefValue] }, idx + 1)));
        });
        var lastPage = this.increaseElement(i);
        var goToTheEnd = this.lastPageElement();
        me.lastIndex = data.length;
        me.firstPage = this.showPage[0];
        /**
         * Gösterilmek istenene sayı kadar page görünüyor
         * @type {JSX.Element[]}
         */
        var showPage = this.paging(component, firstPage, lastPage, goToTheBegin, goToTheEnd);
        return showPage;
    };
    /**
     * Show edilecek Data ayarlanıyor
     * @param {Array<any>} data
     * @param {JSX.Element} firstData
     * @param {JSX.Element} lastData
     * @param {JSX.Element} goToTheBegin
     * @param {JSX.Element} goToTheEnd
     * @returns {JSX.Element[]}
     */
    Pagination.prototype.paging = function (data, firstData, lastData, goToTheBegin, goToTheEnd) {
        var me = this;
        var showData = [];
        showData.push(goToTheBegin);
        showData.push(firstData);
        /**
         * İlk eleman kontrolü ile var yok kontrolü yapılıyor
         */
        if (me.showPage.indexOf(1) == -1) {
            showData.push(this.blablaElement(-3));
        }
        data.forEach(function (comp, i) {
            me.showPage.forEach(function (show, j) {
                if (show == parseInt(comp.key)) {
                    showData.push(comp);
                }
            });
        });
        /**
         * Son index kontrolü yapılıyor
         */
        if (me.showPage.indexOf(me.lastIndex) == -1) {
            showData.push(this.blablaElement(-4));
        }
        showData.push(lastData);
        showData.push(goToTheEnd);
        return showData;
    };
    /**
     * Değişim kontrolü yapılıyor
     * @param e
     */
    Pagination.prototype.handleChange = function (e) {
        var pageCount = this.showPage;
        if (e.target.id == "increase") {
            this.increaseOne(pageCount);
        }
        else if (e.target.id == "decrease") {
            this.decreaseOne();
        }
        else if (e.target.id == "firstDecrease") {
            this.goToTheBegin();
        }
        else if (e.target.id == "lastIncrease") {
            this.goToTheEnd();
        }
        else if (e.target.id == "blabla" || e.target.id == "") {
            return;
        }
        else {
            if (this.props.pageCount == 3) {
                this.propsCountWhenThreeSelectPosition(e, pageCount);
            }
            else if (this.props.pageCount == 4) {
                this.propsCountWhenFourSelectPosition(e, pageCount);
            }
            else if (this.props.pageCount == 5) {
                this.propsCountWhenFiveSelectPosition(e, pageCount);
            }
            this.selectPage = e.target.text;
        }
        if (this.props.selectedValue != undefined) {
            this.props.selectedValue({ page: this.selectPage, href: e.target.href, selectData: this.props.data[this.selectPage - 1] });
        }
    };
    /**
     * Props Page 3 için ayarlama fonksiyonu
     * 3 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken olarak kabul ediliyor ve
     * 1 eksiği ve 1 fazlası olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    Pagination.prototype.propsCountWhenThreeSelectPosition = function (e, pageCount) {
        this.selectPage = e.target.text;
        if (parseInt(this.selectPage) == this.lastIndex) {
            return;
        }
        if (parseInt(this.selectPage) == 1) {
            this.showPage = [1, 2, 3];
            return;
        }
        for (var i = 0; i < pageCount.length; i++) {
            pageCount[i] = parseInt(this.selectPage) - 1;
            if (i == 1)
                pageCount[i] = parseInt(this.selectPage);
            if (i == 2)
                pageCount[i] = parseInt(this.selectPage) + 1;
        }
    };
    /**
     * PropsPage 4 için ayarlama fonksiyonu
     * 4 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ve 2 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken -1 yani 2.değişken olarak kabul ediliyor ve
     * ona göre dizilim yapılmış olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    Pagination.prototype.propsCountWhenFourSelectPosition = function (e, pageCount) {
        this.selectPage = e.target.text;
        if (parseInt(this.selectPage) == this.lastIndex || parseInt(this.selectPage) == this.lastIndex - 1) {
            return;
        }
        if (parseInt(this.selectPage) == 1 || parseInt(this.selectPage) == 2) {
            this.showPage = [1, 2, 3, 4];
            return;
        }
        for (var i = 0; i < pageCount.length; i++) {
            pageCount[i] = parseInt(this.selectPage) - 1;
            if (i == 1)
                pageCount[i] = parseInt(this.selectPage);
            if (i == 2)
                pageCount[i] = parseInt(this.selectPage) + 1;
            if (i == 3)
                pageCount[i] = parseInt(this.selectPage) + 2;
        }
    };
    /**
     * Propsu 5 sayfa görünsün için değerler.
     * Props Page 3 için ayarlama fonksiyonu
     * 5 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken olarak kabul ediliyor ve
     * 1 eksiği, 2 eksiği ve 1 fazlası, 2 fazlası olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    Pagination.prototype.propsCountWhenFiveSelectPosition = function (e, pageCount) {
        this.selectPage = e.target.text;
        if (parseInt(this.selectPage) == this.lastIndex || parseInt(this.selectPage) == this.lastIndex - 1) {
            return;
        }
        if (parseInt(this.selectPage) == 1 || parseInt(this.selectPage) == 2) {
            this.showPage = [1, 2, 3, 4, 5];
            return;
        }
        for (var i = 0; i < pageCount.length; i++) {
            pageCount[i] = parseInt(this.selectPage) - 2;
            if (i == 1)
                pageCount[i] = parseInt(this.selectPage) - 1;
            if (i == 2)
                pageCount[i] = parseInt(this.selectPage);
            if (i == 3)
                pageCount[i] = parseInt(this.selectPage) + 1;
            if (i == 4)
                pageCount[i] = parseInt(this.selectPage) + 2;
        }
    };
    /**
     * Birer Birer artırım yap
     * @param pageCount
     */
    Pagination.prototype.increaseOne = function (pageCount) {
        //diziyi ortala
        if (this.selectPage) {
            if (this.selectPage >= 3 && (this.lastIndex != Math.max.apply(Math, pageCount))) {
                this.changeShowPage("ortala");
            }
            else if (this.selectPage >= 2 && (this.lastIndex != Math.max.apply(Math, pageCount))) {
                this.changeShowPage("ortala");
            }
        }
        //increase index
        if (this.lastIndex == this.selectPage) {
            return;
        }
        if (Math.max.apply(Math, pageCount) == this.selectPage) {
            this.changeShowPage("art");
        }
        this.selectPage = parseInt(this.selectPage) + 1;
    };
    /**
     * Birer birer azaltma yap
     */
    Pagination.prototype.decreaseOne = function () {
        if (this.selectPage <= this.lastIndex - 2 && (this.firstPage == Math.min.apply(Math, this.showPage))) {
            if (this.firstPage <= 1) {
            }
            else {
                this.changeShowPage("ortalaEks");
            }
        }
        //decrease index
        if (this.selectPage == 1) {
            return;
        }
        if (this.firstPage == this.selectPage) {
            this.changeShowPage("eks");
        }
        this.selectPage = parseInt(this.selectPage) - 1;
    };
    /**
     * İlk sayfaya geri dön
     */
    Pagination.prototype.goToTheBegin = function () {
        var me = this;
        me.showPage.forEach(function (v, idx) {
            me.showPage[idx] = idx + 1;
        });
        me.selectPage = 1;
    };
    /**
     * En son sayfaya git
     */
    Pagination.prototype.goToTheEnd = function () {
        var me = this;
        var lastIndex = this.lastIndex - me.props.pageCount + 1;
        me.showPage.forEach(function (v, idx) {
            me.showPage[idx] = lastIndex;
            lastIndex++;
        });
        me.selectPage = this.lastIndex;
        // me.firstPage = parseInt(this.lastIndex) - parseInt(me.props.pageCount) +1;
    };
    /**
     * Gösterilecek data set ediliyor
     * @param {string} val
     */
    Pagination.prototype.changeShowPage = function (val) {
        var me = this;
        me.showPage.forEach(function (v, idx) {
            if (val == "art") {
                me.showPage[idx] = v + 3;
                me.firstPage = v + 1;
            }
            else if (val == "eks") {
                me.showPage[idx] = v - 1;
                me.lastPage = v - 1;
            }
            else if (val == "ortala") {
                me.showPage[idx] = v + 1;
            }
            else if (val == "ortalaEks") {
                me.showPage[idx] = v - 1;
            }
        });
        if (val == "ortala")
            me.firstPage = me.firstPage + 1;
        if (val == "ortalaEks") {
            me.firstPage = me.firstPage - 1;
        }
    };
    /**
     * En başa dönmek için link
     * @type {any}
     */
    Pagination.prototype.firstPageElement = function () {
        return React.createElement("li", { key: -1, className: "page-item" + (this.selectPage == 1 ? " disabled" : "") },
            React.createElement("a", { id: "firstDecrease", className: "page-link", "aria-label": "Next" }, this.props.toBegin));
    };
    /**
     * En sona gitmek için a button
     * @type {any}
     */
    Pagination.prototype.lastPageElement = function () {
        return React.createElement("li", { key: -2, className: "page-item" + (this.lastIndex == this.selectPage ? " disabled" : "") },
            React.createElement("a", { id: "lastIncrease", className: "page-link", "aria-label": "Next" }, this.props.toEnd));
    };
    /**
     * Son elemanda statik bir şekilde pushlanıyor
     */
    Pagination.prototype.increaseElement = function (i) {
        return React.createElement("li", { key: i + 2, className: "page-item" + (this.lastIndex == this.selectPage ? " disabled" : "") },
            React.createElement("a", { id: "increase", className: "page-link", "aria-label": "Next" }, "\u203A"));
    };
    /**
     * İlk eleman azaltma elemanı ilk başta pushlanıyor
     */
    Pagination.prototype.decreaseElement = function (i) {
        return React.createElement("li", { key: i, className: "page-item" + (this.selectPage == 1 ? " disabled" : "") },
            React.createElement("a", { id: "decrease", className: "page-link", "aria-label": "Previous" }, "\u2039"));
    };
    /**
     * Bla Bla element
     * Daha devamı var mahiyetinde
     * @param i
     * @returns {any}
     */
    Pagination.prototype.blablaElement = function (i) {
        return React.createElement("li", { key: i, className: "page-item disabled" },
            React.createElement("span", { id: "blabla", className: "page-link", "aria-label": "BlaBla" }, "\u2026"));
    };
    /**
     * Kaç sayfa gösterileceği default 10
     * @type {{pageCount: number}}
     */
    Pagination.defaultProps = {
        toBegin: "«",
        toEnd: "»",
        pageCount: 3
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map