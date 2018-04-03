import * as React from "react";
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

import {FaIcon} from 'karcin-ui';
import '../../sass/table.scss';

import TableBody from './TableBody';
import TableHead from './TableHead';

export interface DataGridProps {
    data?:any,
    fields?: any[]
}

export interface DataGridState {
    popoverOpen1: boolean,
    popoverOpen2: boolean,
    popoverOpen3: boolean,
    popoverOpen4: boolean,
    data?: any,
    fields?: any[],
    dataGridId : any
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    constructor(props: DataGridProps) {
        super(props);

        this.state = {
            popoverOpen1: false,
            popoverOpen2: false,
            popoverOpen3: false,
            popoverOpen4: false,
            data : this.props.data,
            fields : this.props.fields,
            dataGridId: Math.floor(Math.random() * 20)
        }
    }


    render() {
        return <div className="karcin-data-grid" id={'karcinDataGrid' + this.state.dataGridId}>
            <div className="data-grid-header">
                <Row>
                    <Col xs="2" className="data-grid-search">
                        <InputGroup>
                            <Input placeholder="Arama"/>
                            <InputGroupAddon addonType="append"><Button><FaIcon
                                code="fa-search"/></Button></InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col xs={{size: 4, offset: 6}} className="header-buttons">
                        <ButtonGroup>
                            <Button color="defaults" disabled><FaIcon code="fa-plus"/><span>Ekle</span></Button>
                            <Button color="defaults"><FaIcon code="fa-edit"/><span>Düzenle</span></Button>
                            <Button color="defaults"><FaIcon code="fa-remove"/><span>Sil</span></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
            <div className="data-grid-body">
                <table className="table table-bordered dataGrid">
                    {/*<thead>*/}
                    {/*<tr>*/}
                        {/*<th>İd</th>*/}
                        {/*<th>Adı*/}
                            {/*<div className="title-option">*/}
                                {/*<span className="filter" id="Popover1" onClick={() => {*/}
                                    {/*this.popoverOpen(1)*/}
                                {/*}}><FaIcon code="fa-filter"/></span>*/}
                                {/*<Popover placement="bottom" isOpen={this.state.popoverOpen1} target="Popover1"*/}
                                         {/*toggle={() => {*/}
                                             {/*this.popoverOpen(1)*/}
                                         {/*}} className="popup-over-search">*/}
                                    {/*<PopoverHeader>Adı</PopoverHeader>*/}
                                    {/*<PopoverBody>*/}
                                        {/*<InputGroup>*/}
                                            {/*<Input placeholder="Arama"/>*/}
                                            {/*<InputGroupAddon addonType="append"><Button><FaIcon*/}
                                                {/*code="fa-search"/></Button></InputGroupAddon>*/}
                                        {/*</InputGroup>*/}
                                    {/*</PopoverBody>*/}
                                {/*</Popover>*/}
                                {/*<span className="order"><FaIcon code="fa-sort"/></span>*/}
                            {/*</div>*/}
                        {/*</th>*/}
                        {/*<th>İşlem Türü*/}
                            {/*<div className="title-option"><span className="filter"><FaIcon*/}
                                {/*code="fa-filter"/></span><span className="order"><FaIcon code="fa-sort"/></span></div>*/}
                        {/*</th>*/}
                        {/*<th>Açıklama*/}
                            {/*<div className="title-option"><span className="filter"><FaIcon*/}
                                {/*code="fa-filter"/></span><span className="order"><FaIcon code="fa-sort"/></span></div>*/}
                        {/*</th>*/}
                        {/*<th>İşlemler</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    <TableHead fields={this.state.fields}/>
                    <TableBody data={this.state.data} fields={this.state.fields}/>
                </table>
            </div>
            <div className="data-grid-footer">
                <Row>
                    <Col xs="4">
                        <div className="showing">
                            <ButtonGroup>
                                <Button color="defaults" active><span>10</span></Button>
                                <Button color="defaults"><span>20</span></Button>
                                <Button color="defaults"><span>30</span></Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="pagination">
                            <ButtonGroup>
                                <Button color="defaults" className="arrow next"><span><FaIcon
                                    code="fa-angle-left"/></span></Button>
                                <Button color="defaults" active><span>1</span></Button>
                                <Button color="defaults"><span>2</span></Button>
                                <Button color="defaults"><span>3</span></Button>
                                <Button color="defaults" className="arrow next"><span><FaIcon
                                    code="fa-angle-right"/></span></Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col xs="4" className="data-grid-detail">
                        <div className="showing-text"><strong>Gösterilen : </strong> <span>10</span></div>
                        <div className="pagination-text"><strong>Sayfa : </strong> <span>1/10</span></div>
                    </Col>
                </Row>
            </div>
        </div>;
    }


    popoverOpen(param) {
        this.state['popoverOpen' + param] = !this.state['popoverOpen' + param];
        this.forceUpdate();
    }
}