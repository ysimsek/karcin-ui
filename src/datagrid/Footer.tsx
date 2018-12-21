import * as React from "react";
import {
    Col,
    Row,
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import Pagination from '../functional/paging/Pagination'; 


export interface FooterProps {
    type?: string | any;
    store?: Array<any> | any;
    changePage?: any;
    paginationData?:React.EventHandler<any>;
    selectedRow?:any;
    pageShow?:any;
    fields?:any;
    pageShowCount?:any;
}



export default class Footer extends React.Component<FooterProps, any> {

    /**
     * general variable
     */
    paginationControl = true;
    editValues:any = {};
    dataForm:any;

    /**
     * Initial props value
     */
    static defaultProps: Partial<FooterProps> = {
        pageShowCount : 5
    };

    /**
     * Initial values
     */
    constructor(props: FooterProps) {
        super(props);

        this.state = {
            isOpen: false,
            selectedRow: {selected:this.props.selectedRow},
            buttonType:null
        }

    }

    UNSAFE_componentWillReceiveProps(props:FooterProps){
        this.state.selectedRow.selected = props.selectedRow;
        this.forceUpdate();
    }

    /**
     * return any
     */
    render(): any {
        return <div>
            <div className="toolbar footer">
                {(this.props.pageShow !== undefined && this.props.store !== undefined && this.props.store.props.totalCount > 0) ?
                    <div className="pagination-main">
                        <div className="pagination">
                            <Pagination pageCount={this.props.pageShowCount}
                                        size={'sm'}
                                        type={"simple"}
                                        typeShowLength={this.props.pageShow}
                                        data={this.props.store.props.totalCount}
                                        selectedValue={(e:any) => {
                                            this.pageChange(e);
                                        }}/>
                        </div>
                        <div className="page-showing">
                            <span><strong>Gösterilen : </strong>{this.props.store.props.pageData.start} - {this.props.store.props.pageData.start + this.props.store.props.pageData.limit}</span>
                            <span><strong>Toplam : </strong>{this.props.store.props.totalCount}</span>
                        </div>
                    </div>
                    : ''}
            </div>
        </div>
    }

    pageChange(event?: any) {
        if(event !== undefined){
            this.props.store.pagination(this.props.pageShow, event.page);
        }
    }

}