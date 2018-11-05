import * as React from 'react';


export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type?: string | any;
    value?: string | any;
    name?:string | any;
    onChange?:any;
    hidden?:boolean;
    disabled?:boolean;
    isValid?:any;
}



export default class BaseInput extends React.Component<BaseInputProps> {
    public static defaultProps: Partial<BaseInputProps> = {
        type: "text",
        value: ""
    };

    render() {
        return <input {...this.props} className={"form-control"+this.props.className} onChange={this.onChange.bind(this)} value={this.props.value || ''}/>;
    }

    isValid(){
        //Kontrol true ise boş değil , false ise boş veya null
        let control:boolean = true;
        if(this.props.value == "" || this.props.value == null){
            control = false;
        }
        return control;
    }

    onChange(e:any){
        this.props.onChange(e);
    }
}
