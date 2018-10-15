import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TypeFormating from '../applications/TypeFormating';
import Scrollbars from 'react-custom-scrollbars';
import BaseClass from '../applications/BaseClass';

export interface TbodyProps {
    store: any;
    fields: any;
    onSelected ?: any;
    fieldOption?:any;
    showingPageData?:any;
    multiSelect?:boolean;
    onDoubleClick?:any;
}

export interface TbodyState {
    store: any,
    fields: any,
    clickActive?: Array<any>,
    clickActiveRow?: Array<any>,
    showingPageData?: any
}



export default class Tbody extends React.Component<TbodyProps, TbodyState> {

    constructor(props:TbodyProps){
        super(props);

        this.state = {
            store:props.store,
            fields: props.fields
        }
    }

    UNSAFE_componentWillReceiveProps(props:TbodyProps){
        this.setState({
            store: props.store,
            fields: props.fields
        });
    }

    render(){
        return (<div className="datagrid-body">  
                <Scrollbars>    
                    <tbody>
                        {this.getData()}
                    </tbody>
                </Scrollbars>
            </div>)
    }

    getData(){
        let data = this.props.store.props.data;   
        let Rows:any = [];

        if(data !== undefined){
            data.forEach((value:any, index:any)=>{
                let getId:number = index;
                if (value.id !== undefined) {
                    getId = parseInt(value.id);
                }


                let Cell:any = [];
                this.state.fields.forEach((values:any, indexes:number) => {

                    let fieldValData = '';

                    if(values.mapping !== undefined){
                        fieldValData = BaseClass.mappingDataFind(value, values.mapping);
                    }else {
                        fieldValData = value[values.name];
                    }


                    new TypeFormating({
                        data: fieldValData,
                        type: (values.type !== undefined ? values.type : values.property)
                    }, (data:any)=>{
                        fieldValData = data;
                    });

                    // style
                    let style:any = {};
                    if(values.visibility !== undefined && !values.visibility){
                        style['display'] = 'none';
                    }

                    if(values.width !== undefined){
                        style['width'] = values.width + "px";
                    }

                    Cell.push(<td key={indexes} style={style}>
                        {(values.renderer !== undefined) ?  values.renderer(value, values) !== undefined ? value.renderer(value, values) : fieldValData : fieldValData}
                    </td>);

                });

                Rows.push(<tr key={index}>{Cell}</tr>);

            });

            //if(!this.props.showingPageData.pagination || this.props.store.__endPoint === 'remoteEndPoint') {
                return Rows;
            /*}else {
                let pageData = [];
                let pages = this.props.store.props.pageData;
    
                for(let i = 0; i < Rows.length; i++){
                    if(i >= pages.start && i < (pages.start + pages.limit)){
                        pageData.push(Rows[i]);
                    }
                }
    
                return pageData;
            }*/

        }
    }



}