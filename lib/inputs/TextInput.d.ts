/// <reference types="react" />
import * as React from "react";
export interface TextInputProps {
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
    placeHolder?: string;
    maxlength?: string;
    autofocus?: boolean;
}
export default class TextInput extends React.Component<TextInputProps> {
    static defaultProps: Partial<TextInputProps>;
    constructor(props: any);
    render(): JSX.Element;
}
