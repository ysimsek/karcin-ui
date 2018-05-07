import * as React from 'react';
import {Input} from 'reactstrap';
import FaIcon from '../../functional/faicon/FaIcon'
import '../../css/karcin-ui.css';

export interface SelectInputProps {
    type ?: string | any;
    items: Array<any> | any;
    value?:string | any;
    id?:string | any;
    label?:string | any;
    labelPosition?: string | any;
    name?:string | any;
    onChange?: any;
    item?:Object | any;
    className?:any;
    renderer?: React.EventHandler<any> | any;
    selectedRenderer?: React.EventHandler<any> | any;
}

export interface SelectInputState {
    itemActive ?: Array<any> | any;
    selectedItem ?: Array<any> | any;
    inputText ?: object | any;
    showing ?: object | any;
    dropDownItems ?: Object | any;
    active ?: object | any;
}

export default class SelectInput extends React.Component<SelectInputProps, SelectInputState> {

    static defaultProps:Partial<SelectInputProps> = {
        type : "single",
        id : "id",
        value: "value",
        labelPosition : "up"
    }

    selectInput:any = null;

    constructor(props:SelectInputProps){
        super(props);

        this.state = {
            itemActive : [],
            selectedItem : [],
            inputText : {value:""},
            showing : {multiDrop:false},
            dropDownItems: {data:[]},
            active: {arrowActive:null}
        }

        // boş alana tıklanıldığını kontol eden method
        window.addEventListener('click', (event:any) => {
            let control = false;
            event.path.forEach((value:any)=>{
                if(value.className !== undefined && value.className !== "" && value.className === "karcin-select-input"){
                    control = true;
                }
            });

            if(!control){
                this.inputFocusOut();
            }
        });

        this.itemActive();

    }


    render(){
        let selectInputType = null;

        if(this.props.type === "multi"){
            selectInputType = this.multiSelectResult();
        }else {
            selectInputType = this.singleSelectResult();
        }

        return <div className="karcin-select-input" onClick={() => { if(this.props.type !== "single") { this.inputFocus();} }}>
            <div className={`form-group ${this.props.labelPosition}`}>
                {this.labelResult()}
                <div className="select-input-result">
                    {selectInputType}
                    {(this.state.showing.multiDrop && this.props.items.length !== this.state.selectedItem.length) ? this.getDropDownItems() : ''}
                </div>
            </div>
        </div>;
    }

    /**
     * single select type result method
     */
    singleSelectResult(){
        let returnHtml:any[] = [];

        this.props.items.forEach((value:any, index:number) => {
            let id = value[this.props.id];
            let val = value[this.props.value];
            if(id !== undefined &&  val !== undefined){
                returnHtml.push(<option key={index} value={id}>{val}</option>);
            }
        })

        return <select className={`form-control karcin-select ${this.props.className}`} name={this.props.name} onChange={(e)=>{ this.singleHandleChange(e); }}>{returnHtml}</select>
    }

    /**
     * single select input ' un değiştiğinde value atama
     * @param event
     */
    singleHandleChange(event:any){
        this.props.items.forEach((value:any, index:number) => {
            if(value[this.props.id].toString() === event.target.value){
                this.state.itemActive.length = 0;
                this.state.itemActive.push(value);
                this.forceUpdate();
                this.propsOnChange();
            }
        });
    }

    /**
     * label return methodu
     */
    labelResult(){
        let returnLabel:any = null;
        if(this.props.label !== undefined){
            returnLabel = <label className="karcin-label">{this.props.label}</label>
        }
        return returnLabel;
    }

    /**
     * single onchange method
     */
    propsOnChange(){
        if(this.state.itemActive.length > 0 && this.props.onChange !== undefined){
            this.props.onChange(this.state.itemActive);
        }
    }

    /**
     * input focus method
     */
    inputFocus(){
        this.selectInput.focus();
        this.state.showing.multiDrop = true;
        this.forceUpdate();
    }

    /**
     * input out focus methodu
     */
    inputFocusOut(){
        this.state.showing.multiDrop = false;
        this.forceUpdate();
    }

    /**
     * multi input type result method
     */
    multiSelectResult(){
        let returnHtml = <div className="multi-select-input">
            {this.getMultiSelectItem()}
            <input type="text" value={this.state.inputText.value} onKeyDown={(event)=>{
                this.inputKeyControl(event);
            }} className="multi-input" ref={(e) => { this.selectInput = e; }} onChange={(e)=>{this.multiHandleChangeInput(e);}}/>
        </div>;

        return returnHtml;
    }

    /**
     * seçili itemları listeleme methodu
     */
    getMultiSelectItem(){
        let getSelectItem:any = [];

        if(this.state.selectedItem.length > 0){
            this.state.selectedItem.forEach((value:any, index:number) => {
                getSelectItem.push(<div className="select-item" key={index}><span>{(this.props.selectedRenderer !== undefined) ? this.props.selectedRenderer(value) : value[this.props.value]}</span><i className="close-button" onClick={() => {this.removeSelectItem(index)}}><FaIcon code="fa-times"/></i></div>);
            });
        }

        return getSelectItem;
    }

    /**
     * seçilen itemları silme methodu
     * @param id
     */
    removeSelectItem(id:any){
        this.state.selectedItem.splice(id,1);
        this.forceUpdate();
        this.onChangeProps();
    }

    /**
     * multi select input da değişen value kontrol edip atama
     * @param event
     */
    multiHandleChangeInput(event:any){
        let value = event.target.value;
        this.state.inputText.value = value;
        this.forceUpdate();
        this.inputFocus();
    }

    /**
     * dropdown da gösterilecek itemları array return eden method
     */
    getDropDownItems(){
        let itemsList:any[] = [];
        let newArray:any[] = [];
        let getPropsItems:any = this.props.items.slice(0);

        // selected item filter data
        if(this.state.selectedItem.length > 0){
            newArray.length = 0;
            getPropsItems.forEach((value:any) => {
                let itemControl:Boolean = false;
                this.state.selectedItem.forEach((val:any)=>{
                    if(value[this.props.id] === val[this.props.id] && value[this.props.value] === val[this.props.value]){
                        itemControl = true;
                    }
                });

                if(!itemControl){
                    newArray.push(value);
                }
            });

            getPropsItems.length = 0;
            getPropsItems = newArray.slice(0);
        }


        // input text filter data
        if(this.state.inputText.value !== ""){
            newArray.length = 0;
            getPropsItems.forEach((value:any) => {
                if(value[this.props.value].search(this.state.inputText.value) !== -1 || value[this.props.value].toLowerCase().search(this.state.inputText.value) !== -1){
                    newArray.push(value);
                }
            });

            getPropsItems.length = 0;
            getPropsItems = newArray.slice(0);
        }

        getPropsItems.forEach((value:any, index:number) => {
            itemsList.push(<div className={`item ${(this.state.active.arrowActive === index) ? 'active' : ''}`} key={index} onClick={() => {this.addSelectedItem(value)}}>{(this.props.renderer !== undefined) ? this.props.renderer(value) : value[this.props.value]}</div>);
        });

        this.state.dropDownItems.data = getPropsItems.slice(0);

        return <div className="select-dropdown">{itemsList}</div>;
    }


    /**
     * seçilen item ' ı ekleme
     * @param value
     */
    addSelectedItem(value:any){
        this.state.selectedItem.push(value);
        this.state.inputText.value = "";
        this.state.active.arrowActive = null;
        this.forceUpdate();
        this.onChangeProps();
    }

    /**
     * klavya tuş kontrol ana method
     */
    inputKeyControl(event:any){
        if(event.keyCode == 38) {
            this.arrowSelectFieldUp();
        }else if(event.keyCode == 40){
            this.arrowSelectFieldDown();
        }else if (event.keyCode === 13) {
            this.enterSelectArrowItem();
        }else if(event.keyCode === 8 && this.state.inputText.value.length <= 0){
            this.backSpaceRemove();
        }else if(event.keyCode === 27){
            this.inputFocusOut();
        }
    }

    /**
     * klavyeden üst yön tuşuna basınca dropdown item seçme methodu
     */
    arrowSelectFieldUp(){
        this.inputFocus();
        if(this.state.active.arrowActive > 0 && this.state.active.arrowActive !== null){
            let active = this.state.active.arrowActive;
            this.state.active.arrowActive = active - 1;
            this.forceUpdate();
        }
    }

    /**
     * klavyeden alt yön tuşuna basınca dropdown item seçme methodu
     */
    arrowSelectFieldDown() {
        this.inputFocus();
        if(this.state.dropDownItems.data.length >= 0){
            let active = 0;

            if(this.state.active.arrowActive !== null){
                active = this.state.active.arrowActive;
                if(active < this.state.dropDownItems.data.length - 1){
                    this.state.active.arrowActive = active + 1;
                }
            }else {
                this.state.active.arrowActive = active;
            }

            this.forceUpdate();
        }
    }

    /**
     * klavyeden enter ' a basınca çalışacak method
     */
    enterSelectArrowItem(){
        let value = this.state.dropDownItems.data[this.state.active.arrowActive];

        if(value !== undefined){
            this.addSelectedItem(value);
        }
    }

    /**
     * kalvyeden back space' e basınca çalışacak method
     */
    backSpaceRemove(){
        this.removeSelectItem(this.state.selectedItem.length - 1);
    }


    /**
     * props onChange methodu çalıştırma
     */
    onChangeProps(){
        if(this.props.onChange !== undefined){
            this.props.onChange(this.state.selectedItem);
        }
    }

    /**
     * props ' tan gelen active objesini atama
     */
    itemActive(){
        if(this.props.item !== undefined){
            this.props.item.forEach((value:any, index:number) => {
                this.state.selectedItem.push(value);
            });
            this.forceUpdate();
        }
    }
}