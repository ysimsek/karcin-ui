import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {ButtonDropdown, DropdownToggle, Button, DropdownMenu, DropdownItem, Input} from 'reactstrap';
import FaIcon from "./../functional/faicon/FaIcon";
import GetInput from "./../functional/getInput/GetInput";

export interface TheadProps {
    store: any;
    fields: any;
    fieldShowing?:boolean | any;
    fieldOption?:boolean | any;
    fieldOptionReset?:any;
}

export interface TheadState {
    store: any,
    fields: any,
    dropDownMenu?: any,
    orderIng?:any,
    fieldShowing?:boolean | any,
    fieldOption?:boolean | any,
    filterShowing?:any,
    filterRemote: any,
    filterDelay?: any,
    filterOption:any, 
}


export default class Thead extends React.Component<TheadProps, TheadState> {

    static defaultProps: Partial<TheadProps>  = {
        fieldOption: true,
        fieldShowing :true
    }

    itemRef:any = null;
    resizeEvent:any = null;
    resizeOption:any = {};

    _filterDelay: number = 0;
    _filterInterval: any;

    constructor(props:TheadProps){
        super(props);

        this.state = {
            store : props.store,
            fields: props.fields,
            dropDownMenu: {},
            orderIng:{},
            fieldShowing: props.fieldShowing,
            fieldOption: props.fieldOption,
            filterRemote:{interval:500, timeout:1000},
            filterOption: {value:null, fieldName:null},
            filterShowing:{}
        }

        
    }

    UNSAFE_componentWillReceiveProps(props:TheadProps){
        this._init(props);
    }

    _init(props:TheadProps){
        this.setState({
            store : props.store,
            fields: props.fields,
            fieldShowing: props.fieldShowing,
            fieldOption: props.fieldOption
        });
    }

    render(){
       
        return(<div className="datagrid-head">{this.getItemControl()}</div>);
    }

    getItemControl(){
        let headItemGroup:any = [];
        let headItem:any = [];
        if(this.state.fields !== undefined){
            let groupItems:any = this.groupItems(); 
            let groupNameCheck:any = [];


            this.state.fields.forEach((value:any, index:any)=>{
                if(value['visibility'] === undefined || value['visibility'] === true){
                    if(value['groupName'] !== undefined && groupItems !== null){
                        if(groupNameCheck.indexOf(value['groupName']) === -1){
                            groupNameCheck.push(value['groupName']);
                            headItem.push(this.getItems(groupItems[value['groupName']], index));
                            
                            if(groupItems !== null){
                                headItemGroup.push(this.getGroupAdd(groupItems[value['groupName']], value['groupName'], index));
                            }
                        }
                    }else {
                        headItem.push(this.getItems(value, index));
                        if(groupItems !== null){
                            headItemGroup.push(this.getGroupAdd(value, undefined, index));
                        }
                    }
                }
            });
        }

        return <thead>{(headItemGroup.length > 0 ? <tr>{headItemGroup}</tr> : '')}<tr>{headItem}</tr></thead>;
    }

    groupItems(){
        let groupItems:any = null;
        this.state.fields.forEach((value:any, index:number) => {
            if(value['groupName'] !== undefined){

                if(value['visibility'] === undefined || value['visibility'] === true){
                    if(groupItems === null){
                        groupItems = {};
                    }
                    if(groupItems[value['groupName']] === undefined){
                        groupItems[value['groupName']] = [];
                    }
                    groupItems[value['groupName']].push(value);
                }
            }
         });

         return groupItems;
    }

    getItems(data:any, index?:any){
        let returnItem:any = [];
        if(data !== undefined){
            let itemRef:any = null;

            if(Array.isArray(data)){
                data.forEach((value:any, indexes:number)=>{

                    let style:any = {};
                    if(value.width !== undefined){
                        style['width'] = value.width + "px";
                    }

                    returnItem.push(<th key={indexes}
                    className={`${(this.state.orderIng.name !== null && value.name === this.state.orderIng.name || this.state.filterShowing[value.name] ? 'active': '')}`} style={style} ref={(e) => itemRef = e}>
                            {value.label}
                            <div className="right-option">
                            {(value.filter === undefined || value.filter ? this.getFilter(value) : '')}
                            {this.orderIcon(value)}
                            </div>
                            {this.dropDownMenu(value)}
                            <span className={"resizing"} onMouseDown={(e:any)=>{this.resizing(value, itemRef, index)}} onMouseUp={(e:any)=>{this.removeResizing(value, itemRef)}}></span>
                        </th>)
                })
            }else {
                let style:any = {};
                if(data.width !== undefined){
                    style['width'] = data.width + "px";
                }

                returnItem.push(<th key={index} style={style}
                    className={`${(this.state.orderIng.name !== null && data.name === this.state.orderIng.name ? 'active': '')}`} ref={(e) => itemRef = e}>
                        {data.label}
                        <div className="right-option">
                            {(data.filter === undefined || data.filter ? this.getFilter(data) : '')}
                            {this.orderIcon(data)}
                        </div>
                        {this.dropDownMenu(data)}
                        <span className={"resizing"} onMouseDown={(e:any)=>{this.resizing(data, itemRef, index)}} onMouseUp={(e:any)=>{this.removeResizing(data, itemRef)}}></span>
                    </th>);
            }
        }

        return returnItem;
    }

    resizing(event:any, itemRef:any, index:any){
        this.itemRef = itemRef;
        this.resizeEvent = {'index':index, 'value': event};

        let body:any = document.querySelector('body');
        body.addEventListener('mousemove',this.widthResult, true);
        body.addEventListener('mouseup', () => { 
            this.removeResizing(); 
        });
    }

    removeResizing(e?:any, itemRef?:any){
        let body:any = document.querySelector('body');
        body.removeEventListener('mousemove',this.widthResult, true); 
    }    

    widthResult = (event?:any) => {
        this.state.fields[this.resizeEvent['index']]['width'] = (event.pageX - this.itemRef.offsetLeft);
        this.props.fieldOptionReset(this.state.fields);
        this.forceUpdate();
    }

    getGroupAdd(data?:any, groupName?:any, index?:any){
        let returnItem:any = [];
        if(groupName !== undefined){
            returnItem.push(<th key={index} colSpan={data.length} className="group">{groupName}</th>)
        }else {
            let width:any = null;
            if(data.width !== undefined){
                width = {'width': data.width + "px"}; 
            }

            if(this.resizeOption[data.name] !== undefined){
                width = {'width': this.resizeOption[data.name] + "px"};  
            }
            
            returnItem.push(<th key={index} style={width} className={`empty ${(this.state.orderIng.name !== null && this.state.orderIng.name === data.name ? 'active' : '')}`}></th>);
        }

        return returnItem;
    }

    dropDownMenu(value:any){
        if(this.state.dropDownMenu[value.name] === undefined){
            this.state.dropDownMenu[value.name] = false;
        }
        let fieldButtons:any = [];
        
        if(this.state.fieldShowing === undefined || this.state.fieldShowing){
            fieldButtons.push(<DropdownItem header>Field Showing</DropdownItem>);

            this.state.fields.forEach((value:any, index:any)=>{
                if(value['visibility'] !== undefined && !value['visibility']){
                    fieldButtons.push(<DropdownItem onClick={()=>{
                        this.fieldShowing(index);
                    }}><Input type="checkbox" defaultChecked={false}/>{value.label}</DropdownItem>);
                }else {
                    fieldButtons.push(<DropdownItem onClick={()=>{
                        this.fieldShowing(index);
                    }}><Input type="checkbox" defaultChecked={true}/>{value.label}</DropdownItem>);
                }
            });
        }

        return (this.state.fieldOption !== undefined && this.state.fieldOption ? <ButtonDropdown isOpen={this.state.dropDownMenu[value.name]} toggle={()=>{this.toggleDropdown(value.name)}}>
            <DropdownToggle caret>
            </DropdownToggle>
            <DropdownMenu>
                {(value.order === undefined || value.order ? <DropdownItem onClick={()=>{
                    this.orderIng(value, 'asc');
                }}><FaIcon code="fa-arrow-down"/> Sırala</DropdownItem> : '')}
                
                {(value.order === undefined || value.order ? <DropdownItem onClick={()=>{
                    this.orderIng(value, 'desc');
                }}><FaIcon code="fa-arrow-up"/> Sırala</DropdownItem> : '')}
                
                {(value.order === undefined || value.order ? <DropdownItem divider /> : '')}
                {fieldButtons}
            </DropdownMenu>
            </ButtonDropdown> : '');
    }

    toggleDropdown(name:any){
        this.state.dropDownMenu[name] = !this.state.dropDownMenu[name];
        this.forceUpdate(); 
    }

    fieldShowing(index:any){
        if(this.state.fields[index]['visibility'] !== undefined){
            this.state.fields[index]['visibility'] = !this.state.fields[index]['visibility'];
        }else {
            this.state.fields[index]['visibility'] = false;
        }
        this.props.fieldOptionReset(this.state.fields);

        this.forceUpdate();
    }

    orderIng(value:any, type:any){
        if(type === 'desc'){
            this.state.orderIng['name'] = value.name;
            this.state.orderIng['type'] = type;
            this.props.store.orderSort(value.name);
        }else if('asc') {
            this.state.orderIng['name'] = value.name;
            this.state.orderIng['type'] = type;
            this.props.store.orderReverse(value.name);
        }else {
            this.state.orderIng['name'] = null;
            this.state.orderIng['type'] = null;
            this.props.store.oldDataSort(value.name);
        }

        this.forceUpdate();
    }

    orderIcon(value:any) {
        let returnIcon:any;
        if(this.state.orderIng.name !== null && value.name === this.state.orderIng.name){
            if(this.state.orderIng.type === 'asc'){
                returnIcon = "fa-arrow-down";
            }else if(this.state.orderIng.type === 'desc'){
                returnIcon = "fa-arrow-up";
            }

            returnIcon = <span className={'order-icon'}><FaIcon code={returnIcon}/></span>; 
        }

        return returnIcon;
    }

    getFilter(data:any){
        let filterContent:any;

        filterContent = <ButtonDropdown isOpen={(this.state.filterShowing[data.name] !== undefined && this.state.filterShowing[data.name]) ? this.state.filterShowing[data.name] : false} toggle={()=>{this.filterToggle(data)}}>
                            <DropdownToggle><FaIcon code="fa-filter"/></DropdownToggle>
                            <DropdownMenu>
                            <GetInput type={data.type} value={this.state.filterOption.value} onChange={(e:any)=>{
                                    this.filterData(data.name, e);
                                }}/>
                                <Button><FaIcon code="fa-search"/></Button>
                            </DropdownMenu>
                        </ButtonDropdown>;

        return filterContent; 
    }

    filterToggle(data:any){
        this.state.filterShowing[data.name] = !this.state.filterShowing[data.name];
        this.forceUpdate(); 
    }

    filterData(fieldName: any, element: any) {
        let data:any;
        let value = element;
        this._filterDelay = 0;

        this.state.filterOption.value = value;
        this.state.filterOption.fieldName = fieldName;

        // local endpoint options
        if (this.props.store.props.endPoint.props.endPoint === 'localPoint') {
            this.props.store.filter(fieldName, value, (response:any) => {
                data = response;
            });

        } 
        // remote endpoint options
        else {
            if (this._filterInterval !== undefined) {
                clearInterval(this._filterInterval);
            }

            this._filterInterval = setInterval(() => {
                this._filterDelay += this.state.filterRemote.interval;
                if (this._filterDelay >= this.state.filterRemote.timeout) {
                    this.props.store.filter(fieldName, "%" + value + "%", "LIKE", (response:any) => {
                        data = response; 
                    }); 
                    clearInterval(this._filterInterval);
                }
            }, this.state.filterRemote.interval);
        }

        this.forceUpdate();
    }



}