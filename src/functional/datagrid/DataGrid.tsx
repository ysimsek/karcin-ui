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

import FaIcon from '../faicon/FaIcon';
import '../../css/sass/table.scss';

import TableBody from './TableBody';
import TableHead from './TableHead';

export interface DataGridProps {
    data?:any;
    fields?: any[];
}

export interface DataGridState {
    data?: any,
    fields?: any[],
    dataGridId : any
}

export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    constructor(props: DataGridProps) {
        super(props);

        this.state = {
            data : this.props.data,
            fields : this.props.fields,
            dataGridId: Math.floor(Math.random() * 20)
        }
    }

    componentWillReceiveProps(props:any){
        this.setState({
            data:this.props.data,
            fields : this.props.fields
        })
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

}