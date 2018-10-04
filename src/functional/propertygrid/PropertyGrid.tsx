import * as React from "react";
import { Table , Row, Col } from 'reactstrap';
import SelectInput from "../../inputs/selectInput/SelectInput";

export interface  PropertyGridProps{
    fields:Array<any> ;
    values:Array<any> ;
    nameText?:string;
    labelText?:string;
}

export default class PropertyGrid extends React.Component<PropertyGridProps,any>{

    public static defaultProps:Partial<PropertyGridProps> = {
        nameText: "name",
        labelText:"label"
    }

    render(){
        return <Table striped>
            {this.returnElements(this.props.fields, this.props.values)}
        </Table>
    }

    returnElements(fields:any,values:any){
        let components:Array<any> = [];
        fields.map((field:any, idx:number)=>{
            if(field.divTitle != undefined){
                components.push(<thead>
                {field.divTitle}
                </thead>)
                components.push(<tbody>
                {this.returnFields(field.fields,values)}
                </tbody>)
            }
        });
        return components;
    }

    returnFields(fields:any,values:any){
        let componentFields:Array<any> = [],me:any = this;
        fields.map((field:any, idx:number)=>{
            let v:any= null;
            let comp:any  = [];
            if(values[field.name ] != undefined){
                v = values[field.name];
                comp= me.getComponentSelect(field,v);
            }
            componentFields.push(
                <tr>
                    <th>{field.label}</th>
                    <th>{comp}</th>
                </tr>)
        })
        return componentFields
    }
    getComponentSelect(field:any,value:any){
        let component:any = [];
        switch (field.type){
            case "select":
                component.push(this.getSelectInput(field,value));
                break;
        }
        return component;
    }

    getSelectInput(field:any,values:any){
        return <SelectInput
            name={field[this.props.nameText]}
            items={this.props.values[field[this.props.nameText]]}
            id={field.idField}
            value={field.valueField}
            onChange={this.handleChange.bind(this)}
        />
    }

    handleChange(e:any){
        let name:any = e.target.name;
        let state:any = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
    }
}
