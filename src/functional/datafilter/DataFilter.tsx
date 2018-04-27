import * as React from 'react';
import FaIcon from '../faicon/FaIcon'
import {Input} from 'reactstrap';

export interface DataFilterProps {
    field: Array<FieldArray> | any;
}

export interface DataFilterState {
    inputText?: any,
    showing?: any,
    selectedItem?: any[],
    selectText?: any[]
}

export interface FieldArray {
    label?: string,
    type?: string,
    name?: string,
    filter?: boolean
}

export default class DataFilter extends React.Component<DataFilterProps, DataFilterState> {

    inputText = null;
    inputType : "text";
    operators = [
        {label: '=', name : 'equal'},
        {label: '!=', name : 'not equal'},
        {label: '<', name : 'less'},
        {label: '<=', name : 'less or equal'},
        {label: '>', name : 'greater'},
        {label: '>=',name : 'greater or equal'},
        {label: '~=',name : 'like'},
        {label: '|=',name : 'in(use | to separate)'}
    ];

    constructor(props: DataFilterProps) {
        super(props);


        this.state = {
            inputText: {value:""},
            showing: {filterName:false, operator:false, value:false},
            selectedItem: [],
            selectText: [],
        }
    }


    render() {

        let getFilterItem = this.getSelectFieldItem();

        return (<div className="karcin-data-filter" onClick={() => {
            this.focusInput()
        }}>
            <div className="filter-content">
                {(this.state.selectedItem.length > 0) ?
                    <div className="selected-items">
                        {this.getSelectedItem()}
                    </div>
                    : ''}

                <div className="half-select">
                    {this.getSelectText()}
                </div>
                <div className="text-input">
                    <input value={this.state.inputText.value}
                           className="form-control" type={this.inputType} name="inputText" onKeyDown={(e)=>{this.inputKeyControl(e)}} id="inputText"
                           onChange={(e) => {
                               this.handleChange(e)
                           }} ref={(e) => {
                        this.inputText = e;
                    }}/>

                    {(this.state.showing.filterName || this.state.showing.operator || this.state.showing.value) ?
                        (getFilterItem.length > 0) ? <div className="selected-field">{getFilterItem}</div> : ""
                        : ''}

                </div>
            </div>
        </div>);
    }


    handleChange(e) {
        this.state.inputText.value = e.target.value;
        this.forceUpdate();
        this.fieldShowingControl()
    }

    focusInput() {
        this.inputText.focus();
        this.fieldShowingControl()
    }

    inputOutFocus() {
        console.log(this.state.showing['filterName']);
    }

    getSelectFieldItem() {
        let getLists: any[] = [];

        if (this.props.field !== undefined) {

            if(this.state.showing.filterName) {
                this.props.field.forEach((value: any, index: number) => {

                    let returnHtml:JSX.Element = <div className="item" onClick={() => {
                        this.setName(value, index)
                    }}><span>{value.label}</span></div>;

                    if(this.state.inputText.value !== ""){
                        if(value.label.search(this.state.inputText.value) !== -1){
                            getLists.push(returnHtml);
                        }
                    }else {
                        getLists.push(returnHtml);
                    }

                });
            }else if(this.state.showing.operator){
                this.operators.forEach((value:any, index:number) => {

                    let returnHtml:JSX.Element = <div className="item" onClick={() => {
                        this.setOperator(value, index)
                    }}><span>{value.label + " " + value.name}</span></div>;

                    if(this.state.inputText.value !== ""){
                        if(value.label.search(this.state.inputText.value) !== -1){
                            getLists.push(returnHtml);
                        }
                    }else {
                        getLists.push(returnHtml);
                    }
                });

            }else if(this.state.showing.value){
                let getItems = this.fieldValueShowing();
                if(getItems.length > 0) {
                    getItems.forEach((value:any, index:number) => {

                        let returnHtml:JSX.Element = <div className="item" onClick={() => {
                            this.setValue(value, index)
                        }}><span>{value.label}</span></div>;

                        if(this.state.inputText.value !== ""){
                            if(value.label.search(this.state.inputText.value) !== -1){
                                getLists.push(returnHtml);
                            }
                        }else {
                            getLists.push(returnHtml);
                        }
                    })



                }
            }
        }

        return getLists;
    }

    fieldValueShowing(){
        let getLists : any[] = [];
        let inputType : any = "text";
        this.props.field.forEach((value:any, index:number)=>{
            if(this.state.selectText.length > 0 && this.state.selectText[0].name === value.name) {
                if (value.type === "password") {
                    getLists = [];
                    inputType = "password";
                } else if (value.type === "number") {
                    getLists = [];
                    inputType = "number";
                } else if (value.type === "select" || value.type === "radio") {
                    if(value.items !== undefined){
                        getLists = value.items;
                    }
                    inputType = "text";
                } else {
                    getLists = [];
                    inputType = "text";
                }
            }
        });

        this.inputType = inputType;
        return getLists;
    }

    setName(val: any, id: number) {
        val['type'] = "field";
        this.state.selectText.push(val);
        this.state.showing.filterName = false;
        this.state.showing.operator = true;
        this.state.inputText.value = "";
        this.forceUpdate();
        this.inputOutFocus();
    }

    setOperator(val:any, id:number){
        val['type'] = "operators";
        this.state.selectText.push(val);
        this.state.showing.operator = false;
        this.state.showing.value = true;
        this.state.inputText.value = "";
        this.forceUpdate();
        this.inputOutFocus();
    }

    setValue(val:any, id:number){
        val['type'] = "value";
        this.state.selectText.push(val);
        this.state.showing.value = false;
        this.state.inputText.value = "";
        this.forceUpdate();
        this.textConvertItem();
    }

    getSelectedItem() {
        let getList: any[] = [];

        this.state.selectedItem.forEach((value: any, index: number) => {

            // items value print
            let itemsName:any[] = [];
            value.forEach((val:any, id:number)=>{
                itemsName.push(val.label);
            });

            getList.push(<div className="item">
                <span>{itemsName.join(' ')}</span>
                <span className="close-button" onClick={() => {
                    this.removeSelectItem(index)
                }}><FaIcon code="fa-times"/></span>
            </div>);
        });
        return getList;
    }

    removeSelectItem(id: number) {
        this.state.selectedItem.splice(id,1);
        this.forceUpdate();
    }

    fieldShowingControl() {
        if (this.state.selectText.length <= 0) {
            this.state.showing.filterName = true;
            this.forceUpdate();
        }
    }

    getSelectText() {
        let getLists: any[] = [];

        if (this.state.selectText.length > 0) {
            this.state.selectText.forEach((val: any) => {
                getLists.push(<span>{val.label}</span>);
            });
        }

        return getLists;
    }

    textConvertItem(){
        if(this.state.selectText.length >= 3){
            let text:any = [];
            this.state.selectText.forEach((value:any, index:number)=>{
                console.log(value);
                text.push(value);
            });

            this.state.selectedItem.push(text);
            this.inputReset();
        }
    }

    inputReset(){
        this.setState({
            selectText : [],
            inputText : {value:""}
        });
        this.inputType = "text";
    }

    inputKeyControl(event:any){
        // "enter" key code
        if(event.keyCode === 13 && this.state.selectText.length >= 2){
            this.setValue({label:this.state.inputText.value}, 0);
        }else if(event.keyCode === 8 && this.state.inputText.value === "" && (this.state.selectedItem.length > 0  || this.state.selectText.length > 0)){
            this.backSpaceRemoveItem();
        }
    }

    backSpaceRemoveItem(){
        let lastItem:any[] = [];
        let inItemLast:any = {};

        if(this.state.selectText.length > 0){
            inItemLast = this.state.selectText[this.state.selectText.length - 1];
            this.state.selectText.splice(this.state.selectText.length - 1, 1);
        }else {
            lastItem = this.state.selectedItem.slice(this.state.selectedItem.length - 1);
            this.state.selectedItem.splice(this.state.selectedItem.length - 1, 1);
            lastItem[0].forEach((value:any, index:number)=>{
                let numbers = index + 1;

                if(lastItem[0].length > numbers) {
                    this.state.selectText.push(value);
                }else {
                    inItemLast = value;
                }
            })


        }

        console.log(inItemLast);
        this.state.inputText.value = inItemLast['label'];
        this.forceUpdate();
    }



}