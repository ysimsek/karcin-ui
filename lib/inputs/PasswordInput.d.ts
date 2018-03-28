/// <reference types="react" />
import * as React from "react";
export interface PasswordInputProps {
    style?: React.CSSProperties;
    label?: string;
    name?: string;
    value?: any;
    validations?: object;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    onChange?: any;
}
/**
 * Varsayılan olarak * işareti var istenilen sembolle geri dönülsün.
 */
export default class PasswordInput extends React.Component<PasswordInputProps> {
    static defaultProps: Partial<PasswordInputProps>;
    constructor(props: any);
    render(): JSX.Element;
}
