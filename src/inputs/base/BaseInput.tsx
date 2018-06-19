import * as React from 'react';


export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type?: string | any;
    value?: string | any;
    name?:string | any;
    onChange?:any;
    hidden?:boolean;
    disabled?:boolean;
}



export default class BaseInput extends React.Component<BaseInputProps> {
    public static defaultProps: Partial<BaseInputProps> = {
        type: "text",
        value: ""
    };

    render() {
        return <input onChange={this.onChange.bind(this)} className="form-control" {...this.props} value={this.props.value || ''}/>;
    }

    onChange(e:any){
        this.props.onChange(e);
    }
}