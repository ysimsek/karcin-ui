import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import CheckInput from '../../src/inputs/CheckInput';
import Dropdown from "reactstrap/lib/Dropdown";
import FaIcon from "../../src/functional/faicon/FaIcon";

export interface TheadProps {
    store: any;
    fields: any;
    fieldShowing?:boolean | any;
    fieldOption?:boolean | any;
}

export interface TheadState {
    store: any,
    fields: any,
    dropDownMenu?: any,
    orderIng?:any,
    fieldShowing?:boolean | any,
    fieldOption?:boolean | any
}


export default class Thead extends React.Component<TheadProps, TheadState> {

    _ordering:any = {};

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
            fieldOption: props.fieldOption
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
       
        return(<div className="datagrid-head"> 
                 {this.getItemControl()}
            </div>);
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
                            headItem.push(this.getItems(groupItems[value['groupName']]));
                            
                            if(groupItems !== null){
                                headItemGroup.push(this.getGroupAdd(groupItems[value['groupName']], value['groupName']));
                            }
                        }
                    }else {
                        headItem.push(this.getItems(value));
                        if(groupItems !== null){
                            headItemGroup.push(this.getGroupAdd(value));
                        }
                    }
                }
            });
        }

        return <thead><tr key={0}>{headItemGroup}</tr><tr key={1}>{headItem}</tr></thead>;
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

    getItems(data:any){
        let returnItem:any = [];
        if(data !== undefined){
            if(Array.isArray(data)){
                data.forEach((value:any, index:number)=>{
                    returnItem.push(<th key={0}
                    className={`${(this.state.orderIng.name !== null && value.name === this.state.orderIng.name ? 'active': '')}`}>
                        {value.label}
                        {this.orderIcon(value)}
                        {this.dropDownMenu(value)}
                        </th>)
                })
            }else {
                returnItem.push(<th key={0}
                    className={`${(this.state.orderIng.name !== null && data.name === this.state.orderIng.name ? 'active': '')}`}>
                    {data.label}
                    {this.orderIcon(data)}
                    {this.dropDownMenu(data)}
                    </th>);
            }
        }

        return returnItem;
    }

    getGroupAdd(data?:any, groupName?:any){
        let returnItem:any = [];
        if(groupName !== undefined){
            returnItem.push(<th key={0} colSpan={data.length} className="group">{groupName}</th>)
        }else {
            returnItem.push(<th key={0} className={`empty ${(this.state.orderIng.name !== null && this.state.orderIng.name === value.name ? 'active' : '')}`}></th>);
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
                    }}><input type="checkbox" checked={false}/>{value.label}</DropdownItem>);
                }else {
                    fieldButtons.push(<DropdownItem onClick={()=>{
                        this.fieldShowing(index);
                    }}><input type="checkbox" checked={true}/>{value.label}</DropdownItem>);
                }
            });
        }

        return (this.state.fieldOption !== undefined && this.state.fieldOption ? <ButtonDropdown isOpen={this.state.dropDownMenu[value.name]} toggle={()=>{this.toggleDropdown(value.name)}}>
            <DropdownToggle caret>
            </DropdownToggle>
            <DropdownMenu>
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
        let returnIcon:any = null;
        if(this.state.orderIng.name !== null && this.state.orderIng.name === value.name){
            if(this.state.orderIng.type === 'asc'){
                returnIcon = "fa-arrow-down";
            }else if(this.state.orderIng.type === 'desc'){
                returnIcon = "fa-arrow-up";
            }

            returnIcon = <span className={'order-icon'}><FaIcon code={returnIcon}/></span>;
        }

        return returnIcon;
    }



}