import * as React from "react";
export interface PaginationProps {
    /**
     * Array Data
     */
    data: Array<any> | any;
    /**
     * Set the link
     */
    hrefValue?: string;
    /**
     * Return selected data
     */
    selectedValue?: void | any;
    /**
     * Set the page count (Max : 5) or listSize
     */
    pageCount?: number;
    /**
     * Go to The Begin show button name or icon
     */
    toBegin?: any;
    /**
     * Go to The End show button name or icon
     */
    toEnd?: any;
    /**
     * increase one by one show button name or icon
     */
    toIncrease?: any;
    /**
     * decrease one by one show button name or icon
     */
    toDecrease?: any;
    /**
     * default normal
     * sm, lg
     */
    size?: any;
    /**
     * Set the type, normal and simple
     */
    type?: string;
    /**
     * Show the count data
     */
    typeShowLength?: any;
}
export default class Pagination extends React.Component<PaginationProps, any> {
    /**
     * Kaç sayfa gösterileceği default 10
     * @type {{pageCount: number}}
     */
    static defaultProps: {
        toBegin: string;
        toEnd: string;
        pageCount: number;
        type: string;
    };
    id: any;
    /**
     * Hangi sayfa seçili tutmak için
     * @type {number}
     */
    selectPage: any;
    /**
     * Dizinin son sayfası kaçıncı sayfa
     * @type {number}
     */
    lastPage: any;
    /**
     * Son indexi tutuyor
     * @type {number}
     */
    lastIndex: any;
    /**
     * Dizinin ilk sayfası kaçıncı sayfa
     * @type {number}
     */
    firstPage: any;
    /**
     *  Tüm component ler bir array de tutuluyor
     *  @type {any[]}
     */
    components: any;
    /**
     * Show page adedi gösterilecek data
     * Mesela props tan gelen pageCount 4 olsun o zaman showPage ilklenecek ve
     * [1, 2, 3, 4] şeklinde show edilecek datayı gösterecektir.
     * @type {any[]}
     */
    showPage: Array<any>;
    /**
     * Initial States
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    returnSimpleData(data: any): JSX.Element[];
    /**
     *
     * @param {Array<any>} data
     * @returns {JSX.Element[]}
     */
    renderPageFunctions(data: any, type: string): JSX.Element[];
    /**
     * Show edilecek Data ayarlanıyor
     * @param {Array<any>} data
     * @param {JSX.Element} firstData
     * @param {JSX.Element} lastData
     * @param {JSX.Element} goToTheBegin
     * @param {JSX.Element} goToTheEnd
     * @returns {JSX.Element[]}
     */
    paging(data: Array<any>, firstData: JSX.Element, lastData: JSX.Element, goToTheBegin: JSX.Element, goToTheEnd: JSX.Element): JSX.Element[];
    /**
     * Değişim kontrolü yapılıyor
     * @param e
     */
    handleChange(e: any): void;
    /**
     * Props Page 3 için ayarlama fonksiyonu
     * 3 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken olarak kabul ediliyor ve
     * 1 eksiği ve 1 fazlası olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    propsCountWhenThreeSelectPosition(e: any, pageCount: Array<any>): void;
    /**
     * PropsPage 4 için ayarlama fonksiyonu
     * 4 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ve 2 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken -1 yani 2.değişken olarak kabul ediliyor ve
     * ona göre dizilim yapılmış olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    propsCountWhenFourSelectPosition(e: any, pageCount: Array<any>): void;
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
    propsCountWhenFiveSelectPosition(e: any, pageCount: Array<any>): void;
    /**
     * Birer Birer artırım yap
     * @param pageCount
     */
    increaseOne(pageCount: any): void;
    /**
     * Birer birer azaltma yap
     */
    decreaseOne(): void;
    /**
     * İlk sayfaya geri dön
     */
    goToTheBegin(): void;
    /**
     * En son sayfaya git
     */
    goToTheEnd(): void;
    /**
     * Gösterilecek data set ediliyor
     * @param {string} val
     */
    changeShowPage(val: string): void;
    /**
     * En başa dönmek için link
     * @type {any}
     */
    firstPageElement(): JSX.Element;
    /**
     * En sona gitmek için a button
     * @type {any}
     */
    lastPageElement(): JSX.Element;
    /**
     * Son elemanda statik bir şekilde pushlanıyor
     */
    increaseElement(i: any): JSX.Element;
    /**
     * İlk eleman azaltma elemanı ilk başta pushlanıyor
     */
    decreaseElement(i: any): JSX.Element;
    /**
     * Bla Bla element
     * Daha devamı var mahiyetinde
     * @param i
     * @returns {any}
     */
    blablaElement(i: any): JSX.Element;
}
