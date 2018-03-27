/// <reference types="react" />
import * as React from "react";
export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    value?: string;
    name?: string;
    onChange?: any;
    hidden?: boolean;
    disabled?: boolean;
}
export default class BaseInput extends React.Component<BaseInputProps> {
    static defaultProps: Partial<BaseInputProps>;
    render(): JSX.Element;
}
