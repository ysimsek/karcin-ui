import * as React from "react";
import { TextInputProps } from "./TextInput";
export interface ColorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
    /**
     alt,
     autoComplete,
     autoFocus,
     capture,
     checked,
     crossOrigin,
     disabled,
     form,
     formAction,
     formEncType,
     formMethod,
     formNoValidate,
     formTarget,
     height,
     max,
     maxLength,
     min,
     minLength,
     multiple,
     pattern,
     placeholder,
     readOnly,
     required,
     size,
     src,
     step,
     */
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
}
export default class ColorInput extends React.Component<ColorInputProps> {
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    static defaultProps: Partial<TextInputProps>;
    constructor(props: any);
    errorState: string;
    color: boolean;
    render(): JSX.Element;
    isValid(): boolean;
    ___onChange(e: any): void;
}
