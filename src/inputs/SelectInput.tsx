import * as React from "react";
import Enums from "./enums/Enums";
import {Label} from "reactstrap";

export interface SelectInputProps{
    items: Array<any>,
    value?:string,
    id?:string,
    label?:string,
    labelPosition?: string,
    name?:string,
    onChange?: any,
    item?:Object
}

export default class SelectInput extends React.Component<SelectInputProps>{

    public static defaultProps: Partial<SelectInputProps> = {
        items : [] ,
        value: "value",
        id: "id",
        name: "selectinput",
        labelPosition : Enums.labelPosition.Right
    }
    // //CSS ÇALIŞMASINA DEVAM EDİLECEK, Şimdilik böyle bırakıldı.
    // cssStyles:any = {
    //     textAlign : (this.props.labelPosition != Enums.labelPosition.Right ? this.__renderLabelPosition(): this.props.labelPosition),
    //     float: (SelectInput.position == "norm" ?(this.props.labelPosition == "Left" ? Enums.labelPosition.Left:  Enums.labelPosition.Right): "" ),
    //     marginTop: 10
    // };

    //norm,top,bottom
    public static position : string = "norm";

    constructor(props:any){
        super(props);
        this.__renderLabelPosition.bind(this);
    }

    render(){
        let renderComponent = <div><Label>{this.props.label}</Label>
            <select name={this.props.name} className="form-control" style={{width:`100%`}} onChange={this.__handleChange.bind(this)}>
                <option label="Lütfen Seçiniz" value=""></option>
                {this.__renderOptionValues(this.props.items)}
            </select>
        </div>;

        return <div>{renderComponent}</div>;
    }

    __renderOptionValues(items: Array<any>){
        let renderItem: JSX.Element[] = [];
        let id = this.props.id != undefined ? this.props.id : "id";
        let value = this.props.value != undefined ? this.props.value :"value";
        if(items.length >0){
            items.forEach(function (v) {
                renderItem.push(<option value={v[id]}>{v[value]}</option>);
            });
        }
        return renderItem;
    }

    /**
     * Enums.labelPosition içerisindeki değerlerden birisi olabilir.
     * @param position
     * @returns {string}
     * @private
     */
    __renderLabelPosition(){
        let deger:any = Enums.labelPosition;
        let position = this.props.labelPosition != undefined ? this.props.labelPosition : Enums.labelPosition.Left;
        if(position == "Left"){
            SelectInput.position = "norm";
        }else if(position == "Right"){
            SelectInput.position = "norm";
        }else if(position == "Bottom" || position == "Bottom_Right" || position == "Bottom_Left" || position == "Bottom_Center"){
            SelectInput.position = "bottom";
        }else if(position == "Top" || position == "Top_Right" || position == "Top_Left" || position == "Top_Center"){
            SelectInput.position = "top";
        }
        return deger[position];
    }

    /**
     * TODO : Call Component is undefined ?
     * @param {Object} e
     * @private
     */
    __handleChange(e:Object){
        if (this.props.onChange){
            this.props.onChange(e);
        }
    }
}