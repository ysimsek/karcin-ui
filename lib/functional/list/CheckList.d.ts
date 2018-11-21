import * as React from "react";
export interface CheckListProps {
    /**
     * Set the array data
     */
    items: Array<any>;
    /**
     * Set the Selected checked elements id
     */
    checkObjects?: Array<any>;
    /**
     * Set the show value
     */
    value: string;
    /**
     * Set the default id
     */
    id: string | number;
    /**
     * Change the checklist
     */
    onChange?: React.EventHandler<any> | any;
    /**
     * render the data (return val)
     */
    onRenderer?: any;
}
export default class CheckList extends React.Component<CheckListProps, any> {
    state: any;
    isChecked: boolean;
    constructor(props: any);
    /**
     * isChecked false olana kadar seçili datalar ayıklanır ve
     * tüm datanın state durumu güncellenir,
     * id : true or false şeklinde tüm checkinputlar state te tutulur.
     * @returns {any}
     */
    render(): any;
    /**
     * CheckObjects varsa checked ile kontrol sağlanıyor,
     * Eğer ki yoksa inputun kendinden kontrol sağlanıyor
     * @param value
     * @returns {any}
     */
    childInputElements(value: any): JSX.Element;
    /**
     * State kontrolü ile check olup omadığı kontrol edilir.
     * Daha önce onChange metodunda state ki kontrol direkt olarak değiştiği
     * için true ya da false değeri direkt return olunur.
     * @param val
     * @returns {boolean}
     */
    isCheckedControl(val: any): boolean;
    /**
     * Props methoda array şeklinde return oluyor
     * @param key
     * @param value
     */
    onChange(key: any, value: any): void;
    /**
     * Return the selectedData
     * @param idx
     * @returns {any}
     */
    returnTrueData(idx: any): any;
    /**
     * İlk değer de hangi elemeanların checkeleneceğinin kontrolünü sağlar
     * @param val
     * @returns {boolean}
     */
    returnTrueOrFalseChecked(value: any): boolean;
}
