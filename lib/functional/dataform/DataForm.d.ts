import * as React from "react";
export interface DataFormProps {
    col?: number;
    /**
     * string, password, int, select, date, radio, check, textarea, lookup, alert, color
     */
    fields: Array<any> | any;
    returnData?: any;
    nameText?: any;
    labelText?: any;
    visibilityText?: any;
    typeText?: any;
    values: Array<any> | any;
    label?: boolean;
    onChange?: any;
}
export default class DataForm extends React.Component<DataFormProps, any> {
    fieldLength: number;
    static defaultProps: {
        col: number;
        buttonName: string;
        nameText: string;
        labelText: string;
        typeText: string;
        visibilityText: string;
    };
    state: any;
    constructor(props: any);
    render(): JSX.Element;
    returnElements(fields: any): any[];
    getTextInput(value: any): JSX.Element;
    getPasswordInput(value: any): JSX.Element;
    getNumericInput(value: any): JSX.Element;
    /**
     * SelectInput component
     * @param value
     * @returns {any}
     */
    getSelectInput(value: any): JSX.Element;
    /**
     * DateInput
     * @param value
     * @returns {any}
     */
    getDateInput(value: any): JSX.Element;
    /**
     * DateInput
     * @param value
     * @returns {any}
     */
    getDateTimeInput(value: any): JSX.Element;
    /**
     * DateInput
     * @param value
     * @returns {any}
     */
    getTimeInput(value: any): JSX.Element;
    /**
     * TODO : RadioInput , SelectInput , CheckInput için sabit dataların olması sağlanacak
     * Dışardan data almaya müsait olacaktır.
     * @param value
     * @returns {any}
     */
    getRadioInput(value: any): JSX.Element;
    /**
     * CheckInput Component
     * @param value
     * @returns {any}
     */
    getCheckInput(value: any): JSX.Element;
    /**
     * @param value
     * @returns {any}
     */
    getTextArea(value: any): JSX.Element;
    /**
     * LookUp component
     * @param value
     */
    getLookUp(value: any): JSX.Element;
    /**
     * Alert component
     * @param value
     */
    getAlert(value: any): JSX.Element;
    /**
     * ColorInput component
     * @param value
     * @returns {any}
     */
    getColorInput(value: any): JSX.Element;
    onChange(e: any, f: any): void;
    /**
     * TODO : POPOVER AND TOOLTIP EKLE
     */
    getChangeData(): any;
    handleChange(e: any): void;
    handleChangeRadio(e: any): void;
    /**
     * TODO : OBJEMİ DEĞİL Mİ KONTROLÜ YAP
     * @constructor
     */
    UNSAFE_componentWillMount(): void;
}
