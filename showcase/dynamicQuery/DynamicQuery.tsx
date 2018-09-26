import * as React from "react";
//import AjaxRequest from "../components/util/AjaxRequest"
import {Notify,SelectInput,Label,DataFilter,TextInput,Button,Panel, List, ListItem, AutoComplate, FaIcon, FileExport} from "karcin-ui";
import { Row,Col,Collapse} from "reactstrap";
import Fields from './Fields';
import Where from './Where';
const base64 = require('base-64');

export default class DynamicQuery extends React.Component<any,any>{

    _fields:any;
    _where:any;

    constructor(props:any){
        super(props);
        this.state = {
            randoms:[],
            tableNames : [],
            reportTypes : [],
            fieldNames : [],
            tables : {data:[]},
            tableColumn:[],
            tableActive:{select:[], active:[], selectIDs:[]},
            selectFields : [],
            writeFields : {
                data : []
            },
            sql : "",
            fieldHead:{editID:null, editVal:null}
        }
        this.getEntityList();
    }

    render(){
        return <div className="dynamic-query">
            <Row>
            <Col md={12} className="tableSelect">
                <Panel title={"Tables"} color={"primary"}>
                {console.log(this.state.tables.data)}
                    <SelectInput items={this.state.tables.data} type="multi" name="tableSelect" activeItem={this.state.tableActive.selectIDs} value="tableName"  onChange={(e)=>{
                        this.selectTable(e);
                    }}/>    
                    <Button onClick={()=>{
                        this.tableSelectAdd();
                    }}>Ekle</Button>
                </Panel>
            </Col>
            <Col xs="12">
                <Fields data={this.state.tableActive.active} onChange={(e)=>{
                    this.changeFieldProps(e);
                }}/>
                <Button color="success" onClick={(e)=>{
                    this.onPrintData()
                }}>Yazdır</Button>

                {(this._fields !== undefined) ? <Where data={this._fields} onChange={(e)=>{
                    this.changeWhereProps(e);
                }}/> : ''}
                
            </Col>
        </Row>
        </div>
    }

    selectTable(e:any){
        this.state.tableActive.select = e.target.parsedValue;
        this.state.tableActive.selectIDs = e.target.value;
        this.forceUpdate();
    }

    getEntityList(){
        // let ajaxRequest = new AjaxRequest(null, (res:any)=> {
        //         this.setState({tables: res.data.resultMap.data});
        //         this.forceUpdate();
        //     }, (error)=>{
        //         Notify.error({message:"Veri Getirilemedi",position:"top-right"})
        //     }, {processor:"report",method:"getEntityList"}
        // );
        // ajaxRequest.call();
        this.state.tables.data = [
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "code",
                type: "String"
                },
                {
                id: 3,
                field: "createDate",
                type: "Date"
                },
                {
                id: 4,
                field: "name",
                type: "String"
                },
                {
                id: 5,
                field: "contexPath",
                type: "String"
                },
                {
                id: 6,
                field: "clientId",
                type: "String"
                },
                {
                id: 7,
                field: "clientSecret",
                type: "String"
                }
                ],
                id: 1,
                tableName: "kr_domain"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "badge",
                type: "String"
                },
                {
                id: 3,
                field: "createDate",
                type: "Date"
                },
                {
                id: 4,
                field: "href",
                type: "String"
                },
                {
                id: 5,
                field: "icon",
                type: "String"
                },
                {
                id: 6,
                field: "title",
                type: "String"
                },
                {
                id: 7,
                field: "domain_id",
                type: "Long"
                },
                {
                id: 8,
                field: "parent_id",
                type: "Long"
                },
                {
                id: 9,
                field: "item_index",
                type: "Int"
                },
                {
                id: 10,
                field: "name",
                type: "String"
                },
                {
                id: 11,
                field: "path",
                type: "String"
                }
                ],
                id: 2,
                tableName: "kr_menu"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "createDate",
                type: "Date"
                },
                {
                id: 3,
                field: "menu_id",
                type: "Long"
                },
                {
                id: 4,
                field: "role_id",
                type: "Long"
                }
                ],
                id: 3,
                tableName: "kr_menu_permission"
                },
                {
                columns: [
                {
                id: 1,
                field: "createDate",
                type: "Date"
                },
                {
                id: 2,
                field: "domain",
                type: "String"
                },
                {
                id: 3,
                field: "hostIp",
                type: "String"
                },
                {
                id: 4,
                field: "logMessage",
                type: "String"
                },
                {
                id: 5,
                field: "logType",
                type: "String"
                },
                {
                id: 6,
                field: "processTime",
                type: "Long"
                },
                {
                id: 7,
                field: "requestData",
                type: "String"
                },
                {
                id: 8,
                field: "userId",
                type: "Long"
                },
                {
                id: 9,
                field: "version",
                type: "Long"
                },
                {
                id: 10,
                field: "dataType",
                type: "String"
                },
                {
                id: 11,
                field: "responseData",
                type: "String"
                }
                ],
                id: 4,
                tableName: "kr_operation_log"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "code",
                type: "String"
                },
                {
                id: 3,
                field: "createDate",
                type: "Date"
                },
                {
                id: 4,
                field: "name",
                type: "String"
                },
                {
                id: 5,
                field: "domain_id",
                type: "Long"
                }
                ],
                id: 5,
                tableName: "kr_role"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "active",
                type: "Boolean"
                },
                {
                id: 3,
                field: "createDate",
                type: "Date"
                },
                {
                id: 4,
                field: "failCount",
                type: "Int"
                },
                {
                id: 5,
                field: "lastName",
                type: "String"
                },
                {
                id: 6,
                field: "userName",
                type: "String"
                },
                {
                id: 7,
                field: "name",
                type: "String"
                },
                {
                id: 8,
                field: "password",
                type: "String"
                },
                {
                id: 9,
                field: "email",
                type: "String"
                }
                ],
                id: 6,
                tableName: "kr_user"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "createDate",
                type: "Date"
                },
                {
                id: 3,
                field: "domain_id",
                type: "Long"
                },
                {
                id: 4,
                field: "role_id",
                type: "Long"
                },
                {
                id: 5,
                field: "user_id",
                type: "Long"
                }
                ],
                id: 7,
                tableName: "kr_user_domain"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "processorName",
                type: "String"
                },
                {
                id: 3,
                field: "methodName",
                type: "String"
                },
                {
                id: 4,
                field: "domain_id",
                type: "Long"
                },
                {
                id: 5,
                field: "createDate",
                type: "Date"
                },
                {
                id: 6,
                field: "description",
                type: "String"
                }
                ],
                id: 8,
                tableName: "kr_service_method"
                },
                {
                columns: [
                {
                id: 1,
                field: "version",
                type: "Long"
                },
                {
                id: 2,
                field: "createDate",
                type: "Date"
                },
                {
                id: 3,
                field: "role_id",
                type: "Long"
                },
                {
                id: 4,
                field: "service_method_id",
                type: "Long"
                }
                ],
                id: 9,
                tableName: "kr_method_permission"
                },
                {
                columns: [
                {
                id: 1,
                field: "id",
                type: "Long"
                },
                {
                id: 2,
                field: "changeUserId",
                type: "Long"
                },
                {
                id: 3,
                field: "auditType",
                type: "Int"
                },
                {
                id: 4,
                field: "version",
                type: "Long"
                },
                {
                id: 5,
                field: "badge",
                type: "String"
                },
                {
                id: 6,
                field: "createDate",
                type: "Date"
                },
                {
                id: 7,
                field: "href",
                type: "String"
                },
                {
                id: 8,
                field: "icon",
                type: "String"
                },
                {
                id: 9,
                field: "title",
                type: "String"
                },
                {
                id: 10,
                field: "domain_id",
                type: "Long"
                },
                {
                id: 11,
                field: "parent_id",
                type: "Long"
                },
                {
                id: 12,
                field: "item_index",
                type: "Int"
                },
                {
                id: 13,
                field: "name",
                type: "String"
                },
                {
                id: 14,
                field: "path",
                type: "String"
                }
                ],
                id: 10,
                tableName: "kr_menu_audit"
                }
                ]
        this.forceUpdate();
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

    tableSelectAdd(){
        if(this.state.tableActive.select !== undefined && this.state.tableActive.select.length > 0){
            this.state.tableActive.select.forEach((value:any, index:number)=>{
                if(value.randomName === undefined){
                    value['randomName'] = value['tableName'] + this.createRandom();
                    this.state.tableActive.select[index] = value;
                }
            })
            this.state.tableActive.active = this.state.tableActive.select.slice(0);
            this.forceUpdate();
        }
    }

    getReportTypes(){
        // let self = this;
        // let ajaxRequest = new AjaxRequest(null, (res:any)=> {
        //         self.setState({reportTypes: res.data.resultMap.data});
        //     }, (error)=>{
        //         Notify.error({message:"Veri Getirilemedi",position:"top-right"})
        //     }, {processor:"report",method:"getReportTypes"}
        // );
        // ajaxRequest.call();
    }

    changeFieldProps(val:any){
        this._fields = val;
        this.forceUpdate();
    }

    changeWhereProps(val:any){
        this._where = val;
        this.forceUpdate();
    }

    onPrintData(){

        let fields:any[] = [];
        let tables:any[] = [];

        // fields 
        if(this._fields !== undefined){
            for(let item in this._fields){
                if(this._fields[item].length > 0){
                    this._fields[item].forEach((val:any) => {
                        fields.push({[item + "." + val.field]: val.fieldRandom});
                    });
                }
            }
        }

        // tables 
        if(this.state.tableActive.active.length > 0){
            this.state.tableActive.active.forEach((val:any)=>{
                tables.push({[val.tableName] : val.randomName});
            });
        }


        // let ajaxRequest = new AjaxRequest(
        //     {
        //         "fields":fields,
        //         "tables":tables,
        //         "joins" :[null],
        //         "where":[null],
        //         "groupby":[null],
        //         "having":[null],
        //         "orderby":[null],
        //         "wheretemplate":"",
        //         "havingtemplate":"",
        //         "reportName":"BASLIK",
        //         "reportType":"EXCELXLS",
        //         "landscape" : "VERTICAL",
        //         "limit":100
        //     }, (res:any)=> { 
        //         this.printExport(res);
        // }, (error)=>{
        //     Notify.error({message:"Veri Getirilemedi",position:"top-right"})
        // }, {processor:"report",method:"getReport"});
        // ajaxRequest.call();
    }

    printExport(response:any){
        new FileExport({fileData:response.data.resultMap.data, fileName:'deneme', extension:'xlsx'});
    }

    

}