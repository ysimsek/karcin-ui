import * as React from "react";
import {Row,Col, Button} from 'reactstrap';
import Select from '../../inputs/selectInput/SelectInput';
import BaseInput from '../../inputs/base/BaseInput';
import DateInput from '../../datepicker/DateInput';
import FaIcon from '../faicon/FaIcon';
import RadioInput from '../../inputs/RadioInput';

export interface GetInputProps {
    type:any;
    data?:any;
    value?:any;
    name?:any;
    onChange?:any;
}
export default class GetInput extends React.Component<GetInputProps,any> {

    static defaultProps: Partial<any> = {
        type: 'text',
        value : "",
        name: 'example'
    }

    constructor(props: any) {
        super(props);
        
        this.state = {
            listText: {value:""},
            listItems:[],
            inputText: {value:this.props.value},
            inputDownText:{value:""},
        };
    }

    UNSAFE_componentWillReceiveProps(props:any){
        this.state.inputText.value = props.value;
        this.forceUpdate();
    }


    render() {
        return (<div>
            {this.getInput()}
        </div>);
    }


    getInput(){
        let input:any;

        if(this.props.type === 'select'){
            input = <Select items={this.props.data} activeItem={this.state.inputText.value} onChange={(e:any)=>{
                this.handleChange(e);
            }}/>

        }else if(this.props.type === 'date'){
            input =  <DateInput name={this.props.name} value={this.state.inputText.value} onChange={(e:any)=>{
                this.handleChange(e);
            }}/>
        }else if(this.props.type === 'list'){
            input = <div className="listBox">
                <div className="listInput">
                    <BaseInput type="text" name={this.props.name} value={this.state.listText.value} onChange={(e:any)=>{
                        this.state.listText.value = e.target.value;
                        this.forceUpdate();
                    }} onKeyDown={(e:any)=>{
                        if(e.keyCode === 13){
                            this.listAddItem();
                        }
                    }}/>
                </div>
                <div className="listButton">
                    <Button color="primary" size="sm" onClick={(e)=>{
                        this.listAddItem();
                    }}>Ekle</Button>
                </div>
                <div className="selectedItems">
                    {this.listSelectedItems()}
                </div>
            </div>;
        }else if(this.props.type === 'radio'){
            input = <div className="likeVal">
                        <RadioInput
                        name={this.props.name}
                        value={this.state.inputText.value}
                        inline
                        items={this.props.data}
                        idField="id"
                        textField="value"
                        onChange={(e:any)=>{
                            this.handleChange(e);
                        }}/>
                        {(this.state.inputText.value !== (null && "")) ? 
                            <BaseInput type={"text"} name={"likeValue"} value={this.state.inputDownText.value} onChange={(e:any)=>{
                                this.state.inputDownText.value = e.target.value;
                                this.forceUpdate();
                                this.generalOnChange(e, e.target.value);
                            }}/>    
                        : ''}
                    </div>;
        }else {
            input = <BaseInput type={this.props.type} name={this.props.name} value={this.state.inputText.value} onChange={(e:any)=>{
                this.handleChange(e);
            }}/>
        }

        return input;
    }

    handleChange(e:any){
        this.state.inputText.value = e.target.value;
        this.forceUpdate();
    -   this.generalOnChange(e, e.target.value);
    }

    listAddItem(){
        if(this.state.listItems.indexOf(this.state.listText.value) === -1){
            this.state.listItems.push(this.state.listText.value);
            this.state.listText.value = "";
            this.generalOnChange(undefined, this.state.listItems);
            this.forceUpdate();
        }
    }

    listSelectedItems(){
        let items:any = [];
        if(this.state.listItems.length > 0){
            this.state.listItems.forEach((value:any, index:any)=>{
                items.push(<div className="item">
                        <span>{value}</span>
                        <div className="removeItem" onClick={()=>{
                            this.removeSelectedItems(index);
                        }}><FaIcon code="fa-times"/></div>
                    </div>);
            });
        }

        return items;
    }

    removeSelectedItems(id:any){
        if(id !== undefined){
            this.state.listItems.splice(id, 1);
            this.forceUpdate();
        }
    }

    generalOnChange(e:any, data?:any){
        let value:any;
        if(this.props.type === "like"){
            if(parseInt(this.state.inputText.value) === 1){
                value = "%" + this.state.inputDownText.value;
            }else if(parseInt(this.state.inputText.value) === 2){
                value = this.state.inputDownText.value + "%";
            }else { 
                value = "%" + this.state.inputDownText.value + "%";
            }
        }else if(this.props.type === "list"){
            value = this.state.listItems;
        }else {
            value = e.target.value;
        }

        this.props.onChange(value);
    }


}