import * as React from "react";

export interface RadioInputProps{
    id?:string | number;
    /**
     * Default value false
     */
    inline?:boolean;
    /**
     * Manage the target value
     */
    value?:string | any;
    /**
     * idField name in object
     */
    idField?:string | any;
    /**
     * textField name in object
     */
    textField?:string | any;
    /**
     * Return props function
     */
    onChange?:any;
    /**
     * Set the Array data
     */
    items?: Array<any>;
    /**
     * set the component's name
     */
    name?:string;
    /**
     * Default false
     */
    checked?:boolean;
    /**
     * Set the string title
     */
    label?:string;
    /**
     * Set the css name
     */
    className?:string;

    formControl?:boolean;
}

export default class RadioInput extends React.Component<any,RadioInputProps>{
    /**
     * Initial values
     * @param props
     */
    constructor(props:any){
        super(props);
        this.state = {
            value : props.value
        }
    }

    UNSAFE_componentWillReceiveProps(props:any){
        this.state ={
            value : props.value
        }
    }

    /**
     * @returns {any}
     */
    render():any{
        return <form className="karcin-input">
                    {this.props.label != undefined ? <div>
                        <b>{this.props.label}</b>
                    </div> : null}
                    <div
                        id={this.props.id}
                        onChange={this.onChange.bind(this)}
                        className={"form-control radio-properties "+ this.props.className}>
                        {this.returnRadioElements(this,this.props.items)}
                    </div>
        </form>
    }

    /**
     * @param e
     * @param {Array<any>} value
     * @returns {any}
     */
    public returnRadioElements(e:any,value:Array<any>):any{

        let component:Array<any> = [];
        let inline = false;
        let control = this.props.formControl;
        if(this.props.inline || this.props.inline == true){
            inline = true;
        }
        let checkValue = e.state.value;
        value.forEach(function (v:any) {
            let isChecked:boolean = v.id == checkValue ? true : false ;
            if(inline == true){
                component.push(<label key={v.id+'lbl'} style={{paddingLeft: "2px"}}><label><input
                    className={"radio"}
                    type="radio"
                    checked={isChecked}
                    key={v.id+'inl'}
                    name={e.props.name}
                    value={v.id} />{v.value}</label></label>)
            }else{
                component.push(<div key={v.id+"hrz"}><label><input
                    className={"radio"}
                    type="radio"
                    checked={isChecked}
                    key={v.id}
                    name={e.props.name}
                    value={v.id} />{v.value}</label></div>)
            }
        }.bind(e));
        return component;
    }

    /**
     * Return props function
     * @param e
     */
    onChange(e:any){
        debugger
        this.props.onChange != undefined ? this.props.onChange(e) : null;
    }

}
