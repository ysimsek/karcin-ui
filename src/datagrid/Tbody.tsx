import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TypeFormating from '../applications/TypeFormating';
const { Scrollbars } = require('react-custom-scrollbars');
import BaseClass from '../applications/BaseClass';

export interface TbodyProps {
    store: any;
    fields: any;
    onSelected ?: any;
    multiSelect?:boolean;
    onDoubleSelected?:any;
    select?:boolean | any;
}

export interface TbodyState {
    store: any,
    fields: any,
    clickActive?: Array<any> | any,
    clickActiveRow?: Array<any> | any
}



export default class Tbody extends React.Component<TbodyProps, TbodyState> {

    static defaultProps:Partial<TbodyProps> = {
        select: true
    }

    constructor(props:TbodyProps){
        super(props);

        this.state = {
            store:props.store,
            fields: props.fields,
            clickActive: [],
            clickActiveRow: []
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

        if(data !== undefined && data.length > 0){
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

                Rows.push(<tr 
                    key={index}
                    className={(this.state.clickActive.indexOf(getId) !== -1) ? 'active' : ''}
                    onClick={(e) => {
                        if(this.props.select){
                            this.onClickRow(e, getId, data[index])
                        }
                    }}
                  onDoubleClick={()=>{
                      if(this.props.onDoubleSelected !== undefined){
                        this.props.onDoubleSelected(data[index]);
                      }
                  }}
                  >{Cell}</tr>);

            });

            return Rows;

        }
    }

    /**
     * @param e
     * @param active
     * @param data
     */
    onClickRow(e: any, active: any, data: any): void {
        if (e.metaKey || e.ctrlKey && this.props.multiSelect) {
            if (this.state.clickActive.indexOf(active) !== -1) {

                // change rows id remove
                this.state.clickActive.splice(this.state.clickActive.indexOf(active), 1);

                // change rows json remove
                for (let i = 0; i < this.state.clickActiveRow.length; i++) {
                    if (this.state.clickActiveRow[i].id === active) {
                        this.state.clickActiveRow.splice(i, 1);
                    }
                }
            } else {

                //add row id
                this.state.clickActive.push(active);

                // add row json data
                this.state.clickActiveRow.push(data);
            }
        } else {

            // id first remove after add new id
            if(this.state.clickActive[0] !== active) {
                this.state.clickActive.splice(0, this.state.clickActive.length);
                this.state.clickActive.push(active);

                // json first remove after add new rows json data
                this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
                this.state.clickActiveRow.push(data);
            }else {
                this.state.clickActive.splice(0, this.state.clickActive.length);
                this.state.clickActiveRow.splice(0, this.state.clickActiveRow.length);
            }
        }

        this.forceUpdate();


        // selectedProps
        if (this.props.onSelected !== undefined) {
            this.props.onSelected(this.state.clickActiveRow, this.state.clickActive);
        }
    }

    resetSelected(){
        this.setState({
            clickActive: [],
            clickActiveRow: []
        });
    }



}