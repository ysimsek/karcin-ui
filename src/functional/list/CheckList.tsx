import * as React from "react";


export interface CheckListProps{
    /**
     * Set the array data
     */
    items : Array<any>;
    /**
     * Set the Selected checked elements id
     */
    checkObjects ?: Array<any>;
    /**
     * Set the show value
     */
    value : string;
    /**
     * Set the default id
     */
    id : string | number;
    /**
     * Change the checklist
     */
    onChange ?: React.EventHandler<any> | any;
    /**
     * render the data (return val)
     */
    onRenderer ?: any;
}

export default class CheckList extends React.Component<CheckListProps,any>{
    state :any = {};
    isChecked = false;
    constructor(props:any){
        super(props);

        props.items.map((v:any, i:number) => {
            this.state[v[props.id]] = false
        })
    }


    /**
     * isChecked false olana kadar seçili datalar ayıklanır ve
     * tüm datanın state durumu güncellenir,
     * id : true or false şeklinde tüm checkinputlar state te tutulur.
     * @returns {any}
     */
    render():any{
        let me:any = this;
        return <div className="list-group-item form-group">
            {me.props.items.map((value:any, i:number) => (
                <div key={i}>
                    <label className={"check-container"}>
                        {this.props.onRenderer != undefined ? this.props.onRenderer(value) : value[me.props.value] }
                        {this.childInputElements(value)}
                        <span className={"checkmark"}></span>
                    </label>
                </div>
            ))}
            {this.isChecked = true}
        </div>
    }

    /**
     * CheckObjects varsa checked ile kontrol sağlanıyor,
     * Eğer ki yoksa inputun kendinden kontrol sağlanıyor
     * @param value
     * @returns {any}
     */
    childInputElements(value:any){
        let me = this;
        return this.props.checkObjects != undefined ?
            <input
                className={"checkbox"}
                onChange={(e:any) => this.onChange(value[me.props.id], e.target.checked)}
                type='checkbox'
                value={this.state[value[me.props.value]]}
                checked={this.isChecked == false ?
                        this.returnTrueOrFalseChecked(value) :
                        this.isCheckedControl(value)}
            /> :
            <input
                className={"checkbox"}
                onChange={(e:any) => this.onChange(value[me.props.id], e.target.checked)}
                type='checkbox'
                value={this.state[value[me.props.value]]}
            />;
    }

    /**
     * State kontrolü ile check olup omadığı kontrol edilir.
     * Daha önce onChange metodunda state ki kontrol direkt olarak değiştiği
     * için true ya da false değeri direkt return olunur.
     * @param val
     * @returns {boolean}
     */
    isCheckedControl(val:any):boolean{
        return this.state[val[this.props.id]];
    }

    /**
     * Props methoda array şeklinde return oluyor
     * @param key
     * @param value
     */
    onChange(key:any, value:any) {
        this.setState({ [key]: value }, () => {
            let state = [];
            for(let i in this.state){
                if(this.state.hasOwnProperty(i)) {
                    let idx = parseInt(i);
                    let data = this.returnTrueData(idx);
                    let value = this.state[i];
                    if(value != false) {
                        state.push(data);
                    }
                }
            }
            this.props.onChange(state)
        })
    }

    /**
     * Return the selectedData
     * @param idx
     * @returns {any}
     */
    returnTrueData(idx:any){
        let propsData:Array<any> = this.props.items;
        let data:any = null;
        let me = this;
        propsData.forEach(function (val:any,id:number) {
           if(val[me.props.id] == idx){
               data = val;
           }
        });
        return data;
    }

    /**
     * İlk değer de hangi elemeanların checkeleneceğinin kontrolünü sağlar
     * @param val
     * @returns {boolean}
     */
    returnTrueOrFalseChecked(value:any){
        let me = this;
        let bool = false;
        me.props.checkObjects != undefined ?
        me.props.checkObjects.forEach(function (val:any, idx:number) {
            if(val[me.props.id] == value[me.props.id]){
                bool = true;
                me.state[value[me.props.id]] = true;
            }
        }) : null;
        return bool;
    }

}