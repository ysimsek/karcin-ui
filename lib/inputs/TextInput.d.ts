import * as React from "react";
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
     * Returned props function
     */
    onChange?: any;
    /**
     * Null or empty control
     */
    valid?: boolean | any;
    ref?: string;
}
export default class TextInput extends React.Component<TextInputProps, any> {
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    static defaultProps: Partial<TextInputProps>;
    /**
     * Intial values
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    toggle(e: any): void;
    isValid(): boolean;
}
