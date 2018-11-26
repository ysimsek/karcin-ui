import * as React from 'react';
export interface NumericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * React css style with in object
     */
    style?: React.CSSProperties;
    label?: string;
    /**
     * Set the name
     */
    name?: string;
    /**
     * Set the value
     */
    value?: any;
    validations?: object;
    type?: string;
    /**
     * Default value false
     */
    disabled?: boolean;
    /**
     * Default value false
     */
    readOnly?: boolean;
    /**
     * Default value false
     */
    hidden?: boolean;
    /**
     * Return props function
     */
    onChange?: any;
    /**
     * Null or empty control
     */
    valid?: boolean | any;
}
export default class NumericInput extends React.Component<NumericInputProps> {
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; type: string}}
     */
    static defaultProps: Partial<NumericInputProps>;
    /**
     * Initial value
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    isValid(): boolean;
    /**
     * number control
     * @param e
     * @returns {boolean}
     * @private
     */
    __onChange(e: any): void;
}
