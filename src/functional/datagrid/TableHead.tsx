import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Col,
    Row,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    ButtonGroup,
    Popover,
    PopoverHeader,
    PopoverBody
} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';
import GetInput from '../getInput/GetInput';

export interface TableHeadProps {
    fields: any;
    store?: any;
    resetData?: React.EventHandler<any>;
    fieldOption?: any;
}

export interface TableHeadState {
    fields: any,
    clickActive: any[],
    popover: any[],
    orderActive: any,
    filterRemote: any,
    filterDelay?: any,
    orders: any[],
    filterOption:any
}

export interface standartObject {
    [key: string]: any
}

export default class TableHead extends React.Component<TableHeadProps, TableHeadState> {
    /**
     * Initial values
     * @param {TableHeadProps} props
     */
    constructor(props: TableHeadProps) {
        super(props);

        this.state = {
            fields: this.props.fields,
            clickActive: [],
            popover: [],
            orders: ["", "asc", "desc"],
            filterRemote:{interval:500, timeout:1000},
            orderActive: {active:0, value:''},
            filterOption: {value:null, fieldName:null}
        };
    }

    _filterDelay: number = 0;
    _filterInterval: any;

    /**
     * rerender state
     * @param props
     */
    componentWillReceiveProps(props: any) {
        this.setState({
            fields: this.props.fields
        })
    }

    /**
     * @returns {any}
     */
    render(): any {

        return <thead>
        <tr>{this.returnItems()}</tr>
        </thead>;
    }


    returnItems(){
        let Cell = [];
        let self = this;

        for (let i = 0; i < this.state.fields.length; i++) {
            let value = this.state.fields[i];
            let cellClass = "";

            // popup over control
            if (self.state.popover[i] === undefined) {
                self.state.popover[i] = false;
            }

            // style
            let style: standartObject = {};
            if (value.visibility !== undefined && !value.visibility) {
                style['display'] = 'none';
            }

            if(this.props.fieldOption !== undefined){
                style['width'] = this.props.fieldOption[value.value] + "px";
            }


            // style class 
            if(this.state.filterOption.value !== ("" && null) && this.state.filterOption.fieldName === value.value){
                cellClass += " filter-active";
            }

            if(this.state.orders[this.state.orderActive.active] !== "" && this.state.orderActive.value === value.value){
                cellClass += " order-active";
            }

            Cell.push(<th key={i} className={cellClass} style={style}>
                <span onClick={() => {
                    this.orderData(value.value);
                }}>{value.name}</span>
                <div className="title-option">
                    <span className="filter" id={'Popover' + i} onClick={() => {
                        self.popoverOpen(i)
                    }}><FaIcon code="fa-filter"/></span>
                    <span
                        className='order'
                        onClick={() => {
                            this.orderData(value.value)
                        }}><FaIcon
                        code={`fa-sort${(this.state.orders[this.state.orderActive.active] !== "" && this.state.orderActive.value === value.value) ? '-' + this.state.orders[this.state.orderActive.active] : ''}`}/></span>

                    <Popover placement="bottom" isOpen={self.state.popover[i]} target={`Popover${i}`}
                             toggle={() => {
                                 self.popoverOpen(i)
                             }} className="popup-over-search">
                        <PopoverHeader>Adı</PopoverHeader>
                        <PopoverBody>
                            <InputGroup>
                                <GetInput type={value.type} value={this.state.filterOption.value} onChange={(e:any)=>{
                                    this.filterData(value.value, e)
                                }}/>
                                <InputGroupAddon addonType="append"><Button><FaIcon
                                    code="fa-search"/></Button></InputGroupAddon>
                            </InputGroup>
                        </PopoverBody>
                    </Popover>
                </div>
            </th>);
        }

        return Cell;
    }

    /**
     * @param {number} param
     */
    public popoverOpen(param: number): void {
        this.state.popover[param] = !this.state.popover[param];
        this.forceUpdate();
    }

    orderData(fieldName: any) {
        

        // active size limit control
        if(this.state.orderActive.active >= (this.state.orders.length - 1)){
            this.state.orderActive.active = 0;
        }else {
            this.state.orderActive.active += 1;
        }

        // change column control
        if(this.state.orderActive.value !== '' && this.state.orderActive.value !== fieldName){
            this.state.orderActive.active = 1;
        }

        this.state.orderActive.value = fieldName;

        // orders control
        if(this.state.orders[this.state.orderActive.active] === 'asc'){
            this.props.store.orderSort(fieldName);
        }else if(this.state.orders[this.state.orderActive.active] === 'desc'){
            this.props.store.orderReverse(fieldName);
        }else {
            this.props.store.oldDataSort(fieldName);
        }

        this.forceUpdate();
    }

    orderCallback() {
        this.forceUpdate();
    }

    filterData(fieldName: any, element: any) {
        let data: any[] = [];
        let value = element;
        this._filterDelay = 0;

        this.state.filterOption.value = value;
        this.state.filterOption.fieldName = fieldName;

        // local endpoint options
        if (this.props.store.props.endPoint.props.endPoint === 'localEndPoint') {
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

        // datagrid force render method
        if (this.props.resetData !== undefined) {
            this.props.resetData(data);
        }

        this.forceUpdate();
    }


}