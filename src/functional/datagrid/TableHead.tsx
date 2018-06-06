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
import {valid} from "glamor";

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
    order: any,
    filterRemoteTimeOut: number | any,
    filterRemoteInterval: number | any,
    filterDelay?: any
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
            order: '',
            filterRemoteTimeOut: 3000,
            filterRemoteInterval: 1000
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

            Cell.push(<th key={i} style={style}>
                <span>{value.name}</span>
                <div className="title-option">
                    <span className="filter" id={'Popover' + i} onClick={() => {
                        self.popoverOpen(i)
                    }}><FaIcon code="fa-filter"/></span>
                    <span
                        className={`order ${(this.state.order !== '' && this.state.order.value === value.value) ? 'active' : ''}`}
                        onClick={() => {
                            this.orderData(value.value)
                        }}><FaIcon
                        code={`fa-sort${(this.state.order !== '' && this.state.order.value === value.value) ? '-' + this.state.order.order : ''}`}/></span>

                    <Popover placement="bottom" isOpen={self.state.popover[i]} target={`Popover${i}`}
                             toggle={() => {
                                 self.popoverOpen(i)
                             }} className="popup-over-search">
                        <PopoverHeader>Adı</PopoverHeader>
                        <PopoverBody>
                            <InputGroup>
                                <Input placeholder="Arama" onKeyUp={(e) => {
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
        let order = this.state.order;

        if (this.state.order.value !== undefined && fieldName !== this.state.order.value) {
            order = '';
        }

        if (order === '') {
            this.props.store.orderSort(fieldName, () => {
                this.orderCallback()
            });
        } else if (order.order === 'asc') {
            this.props.store.orderSort(fieldName, () => {
                this.orderCallback()
            });
        } else if (order.order === 'desc') {
            this.props.store.ready();
        }
    }

    orderCallback() {
        this.forceUpdate();
    }

    filterData(fieldName: any, element: any) {
        let data: any[] = [];
        let value = element.target.value;
        this._filterDelay = 0;


        if (this.props.store.props.endPoint.props.endPoint === 'localEndPoint') {
            data = this.props.store.filter(fieldName, value);
        } else {

            if (this._filterInterval !== undefined) {
                clearInterval(this._filterInterval);
            }

            this._filterInterval = setInterval(() => {
                this._filterDelay += this.state.filterRemoteInterval;
                if (this._filterDelay >= this.state.filterRemoteTimeOut) {
                    data = this.props.store.filter(fieldName, value);
                    clearInterval(this._filterInterval);
                }
            }, this.state.filterRemoteInterval);
        }

        if (this.props.resetData !== undefined) {
            this.props.resetData(data);
        }
    }


}