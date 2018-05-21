import * as React from 'react';
import {NavLink, Dropdown, DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem} from 'reactstrap';
import FaIcon from '../faicon/FaIcon';
import '../../css/karcin-ui.css';


export interface ContextMenuProps {
    /**
     * selector id element name
     */
    id?: string | any;
    /**
     * selector class element name
     */
    class?: string | any;

    /**
     * menu array data (title, link, icon, items, callback)
     */
    data?: Array<MenuData>;
}

export interface MenuData {
    title: string | any,
    link?: string | any,
    icon?: string | any,
    items?: Array<MenuData> | any,
    callback?: React.EventHandler<any>
}

export interface ContextMenuState {
    showContext?: boolean | any;
    eventDirection: object | any;
}

export default class ContextMenu extends React.Component<ContextMenuProps, ContextMenuState> {

    static defaultProps: Partial<ContextMenuProps> = {
        class: 'content-page'
    };

    constructor(props: ContextMenuProps) {
        super(props);

        this.state = {
            showContext: {control: false},
            eventDirection: {x: 0, y: 0}
        };

        this.clickControl()
    }

    render() {
        return <div className={`karcin-context-menu ${(this.state.showContext.control) ? 'active' : ''}`}
                    style={{top: this.state.eventDirection.y, left: this.state.eventDirection.x}}>
            <Dropdown toggle={() => {
            }}><DropdownMenu>{this.menuLoop(this.props.data)}</DropdownMenu></Dropdown>
        </div>
    }

    /**
     * get props data loop to menu
     * @param getData
     * @returns {any[]}
     */
    menuLoop(getData: any) {
        let listMenu: any[] = [];
        if (this.props.data !== undefined) {
            getData.forEach((value: any, index: number) => {
                listMenu.push(<div className="dropdown-item" key={index} onClick={() => {
                    if (value.callback !== undefined) {
                        value.callback(value)
                    }
                }}>
                    <div className="menu-head">
                        <NavLink href={value.link} target="_blank">
                            {value.icon !== undefined ? <FaIcon code={value.icon} className="basic-icon"/> : ''}
                            <span>{value.title}</span>
                            {(value.items) ? <FaIcon code="fa-angle-right dropdown-icon"/> : ''}
                        </NavLink>
                    </div>
                    {value.items !== undefined && value.items.length > 0 ?
                        <DropdownMenu>{this.menuLoop(value.items)}</DropdownMenu> : ''}
                </div>);
            });
        }
        return listMenu;
    }


    /**
     * mouse right click control
     */
    clickControl() {
        let getElement: any = (this.props.id !== undefined) ? 'id' : 'className';
        let getItemName: any = (this.props.id !== undefined) ? this.props.id : this.props.class;

        window.addEventListener('contextmenu', (event: any) => {

            if (event.target[getElement] !== undefined && event.target[getElement].indexOf(getItemName) !== -1) {
                this.state.eventDirection.x = event.layerX;
                this.state.eventDirection.y = event.layerY;
                this.state.showContext.control = true;
                this.forceUpdate();

                event.preventDefault();

            }else {
                this.pathControl(event);
            }
        }, false);

        window.addEventListener('click', (event: any) => {
            this.pathControl(event);
        });
    }

    /**
     * splace click control
     * @param event
     */
    pathControl(event:any){
        let control = false;
        event.path.forEach(function (val: any) {
            if (val.className !== undefined && val.className !== "" && val.className.indexOf('karcin-context-menu') !== -1) {
                control = true;
            }
        });

        if (!control) {
            this.state.showContext.control = false;
            this.forceUpdate();
        }
    }

}
