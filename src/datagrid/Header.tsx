import * as React from "react";
import {
    Col,
    Row,
    Button,
    ButtonGroup
} from 'reactstrap';
import FaIcon from '../functional/faicon/FaIcon';


export interface HeaderProps {
    type?: string | any;
    store?: Array<any> | any;
    paginationData?:React.EventHandler<any>;
    selectedRow?:any;
    pageShow?:any;
    fields?:any;
    title?:any;
    toolbars?:any;
}



export default class Header extends React.Component<HeaderProps, any> {

    /**
     * general variable
     */
    paginationControl = true;
    editValues:any = {};
    dataForm:any;

    /**
     * Initial props value
     */
    static defaultProps: Partial<HeaderProps> = {
        type: "footer",
        toolbars: []
    };

    /**
     * Initial values
     */
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isOpen: false,
            selectedRow: {selected:this.props.selectedRow},
            buttonType:null
        }

    }

    UNSAFE_componentWillReceiveProps(props:HeaderProps){
        this.state.selectedRow.selected = props.selectedRow;
        this.forceUpdate();
    }

    /**
     * return any
     */
    render(): any {
        // header Html Elements
        let data = this.props.toolbars;
        let buttons = [];
        let self = this;

        if (data !== undefined) {
            for (let i = 0; i < data.length; i++) {
                let value = data[i];
                buttons.push(<Button key={i} color="defaults" size="sm"
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

        return <div className="toolbar head">
                {this.props.title !== undefined ? <Col className={'datagridTitle'}>{this.props.title}</Col> : ''}
                <div className="header-buttons"> 
                    <ButtonGroup>
                        {buttons}
                    </ButtonGroup>
                </div>
            </div>;
    }

    /**
     * location url
     * @param url
     */
    urlDirectory(url: any) {
        window.location.href = url;
    }

}