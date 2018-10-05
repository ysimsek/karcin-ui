import * as React from "react";
import {PropertyGrid,TextArea, Button} from "karcin-ui";
import {Row,Col} from "reactstrap";


let model = [
    {
        divTitle : "Behavioral",
        fields : [
            {
                id : "id",
                type : "select",
                name : "behavioralName",
                label :"Behavioral Name",
                idField: "id",
                valueField : "value"
            },
            {
                id : "id",
                type : "color",
                name : "colorName",
                label :"Select the Color"
            },
            {
                id:"id",
                type : "string",
                name : "textName",
                label : "İsim Giriniz"
            },
            {
                id:"id",
                type : "int",
                name : "age",
                label : "Yaş Giriniz"
            },
            {
                id:"id",
                type : "password",
                name : "password",
                label : "Şifre Giriniz"
            },
            {
                id:"id",
                type : "textarea",
                name : "textarea",
                label : "Açıklama Giriniz"
            },
            {
                id:"id",
                type:"check",
                name : "checkJob",
                label : "İş Seç",
                idField : "id",
                valueField : "job"
            }

        ]
    },
    {
        divTitle : "Structural",
        fields : [
            {
                id : "id",
                type : "select",
                name : "structuralName",
                label :"StructuralName"
            }
        ]
    },
    {
        divTitle : "Creational",
        fields : [
            {
                id : "id",
                type : "select",
                name : "creationalName",
                label :"Creational Name"
            },
            {
                id:"id",
                type:"date",
                name : "startDate",
                label : "Başlangıç Zamanı"
            }
        ]
    },
    {
        divTitle : "Other",
        fields : [
            {
                id : "id",
                type : "select",
                name : "otherName",
                label :"Other Name"
            },
            {
                id:"id",
                type:"lookup",
                name:"lookUpData",
                label:"Dil Seçiniz",
                textField : "body"
            },
            {
                id:"id",
                type : "radio",
                name : "radio",
                label : "Thema Seçiniz"
            }
        ]
    },

]

export default class PropertyGridExample extends React.Component<any,any>{

    dataFormRef = null;

    constructor(props:any){
        super(props);
        this.state = {
            values : {
                behavioralName : [
                    {id:1,value:"Apple",des:"D1"},
                    {id:2,value:"Samsung",des:"D1"},
                    {id:3,value:"Huawei",des:"D1"},
                    {id:4,value:"Lg",des:"D1"},
                    {id:5,value:"Lenovo",des:"D1"}
                ],
                structuralName : [
                    {id:1,value:"Wolswagen",des:"D1"},
                    {id:2,value:"BMW",des:"D1"}
                ],
                creationalName : [
                    {id:1,value:".com",des:"D1"},
                    {id:2,value:".tr",des:"D1"},
                    {id:2,value:".ru",des:"D1"}
                ],
                otherName : [
                    {id:1,value:"Seviye A",des:"D1"},
                    {id:2,value:"Seviye B",des:"D1"}
                ],
                radio : [
                    {id:1,value:"Blue"},
                    {id:2,value:"Dark"}
                ],
                textarea : "TextArea",
                age : 5,
                checkJob : [{id:1,name:"Mustafa",job:"Computer Engineer", age: 26},
                    {id:2,name:"Zeynep",job:"Business Manager", age:24},
                    {id:3,name:"Meral",job:"Software Specialist", age:29}],
                lookUpData : {
                    fields: [{"property": "int", "value": "id", "label": "ID"},
                        {"property": "string", "value": "body", "label": "Başlık"}],
                    store:{
                        data : [
                            {id:1,name:"Java",body:"Java neredeyse her türdeki ağ uygulamalarının temelini oluşturarak gömülü ve mobil uygulamalar, oyunlar, Web tabanlı içerik ve kurumsal yazılım geliştirme ve dağıtımı için küresel standarttır.  " },
                            {id:2,name:"React",body:"React Virtual Dom , sayfa bütünlüğü ve yönetimini elinde tutarak kolaylık sağlıyor"}
                        ]
                    }
                }
            }
        }
    }

    render(){
        return <Row>
            <Col md={7}>
                <PropertyGrid
                    fields={model}
                    values={this.state.values}
                    ref={(e)=>{
                        this.dataFormRef = e;
                    }}
                />
            </Col>
            <Col md={1}>
                <Button onClick={()=>{this.returnData()}} color={"primary"}>Verileri Çek</Button>
            </Col>
            <Col md={4}>

            </Col>
        </Row>
    }
    returnData(){
        console.log(this.dataFormRef.getData())
    }


}
