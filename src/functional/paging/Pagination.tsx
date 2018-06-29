import * as React from "react";
import { Pagination as Page, PaginationItem, PaginationLink } from 'reactstrap';
import {debug} from "util";
import {disabled} from "glamor";

export interface PaginationProps{
    /**
     * Array Data
     */
    data : Array<any> | any;
    /**
     * Set the link
     */
    hrefValue ?: string;
    /**
     * Return selected data
     */
    selectedValue ?: void | any;
    /**
     * Set the page count (Max : 5) or listSize
     */
    pageCount ?: number;
    /**
     * Go to The Begin show button name or icon
     */
    toBegin ?: any;
    /**
     * Go to The End show button name or icon
     */
    toEnd ?: any;
    /**
     * increase one by one show button name or icon
     */
    toIncrease ?: any;
    /**
     * decrease one by one show button name or icon
     */
    toDecrease ?: any;
    /**
     * default normal
     * sm, lg
     */
    size ?: any;
    /**
     * Set the type, normal and simple
     */
    type ?: string;
    /**
     * Show the count data
     */
    typeShowLength ?: any;
}

export default class Pagination extends React.Component<PaginationProps,any>{
    /**
     * Kaç sayfa gösterileceği default 10
     * @type {{pageCount: number}}
     */
    static defaultProps={
        toBegin : "«",
        toEnd : "»",
        pageCount :3,
        type : "normal"
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
        if(this.props.pageCount != undefined) {
            cmp = <Page onClick={this.handleChange.bind(this)} size={this.props.size}>
                {this.props.type == "normal" ? this.renderPageFunctions(this.props.data,"normal") : (this.props.type == "simple" ? this.returnSimpleData(this.props.data) :"")}
            </Page>;
        }
        return cmp;
    }

    returnSimpleData(data:any){
        //data, type, typeShowLength gönderilecek
        let pageCount = parseInt(data)/this.props.typeShowLength;

        return this.renderPageFunctions(this.props.data,"simple");
    }

    /**
     *
     * @param {Array<any>} data
     * @returns {JSX.Element[]}
     */
    renderPageFunctions(data:any,type:string):JSX.Element[]{

        let numb :any = this.props.pageCount;
        if(this.showPage.length <= 0) {
            for (let i = 1; i < numb + 1; i++) {
                this.showPage.push(i);
            }
        }

        let component:JSX.Element[] = [];
        let me:any = this;
        let i:any = 0;
        let firstPage: JSX.Element = this.decreaseElement(i);
        let goToTheBegin: JSX.Element = this.firstPageElement();
        let x = false;
        /**
         * Dolu data ve boş string için data ayıklanıyor Array içerisinde data ayıklanıyor
         */
        type == "normal" ?
            data.forEach(function (val : any, idx: number) {
                i++;
                component.push(<PaginationItem active={parseInt(me.selectPage) == idx+1 ? true : false} key={i}>
                    <PaginationLink id={i} href={val[me.props.hrefValue]}>
                        {idx+1}
                    </PaginationLink>
                </PaginationItem>)
            }) : (x=true);

        if(x==true){
            for(let j:any=0; j< parseInt(data)/me.props.typeShowLength; j++){
                i++;
                component.push(<PaginationItem active={parseInt(me.selectPage) == j+1 ? true : false} key={j+1}>
                    <PaginationLink id={j+1} key={j+1}>
                        {j+1}
                    </PaginationLink>
                </PaginationItem>)
            }
        }

        let lastPage: JSX.Element = this.increaseElement(i);
        let goToTheEnd: JSX.Element = this.lastPageElement();
        x == false ? me.lastIndex = data.length : me.lastIndex = Math.ceil(parseInt(data)/this.props.typeShowLength);
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

        /**
         * İlk eleman kontrolü ile var yok kontrolü yapılıyor
         */
        if(me.showPage.indexOf(1) == -1){
            showData.push(this.blablaElement(-3))
        }
        data.forEach(function (comp: any, i: number) {
            me.showPage.forEach(function (show: any,j: number) {
                if(show == parseInt(comp.key)){
                    showData.push(comp);
                }
            })
        })

        /**
         * Son index kontrolü yapılıyor
         */
        if(me.showPage.indexOf(me.lastIndex) == -1){
            showData.push(this.blablaElement(-4))
        }

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
        }else if(e.target.id == "blabla" || e.target.id == ""){
            return;
        }else {
            if(this.props.pageCount == 3){
                this.propsCountWhenThreeSelectPosition(e,pageCount);
            }else if(this.props.pageCount == 4){
                this.propsCountWhenFourSelectPosition(e,pageCount);

            }else if(this.props.pageCount == 5){
                this.propsCountWhenFiveSelectPosition(e,pageCount);
            }
            this.selectPage = e.target.text != undefined ? e.target.text : e.target.id;
        }

        if(this.props.selectedValue != undefined){
            this.props.type == "normal" ?
                this.props.selectedValue({page : parseInt(this.selectPage), href : e.target.href, selectData:this.props.data[this.selectPage-1]})
                :
                this.props.selectedValue({page : parseInt(this.selectPage)})

        }

        this.forceUpdate();

    }

    /**
     * Props Page 3 için ayarlama fonksiyonu
     * 3 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken olarak kabul ediliyor ve
     * 1 eksiği ve 1 fazlası olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    propsCountWhenThreeSelectPosition(e:any,pageCount:Array<any>){
        this.selectPage = e.target.text != undefined ? e.target.text : e.target.id;
        if(parseInt(this.selectPage) == this.lastIndex){
            return;
        }
        if(parseInt(this.selectPage) == 1){
            this.showPage = [1,2,3];
            return;
        }
        for(let i =0 ; i< pageCount.length ; i++){
            pageCount[i] = parseInt(this.selectPage) - 1;
            if(i == 1) pageCount[i] = parseInt(this.selectPage);
            if(i == 2) pageCount[i] = parseInt(this.selectPage)+1;
        }
    }

    /**
     * PropsPage 4 için ayarlama fonksiyonu
     * 4 için tıklanılan sayfa son sayfa ise return ediliyor
     * Tıklanılan sayfa 1 ve 2 ise ilk olması gereken değerler set ediliyor.
     * Onun haricinde tıkladığımız değer orta değişken -1 yani 2.değişken olarak kabul ediliyor ve
     * ona göre dizilim yapılmış olarak set ediliyor.
     * @param e
     * @param {Array<any>} pageCount
     */
    propsCountWhenFourSelectPosition(e:any, pageCount:Array<any>){
        this.selectPage = e.target.text != undefined ? e.target.text : e.target.id;
        if(parseInt(this.selectPage) == this.lastIndex || parseInt(this.selectPage) == this.lastIndex - 1){
            return;
        }
        if(parseInt(this.selectPage) == 1 || parseInt(this.selectPage) == 2){
            this.showPage = [1,2,3,4];
            return;
        }
        for(let i =0 ; i< pageCount.length ; i++){
            pageCount[i] = parseInt(this.selectPage) - 1;
            if(i == 1) pageCount[i] = parseInt(this.selectPage);
            if(i == 2) pageCount[i] = parseInt(this.selectPage)+1;
            if(i == 3) pageCount[i] = parseInt(this.selectPage)+2;
        }
    }

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
    propsCountWhenFiveSelectPosition(e:any, pageCount:Array<any>){
        this.selectPage = e.target.text != undefined ? e.target.text : e.target.id;
        if(parseInt(this.selectPage) == this.lastIndex || parseInt(this.selectPage) == this.lastIndex - 1){
            return;
        }
        if(parseInt(this.selectPage) == 1 || parseInt(this.selectPage) == 2){
            this.showPage = [1,2,3,4,5];
            return;
        }
        for(let i =0 ; i< pageCount.length ; i++){
            pageCount[i] = parseInt(this.selectPage) - 2;
            if(i == 1) pageCount[i] = parseInt(this.selectPage) -1;
            if(i == 2) pageCount[i] = parseInt(this.selectPage);
            if(i == 3) pageCount[i] = parseInt(this.selectPage)+1;
            if(i == 4) pageCount[i] = parseInt(this.selectPage)+2;
        }
    }


    /**
     * Birer Birer artırım yap
     * @param pageCount
     */
    increaseOne(pageCount:any):void{
        //diziyi ortala
        if(this.selectPage){
            if(this.selectPage>=3 && (this.lastIndex != Math.max(...pageCount))){
                this.changeShowPage("ortala");
            }else if(this.selectPage >=2 && (this.lastIndex != Math.max(...pageCount))){
                this.changeShowPage("ortala");
            }
        }
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
        if(this.selectPage<=this.lastIndex-2 && (this.firstPage == Math.min(...this.showPage))){
            if(this.firstPage <= 1){

            }else {
                this.changeShowPage("ortalaEks");
            }
        }

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
                me.showPage[idx] = v + 3;
                me.firstPage = v + 1;
            }else if(val == "eks"){
                me.showPage[idx] = v - 1;
                me.lastPage = v - 1;
            }else if(val == "ortala"){
                me.showPage[idx] = v + 1;
            }else if(val == "ortalaEks"){
                me.showPage[idx] = v - 1;
            }
        });
        if(val == "ortala")
            me.firstPage = me.firstPage + 1;
        if(val == "ortalaEks") {
            me.firstPage = me.firstPage - 1;
        }
    }
    /**
     * En başa dönmek için link
     * @type {any}
     */
    firstPageElement(){
        return <li key={-1} className={"page-item"+ (this.selectPage == 1 ? " disabled" : "") }>
            <a  id="firstDecrease" className="page-link" aria-label="Next">{this.props.toBegin}</a>
        </li>;
    }
    /**
     * En sona gitmek için a button
     * @type {any}
     */
    lastPageElement(){
        return <li key={-2} className={"page-item" + (this.lastIndex == this.selectPage? " disabled" : "")}>
            <a  id="lastIncrease" className="page-link" aria-label="Next">{this.props.toEnd}</a>
        </li>;
    }
    /**
     * Son elemanda statik bir şekilde pushlanıyor
     */
    increaseElement(i:any){
        return <li key={i+2} className={"page-item"+(this.lastIndex == this.selectPage? " disabled" : "")}>
            <a  id="increase" className="page-link" aria-label="Next">›</a>
        </li>;
    }
    /**
     * İlk eleman azaltma elemanı ilk başta pushlanıyor
     */
    decreaseElement(i:any){
        return <li key={i} className={"page-item"+ (this.selectPage == 1 ? " disabled" : "")}>
            <a  id="decrease" className="page-link" aria-label="Previous">‹</a>
        </li>;
    }

    /**
     * Bla Bla element
     * Daha devamı var mahiyetinde
     * @param i
     * @returns {any}
     */
    blablaElement(i:any){
        return <li key={i} className={"page-item disabled"}>
            <span id="blabla" className="page-link" aria-label="BlaBla">…</span>
        </li>
    }

}