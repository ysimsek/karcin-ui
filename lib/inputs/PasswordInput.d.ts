import * as React from "react";
export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    style?: React.CSSProperties;
    label?: string | JSX.Element;
    name?: string;
    value?: any;
    validations?: object;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    className?: any;
    onChange?: any;
    /**
     * Null or empty control
     */
    valid?: boolean | any;
}
/**
 * Varsayılan olarak * işareti var istenilen sembolle geri dönülsün.
 */
export default class PasswordInput extends React.Component<PasswordInputProps> {
    /**
     * Initial props value
     * @type {{disabled: boolean; readOnly: boolean; hidden: boolean; label: string; type: string}}
     */
    static defaultProps: Partial<PasswordInputProps>;
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
}
