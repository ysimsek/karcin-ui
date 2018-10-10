import * as React from "react";
import {Table} from "reactstrap";
import * as Highlight from "react-highlight";

export default class ModelExample extends React.Component<any,any>{
    types:any =[
        {type:"string",component:"TextInput"},
        {type:"int",component:"NumericInput"},
        {type:"password",component:"PasswordInput"},
        {type:"select",component:"SelectInput"},
        {type:"date",component:"DateInput"},
        {type:"radio",component:"RadioInput"},
        {type:"check",component:"CheckInput"},
        {type:"textarea",component:"TextArea"},
        {type:"lookup",component:"LookUp"}
    ];
    render(){
        return <div>
            {this.getModelling()}
            {this.getHighLight()}
        </div>
    }

    getHighLight(){
        return <div>
            Örnek model kullanımı aşağıdaki gibidir. DataForm, DataGrid ve LookUp componentleri modeli bu şekilde istemektedir.
            <Highlight className='javascript'>{'const data = [\n' +
        '    {\n' +
        '        id : "id",\n' +
        '        type : "string",\n' +
        '        name : "name",\n' +
        '        label :"Name",\n' +
        '    },\n' +
        '    {\n' +
        '        id : "id",\n' +
        '        type : "string",\n' +
        '        name : "surname",\n' +
        '        label :"Surname",\n' +
        '    },\n' +
        '    {\n' +
        '        id : "id",\n' +
        '        type : "int",\n' +
        '        name : "age",\n' +
        '        label :"Age",\n' +
        '    },\n' +
        '    {\n' +
        '        id : "id",\n' +
        '        type : "string",\n' +
        '        name : "job",\n' +
        '        label :"Job",\n' +
        '    },{\n' +
        '        id : "id",\n' +
        '        type : "select",\n' +
        '        name : "telephone",\n' +
        '        label :"Telephone",\n' +
        '    },\n' +
        '    {\n' +
        '        id : "id",\n' +
        '        type : "string",\n' +
        '        name : "location",\n' +
        '        label :"Location",\n' +
        '    },\n' +
        '    {\n' +
        '        id:"id",\n' +
        '        type:"check",\n' +
        '        name : "checkJob",\n' +
        '        label : "İş Seç",\n' +
        '        idField : "id",\n' +
        '        valueField : "job"\n' +
        '    },\n' +
        '    {\n' +
        '        id: "id",\n' +
        '        type : "radio",\n' +
        '        name : "opened",\n' +
        '        label : "Yapıldı mı?"\n' +
        '    },\n' +
        '    {\n' +
        '        id:"id",\n' +
        '        type:"date",\n' +
        '        name : "startDate",\n' +
        '        label : "Başlangıç Zamanı"\n' +
        '    },\n' +
        '    {\n' +
        '        id:"id",\n' +
        '        type:"lookup",\n' +
        '        name:"lookUpData",\n' +
        '        label: "Dil Seç",\n' +
        '        textField : "body"\n' +
        '    },\n' +
        '    {\n' +
        '        id:"id",\n' +
        '        type: "alert",\n' +
        '        title:"Lütfen Okuyunuz!",\n' +
        '        message:"Verilerini Konsol\'da kontrol ediniz :)",\n' +
        '        color:"warning"\n' +
        '    }\n' +
        '\n' +
        ']'}</Highlight></div>
    }

    getModelling(){
        return <div>
            Model tanımlamasındaki tipler ve hangi omponentle bağlantılı olduğu aşağıdaki tabloda verilmiştir.<br/><br/>
            <table className={"table table-striped"}>
            <thead className={"thead-dark"}>
            <tr>
                <th>Type</th>
                <th>Component</th>
            </tr>
            </thead>
            <tbody>
            {this.getTyping()}
            </tbody>
        </table></div>;
    }

    getTyping(){
        let arr:any = [];
        this.types.map((res)=>{
            arr.push(<tr>
                        <td>{res.type}</td>
                        <td>{res.component}</td>
                    </tr>
            );
        });
        return arr;
    }
}
