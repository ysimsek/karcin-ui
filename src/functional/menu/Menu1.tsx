import * as React from 'react';
import {Collapse} from 'reactstrap';

export interface MenuProps {
    data: Array<MenuData>,
}

export interface MenuData {
    id: number,
    name: string,
    title?: string,
    icon?: string,
    href?: string,
    collapse?: boolean,
    catTitle?: string,
    items?: Array<MenuData>
}

export interface MenuState {
    menuData: any
}

export default class Menu1 extends React.Component<MenuProps, MenuState> {

    menuChilds = [];

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            menuData: this.props.data
        };

        this.menuLoop(this.state.menuData, false);
    }

    render() {
        return <div>
            {this.menuChilds}
        </div>;
    }


    menuLoop(getData: any[], getChild: any) {
        // for (let i = 0; i < getData.length; i++) {
        //     let value = getData[i];
        //     this.menuChilds.push(<div className="item">
        //         <span>{value.name}</span>{(value.items !== undefined && value.items.length > 0) ?
        //         this.menuLoop(value.items, true) : ''}
        //     </div>);
        // }
    }

}