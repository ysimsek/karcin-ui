import * as React from "react";
import {Row, Col, ButtonGroup, Button} from "reactstrap";
import SelectInput from '../../inputs/selectInput/SelectInput';
import '../../css/condition.css';
import FaIcon from '../../functional/faicon/FaIcon';
import Component from '../../functional/getInput/GetInput';

export interface ConditionProps {
    data?:any[] | any;
    field?:any[] | any;
    onChange?:React.EventHandler<any> | any;
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export default class Condition extends React.Component<ConditionProps, any> {
    
    
    
    data:any[] = [];

    field:any[] = [];

    likeOperator:any = [
        {id:1, value:'Başlangıç'},
        {id:2, value:'Bitiş'},
        {id:3, value:'İçeirir'}
    ]

    operators:any[] = [
        {'id':1, 'label': '=', 'name': 'equal', 'type':'string'},
        {'id':2, 'label': '!=', 'name': 'not equal', 'type':'string'},
        {'id':3, 'label': '<', 'name': 'less', 'type':'string'},
        {'id':4, 'label': '<=', 'name': 'less or equal', 'type':'string'},
        {'id':5, 'label': '>', 'name': 'greater', 'type':'string'},
        {'id':6, 'label': '>=', 'name': 'greater or equal', 'type':'string'},
        {'id':7, 'label': 'IN', 'name': 'in', 'type':'list'},
        {'id':8, 'label': 'NOT IN', 'name': 'not in', 'type':'list'},
        {'id':9, 'label': 'LIKE', 'name': 'like', 'type':'radio'},
        {'id':10, 'label': 'IS NOT NULL', 'name': 'is not null', 'type':null},
        {'id':11, 'label': 'IS NULL', 'name': 'is null', 'type':null},
        {'id':12, 'label': 'BETWEEN', 'name': 'between', 'type':4},
    ];

    newData:any = [];

    whereData:any = [];

    constructor(props:ConditionProps){
        super(props);

        this.state = {
            startWhere: 0
        }

        this.init(props);
    }

    UNSAFE_componentWillReceiveProps(props:ConditionProps){
        this.init(props);
    }

    init(props:ConditionProps){
        this.data = props.data;
        this.field = props.field;
    }

    /**
     * @returns {any}
     */
    render():any {
    let getData = this.dataParseLoop(this.data);
    return (<div className="condition">
        <div className="box-group">
            <div className="box-head">
                <div className="where-buttons">
                    <ButtonGroup>
                        <Button size="sm" color={`primary ${(this.state.startWhere === 0) ? 'active' : ''}`} onClick={()=>{
                            this.setState({
                                startWhere : 0
                            })
                        }}>AND</Button>
                        <Button size="sm" color={`primary ${(this.state.startWhere === 1) ? 'active' : ''}`} onClick={()=>{
                            this.setState({
                                startWhere : 1
                            })
                        }}>OR</Button>
                    </ButtonGroup>
                </div>
                <div className="costom-buttons">
                    <ButtonGroup>
                        <Button size="sm" color="success" onClick={()=>{
                            this.addItems(this.data,'box');
                        }}><FaIcon code="fa-plus"/><span>Add Rule</span></Button>
                        <Button size="sm" color="success" onClick={()=>{
                            this.addItems(this.data, 'group');
                        }}><FaIcon code="fa-plus"/><span>Add Group</span></Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="box-content">
                {getData}
            </div>
        </div>
    </div>);

    }


    dataParseLoop(data:any, key?:any, returns?:any,){
        let datas:any = [];
        data.forEach((value:any, index:any)=>{
            let keys = key !== undefined ? key + "-" + index : index.toString();
            value['key'] = keys;
            if(value.box === 'group'){
                datas.push(<div className="box-group" key={keys}>
                    <span className="line"></span>
                    <div className="box-head">
                        <div className="where-buttons">
                            <ButtonGroup>
                                <Button size="sm" color={`primary ${(value.where === 0) ? 'active' : ''}`} onClick={()=>{
                                    value.where = 0;
                                    this.forceUpdate();
                            }}>AND</Button>
                            <Button size="sm" color={`primary ${(value.where  === 1) ? 'active' : ''}`} onClick={()=>{
                                value.where = 1;
                                this.forceUpdate();
                            }}>OR</Button>
                            </ButtonGroup>
                        </div>
                        <div className="costom-buttons">
                            <ButtonGroup>
                                <Button size="sm" color="success" onClick={()=>{
                                    this.addItems(value,'box');
                                }}><FaIcon code="fa-plus"/><span>Add Rule</span></Button>
                                <Button size="sm" color="success" onClick={()=>{
                                    this.addItems(value, 'group');
                                }}><FaIcon code="fa-plus"/><span>Add Group</span></Button>
                                <Button size="sm" color="danger" onClick={()=>{
                                    this.deleteItem(value, key, data, index);
                                }}><FaIcon code="fa-trash"/><span>Remove Group</span></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="box-content">
                        {(value.children !== undefined && value.children.length > 0 ? this.dataParseLoop(value.children, keys, true) : '')} 
                    </div> 
                </div>);
            }else {
                datas.push(this.getSingleModel(value, keys, data, index));
            }
        });
        return datas;
    }

    getSingleModel(value:any, keys:any, data:any, index:any){
        let boxHtml = <div className="box" key={keys}>
                <span className="line"></span>
                <div className="box-field">
                    <SelectInput type="single" name="fieldSelect" items={this.field} activeItem={value.field} value="fieldFullName" id="id"  onChange={(e:any)=>{
                                value.field = e.target.value;
                                this.forceUpdate();
                            }}/>
                </div>
                <div className="box-field">
                <SelectInput type="single" name="fieldSelect" items={this.operators} activeItem={value.operator} value="label" id="id"  onChange={(e:any)=>{
                                value.operator = e.target.value;
                                this.forceUpdate();
                            }}/>
                </div>
                <div className="box-field">
                    {this.getValueComponent(value)}
                </div>
                <div className="box-delete">
                    <Button size="sm" color="danger" onClick={()=>{
                        this.deleteItem(value, keys, data, index);
                    }}><FaIcon code="fa-times"/><span>Delete</span></Button>
                </div>
            </div>;

            return boxHtml;
    }


    addItems(val:any, type:any){
        let item:any;
        let key = (val.children !== undefined) ? val.key + "-" + val.children.length : val.length;

        if(type === 'group'){
            item = {id:null, where:0, key:key,  box:'group', children:[]};
        }else {
            item = {id:null, field:null,key:key, operator:null, value:null, box:'box'};
        }

        if(val.children !== undefined){
            val.children.push(item);
        }else {
            val.push(item);
        }

        this.forceUpdate();
    }

    deleteItem(value:any, keys:any, data:any, index:any){
        if(data.length > 0 && index !== undefined){
            data.splice(index, 1);
            this.forceUpdate();
        }
    }

    getValueComponent(value:any){

        // find Operator
        let operator:any;
        let component:any;

        if(value.operator !== null){
            this.operators.forEach((val:any)=>{
                if(value.operator === val.id){
                    operator = val;
                }
            });

            if(operator.type === 'radio'){
                component = <Component type={operator.type} name="valueProp" value={value.value} data={this.likeOperator} onChange={(val:any)=>{
                    value.value = val;
                }} />
            }else if(operator.type !== null){
                component = <Component type={operator.type} value={value.value} name="valueProp" onChange={(val:any)=>{
                    value.value = val;
                }} />
            }
        }

        return component; 
    }

    getWhereTemplate() {
        return {data:this.data.slice(0), where:this.state.startWhere};
    }

    getDataWhere(data:any){
        data.forEach((value:any)=>{
            if(value.children !== undefined && value.children.length > 0){
                this.getDataWhere(value.children);
            }else {
                this.whereData.push(value);
            }
        });
    };

    getWhere(){
        this.whereData = [];
        this.getDataWhere(this.data);

        return this.whereData;
    }
    


    





}

