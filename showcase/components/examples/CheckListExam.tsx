import * as React from "react";
import {CheckList} from "karcin-ui";
import {Row,Col} from "reactstrap";

export default class CheckListExam extends React.Component<any,any>{
    data = [{id:1,name:"Mustafa",job:"Computer Engineer", age: 26},
            {id:2,name:"Zeynep",job:"Business Manager", age:24},
            {id:3,name:"Meral",job:"Software Specialist", age:29},
            {id:4,name:"Selim",job:"Elektronics Science", age:30},
            {id:5,name:"Melisa",job:"Computer Teacher", age:45}
    ];

    constructor(props:any){
        super(props);
        this.state = {
            data : [],
            data2 : [],
            data3 : [1,2,3,4]
        }
    }

    render(){
        return (<Row>
            <Col md={4}>
                <CheckList
                    items={this.data}
                    id={"id"}
                    value={"name"}
                    onChange={(values) => this.onChange('data', values)}/>
            </Col>
            <Col md={4}>
                <CheckList
                    items={this.data}
                    id={"id"}
                    value={"name"}
                    onRenderer={this.onShowValueRenderer.bind(this)}
                    onChange={(values) => this.onChange('data2', values)}/>
            </Col>
            <Col md={4}>
                <CheckList
                    items={this.data}
                    id={"id"}
                    value={"name"}
                    checkIds={this.state.data3}
                    onChange={(values) => this.onChange('data3', values)}/>
            </Col>
        </Row>)
    }

    onChange(key:string | number,values:any){
        this.setState({ [key]: values })
    }

    onShowValueRenderer(value:any){
        return value.name +" - "+value.job;
    }
}