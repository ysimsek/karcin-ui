import * as React from "react";
import {
    Col,
    Row,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';
import Pagination from '../paging/Pagination';
import DataForm from '../dataform/DataForm';


export interface ToolbarProps {
    type?: string | any;
    store?: Array<any> | any;
    data?: Array<any>;
    changePage?: any;
    paginationData?:React.EventHandler<any>;
    selectedRow?:any;
    pageShow?:any;
    grud?:any;
    fields?:any;
    dataFormLabelText?:any;
    dataFormNameText?:any;
    title?:any;
}



export default class Toolbar extends React.Component<ToolbarProps, any> {

    /**
     * general variable
     */
    paginationControl = true;
    editValues:any = {};
    dataForm:any;

    /**
     * Initial props value
     */
    static defaultProps: Partial<ToolbarProps> = {
        type: "footer",
        data: [],
        dataFormLabelText:'label',
        dataFormNameText:'name' 
    };

    /**
     * Initial values
     */
    constructor(props: ToolbarProps) {
        super(props);

        this.state = {
            isOpen: false,
            selectedRow: {selected:this.props.selectedRow},
            buttonType:null
        }

    }

    UNSAFE_componentWillReceiveProps(props:ToolbarProps){
        this.state.selectedRow.selected = props.selectedRow;
        this.forceUpdate();
    }

    /**
     * return any
     */
    render(): any {

        let returnHtml:any;
        if (this.props.type === "header") {

             // header Html Elements
             
             let getGrudButtons = this.getGrudButtons();
             let data = getGrudButtons.concat(this.props.data);
             let buttons = [];
             let self = this;

             if (data !== undefined) {
                 for (let i = 0; i < data.length; i++) {
                     let value = data[i];
                     buttons.push(<Button key={i} color="defaults"
                                          disabled={(value.disabled !== undefined ? value.disabled : false)}
                                          onClick={() => {
                                              if (value.url !== undefined) {
                                                  self.urlDirectory(value.url);
                                              } else {
                                                  if (value.onClick !== undefined) {
                                                      value.onClick()
                                                  }
                                              }
                                          }}>{(value.icon !== undefined ?
                         <FaIcon code={value.icon}/> : "")}<span>{value.name}</span></Button>)
                 }
             }
 
             returnHtml = <div className="data-grid-header">
                 <Row>
                     {this.props.title !== undefined ? <Col className={'datagridTitle'}>{this.props.title}</Col> : ''}
                     <Col xs={{size: 4, offset: 8}} className="header-buttons">
                         <ButtonGroup>
                             {buttons}
                         </ButtonGroup>
                     </Col>
                 </Row>
                 {this.modalHtml()}
             </div>;
           
        } else {

             // footer Html Elements
             returnHtml = <div className="data-grid-footer">
             <Row>
                 {(this.props['pageShow'] !== undefined && this.props.store !== undefined && this.props.store.props.totalCount > 0) ?
                     <Col className="pagination-main">
                         <div className="pagination">
                             <Pagination pageCount={5}
                                         type={"simple"}
                                         typeShowLength={this.props['pageShow']}
                                         data={this.props.store.props.totalCount}
                                         selectedValue={(e:any) => {
                                             this.props.changePage(e);
                                         }}/>
                         </div>
                     </Col>
                     : ''}
             </Row>
         </div>;

        }


        return <div>
            {returnHtml}
        </div>
    }

    /**
     * location url
     * @param url
     */
    urlDirectory(url: any) {
        window.location.href = url;
    }

    getGrudButtons(){
        let buttons:any = [];
        if(this.props['grud'] !== undefined){
            // add buttons 
            if(this.props['grud'].indexOf('add') !== -1){
                buttons.push({name:"Ekle", icon:"fa-plus",disabled:false, onClick:()=>{
                    this.openModal('create');
                }});
            }

            // update buttons
            if(this.props['grud'].indexOf('update') !== -1){
                buttons.push({name:"Düzenle", icon:"fa-pencil",disabled:(this.state.selectedRow.selected.length > 0 ? false : true), onClick:()=>{
                    this.openModal('edit');
                }});
            }

            // delete buttons
            if(this.props['grud'].indexOf('remove') !== -1){
                buttons.push({name:"Sil", icon:"fa-trash",disabled:(this.state.selectedRow.selected.length > 0 ? false : true), onClick:()=>{
                    this.openRemove();
                }});
            }
        }

        return buttons;
    }

    openSave = () => {
        let data = this.dataForm.getChangeData();
        this.props.store.create(data, ()=>{
            this.toggleModal();
        });
    }

    openEdit = () => {
        let data = this.dataForm.getChangeData();
        this.props.store.update(data, ()=>{
            this.toggleModal();
        });
    }

    openRemove = () => {
        this.props.store.delete(this.state.selectedRow.selected[0].id);
    }  

    modalHtml = () => {

        if(this.state.selectedRow.selected.length > 0){
            this.editValues = this.state.selectedRow.selected[0];
        }

        let modalHtml = <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>DataGrid İşlemleri</ModalHeader>
                            <ModalBody>
                                <div>
                                    <DataForm nameText={this.props.dataFormNameText} labelText={this.props.dataFormLabelText} fields={this.props['fields']} ref={(e:any)=>{
                                        this.dataForm = e;
                                    }} values={this.editValues} col={2} />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {(this.state.buttonType === 'create') ? <Button color="primary" onClick={this.openSave}>Kaydet</Button> : ''}
                                {(this.state.buttonType === 'edit') ? <Button color="success" onClick={this.openEdit}>Düzenle</Button> : ''}
                                {' '}
                                <Button color="secondary" onClick={this.toggleModal}>Kapat</Button>
                            </ModalFooter>
                        </Modal>;


        return modalHtml; 
    }

    openModal = (type:any) => {
        this.setState({
            isOpen: true,
            buttonType: type
        });
    }

    toggleModal = () => {
        this.setState({
            isOpen: ! this.state.isOpen
        })
    }


}