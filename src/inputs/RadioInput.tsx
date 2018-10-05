import * as React from "react";

export interface RadioInputProps{
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

    formControl?:boolean;
}

export default class RadioInput extends React.Component<any,RadioInputProps>{
    /**
     * Initial values
     * @param props
     */
    constructor(props:any){
        super(props);
    }

    /**
     * @returns {any}
     */
    render():any{
        return <form>
                    {this.props.label != undefined ? <div>
                        <b>{this.props.label}</b>
                    </div> : null}
                    <div
                        onChange={this.onChange.bind(this)}
                        className={"form-control radio-properties"}>
                        {this.returnRadioElements(this,this.props.items)}
                        </div>
        </form>
    }

    /**
     * @param e
     * @param {Array<any>} value
     * @returns {any}
     */
    private returnRadioElements(e:any,value:Array<any>):any{

        let component:Array<any> = [];
        let inline = false;
        let control = this.props.formControl;
        if(this.props.inline || this.props.inline == true){
            inline = true;
        }
        let checkValue = e.props.value;
        value.forEach(function (v:any) {
            let isChecked = v.id == checkValue ? true: false ;
            if(inline == true){
                component.push(<label key={v.id+'lbl'} style={{paddingLeft: "2px"}}><label><input
                    className={"radio"}
                    type="radio"
                    defaultChecked={isChecked}
                    key={v.id+'inl'}
                    name={e.props.name}
                    value={v.id} />{v.value}</label></label>)
            }else{
                component.push(<div key={v.id+"hrz"}><label><input
                    className={"radio"}
                    type="radio"
                    defaultChecked={isChecked}
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
        this.props.onChange(e);
    }
}
