import * as React from 'react';
export interface DataFilterProps {
    /**
     * Set the fields model (Array)
     */
    field: Array<any> | any;
    /**
     * Manage the values (function)
     */
    onChange?: React.EventHandler<any> | any;
    /**
     * label text
     */
    label?: string | any;
    /**
     * label position : [up(default), left, right]
     */
    labelPosition?: string | any;
    /**
     * label case boolean (default:true)
     */
    labelCase?: boolean | any;
    /**
     * data name get field name
     */
    nameFieldName?: string | any;
    /**
     * data name get field type
     */
    typeFieldName?: string | any;
    /**
     * data name get field label
     */
    labelFieldName?: string | any;
    /**
     * data child items name
     */
    itemsFieldName?: string | any;
}
export interface DataFilterState {
    inputText?: any;
    showing?: any;
    selectedItem?: any[] | any;
    selectText?: any[] | any;
    getListResult?: object | any;
    active?: object | any;
    dropDownList?: any;
    focusControl?: object | any;
}
export default class DataFilter extends React.Component<DataFilterProps, DataFilterState> {
    /**
     * @type {null}
     */
    inputText: any;
    /**
     * @type {string}
     */
    inputType: string;
    /**
     * Default props
     * @type {{labelPosition: string}}
     */
    static defaultProps: Partial<DataFilterProps>;
    /**
     * @type {{label: string; name: string}[]}
     */
    operators: any[];
    /**
     * Initial values
     * @param {DataFilterProps} props
     */
    constructor(props: DataFilterProps);
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * input value control methodu
     * @param e
     */
    handleChange(e: any): void;
    /**
     * label return methodu
     */
    labelResult(): any;
    /**
     * input ' a focus olduğunda çalışan method
     */
    focusInput(): void;
    /**
     * dropdown ' u ve itemlarını aktifliğini sıfırlayan methos
     */
    inputOutFocus(): void;
    /**
     * input ' yazılan verileri ve inputu sıfırlayan method
     */
    inputReset(): void;
    /**
     * dropdown ' a basılacak itemları return eden method
     * @returns {JSX.Element[]}
     */
    getSelectFieldItem(): JSX.Element[];
    /**
     * input typenı belirleyen method
     * @returns {JSX.Element[]}
     */
    fieldValueShowing(): JSX.Element[];
    /**
     * filtername seçildikten sonra setlemek için kullanılan method
     * @param val
     */
    setName(val: any): void;
    /**
     * operator seçildikten sonra setlemek için kullanılan method
     * @param val
     */
    setOperator(val: any): void;
    /**
     * value seçildikten sonra setlemek için kullanılan method
     * @param val
     */
    setValue(val: any): void;
    /**
     * selected yaptıktan sonra seçili değişkenine atayan method
     * @returns {JSX.Element[]}
     */
    getSelectedItem(): JSX.Element[];
    /**
     * seçili itemları silen method
     * @param {number} id
     */
    removeSelectItem(id: number): void;
    /**
     * filter namelerin dropdown u açan method
     */
    fieldShowingControl(): void;
    /**
     * input da seçtikten sonra selectText ' e atayan method
     * @returns {JSX.Element[]}
     */
    getSelectText(): JSX.Element[];
    /**
     * selectText' i selectItem' a atayan method
     */
    textConvertItem(): void;
    /**
     * input focusken key controlu yapan ona göre metodları çalıştıran method
     * @param event
     */
    inputKeyControl(event: any): void;
    /**
     * backspace bastığımızda itemları ve karakterleri silen method
     */
    backSpaceRemoveItem(): void;
    /**
     * arrow up ' a bastığımız zaman dropdowndaki itemları seçmek için kullanılan method
     */
    arrowSelectFieldUp(): void;
    /**
     * arrow down ' a bastığımız zaman dropdowndaki itemları seçmek için kullanılan method
     */
    arrowSelectFieldDown(): void;
    /**
     * arrow tuşlarıyla seçtikten sonra enter tuşuna basarak seçmemizi sağlayan method
     */
    enterSelectArrowItem(): void;
    /**
     * dropdown content controlling of the showing
     */
    dropdownShowing(): void;
}
