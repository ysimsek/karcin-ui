import * as React from "react";
//import AjaxRequest from "../components/util/AjaxRequest"
import {Notify,SelectInput,Label,DataFilter,TextInput,Button,Panel, List, ListItem, AutoComplate, FaIcon, PopOver, RadioInput} from "karcin-ui";
import { Row,Col,Collapse} from "reactstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

export interface WhereProps  {
    data?:any[] | any;
    onChange?:any;
};

export default class Where extends React.Component<WhereProps,any>{

    operators:any[] = [
        {'label': '=', 'name': 'equal', 'type':1},
        {'label': '!=', 'name': 'not equal', 'type':1},
        {'label': '<', 'name': 'less', 'type':1},
        {'label': '<=', 'name': 'less or equal', 'type':1},
        {'label': '>', 'name': 'greater', 'type':1},
        {'label': '>=', 'name': 'greater or equal', 'type':1},
        {'label': 'IN', 'name': 'in', 'type':2},
        {'label': 'NOT IN', 'name': 'not in', 'type':2},
        {'label': 'LIKE', 'name': 'like', 'type':3},
        {'label': 'IS NOT NULL', 'name': 'is not null', 'type':0},
        {'label': 'IS NULL', 'name': 'is null', 'type':0},
        {'label': 'BETWEEN', 'name': 'between', 'type':4},
    ];
    fieldData = [];


    constructor(props:any){
        super(props);
        this.state = {
            data : this.props.data,
            setItems : [],
            whereVal: {fieldSelect:{}, operatorSelect:{}, value:null, valueSelectName:null},
            valueObject: {},
            valueArraySelect: {},
            addItem:[],
            radioInputInline:null
        }
        

    }

    UNSAFE_componentWillReceiveProps(props:WhereProps){
        this.setState({
            data: props.data
        });
    }

    render(){
        this.fieldSetItems();
        return (this.fieldData !== undefined && this.fieldData.length > 0 ?<div className="where-option"> 
            <Panel title="Where Option Ekleme">
                <Row>
                    <Col xs="4">
                        <SelectInput type="single" name="fieldSelect" items={this.fieldData} label="selected field" value="fieldName" id="id" onChange={(e:any)=>{
                            this.handleChange(e);
                        }}/>
                    </Col>
                    <Col xs="4">
                        <SelectInput type="single" name="operatorSelect" label="Operator" items={this.operators} value="label" id="name" onChange={(e:any)=>{
                            this.handleChange(e);
                        }}/>
                    </Col>
                    <Col xs="4">
                        {this.typeOptionModel()}
                    </Col>
                </Row>   
                <Button color="success" onClick={()=>{
                    this.whereAddItem();
                }}>Ekle</Button>
            </Panel>  
        </div> : '');
    }

    fieldSetItems(){
        if(this.state.data !== undefined){
            this.fieldData = [];
            for(let item in this.state.data){
                this.state.data[item].forEach((value:any)=>{
                    this.fieldData.push({id:value.id, name:value.field, fieldName:item + "." + value.field});
                });
            }
        }
    }

    handleChange(e:any){
        this.state.whereVal[e.target.name] = e.target.parsedValue;
        this.forceUpdate();
    }

    typeOptionModel(){
        let returnColumn:any;

        if(this.state.whereVal.operatorSelect.type === 2){
            returnColumn = <div>
               <Row>
                   <Col xs="8">
                   <TextInput name="listItemType" label="value" value={(this.state.valueObject.name === "listItemType" ? this.state.valueObject.value : "")} onChange={(e:any)=>{
                        this.handleChangeValue(e);
                    }}/>
                    <span>
                        {this.state.valueArraySelect['listItemType'] !== undefined ? this.state.valueArraySelect['listItemType'].join(',') : ''}
                    </span> 
                   </Col>
                   <Col xs="4">
                        <label>&nbsp;</label>
                        <Button color="primary" onClick={()=>{
                            this.listItemAddSelect("listItemType");
                        }}>Ekle</Button>
                   </Col>
               </Row>
            </div>;
        } else if(this.state.whereVal.operatorSelect.type === 3){
            let value= [
                {id:1,value:"Başlangıç"},
                {id:2,value:"Bitiş"},
                {id:3,value:"İçerir"}
            ];
            returnColumn = <div>
                <RadioInput
                name={"whereLikeSelect"}
                label={"Like Seçimi"}
                value={this.state.valueObject['whereLikeSelect']}
                inline
                items={value}
                idField="id"
                textField="value"
                onChange={(e)=>{
                    this.handleChangeValue(e);
                }}/>
            </div>
        } else if(this.state.whereVal.operatorSelect.type === 0){
            returnColumn = "";
        }else{
            returnColumn = <TextInput name="SingleValue" value={(this.state.valueObject.name === 'SingleValue' ? this.state.valueObject.value : "")} label="value" onChange={(e:any)=>{
                this.handleChangeValue(e);
            }}/>
        }

        return returnColumn;
    }

    handleChangeValue(e:any){
        this.state.valueObject['name'] = e.target.name;
        this.state.valueObject['value'] = e.target.value;
        this.forceUpdate();
    }

    listItemAddSelect(name:any){
        if(name !== undefined){
            this.state.valueArraySelect['name'] = name;
            if(this.state.valueArraySelect['items'] !== undefined){
                this.state.valueArraySelect['items'].push(this.state.valueObject.value);
                this.state.valueObject['value'] = "";
            }else {
                this.state.valueArraySelect['items'] = [];
                this.state.valueArraySelect['items'].push(this.state.valueObject.value);
                this.state.valueObject['value'] = "";
            }
            this.forceUpdate();
        }
    }

    whereAddItem(){
       if(this.state.whereVal.fieldSelect !== null && this.state.whereVal.operatorSelect !== null && (this.state.valueObject.value !== undefined || this.state.valueArraySelect.item !== undefined)){
            let item = {};

            item['id'] = this.state.whereVal.fieldSelect['id'];
            item['Field'] = this.state.whereVal.fieldSelect['fieldName'];
            item['FieldOperator'] = this.state.whereVal.operatorSelect['label'];

            if(this.state.valueObject.value !== ""){
                item['value'] = this.state.valueObject.value;
            }else {
                item['value'] = this.state.valueArraySelect.items; 
            }

            this.state.addItem.push(item);
            this.resetWhere();
            this.props.onChange(this.state.addItem);  
            this.forceUpdate(); 
       }
    }

    resetWhere(){
        this.setState({
            setItems : [],
            whereVal: {fieldSelect:{}, operatorSelect:{}, value:null, valueSelectName:null},
            valueObject: {},
            valueArraySelect: {}
        });
    }
}