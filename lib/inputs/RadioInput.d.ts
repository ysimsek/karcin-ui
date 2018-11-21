import * as React from "react";
export interface RadioInputProps {
    /**
     * Default value false
     */
    inline?: boolean;
    /**
     * Manage the target value
     */
    value?: string | any;
    /**
     * idField name in object
     */
    idField?: string | any;
    /**
     * textField name in object
     */
    textField?: string | any;
    /**
     * Return props function
     */
    onChange?: any;
    /**
     * Set the Array data
     */
    items?: Array<any>;
    /**
     * set the component's name
     */
    name?: string;
    /**
     * Default false
     */
    checked?: boolean;
    /**
     * Set the string title
     */
    label?: string;
    /**
     * Set the css name
     */
    className?: string;
    formControl?: boolean;
}
export default class RadioInput extends React.Component<any, RadioInputProps> {
    /**
     * Initial values
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * @param e
     * @param {Array<any>} value
     * @returns {any}
     */
    private returnRadioElements;
    /**
     * Return props function
     * @param e
     */
    onChange(e: any): void;
}
