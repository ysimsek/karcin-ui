import * as React from 'react';
import '../../css/karcin-ui.css';

export interface AutoComplateProps {
    /**
     * change the type
     * single and multi
     */
    type ?: string | any;
    /**
     * Selectinput elements
     */
    items: Array<any> | any;
    /**
     * Manage the target value
     */
    value?:string | any;
    /**
     * Set the component's id
     */
    id?:string | any;
    /**
     * Set the title component
     */
    label?:string | any;
    /**
     * left,right,up
     */
    labelPosition?: string | any;
    /**
     * set the component's name
     */
    name?:string | any;
    /**
     * Manage the value in function
     */
    onChange?: any;

    /**
     * item active item or items
     */
    activeItem?:Array<any> | any;

    /**
     * select div className
     */
    className?:any;
    /**
     * multi select dropdown items renderer
     */
    renderer?: React.EventHandler<any> | any;

    /**
     * multi select item selected renderer function
     */
    selectedRenderer?: React.EventHandler<any> | any;

    /**
     * Select placeholder show text and disabled = false
     */
    placeholder?: string | any;
}

export interface AutoComplateState {
    itemActive ?: Array<any> | any;
    selectedItem ?: Array<any> | any;
    inputText ?: object | any;
    showing ?: object | any;
    dropDownItems ?: Object | any;
    active ?: object | any;
    focusControl:object | any;
    randomId ?: any;
}

export default class AutoComplate extends React.Component<AutoComplateProps, AutoComplateState> {

    static defaultProps:Partial<AutoComplateProps> = {
        type : "single",
        id : "id",
        value: "value",
        labelPosition : "up",
        placeholder : "Lütfen Seçiniz"
    };

    selectInput:any = null;

    constructor(props:AutoComplateProps){
        super(props);

        this.state = {
            itemActive : {active:{}},
            selectedItem : {active:{}},
            inputText : {value:""},
            showing : {multiDrop:false},
            dropDownItems: {data:[]},
            active: {arrowActive:null},
            focusControl : {control:false},
            randomId : Math.floor(Math.random() * 10)
        };

        // boş alana tıklanıldığını kontol eden method
        window.addEventListener('click', (event:any) => {
            let control = false;
            event.path.forEach((value:any)=>{
                if(value.className !== undefined && value.className !== "" && value.className.indexOf("karcin-select-input") !== -1 && value.className.indexOf('select-' + this.state.randomId) !== -1){
                    control = true;
                }
            });

            if(!control){
                this.inputFocusOut();
            }
        });

        this.itemActive();

    }


    UNSAFE_componentWillReceiveProps(props: AutoComplateProps) {
        this.forceUpdate();
    }


    render(){
        return <div className={`karcin-select-input select-${this.state.randomId}`} onClick={() => { if(this.props.type !== "single") { this.inputFocus();} }}>
            <div className={`form-group ${this.props.labelPosition}`}>
                {this.labelResult()}
                <div className="select-input-result">
                    {this.multiSelectResult()}
                    {(this.state.showing.multiDrop && this.props.items.length > 0) ? this.getDropDownItems() : ''}
                </div>
            </div>
        </div>;
    }


    /**
     * label return methodu
     */
    labelResult(){
        let returnLabel:any = null;
        if(this.props.label !== undefined){
            returnLabel = <label className={"label-properties"}>{this.props.label}</label>
        }
        return returnLabel;
    }

    /**
     * input focus method
     */
    inputFocus(){
        this.selectInput.focus();
        this.state.showing.multiDrop = true;
        this.state.focusControl.control = true;
        this.forceUpdate();
    }

    /**
     * input out focus methodu
     */
    inputFocusOut(){
        this.state.focusControl.control = false;
        this.state.showing.multiDrop = false;
        this.forceUpdate();
    }

    /**
     * multi input type result method
     */
    multiSelectResult(){
        let returnHtml = <div className={`multi-select-input ${(this.state.focusControl.control) ? 'input-focus' : ''}`}>
            <input type="text" placeholder={(this.state.selectedItem.length <= 0 ? this.props.placeholder !== false ? this.props.placeholder : '' : '')} value={this.state.inputText.value} onKeyDown={(event)=>{
                this.inputKeyControl(event);
            }} className="multi-input" ref={(e) => { this.selectInput = e; }} onChange={(e)=>{this.multiHandleChangeInput(e);}}/>
        </div>;

        return returnHtml;
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
        if(this.state.selectedItem !== undefined && this.state.selectedItem.active[this.props.value] === this.state.inputText.value){
            newArray.length = 0;
            getPropsItems.forEach((value:any) => {
                let itemControl:Boolean = false;
                if(value[this.props.value] === this.state.selectedItem.active[this.props.value] && value[this.props.id] === this.state.selectedItem.active[this.props.id]){
                    itemControl = true;
                }

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
            itemsList.push(<div className={`item ${(this.state.active.arrowActive === index) ? 'active' : ''}`} key={index+1} onClick={() => {this.addSelectedItem(value)}}>{(this.props.renderer !== undefined) ? this.props.renderer(value) : value[this.props.value]}</div>);
        });

        this.state.dropDownItems.data = getPropsItems.slice(0);

        return <div className="select-dropdown">{itemsList}</div>;
    }


    /**
     * seçilen item ' ı ekleme
     * @param value
     */
    addSelectedItem(value:any){
        this.state.selectedItem.active = value;
        this.state.itemActive.active = value;
        this.state.active.arrowActive = null;
        this.state.inputText.value = value[this.props.value]
        this.forceUpdate();
        this.onChangeProps();
    }

    /**
     * klavya tuş kontrol ana method
     * @param event
     */
    inputKeyControl(event:any){
        if(event.keyCode == 38) {
            this.arrowSelectFieldUp();
        }else if(event.keyCode == 40){
            this.arrowSelectFieldDown();
        }else if (event.keyCode === 13) {
            this.enterSelectArrowItem();
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
     * props onChange methodu çalıştırma
     */
    onChangeProps(){
        if(this.props.onChange !== undefined){
            let target:any = {};

            let newArray                = this.state.itemActive.active;
                target['id']            = newArray[this.props.id];
                target['name']          = this.props.name;
                target['value']         = newArray[this.props.value];
                target['parsedValue']   = newArray;

            this.props.onChange({target});
        }
    }

    /**
     * props ' tan gelen active objesini atama
     */
    itemActive(){
        if(this.props.activeItem !== undefined && this.props.activeItem !== ""){
            this.state.selectedItem.active = this.props.activeItem;
            this.forceUpdate();
        }
    }
}