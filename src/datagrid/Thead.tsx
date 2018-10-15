import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input} from 'reactstrap';
import FaIcon from "../../src/functional/faicon/FaIcon";
import GetInput from "../../src/functional/getInput/GetInput";

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
    filterShowing?:any
}


export default class Thead extends React.Component<TheadProps, TheadState> {

    static defaultProps: Partial<TheadProps>  = {
        fieldOption: true,
        fieldShowing :true
    }

    constructor(props:TheadProps){
        super(props);

        this.state = {
            store : props.store,
            fields: props.fields,
            dropDownMenu: {},
            orderIng:{},
            fieldShowing: props.fieldShowing,
            fieldOption: props.fieldOption,
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

        return <thead><tr>{headItemGroup}</tr><tr>{headItem}</tr></thead>;
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
            if(Array.isArray(data)){
                data.forEach((value:any, index:number)=>{
                    let itemRef:any = null;
                    returnItem.push(<th key={index}
                    className={`${(this.state.orderIng.name !== null && value.name === this.state.orderIng.name || this.state.filterShowing[value.name] ? 'active': '')}`} ref={(e) => itemRef = e}>
                            {value.label}
                            <div className="right-option">
                                {this.getFilter(value)[0]}
                                {this.orderIcon(value)}
                            </div>
                            {this.getFilter(value)[1]}
                            {this.dropDownMenu(value)}
                            <span className={"resizing"} onMouseDown={(e:any)=>{this.resizing(e, itemRef)}} onMouseUp={(e:any)=>{this.removeResizing(e, itemRef)}}></span>
                        </th>)
                })
            }else {
                returnItem.push(<th key={index}
                    className={`${(this.state.orderIng.name !== null && data.name === this.state.orderIng.name ? 'active': '')}`}>
                        {data.label}
                        <div className="right-option">
                            {this.getFilter(data)[0]}
                            {this.orderIcon(data)}
                        </div>
                        {this.getFilter(data)[1]}
                        {this.dropDownMenu(data)}
                    </th>);
            }
        }

        return returnItem;
    }

    resizing(event:any, itemRef:any){
        let body:any = document.querySelector('body');
        body.addEventListener('mousemove',(e:any)=>{this.widthResult(e)}, true);

        body.addEventListener('mouseup', () => {
            this.removeResizing();
        })
    }

    removeResizing(e?:any, itemRef?:any){
        let body:any = document.querySelector('body');
        body.removeEventListener('mousemove',this.widthResult, true);
    }    

    widthResult(event?:any, itemRef?:any, mouse?:any){
        console.log(event, itemRef, mouse); 
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
            returnItem.push(<th key={index} style={width} className={`empty ${(this.state.orderIng.name !== null && this.state.orderIng.name === data.name ? 'active' : '')}`}></th>);
        }

        return returnItem;
    }

    dropDownMenu(value:any){
        if(this.state.dropDownMenu[value.name] === undefined){
            this.state.dropDownMenu[value.name] = false;
        }
        let fieldButtons:any = [];
        
        if(this.state.fieldShowing !== undefined && this.state.fieldShowing){

            fieldButtons.push(<DropdownItem divider />);
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
            <DropdownMenu >
                <DropdownItem onClick={()=>{
                    this.orderIng(value, 'asc');
                }}><FaIcon code="fa-arrow-down"/> Sırala</DropdownItem>
                <DropdownItem onClick={()=>{
                    this.orderIng(value, 'desc');
                }}><FaIcon code="fa-arrow-up"/> Sırala</DropdownItem>
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
        let returnFilterHtml:any;
        let filterContent:any;

        returnFilterHtml = <span className={"filter"} onClick={()=>{
            this.filterShowing(data);
        }}><FaIcon code="fa-filter"/></span>;
        filterContent = <div className={`filter-showing ${(this.state.filterShowing[data.name] !== undefined && this.state.filterShowing[data.name] ? 'show' : '')}`}><GetInput type={data.type} data={(data.data !== undefined ? data : null)}/></div>

        return [returnFilterHtml, filterContent]; 
    }

    filterShowing(data:any){
        // all show false
        for(let item in this.state.filterShowing){
            if(item !== data.name){
                this.state.filterShowing[item] = false;
            }
        }

        if(this.state.filterShowing[data.name] !== undefined){
            this.state.filterShowing[data.name] = !this.state.filterShowing[data.name];
        }else {
            this.state.filterShowing[data.name] = true;
        }

        this.forceUpdate(); 
    }



}