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
        cmp = React.createElement(reactstrap_1.Pagination, { onClick: this.handleChange.bind(this) }, this.renderPageFunctions(this.props.data));
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
            ;
        }
        var component = [];
        var me = this;
        var i = 0;
        /**
         * İlk eleman azaltma elemanı ilk başta pushlanıyor
         */
        var firstPage = React.createElement("li", { key: i, className: "page-item" },
            React.createElement("a", { id: "decrease", className: "page-link", "aria-label": "Previous" }, "\u2039"));
        var goToTheBegin = React.createElement("li", { key: -1, className: "page-item" },
            React.createElement("a", { id: "firstDecrease", className: "page-link", "aria-label": "Next" }, this.props.toBegin));
        /**
         * Array içerisinde data ayıklanıyor
         */
        data.forEach(function (val, idx) {
            i++;
            component.push(React.createElement(reactstrap_1.PaginationItem, { active: parseInt(me.selectPage) == idx + 1 ? true : false, key: i },
                React.createElement(reactstrap_1.PaginationLink, { href: val[me.props.hrefValue] }, idx + 1)));
        });
        /**
         * Son elemanda statik bir şekilde pushlanıyor
         */
        var lastPage = React.createElement("li", { key: i + 2, className: "page-item" },
            React.createElement("a", { id: "increase", className: "page-link", "aria-label": "Next" }, "\u203A"));
        var goToTheEnd = React.createElement("li", { key: -2, className: "page-item" },
            React.createElement("a", { id: "lastIncrease", className: "page-link", "aria-label": "Next" }, this.props.toEnd));
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
        data.forEach(function (comp, i) {
            me.showPage.forEach(function (show, j) {
                if (show == parseInt(comp.key)) {
                    showData.push(comp);
                }
            });
        });
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
        else {
            this.selectPage = e.target.text;
        }
        if (this.props.selectedValue != undefined) {
            this.props.selectedValue({ page: this.selectPage, href: e.target.href, selectData: this.props.data[this.selectPage - 1] });
        }
    };
    /**
     * Birer Birer artırım yap
     * @param pageCount
     */
    Pagination.prototype.increaseOne = function (pageCount) {
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
        debugger;
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
                me.showPage[idx] = v + 1;
            }
            else if (val == "eks") {
                me.showPage[idx] = v - 1;
                me.lastPage = v - 1;
            }
        });
    };
    /**
     * Kaç sayfa gösterileceği default 10
     * @type {{pageCount: number}}
     */
    Pagination.defaultProps = {
        pageCount: 10,
        toBegin: "«",
        toEnd: "»"
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map