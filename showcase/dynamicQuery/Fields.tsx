import * as React from "react";
//import AjaxRequest from "../components/util/AjaxRequest"
import {Notify,SelectInput,Label,DataFilter,TextInput,Button,Panel, List, ListItem, AutoComplate, FaIcon, PopOver} from "karcin-ui";
import { Row,Col,Collapse} from "reactstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

export interface FieldsProps  {
    data?:any[] | any;
    onChange?:any;
};

export default class Fields extends React.Component<FieldsProps,any>{

    constructor(props:any){
        super(props);
        this.state = {
            data : this.props.data,
            fieldHead:{editID:null, editVal:null, popOver:false},
            fieldActive:{},
            fieldActiveVal: {},
            alliasVal: {},
            randoms:[]
        }
    }

    UNSAFE_componentWillReceiveProps(props:FieldsProps){
        this.setState({
            data: props.data
        });
    }

    render(){
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
          };
        return <div className="dynamic-fields"> 
            <Slider {...settings}>
                {this.getTableFieldColumns()}
            </Slider>
        </div>;
    }

    getTableFieldColumns(){
        let columnPanelActive = [];
        if(this.state.data !== undefined) {
            this.state.data.forEach((value:any, index:number)=>{
                columnPanelActive.push(<div>
                    <Panel titleRenderer={()=>{
                        return <div id={"changeFields" + index}> 
                            <PopOver id={"changeFields" + index} show={(this.state.fieldHead.popOver && this.state.fieldHead.editID === value.id ? this.state.fieldHead.popOver : false)} toggle={()=>{this.togglePopOver()}} position="left" title={value.tableName + " As"}>
                                <div className="field-head-title">
                                    <input className="form-control" value={(this.state.fieldHead.editVal !== null) ? this.state.fieldHead.editVal : value.randomName} name="fieldEdit" onChange={(e)=>{
                                        this.FieldHeadHandleChange(e);
                                    }}/>
                                    <Button onClick={()=>{
                                        this.saveFieldName(value, index);
                                    }}><FaIcon code="fa fa-save"/></Button>
                                </div>
                            </PopOver>
                            <Button onClick={()=>{
                                this.fieldPanelHeadEdit(value);
                            }}><FaIcon code="fa fa-edit"/></Button>
                            <span>{value.randomName}</span>
                        </div>;
                    }}>
                        <ul className={'list-group'}>
                            {this.getFieldLoopItems(value)}
                        </ul>
                    </Panel>
                </div>)
            })
        }

        return columnPanelActive;
    }

    createRandom() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        text = possible.charAt(Math.floor(Math.random() * possible.length));
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        while (this.state.randoms.indexOf(text)>-1)
        {
            text = possible.charAt(Math.floor(Math.random() * possible.length));
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            if (this.state.randoms.indexOf(text) < 0)
                break;
        }
        
        return text;
    }

    togglePopOver(){
        this.state.fieldHead.popOver = false;
        this.state.fieldHead.editVal = null;
        this.forceUpdate();
    }

    saveFieldName(val:any, id:any){
        if(this.state.data[id] !== undefined && this.state.fieldHead.editVal !== null){
            this.state.data[id].randomName = this.state.fieldHead.editVal;
            this.state.fieldHead.editVal = null;
            this.state.fieldHead.editID = null;
            this.forceUpdate();
        }
    }

    fieldPanelHeadEdit(value:any){
        if(value !== undefined){
            this.state.fieldHead.editID = value.id;
            this.state.fieldHead.popOver = true;
            this.forceUpdate();
        }
    } 

    getFieldLoopItems(value:any){
        let arrItem = [];
        if(value.columns !== undefined && value.columns.length > 0){
            value.columns.forEach((val:any)=>{
                arrItem.push(<li className={`list-group-item-action list-group-item ${(this.state.fieldActive[value.randomName] !== undefined && this.state.fieldActive[value.randomName].indexOf(val.id) !== -1) ? "active" : ""}`} onClick={(e)=>{
                    this.itemSelect(val, value);
                }}>{val.field}</li>);
            })
        }

        return arrItem;
    }


    FieldHeadHandleChange(e:any){
        if(e !== undefined){
            this.state.fieldHead.editVal = e.target.value;
            this.forceUpdate();
        }
    }

    itemSelect(val:any, fullValue:any){
        let valueFieldName:string = this.alliasControl(val, fullValue);
        val['fieldRandom'] = valueFieldName;


        if(this.state.fieldActive[fullValue.randomName] !== undefined){
            if(this.state.fieldActive[fullValue.randomName].indexOf(val.id) !== -1){
                this.state.fieldActive[fullValue.randomName].splice(this.state.fieldActive[fullValue.randomName].indexOf(val.id), 1);
                this.state.fieldActiveVal[fullValue.randomName].splice(this.state.fieldActive[fullValue.randomName].indexOf(val.id), 1);
            }else {
                this.state.fieldActive[fullValue.randomName].push(val.id);
                this.state.fieldActiveVal[fullValue.randomName].push(val);
            }
        }else {
            this.state.fieldActive[fullValue.randomName] = [];
            this.state.fieldActiveVal[fullValue.randomName] = [];
            this.state.fieldActive[fullValue.randomName].push(val.id);
            this.state.fieldActiveVal[fullValue.randomName].push(val);
        }
        this.forceUpdate();
        this.props.onChange(this.state.fieldActiveVal);
    }

    alliasControl(val:any, fullValue:any){
        if(this.state.alliasVal[fullValue.randomName + "." + val.field] !== undefined){
            return this.state.alliasVal[fullValue.randomName + "." + val.field]; 
        }else {
            return val.field + this.createRandom();
        }
    }
}