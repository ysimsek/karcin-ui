import * as React from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, ButtonGroup, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';
import DataGrid from '../../datagrid/DataGrid';
import Message from '../message/Message';

export interface LookUpProp {

    /**
     * get store class
     */
    store ?: any;

    /**
     * get array datagrid field
     */
    field ?: Array<any>;

    /**
     * select input text object name 
     */
    textField ?: any;

    /**
     * selected input renderer option 
     */
    renderer ?: any;

    /**
     * onchange method
     */
    onChange ?: any;

    /**
     * datagrid full option object 
     */
    dataGridOption ?: Object;

    /**
     * input name
     */
    name ?: string;

    /**
     * label text
     */
    label ?: string;

    /**
     * class name
     */
    className ?: string;

    /**
     * modal footer button 
     */
    modalButtons ?: Array<any>;

    /**
     * modal select button text
     */
    modalSelectText ?: string;

    /**
     * modal cancel button text
     */
    modalCancelText ?: string;

    /**
     * modal select button color
     */
    modalSelectButtonColor ?: string;

    /**
     * modal cancel button color
     */
    modalCancelButtonColor ?: string;

     /**
     *  datagrid open button icon
     */
    zommButtonIcon ?: string;

     /**
     *  selected data remove button icon
     */
    removeButtonIcon ?: string;

    /**
     *  datagrid open button color
     */
    zommButtonColor ?: string;

     /**
     *  selected data remove button color
     */
    removeButtonColor ?: string;
}

export interface LookUpState {
    selected ?:any;
    modalShow ?: any;
    store ?: any;
    save ?: boolean;
    doubleSelected ?: any;
}

export default class LookUp extends React.Component<LookUpProp,LookUpState> {

    public static defaultProps:Partial<LookUpProp> = {
        modalSelectText : "Seç",
        modalCancelText : "Kapat",
        modalCancelButtonColor : "default",
        modalSelectButtonColor : "success",
        zommButtonIcon : "fa-search-plus",
        removeButtonIcon : "fa-trash",
        zommButtonColor : "primary",
        removeButtonColor : "danger"
    }

    selectedResult:any = [];

    constructor(props:LookUpProp){
        super(props);

        this.state = {
            selected:[],
            save:false
        }
    }

    render(){
        return(
            <div className={"karcin-look-up "+this.props.className}>
                {this.props.label != undefined ?  <label className={"label-properties"}>{this.props.label}</label> : null}
                <div className="look-up-wrapper">
                    <div className="selected-value">
                        <div className="input-val form-control" onClick={this.toggle}>
                            {this.renderVal()}
                        </div>
                        <div className="show-button">
                            <ButtonGroup> 
                                <Button color={this.props.zommButtonColor} onClick={this.toggle}><FaIcon code={this.props.zommButtonIcon}/></Button>
                                <Button color={this.props.removeButtonColor} onClick={this.removeSelect} disabled={(this.selectedResult.length > 0) ? false : true}><FaIcon code={this.props.removeButtonIcon}/></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                {this.returnModal()}
            </div>
        )
    }

    

    renderVal() {
        let returnVal:string = '';
        
        if(this.selectedResult.length > 0){
            if(this.props.renderer !== undefined){
                returnVal = this.props.renderer(this.selectedResult);
            }else {
                let dataImploadOjb:any = [];
                this.selectedResult.forEach((value:Object | any) => {
                    dataImploadOjb.push(value[this.props.textField]);
                });
                returnVal = dataImploadOjb.join(',');
            }
        }

        return returnVal;
        
    }



    returnModal = () => {
        return (<Modal size='lg' isOpen={this.state.modalShow} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Seçim İşlemleri</ModalHeader>
            <ModalBody>
                <DataGrid fields={this.props.field}
                          store={this.props.store}
                          onDoubleSelected={this.onDoubleClick.bind(this)}
                          onSelected={this.dataSelected} {...this.props.dataGridOption} />
            </ModalBody>
            <ModalFooter>
                {this.modalFooterButtons()}
            </ModalFooter>
        </Modal>)
    }

    dataSelected = (val:any, index:any) => {
        let state:any = {};
        let values:any = val.length > 0 ? JSON.parse(JSON.stringify(val[0])) : this.state.doubleSelected;
        state['selected'] = val;
        state['doubleSelected'] = values;
        this.setState(state);
    }

    toggle = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    }

    onDoubleClick = (e:any) => {
        this.selectedResult = [this.state.doubleSelected];
        this.setState({
            modalShow: false
        });

        if(this.props.onChange !== undefined){
            this.props.onChange(this.state.doubleSelected, this.props.name);
        }
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

    modalFooterButtons = () => {
        let returnButtons:Array<any> = [];

        if(this.props.modalButtons !== undefined){
            this.props.modalButtons.forEach((value:React.ReactHTMLElement<any>, index:number)=>{
                returnButtons.push(value);
            });
        }else {
            returnButtons.push(<Button color={this.props.modalSelectButtonColor} onClick={this.selectedSave} disabled={(this.state.selected.length > 0) ? false : true}>{this.props.modalSelectText}</Button>)
            returnButtons.push(<Button color={this.props.modalCancelButtonColor} onClick={this.toggle}>{this.props.modalCancelText}</Button>);
        }

        return returnButtons;
    }

    removeSelect = () => {
        Message.confirm({message:'Silmek istediğinize emin misiniz ?',color:'danger',title:"Silme İşlemi",icon:"fa-trash",callBack:(call:any) => {
            if(call.response.name === 'OK'){
                this.selectedResult.length = 0;
                this.setState({
                    selected : []
                });
            }
        }})
    }
}
