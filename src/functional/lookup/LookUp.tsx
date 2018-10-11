import * as React from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';
import BaseInput from '../../input/BaseInput';
import DataGrid from '../datagrid/DataGrid';
import Store from '../../store/Store';

export interface LookUpProp {
    store?:Array<any> | any;
    field?:Array<any> | any;
    textField?:any;
    renderer?:any;
    onChange?:any;
    dataGridOption?:any;
    name?:any;
    label?:any;
    /**
     * Fa icon code exam fa-pie-chart
     */
    icon?:string;
}

export interface LookUpState {
    selected?:any;
    modalShow?:any;
    store?:any;
    save?:boolean;
}

export default class LookUp extends React.Component<LookUpProp,LookUpState> {

    public static defaultProps:Partial<LookUpProp> = {
        icon : "fa-search-plus"
    }

    selectedResult:any = [];
    constructor(props:LookUpProp){
        super(props);

        this.state = {
            selected:null,
            save:false
        }
    }

    render(){
        return(
            <div className="karcin-look-up">
                {this.props.label != undefined ?  <label className={"label-properties"}>{this.props.label}</label> : null}
                <div onClick={this.toggle} className="look-up-wrapper">
                    <div className="selected-value">
                        <div className="input-val form-control">
                            {this.props.renderer !== undefined && this.selectedResult.length > 0 ?
                                this.props.renderer(this.selectedResult[0]) :
                                <span>{(this.selectedResult.length > 0 ?
                                    this.selectedResult[0][this.props.textField]
                                    : '')}
                                    </span>}
                                    </div>
                        <div className="show-button"><Button onClick={this.toggle}><FaIcon code={this.props.icon != undefined ? this.props.icon : "fa-search-plus"}/></Button></div>
                    </div>
                </div>
                {this.returnModal()}
            </div>
        )
    }

    openPopup(){}

    returnModal(){
        return (<Modal size='lg' isOpen={this.state.modalShow} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Seçim İşlemleri</ModalHeader>
            <ModalBody>
                <DataGrid fields={this.props.field} store={this.props.store} onSelected={this.dataSelected} {...this.props.dataGridOption} />
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={this.selectedSave}>Seç</Button>
                <Button color="error" onClick={this.toggle}>Kapat</Button>
            </ModalFooter>
        </Modal>)
    }

    dataSelected = (val:any, index:any) => {
        let state:any = {};
        state['selected'] = val;
        this.setState(state);
    }

    toggle = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    }

    selectedSave = () => {
        this.selectedResult = this.state.selected;
        this.setState({
            modalShow: false
        });

        if(this.props.onChange !== undefined){
            this.props.onChange(this.state.selected[0], this.props.name);
        }
    }
}
