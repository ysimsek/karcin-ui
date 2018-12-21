import * as React from "react";
import Label from '../functional/label/Label';
import FaIcon from '../functional/faicon/FaIcon';


export interface InputProps {
    type ?:string | any,
    name ?:string,
    value ?:string,
    label ?:string,
    labelPosition ?:string,
    onChange ?: React.EventHandler<any>,
    placeholder?:string,
    size ?:number,
    className ?:string,
    id ?:string,
    style?:React.CSSProperties,
    cols ?: number,
    rows ?: number,
    inputClass ?: string, 
    inputId ?: string,
    valid ?:boolean,
    requireText ?: string,
    checkIcon ?: string,
    checkIconColor ?: string, 
    checked ?: boolean,
    lineText ?:string,
    checkItems ?: Array<ItemsProps> | any,
    icon ?: string,
    IconColor ?: string, 
    [key:string] : any
}

export interface ItemsProps {
    lineText ?: string,
    checkIcon ?: string,
    checkIconColor ?: string,
    className ?: string,
    id ?: string,
    style ?: any,
    onChange ?: React.EventHandler<any>,
    name ?: string,
    checked ?: boolean
}

export interface InputState {
    value ?: string;
}

export default class Input extends React.Component<InputProps, any> {
    
    static defaultProps:Partial<InputProps> = {
        type: 'text',
        className: '',
        labelPosition : 'left',
        checkIcon: 'fa-check',
        checkItems : []
    }

    constructor(props:InputProps){
        super(props);

        this.state = {
            value: this.props.value,
        }
    }


    componentWillReceiveProps(props:InputProps){
        this.setState({
            value: props.value
        });
    }

    render(){ 
        
        let labelPositionClass:any = '';
        if(this.props.label){
            labelPositionClass = this.props.labelPosition
        }

        let labelOption = this.getFilterProps(['id']);


        return(<div {...labelOption} className={"karcin-input " + this.props.type + "-input " + this.props.className + ' ' + labelPositionClass + (this.props.icon ? ' left-icon' : '')}>
            {(this.props.label ? <Label requireText={(this.props.requireText ? this.props.requireText : '')}>{this.props.label}</Label> : '' )}
            <div className="form-input-col">
                {this.props.icon ? <FaIcon color={this.props.IconColor} code={this.props.icon} className={'input-icon'} /> : ''}
                {this.getInput()}
            </div>
        </div>);
    }
    
    getFilterProps(filter:any){
        let newFilter:any = {};

        filter.forEach((value:any)=>{
            for(let item in this.props){
                if(value === item){
                    newFilter[item] = this.props[item];
                }
            }
        });

        return newFilter;
    }
    

    getInput(){
        let returnInput:any, 
            inputClass:string = 'input-form ' + (this.props.inputClass ? this.props.inputClass : '');

        let {labelPosition, requireText, icon, IconColor, label, className, style, id, valid, ...generalProps} = this.props; 
        let {lineText, checkIconColor, checkIcon, checkItems, ...generalInput} = generalProps;


        switch(this.props.type){
            case 'textarea':
                if(this.props.valid && !this.state.value){
                    inputClass += ' valid';
                }
                returnInput = <textarea {...generalInput} value={this.state.value} className={inputClass}></textarea>;
            break;

            case 'checkbox':
            case 'radio':
                if(this.props.checkItems.length === 0){
                    returnInput = this.getCheck(inputClass, generalInput);
                }else {
                    returnInput = [];

                    this.props.checkItems.forEach((value:any, index:number)=>{
                        let {...sendCheckProps} = {...value, ...generalInput};
                        inputClass += " " + value.className; 
                        returnInput.push(this.getCheck(inputClass, sendCheckProps, index));
                    })
                }
            break;

            default:
                if(this.props.valid && !this.state.value){
                    inputClass += ' valid';
                }
                returnInput = <input {...generalInput} value={this.state.value} onChange={this.handleChange} className={inputClass} />;
            break;

        }

        return returnInput;
    }

    getCheck(inputClass:any, inputProps:any, index?:number){
        return <label className={inputClass + " " + this.props.type + "-item"}>
            <input {...inputProps} checked={inputProps.checked} onChange={(e)=>{this.handleChange(e, index)}} />
            <span className="check-content"><FaIcon color={this.props.checkIconColor} code={this.props.checkIcon}/></span>
            {(index !== undefined) ? inputProps.lineText : this.props.lineText}
        </label>;
    }

    handleChange = (e:any, id?:any) => { 
        let newTarget:any = {'target': {}};
        newTarget.target['name'] = e.target.name;
        newTarget.target['value'] = e.target.value;

        if(this.props.type === 'radio'){

            if(this.props.checkItems && this.props.checkItems.length > 0){
                newTarget.target['value'] = [];
                this.props.checkItems.forEach((value:any, index:number)=>{
                    if(index === id){
                        value['checked'] = e.target.checked;
                    }else {
                        value['checked'] = false;
                    }
                    
                    newTarget.target['value'].push(value);
                })
            }else {
                newTarget.target['value'] = e.target.checked;
            }
            
        }else if(this.props.type === 'checkbox'){
            if(this.props.checkItems && this.props.checkItems.length > 0){
                newTarget.target['value'] = [];
                this.props.checkItems.forEach((value:any, index:number)=>{
                    if(index === id){
                        value['checked'] = e.target.checked;
                    }

                    newTarget.target['value'].push(value);
                })
            }else {
                newTarget.target['value'] = e.target.checked;
            }
        }

        if(this.props.checkItems && this.props.checkItems.length > 0){
            newTarget.target['index'] = id;
        }

        if(this.props.onChange){
            this.props.onChange(newTarget);
        }

    }
}