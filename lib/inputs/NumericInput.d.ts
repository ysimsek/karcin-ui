/// <reference types="react" />
import * as React from "react";
export interface NumericInputProps {
    /**
     * React Css Properties
     */
    style?: React.CSSProperties;
    /**
     * label used to edit the text
     */
    label?: string;
    /**
     * input name
     */
    name?: string;
    /**
     * input value
     */
    value?: any;
    validations?: object;
    /**
     * Html input types
     * default as numeric
     */
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    onChange?: any;
    placeHolder?: string;
}
export default class TextInput extends React.Component<NumericInputProps> {
    static defaultProps: Partial<NumericInputProps>;
    constructor(props: any);
    render(): JSX.Element;
    /**
     * number control
     * @param e
     * @returns {boolean}
     * @private
     */
    __onChange(e: any): boolean;
}
