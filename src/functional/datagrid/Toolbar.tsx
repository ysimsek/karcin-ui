import * as React from "react";
import {
    Col,
    Row,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    ButtonGroup
} from 'reactstrap';
import {FaIcon, Pagination} from 'karcin-ui';


export interface ToolbarProps {
    type?: string | any;
    store?: Array<any> | any;
    data?: Array<any>;
    changePage?: any;
    paginationData?:React.EventHandler<any>;
}

export interface ToolbarState {
    paginationSelected?: any[]
}


export default class Toolbar extends React.Component<ToolbarProps, ToolbarState> {

    /**
     * general variable
     */
    paginationControl = true;
    /**
     * Initial props value
     */
    static defaultProps: Partial<ToolbarProps> = {
        type: "header"
    };

    /**
     * Initial values
     */
    constructor(props: ToolbarProps) {
        super(props);

        this.state = {
            paginationSelected: []
        }

    }

    UNSAFE_componentWillReceiveProps(props:ToolbarProps){
        this.props = props;
        this.forceUpdate();
    }

    /**
     * return any
     */
    render(): any {
         // pagination control 
         /*let countData = 0;
         if(this.props.options.pagination !== undefined && this.props.options.pagination && this.props.store !== undefined){
             this.paginationControl = true;

             if(this.props.store.__endPoint === 'localEndPoint'){
                 countData = this.props.store.props.data.length;
             }else {
                 countData = this.props.store.props.totalCount;
             }

        }else {
                this.paginationControl = false;
        }*/


        if (this.props.type == "footer") {
            // footer Html Elements
            return <div className="data-grid-footer">
                <Row>
                    {(this.props['pageShow'] !== undefined && this.props.store !== undefined && this.props.store.props.totalCount > 0) ?
                        <Col xs="4">
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
        } else {

            // header Html Elements
            let data = this.props.data;
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

            return <div className="data-grid-header">
                <Row>
                    <Col xs={{size: 4, offset: 8}} className="header-buttons">
                        <ButtonGroup>
                            {buttons}
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>;
        }
    }

    /**
     * location url
     * @param url
     */
    urlDirectory(url: any) {
        window.location.href = url;
    }


}