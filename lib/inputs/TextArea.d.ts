import * as React from "react";
export interface TextAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * css style name describe .class
     */
    className?: string;
    /**
     *  Set the name
     */
    name?: string;
    /**
     * Set the value
     */
    value?: string;
    properties?: object | any;
    /**
     * Return function
     */
    onChange?: any;
    /**
     * Set the string title
     */
    label?: string | any;
    /**
     * Null or empty control
     */
    valid?: boolean | any;
}
export default class TextArea extends React.Component<TextAreaProps, any> {
    /**
     * Initial props value
     * @type {{properties: {}; name: string; value: string}}
     */
    static defaultProps: Partial<TextAreaProps>;
    /**
     * Initial values
     * @param props
     */
    constructor(props: any);
    /**
     * @returns {any}
     */
    render(): any;
    onChange(e: any): void;
    isValid(): boolean;
}
