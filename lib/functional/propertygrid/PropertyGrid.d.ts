import * as React from "react";
export interface PropertyGridProps {
    fields: Array<any>;
    values: Array<any>;
    nameText?: string;
    labelText?: string;
    typeText?: string;
    titleColor?: string;
}
export default class PropertyGrid extends React.Component<PropertyGridProps, any> {
    static defaultProps: Partial<PropertyGridProps>;
    constructor(props: any);
    render(): any;
    /**
     * Get the state values ref method
     * @returns {Readonly<any>}
     */
    getData(): object;
    /**
     * Return roperty grid elements
     **/
    returnElements(fields: any, values: any): JSX.Element[];
    returnFields(fields: any, values: any): JSX.Element[];
    /**
     * Label ile gösterim
     * @param e
     */
    getLabelActiveToInput(e: any, field: any): void;
    /**
     * Label separeting
     * @param field
     * @returns {any}
     */
    getLabelActiveToLabel(field: any): any;
    provideOfShowLabel(field: any, color: any, code: string): JSX.Element;
    getComponentSelect(field: any, value: any): JSX.Element[];
    /**
     * Return the SelectInput component
     * @param field
     * @returns :JSX.Element
     */
    getSelectInput(field: any): JSX.Element;
    /**
     * Return the ColorInput component
     * @param field
     * @returns :JSX.Element
     */
    getColorInput(field: any): JSX.Element;
    /**
     * Return the TextInput Component
     * @param field
     * @returns :JSX.Element
     */
    getTextInput(field: any): JSX.Element;
    /**
     * Return the NumericInput component
     * @param field
     * @returns :JSX.Element
     */
    getNumericInput(field: any): JSX.Element;
    /**
     * Return the PasswordInput component
     * @param field
     * @returns :JSX.Element
     */
    getPasswordInput(field: any): JSX.Element;
    /**
     * Return the TextArea component
     * @param field
     * @returns :JSX.Element
     */
    getTextArea(field: any): JSX.Element;
    /**
     * Return the RadioInput component
     * @param field
     * @returns :JSX.Element
     */
    getRadioInput(field: any): JSX.Element;
    /**
     * Return the CheckInput component
     * @param field
     * @returns :JSX.Element
     */
    getCheckInput(field: any): JSX.Element;
    /**
     * Return the DateInput component
     * @param value
     * @returns :JSX.Element
     */
    getDateInput(value: any): JSX.Element;
    /**
     * Return the LookUp component
     * @param value
     * @returns :JSX.Element
     */
    getLookUp(value: any): JSX.Element;
    /**
     * Return the get Alert component
     * @param value
     * @returns {any}
     */
    getAlert(value: any): JSX.Element;
    /**
     * Change the State
     * @param e
     * @param f
     */
    lookupOnChange(e: any, f: any): void;
    /**
     * Change the State
     * All input but radioinput not
     * @param e
     */
    handleChange(e: any): void;
    /**
     * Change the State RadioInput
     * @param e
     */
    handleChangeRadio(e: any): void;
    /**
     * Change the State
     * Control the object,array,string or number
     */
    getControl(): void;
    /**
     * Control
     * @constructor
     */
    UNSAFE_componentWillMount(): void;
}
