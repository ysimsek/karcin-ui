import * as React from "react";
import { Pagination as Page, PaginationItem, PaginationLink } from 'reactstrap';
import {debug} from "util";

export interface PaginationProps{
    /**
     * Array Data
     */
    data : Array<any>;
    /**
     * Set the link
     */
    hrefValue ?: string;
    /**
     * Return selected data
     */
    selectedValue ?: void | any;
    /**
     * Set the page count
     */
    pageCount ?: number;
    /**
     * En başa dön
     */
    toBegin ?: any;
    /**
     * En sona git
     */
    toEnd ?: any;
}

export default class Pagination extends React.Component<PaginationProps,any>{
    /**
     * Kaç sayfa gösterileceği default 10
     * @type {{pageCount: number}}
     */
    static defaultProps={
        pageCount : 10,
        toBegin : "«",
        toEnd : "»"
    }

    id :any;
    /**
     * Hangi sayfa seçili tutmak için
     * @type {number}
     */
    selectPage : any = 1;

    /**
     * Dizinin son sayfası kaçıncı sayfa
     * @type {number}
     */
    lastPage : any = 0;
    /**
     * Son indexi tutuyor
     * @type {number}
     */
    lastIndex : any = 0;
    /**
     * Dizinin ilk sayfası kaçıncı sayfa
     * @type {number}
     */
    firstPage : any = 0;


    /**
     *  Tüm component ler bir array de tutuluyor
     *  @type {any[]}
     */
    components: any = [];

    /**
     * Show page adedi gösterilecek data
     * Mesela props tan gelen pageCount 4 olsun o zaman showPage ilklenecek ve
     * [1, 2, 3, 4] şeklinde show edilecek datayı gösterecektir.
     * @type {any[]}
     */
    showPage : Array<any> = [];

    /**
     * Initial States
     * @param props
     */
    constructor(props:any){
        super(props);
        this.state = {
            selectedId : this.id
        }
    }

    /**
     * @returns {any}
     */
    render():any{
        let cmp : any = <span/>;
        cmp = <Page onClick={this.handleChange.bind(this)}>
            {this.renderPageFunctions(this.props.data)}
        </Page>;
        return cmp;
    }

    /**
     *
     * @param {Array<any>} data
     * @returns {JSX.Element[]}
     */
    renderPageFunctions(data:Array<any>):JSX.Element[]{

        let numb :any = this.props.pageCount;
        if(this.showPage.length <= 0) {
            for (let i = 1; i < numb + 1; i++) {
                this.showPage.push(i);
            }
            ;
        }


        let component:JSX.Element[] = [];
        let me:any = this;
        let i = 0;
        /**
         * İlk eleman azaltma elemanı ilk başta pushlanıyor
         */
        let firstPage: JSX.Element = <li key={i} className="page-item">
                            <a  id="decrease" className="page-link" aria-label="Previous">‹</a>
                        </li>;

        let goToTheBegin: JSX.Element = <li key={-1} className="page-item">
            <a  id="firstDecrease" className="page-link" aria-label="Next">{this.props.toBegin}</a>
        </li>;
        /**
         * Array içerisinde data ayıklanıyor
         */
        data.forEach(function (val : any, idx: number) {
            i++;
            component.push(<PaginationItem active={parseInt(me.selectPage) == idx+1 ? true : false} key={i}>
                <PaginationLink href={val[me.props.hrefValue]}>
                    {idx+1}
                </PaginationLink>
            </PaginationItem>)
        })

        /**
         * Son elemanda statik bir şekilde pushlanıyor
         */
        let lastPage: JSX.Element = <li key={i+2} className="page-item">
            <a  id="increase" className="page-link" aria-label="Next">›</a>
        </li>;
        let goToTheEnd: JSX.Element = <li key={-2} className="page-item">
            <a  id="lastIncrease" className="page-link" aria-label="Next">{this.props.toEnd}</a>
        </li>;
        me.lastIndex = data.length;
        me.firstPage = this.showPage[0];

        /**
         * Gösterilmek istenene sayı kadar page görünüyor
          * @type {JSX.Element[]}
         */
        let showPage: JSX.Element[] = this.paging(component,firstPage, lastPage, goToTheBegin, goToTheEnd);
        return showPage;
    }

    /**
     * Show edilecek Data ayarlanıyor
     * @param {Array<any>} data
     * @param {JSX.Element} firstData
     * @param {JSX.Element} lastData
     * @param {JSX.Element} goToTheBegin
     * @param {JSX.Element} goToTheEnd
     * @returns {JSX.Element[]}
     */
    paging(data:Array<any>, firstData: JSX.Element, lastData: JSX.Element, goToTheBegin: JSX.Element, goToTheEnd: JSX.Element):JSX.Element[]{
        let me = this;
        let showData : JSX.Element[] = [];


        showData.push(goToTheBegin);
        showData.push(firstData);
        
        data.forEach(function (comp: any, i: number) {
            me.showPage.forEach(function (show: any,j: number) {
                if(show == parseInt(comp.key)){
                    showData.push(comp);
                }
            })
        })
        showData.push(lastData);
        showData.push(goToTheEnd);

        return showData;
    }

    /**
     * Değişim kontrolü yapılıyor
     * @param e
     */
    handleChange(e:any):void{
        let pageCount:any = this.showPage;

        if(e.target.id == "increase"){
            this.increaseOne(pageCount);
        }else if(e.target.id == "decrease"){
            this.decreaseOne();
        }else if(e.target.id == "firstDecrease"){
            this.goToTheBegin();
        }else if(e.target.id == "lastIncrease"){
            this.goToTheEnd();
        }else {
            this.selectPage = e.target.text;
        }

        if(this.props.selectedValue != undefined){
            this.props.selectedValue({page : this.selectPage, href : e.target.href, selectData:this.props.data[this.selectPage-1]});
        }

    }

    /**
     * Birer Birer artırım yap
     * @param pageCount
     */
    increaseOne(pageCount:any):void{
        //increase index
        if(this.lastIndex == this.selectPage){
            return;
        }
        if(Math.max(...pageCount) == this.selectPage){
            this.changeShowPage("art");
        }
        this.selectPage = parseInt(this.selectPage) + 1;
    }

    /**
     * Birer birer azaltma yap
     */
    decreaseOne():void{
        //decrease index
        if(this.selectPage == 1){
            return;
        }
        if(this.firstPage == this.selectPage){
            this.changeShowPage("eks");
        }
        this.selectPage = parseInt(this.selectPage) - 1;
    }

    /**
     * İlk sayfaya geri dön
     */
    goToTheBegin():void{
        let me:any = this;
        me.showPage.forEach(function (v : any, idx: number) {
            me.showPage[idx] = idx + 1;
        })
        me.selectPage = 1;
    }

    /**
     * En son sayfaya git
     */
    goToTheEnd():void{
        let me:any = this;
        let lastIndex = this.lastIndex - me.props.pageCount +1;
        debugger;
        me.showPage.forEach(function (v : any, idx: number) {
            me.showPage[idx] = lastIndex;
            lastIndex++;
        })
        me.selectPage = this.lastIndex;
        // me.firstPage = parseInt(this.lastIndex) - parseInt(me.props.pageCount) +1;

    }

    /**
     * Gösterilecek data set ediliyor
     * @param {string} val
     */
    changeShowPage(val : string){
        let me: any = this;
        me.showPage.forEach(function (v:any , idx : number) {
            if( val == "art"){
                me.showPage[idx] = v + 1;
            }else if(val == "eks"){
                me.showPage[idx] = v - 1;
                me.lastPage = v - 1;
            }
        });
    }
}