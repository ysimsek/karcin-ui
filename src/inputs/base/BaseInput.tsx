import * as React from 'react';


export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type?: string;
    value?:any;
    name?:string;
    onChange?:any;
    hidden?:boolean;
    disabled?:boolean;
}



export default class BaseInput extends React.Component<BaseInputProps,any> {
    public static defaultProps: Partial<BaseInputProps> = {
        type: "text",
        value: ""
    };

    render() {
        return <input className="form-control" {...this.props}/>;
    }
}